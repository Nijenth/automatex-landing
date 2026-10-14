
function About() {
    return (
      <section id="about" className="about">
        <p className="about-label">ABOUT AUTOMATEX</p>
  
        <h2>Helping businesses work smarter.</h2>
  
        <p className="about-description">
          We design practical AI automation solutions
          that help teams reduce repetitive tasks
          and focus on meaningful work.
        </p>
  
        <div className="about-benefits">
          <div className="benefit-card">
            <span aria-hidden="true">⏱️</span>
            <h3>Save Time</h3>
          </div>
  
          <div className="benefit-card">
            <span aria-hidden="true">⚡</span>
            <h3>Automate Tasks</h3>
          </div>
  
          <div className="benefit-card">
            <span aria-hidden="true">📈</span>
            <h3>Grow Faster</h3>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  