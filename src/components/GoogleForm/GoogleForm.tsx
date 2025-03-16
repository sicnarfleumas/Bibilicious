import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import styles from './GoogleForm.module.css';

interface GoogleFormProps {
  formUrl: string;
  formFields: {
    name: string;
    email: string;
    language: string;
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
    docType: "entry.940004422",
    projectDetails: "entry.1337969826"
  }
}: Partial<GoogleFormProps>) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      
      setIsSubmitted(true);
      form.reset();
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
          <input 
            type="text" 
            id="name" 
            name={formFields.name} 
            placeholder="Enter your full name" 
            className={styles.input}
            required 
          />
          
          <input 
            type="email" 
            id="email" 
            name={formFields.email} 
            placeholder="Enter your email address" 
            className={styles.input}
            required 
          />
          
          <select 
            id="languages" 
            name={formFields.language} 
            className={styles.select}
            required
          >
            <option value="" disabled selected>Select a language</option>
            <option value="english">English</option>
            <option value="japanese">Japanese</option>
            <option value="tamil">Tamil</option>
          </select>
          
          <select 
            id="docType" 
            name={formFields.docType} 
            className={styles.select}
            required
          >
            <option value="" disabled selected>Select document type</option>
            <option value="article">Article</option>
            <option value="blog">Blog</option>
            <option value="email">Email</option>
            <option value="socialMedia">Social Media Post</option>
          </select>
          
          <textarea
            id="projectDetails"
            name={formFields.projectDetails}
            rows={4}
            cols={50}
            placeholder="Provide details about your project (max 200 words)"
            className={styles.textarea}
            required
          />
          
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