<div class="contact-container fade-lines">
  <h2><strong>Contact</strong></h2>
  <p>Feel free to reach out if you'd like to connect, collaborate, or just say hello!</p>

  <!-- Formspree form -->
  <form
    action="https://formspree.io/f/xrbrwqyw"
    method="POST"
    class="contact-form"
  >
    <div class="form-group">
      <label for="name">Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        required
        minlength="2"
      />
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="your.email@example.com"
        required
      />
    </div>

    <div class="form-group">
      <label for="subject">Subject *</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="What's this about?"
        required
        minlength="5"
      />
    </div>

    <div class="form-group">
      <label for="message">Message *</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message here..."
        rows="6"
        required
        minlength="10"
      ></textarea>
    </div>

    <button type="submit" class="submit-btn">
      <i class="fas fa-paper-plane"></i>
      Send Message
    </button>
  </form>
</div>

<style>
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
  }

  h2 {
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 2rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    color: var(--text-color);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 1rem;
    transition: border-color 0.2s;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  .submit-btn {
    padding: 0.75rem 2rem;
    background-color: var(--accent-color);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }

  .submit-btn:hover {
    opacity: 0.9;
  }

  .fade-lines {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    .contact-container {
      padding: 1rem;
    }
  }
</style>
