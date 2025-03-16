import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './GoogleNewsletterForm.module.css';

interface GoogleNewsletterFormProps {
  formUrl: string;
  formFields: {
    name: string;
    email: string;
  };
}

const GoogleNewsletterForm = ({ 
  formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScBHZ1AM9zGWiHoTuzhyf5cr9TdvG1LcAGRuDrDTewg6Z7U9A/formResponse",
  formFields = {
    name: "entry.1513054681",
    email: "entry.1086419376"
  }
}: Partial<GoogleNewsletterFormProps>) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNameField, setShowNameField] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
      setName('');
      setEmail('');
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
          id="google-newsletter-form"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {showNameField && (
            <input 
              type="text" 
              id="name" 
              name={formFields.name} 
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          )}
          
          <div className={styles.emailContainer}>
            <input 
              type="email" 
              id="email" 
              name={formFields.email} 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              required 
            />
            
            <button 
              type="submit" 
              className={styles.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          <div className={styles.toggleContainer}>
            <button 
              type="button" 
              className={styles.toggleButton}
              onClick={() => setShowNameField(!showNameField)}
            >
              {showNameField ? 'Hide name field' : 'Add your name (optional)'}
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.successMessage}>
          <p>Thank you for subscribing to the newsletter!</p>
          <button 
            onClick={() => setIsSubmitted(false)} 
            className={styles.resetButton}
          >
            Subscribe Another Email
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleNewsletterForm; 