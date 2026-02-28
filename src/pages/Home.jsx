import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    document.title = 'WALEECO — IT Services';
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero dark-hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <h1>Engineering Intelligent &amp; Scalable Digital Solutions</h1>
              <p>
                We are a leading software development company engineering
                next-generation digital solutions, embedding AI and data-driven
                intelligence into workflows that fuel efficiency and unlock new
                growth opportunities.
              </p>
              <p className="hero-cta">
                <Link className="btn ghost" to="/contact">Contact Us</Link>
              </p>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div id="globe"></div>
            </div>
          </div>
        </section>

        <section id="services" className="section services container">
          <h2 className="section-title">Our Services</h2>
          <div className="grid services-grid">
            <article className="card">
              <div className="card-content">
                <h3>Managed IT</h3>
                <p>
                  Proactive monitoring, patching, and helpdesk to keep your
                  business running.
                </p>
                <p className="learn">
                  <Link to="/services">Learn more →</Link>
                </p>
              </div>
              <div className="card-icon" aria-hidden="true">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2v20"
                    stroke="#0b6cff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 7h14"
                    stroke="#0b6cff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <h3>Cloud & Migration</h3>
                <p>
                  Secure cloud adoption and migration with minimal downtime.
                </p>
                <p className="learn">
                  <Link to="/services">Learn more →</Link>
                </p>
              </div>
              <div className="card-icon" aria-hidden="true">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#0b6cff"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <h3>Cybersecurity</h3>
                <p>
                  Layered defenses, vulnerability scanning, and incident
                  response planning.
                </p>
                <p className="learn">
                  <Link to="/services">Learn more →</Link>
                </p>
              </div>
              <div className="card-icon" aria-hidden="true">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="2"
                    stroke="#0b6cff"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <h3>Networking</h3>
                <p>
                  Design, deployment and maintenance of reliable, scalable
                  networks.
                </p>
                <p className="learn">
                  <Link to="/services">Learn more →</Link>
                </p>
              </div>
              <div className="card-icon" aria-hidden="true">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="#0b6cff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section about container">
          <h2 className="section-title">About WALEECO</h2>
          <p>
            WALLECO helps businesses modernize their IT reliably and securely.
            We combine experienced engineers, clear SLAs, and pragmatic
            solutions to help you focus on growth.
          </p>
        </section>

        <section id="contact" className="section contact container dark-contact">
          <h2 className="section-title">Contact Us</h2>
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
                <input
                  id="businessEmail"
                  name="businessEmail"
                  type="email"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyName">
                  Company Name<span className="required">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">
                  Phone Number<span className="required">*</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="howHear">
                How Did You Hear About Us?<span className="required">*</span>
              </label>
              <select id="howHear" name="howHear" required>
                <option value="">Please Select</option>
                <option value="search">Search Engine</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="project">
                Tell Us About Your Project<span className="required">*</span>
              </label>
              <textarea id="project" name="project" rows="4" required />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn contact-red">
                Submit
              </button>
              <div
                id="form-feedback"
                className="form-feedback"
                role="status"
                aria-live="polite"
              ></div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
