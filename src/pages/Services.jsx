import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Services() {
  useEffect(() => {
    document.title = 'Services — WALEECO';
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section className="section services">
          <h1>Our Services</h1>
          <div className="grid services-grid">
            <article className="card">
              <h3>Managed IT</h3>
              <p>Proactive monitoring, patching, and helpdesk to keep your business running.</p>
            </article>
            <article className="card">
              <h3>Cloud & Migration</h3>
              <p>Secure cloud adoption and migration with minimal downtime.</p>
            </article>
            <article className="card">
              <h3>Cybersecurity</h3>
              <p>Layered defenses, vulnerability scanning, and incident response planning.</p>
            </article>
            <article className="card">
              <h3>Networking</h3>
              <p>Design, deployment and maintenance of reliable, scalable networks.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Services;
