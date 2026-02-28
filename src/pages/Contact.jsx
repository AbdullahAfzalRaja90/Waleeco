import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  useEffect(() => {
    document.title = 'Contact — WALEECO';
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section className="section contact dark-contact">
          <h1>Contact Us</h1>
          <form id="contact-form" className="contact-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name<span className="required">*</span>
                </label>
                <input id="fullName" name="fullName" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="businessEmail">
                  Business Email<span className="required">*</span>
                </label>
                <input id="businessEmail" name="businessEmail" type="email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="project">
                Tell Us About Your Project<span className="required">*</span>
              </label>
              <textarea id="project" name="project" rows="4" required />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn contact-red">Submit</button>
              <div id="form-feedback" className="form-feedback" role="status" aria-live="polite" />
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
