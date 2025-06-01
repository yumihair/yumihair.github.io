import Title from '../components/Title';
import BookButton from '../components/BookButton';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {

      const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: integrate with backend or email service
    };

    return(
        <div style={{ minHeight: '100vh', position: 'relative' }}>
              <Title name="Contact" cursiveName="inquiries" />
              <div style={{ 
                    fontFamily: 'quicksand',
                    margin: '30px 20px 10px 20px',
                    color: 'white'
                }}>I'd love to hear from you! Whether you're ready to book or have a quick question, feel free to reach out. I am located at <a 
            href="https://www.google.com/maps/place/7315+W+Warm+Springs+Rd,+Las+Vegas,+NV+89113" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: '#fff', 
              fontWeight: '700',
            }}
          >ONE17 Hair Studios, 7315 W Warm Springs Rd. Las Vegas, NV 89113</a>.
          
          </div>
              <div style={{
                width: "100%",
                maxWidth: "600px", /* Match your gallery/video width */
                margin: "2rem auto 0",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.9001021943447!2d-115.25276052377549!3d36.06070679051322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c6d0cde151e9%3A0x2a51c631b38a789!2s7315%20W%20Warm%20Springs%20Rd%2C%20Las%20Vegas%2C%20NV%2089113!5e0!3m2!1sen!2sus!4v1717024500000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of 7315 W Warm Springs Rd"
                ></iframe>
            </div>

            <div style={{ 
                    fontFamily: 'quicksand',
                    margin: '30px 20px 10px 20px',
                    color: 'white'
                }}>Feel free to use the message box below to send me a message, or you can text or DM me <a 
            href="https://www.google.com/maps/place/7315+W+Warm+Springs+Rd,+Las+Vegas,+NV+89113" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              color: '#fff', 
              fontWeight: '700',
            }}
          >@yummihair</a> for inquiries or last-minute availability at <a href="tel:+12067660469" style={{ color: 'inherit', textDecoration: 'underline', fontWeight: '700' }}>
    206-766-0469
  </a>. Please book online or reach out directly to get started!</div>
            <ContactForm />

        </div>
    )
};

export default Contact;