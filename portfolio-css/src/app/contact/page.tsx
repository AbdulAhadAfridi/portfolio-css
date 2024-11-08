import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="contact-container">
  
      {/* Left Container */}
      <div className="left-container" data-aos="zoom-in-up">
        <h4 className="heading">Portfolio 2024</h4>
        <p className="description">
          I am a passionate web developer dedicated to creating responsive, user-friendly designs with a focus on functionality and aesthetics. With expertise in HTML, CSS, and JavaScript, I bring ideas to life through clean code and innovative solutions. I am always eager to learn and take on new challenges that push my skills forward.
        </p>
        <div className="image-container">
          <img src="/ahad.png" className="profile-image" alt="Hero Image" />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="right-container">
        <h2 className="thank">Thank</h2>
        <h2 className="thank">You</h2>
        <p className="message">
          Thank you for checking out my portfolio! I am always excited to connect with like-minded individuals. 
          Whether you have a question, a project idea, or just want to say hello, feel free to get in touch. 
          I look forward to hearing from you and exploring potential opportunities together. Lets create something amazing!
        </p>

        {/* Contact Button */}
        <div className="button-container">
          <Link href="/contact">
            <button className="contact-button">Contact Me</button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="contact-info" data-aos="zoom-in-up">
          <p className="contact-detail"><span className="icon">📞</span>03128760904</p>
          <p className="contact-detail"><span className="icon">📧</span> hafizabdulahadkhanafridi@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
