import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import styles from './GoogleNewsletterForm.module.css';

interface GoogleNewsletterFormProps {
  formUrl: string;
  formFields: {
    name: string;
    email: string;
  };
  language?: 'en' | 'ja' | 'ta';
  translations?: {
    nameLabel: string;
    emailLabel: string;
    submitButton: string;
  };
}

const defaultTranslations = {
  en: {
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    submitButton: "Subscribe",
    submittingButton: "Subscribing...",
    addNameButton: "Add your name",
    hideNameButton: "Hide name field",
    thankYouMessage: "Thank you for subscribing to the newsletter!",
    subscribeAnother: "Subscribe Another Email",
    nameError: "Please enter your name",
    emailError: "Please enter a valid email address"
  },
  ja: {
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    submitButton: "登録する",
    submittingButton: "登録中...",
    addNameButton: "名前を追加",
    hideNameButton: "名前フィールドを隠す",
    thankYouMessage: "ニュースレターにご登録いただきありがとうございます！",
    subscribeAnother: "別のメールを登録",
    nameError: "お名前を入力してください",
    emailError: "有効なメールアドレスを入力してください"
  },
  ta: {
    nameLabel: "உங்கள் பெயர்",
    emailLabel: "உங்கள் மின்னஞ்சல்",
    submitButton: "பதிவு செய்க",
    submittingButton: "பதிவு செய்கிறது...",
    addNameButton: "உங்கள் பெயரைச் சேர்க்கவும்",
    hideNameButton: "பெயர் புலத்தை மறைக்கவும்",
    thankYouMessage: "செய்திமடலுக்கு பதிவு செய்தமைக்கு நன்றி!",
    subscribeAnother: "மற்றொரு மின்னஞ்சலைப் பதிவு செய்யவும்",
    nameError: "உங்கள் பெயரை உள்ளிடவும்",
    emailError: "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்"
  }
};

const GoogleNewsletterForm = ({ 
  formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScBHZ1AM9zGWiHoTuzhyf5cr9TdvG1LcAGRuDrDTewg6Z7U9A/formResponse",
  formFields = {
    name: "entry.1513054681",
    email: "entry.1086419376"
  },
  language = 'en',
  translations
}: Partial<GoogleNewsletterFormProps>) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formStartTime = useRef(Date.now());
  const [honeypotValue, setHoneypotValue] = useState('');

  // Get the appropriate translations
  const t = translations || defaultTranslations[language];
  const defaultT = defaultTranslations[language];

  // Validate form fields
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    // Name validation
    if (!name || name.trim() === '') {
      errors.name = defaultT.nameError;
    }
    
    // Email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = defaultT.emailError;
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
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
    if (!validateForm()) {
      return;
    }
    
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
          id="google-newsletter-form"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>{t.nameLabel || defaultT.nameLabel}</label>
            <input 
              type="text" 
              id="name" 
              name={formFields.name} 
              placeholder={t.nameLabel || defaultT.nameLabel}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${styles.input} ${formErrors.name ? styles.inputError : ''}`}
              required
            />
            {formErrors.name && <span className={styles.errorMessage}>{formErrors.name}</span>}
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>{t.emailLabel || defaultT.emailLabel}</label>
            <input 
              type="email" 
              id="email" 
              name={formFields.email} 
              placeholder={t.emailLabel || defaultT.emailLabel}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input} ${formErrors.email ? styles.inputError : ''}`}
              required 
            />
            {formErrors.email && <span className={styles.errorMessage}>{formErrors.email}</span>}
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
            {isSubmitting ? (defaultT.submittingButton) : (t.submitButton || defaultT.submitButton)}
          </button>
        </form>
      ) : (
        <div className={styles.successMessage}>
          <p>{defaultT.thankYouMessage}</p>
          <button 
            onClick={() => setIsSubmitted(false)} 
            className={styles.resetButton}
          >
            {defaultT.subscribeAnother}
          </button>
        </div>
      )}
    </div>
  );
};

export default GoogleNewsletterForm; 