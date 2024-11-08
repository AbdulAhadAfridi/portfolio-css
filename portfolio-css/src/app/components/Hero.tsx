import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <p>I m</p>
          <p >Abdul Ahad</p>
          <p> Afridi </p>
        </div>
        <img src="/ahad.png" className="hero-image" alt="Hero Image" />
      </div>
      <div className="download-section">
  <a 
    href="https://milestone1-2-jet.vercel.app/" 
    className="download-button" 
    target="_blank"
  >
    Download CV
  </a>
</div>

    </section>
    
  );
};

export default Hero;
