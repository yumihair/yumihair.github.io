import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import BookButton from '../components/BookButton'; // adjust path as needed
import { Button } from 'react-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgbwjzn");

  if (state.succeeded) {
    return (
      <div style={{ textAlign: 'center', color: 'white', paddingTop: '2rem' }}>
        <h3 style={{ fontFamily: "LeJourSerif" }}>Thanks!</h3>
        <p style={{ fontFamily: "quicksand", fontSize: "1rem" }}>
          I'll contact you within the next 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 600, textAlign: "right", color: "white" }}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{
            fontFamily: "LeJourSerif",
            fontSize: "1.2rem"
          }}>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{
            fontFamily: "LeJourSerif",
            fontSize: "1.2rem"
          }}>
            <span style={{
              fontFamily: "quicksand",
              textTransform: "uppercase",
              fontSize: "0.8rem"
            }}>email or phone </span>CONTACT
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-control"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label" style={{
            fontFamily: "LeJourSerif",
            fontSize: "1.2rem"
          }}>Message</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="form-control"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>


        <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Button type="submit" disabled={state.submitting} 
        variant="outline-light"
            style={{
                borderRadius: '0',
                borderWidth: '3px',
                fontFamily: 'Quicksand, sans-serif',
                textTransform: 'uppercase',
                fontWeight: 600,
                padding: '0.5rem 1.2rem',
                letterSpacing: '0.05em',
                zIndex: 100
        }}>
                Submit
      </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;