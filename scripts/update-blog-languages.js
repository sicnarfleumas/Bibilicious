/**
 * This script checks and updates the language attribute in blog posts based on their filenames.
 * Japanese posts (with Japanese characters in the filename) will be set to 'ja'.
 * Tamil posts (with Tamil characters in the filename) will be set to 'ta'.
 * All other posts will be set to 'en'.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = 'src/content/blog';

// Function to detect language based on filename
function detectLanguage(filename) {
  // Check for Japanese characters in filename
  if (/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/.test(filename)) {
    return 'ja';
  }
  
  // Check for Tamil characters in filename
  if (/[\u0B80-\u0BFF]/.test(filename)) {
    return 'ta';
  }
  
  // Default to English
  return 'en';
}

// Process all blog posts
async function updateBlogPosts() {
  const files = fs.readdirSync(BLOG_DIR);
  
  for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Detect language based on filename
    const detectedLanguage = detectLanguage(file);
    
    // Check if language needs to be updated
    if (data.language !== detectedLanguage) {
      console.log(`Updating language for ${file} from ${data.language || 'undefined'} to ${detectedLanguage}`);
      
      // Update frontmatter
      data.language = detectedLanguage;
      
      // Write updated content back to file
      const updatedContent = matter.stringify(content, data);
      fs.writeFileSync(filePath, updatedContent);
    } else {
      console.log(`Language for ${file} is already set to ${data.language || 'undefined'}`);
    }
  }
}

updateBlogPosts().catch(console.error); 