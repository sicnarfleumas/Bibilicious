import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert the email into your Supabase table
      const { data, error } = await supabase
        .from('Newsletter')
        .upsert([{ email }], { onConflict: ['email'] });

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        console.log('Data inserted successfully:', data);
      }

      // Clear the email input after submission
      setEmail('');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
