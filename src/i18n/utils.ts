export function getLanguageFromURL(pathname: string, lang?: string): string {
  if (lang) return lang;
  
  const match = pathname.match(/^\/(en|ja|ta)\//);
  return match ? match[1] : 'en';
} 