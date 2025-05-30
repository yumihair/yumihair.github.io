import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import BookButton from '../components/BookButton'; // adjust path as needed

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
          <BookButton type="submit" name="Send Message" link='' disabled={state.submitting} />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;