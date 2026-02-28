import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  useEffect(() => {
    document.title = 'About — WALEECO';
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section className="section about">
          <h1>About WALEECO</h1>
          <p>
            WALLECO helps businesses modernize their IT reliably and securely.
            We combine experienced engineers, clear SLAs, and pragmatic
            solutions to help you focus on growth.
          </p>
          <p>
            Our team delivers managed IT, cloud migrations, networking, and
            cybersecurity solutions tailored to your needs.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
