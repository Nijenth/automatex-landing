
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  
async function handleSubmit(
  event: React.SubmitEvent<HTMLFormElement>
) {
  event.preventDefault();

  if (isSending || submitted) return;

  if (!name.trim() || !email.trim() || !message.trim()) {
    setError("Please fill in all fields.");
    return;
  }

  setIsSending(true);
  setSubmitted(false);
  setError("");

  const formData = new URLSearchParams({
    "form-name": "contact",
    name: name.trim(),
    email: email.trim(),
    message: message.trim()
  });

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formData.toString()
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    setSubmitted(true);
  } catch {
    setError("Unable to send your message. Please try again.");
  } finally {
    setIsSending(false);
  }
}


  return (
    <section id="contact" className="contact">
      <div className="section-intro">
        <p className="hero-label">GET IN TOUCH</p>
        <h2>Let's automate your business.</h2>
        <p>Tell us about your project.</p>
      </div>

    <form
        name="contact"
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
    >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="contact-name">Your Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setSubmitted(false);
          }}
          placeholder="John Doe"
        />

        <label htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setSubmitted(false);
          }}
          placeholder="john@example.com"
        />

        <label htmlFor="contact-message">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setSubmitted(false);
          }}
          placeholder="Tell us about your project..."
          rows={5}
        />

<button type="submit" disabled={isSending || submitted}>
  {isSending
    ? "Sending..."
    : submitted
      ? "Message Sent"
      : "Send Message"}
</button>

{submitted && (
  <p role="status" className="success-message">
    Your message was submitted successfully!
  </p>
)}

{error && (
  <p role="alert" className="error-message">
    {error}
  </p>
)}
        
      </form>
    </section>
  );
}

export default Contact;
