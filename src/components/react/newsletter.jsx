import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Placeholder for email submission
      // You can implement your preferred email storage solution here
      console.log('Email submitted:', email);
      
      // Show success message
      setMessage('Thank you for subscribing!');
      
      // Clear the email input after submission
      setEmail('');
    } catch (error) {
      console.error('Error:', error.message);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
