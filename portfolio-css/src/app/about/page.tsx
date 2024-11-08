const About = () => {
  return (
    <div>
      {/* About Text Section */}
      <section className="about-section">
        {/* Text Section */}
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I am a passionate web developer with a love for creating dynamic and responsive web applications.
            My journey in web development began with a fascination for technology and design.
            I enjoy working on projects that challenge my skills and allow me to learn and grow.
            My goal is to create user-friendly experiences that make a positive impact.
          </p>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="skills-title">Skills:</h3>
            <ul className="skills-list">
              <li className="skill-item red">Typescript</li>
              <li className="skill-item purple">Node</li>
              <li className="skill-item orange">CSS</li>
              <li className="skill-item blue">HTML</li>
              <li className="skill-item lime">Next.js</li>
            </ul>
          </div>
          
          <div className="contact-section">
            <a href="/contact" className="contact-button">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
