
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-intro">
        <p className="hero-label">WHAT WE DO</p>
        <h2>Our AI Solutions</h2>
        <p>
          Intelligent automation that helps your
          business work smarter.
        </p>
      </div>

      <div className="services-grid">
        <ServiceCard
          icon="🤖"
          title="AI Chatbots"
          description="Automate customer conversations and answer common questions."
        />

        <ServiceCard
          icon="⚡"
          title="Workflow Automation"
          description="Reduce repetitive tasks and streamline business processes."
        />

        <ServiceCard
          icon="📊"
          title="AI Analytics"
          description="Automate customer conversations."
        />
      </div>
    </section>
  );
}

export default Services;
