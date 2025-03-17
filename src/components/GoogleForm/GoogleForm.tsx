import { useEffect, useState, useRef } from 'react';
import type { FormEvent } from 'react';
import styles from './GoogleForm.module.css';

interface GoogleFormProps {
  formUrl: string;
  formFields: {
    name: string;
    email: string;
    language: string;
    docLanguage: string;
    docType: string;
    projectDetails: string;
  };
}

const GoogleForm = ({ 
  formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSePtz0d1F_47cCuYk_R1EedkHT9SLTn-0ZOKONPwSTFLKPTuA/formResponse",
  formFields = {
    name: "entry.1192705275",
    email: "entry.844919657",
    language: "entry.514319054",
    docLanguage: "entry.1978741925",
    docType: "entry.940004422",
    projectDetails: "entry.1337969826"
  }
}: Partial<GoogleFormProps>) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formStartTime = useRef(Date.now());
  const [honeypotValue, setHoneypotValue] = useState('');

  // Validate form fields
  const validateForm = (formData: FormData): boolean => {
    const errors: Record<string, string> = {};
    
    // Name validation
    const name = formData.get(formFields.name) as string;
    if (!name || name.trim() === '') {
      errors.name = 'Name is required';
    }
    
    // Email validation
    const email = formData.get(formFields.email) as string;
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Valid email is required';
    }
    
    // Language validation
    const language = formData.get(formFields.language) as string;
    if (!language) {
      errors.language = 'Please select an original language';
    }
    
    // Document language validation
    const docLanguage = formData.get(formFields.docLanguage) as string;
    if (!docLanguage) {
      errors.docLanguage = 'Please select a target language';
    }
    
    // Document type validation
    const docType = formData.get(formFields.docType) as string;
    if (!docType) {
      errors.docType = 'Please select a document type';
    }
    
    // Project details validation
    const projectDetails = formData.get(formFields.projectDetails) as string;
    if (!projectDetails || projectDetails.trim() === '') {
      errors.projectDetails = 'Project details are required';
    } else if (projectDetails.split(/\s+/).length > 200) {
      errors.projectDetails = 'Project details should not exceed 200 words';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Bot protection checks
    const timeSinceFormLoad = Date.now() - formStartTime.current;
    const isTooFast = timeSinceFormLoad < 3000; // Less than 3 seconds is suspicious
    const hasHoneypot = honeypotValue !== '';
    
    if (isTooFast || hasHoneypot) {
      console.log('Bot submission detected');
      // Pretend to submit but don't actually do it
      setIsSubmitted(true);
      return;
    }
    
    // Validate form
    if (!validateForm(formData)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      
      setIsSubmitted(true);
      form.reset();
      setFormErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      {!isSubmitted ? (
        <form 
          action={formUrl}
          method="post" 
          target="_blank" 
          id="google-form"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              id="name" 
              name={formFields.name} 
              placeholder="Enter your full name" 
              className={`${styles.input} ${formErrors.name ? styles.inputError : ''}`}
              required 
            />
            {formErrors.name && <span className={styles.errorMessage}>{formErrors.name}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              id="email" 
              name={formFields.email} 
              placeholder="Enter your email address" 
              className={`${styles.input} ${formErrors.email ? styles.inputError : ''}`}
              required 
            />
            {formErrors.email && <span className={styles.errorMessage}>{formErrors.email}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <select 
              id="languages" 
              name={formFields.language} 
              className={`${styles.select} ${formErrors.language ? styles.inputError : ''}`}
              required
            >
              <option value="" disabled selected>Document language</option>
              <option value="english">English</option>
              <option value="japanese">Japanese</option>
              <option value="tamil">Tamil</option>
            </select>
            {formErrors.language && <span className={styles.errorMessage}>{formErrors.language}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <select 
              id="docLanguage" 
              name={formFields.docLanguage} 
              className={`${styles.select} ${formErrors.docLanguage ? styles.inputError : ''}`}
              required
            >
              <option value="" disabled selected>Target language</option>
              <option value="english">English</option>
              <option value="japanese">Japanese</option>
              <option value="tamil">Tamil</option>
            </select>
            {formErrors.docLanguage && <span className={styles.errorMessage}>{formErrors.docLanguage}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <select 
              id="docType" 
              name={formFields.docType} 
              className={`${styles.select} ${formErrors.docType ? styles.inputError : ''}`}
              required
            >
              <option value="" disabled selected>Select document type</option>
              <option value="article">Article</option>
              <option value="blog">Blog</option>
              <option value="email">Email</option>
              <option value="socialMedia">Social Media Post</option>
            </select>
            {formErrors.docType && <span className={styles.errorMessage}>{formErrors.docType}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <textarea
              id="projectDetails"
              name={formFields.projectDetails}
              rows={4}
              cols={50}
              placeholder="Provide details about your project (max 200 words)"
              className={`${styles.textarea} ${formErrors.projectDetails ? styles.inputError : ''}`}
              required
            />
            {formErrors.projectDetails && <span className={styles.errorMessage}>{formErrors.projectDetails}</span>}
          </div>
          
          {/* Honeypot field - hidden from real users but bots might fill it */}
          <div style={{ display: 'none' }}>
            <input 
              type="text" 
              name="website" 
              id="website" 
              value={honeypotValue}
              onChange={(e) => setHoneypotValue(e.target.value)}
              autoComplete="off"
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : (
        <div className={styles.successMessage}>
          <p>Thank you for your submission! I'll get back to you soon.</p>
          <button 
            onClick={() => setIsSubmitted(false)} 
            className={styles.resetButton}
          >
            Submit Another Request
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleForm; 