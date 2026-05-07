<div class="home-section">
  <div class="home-container fade-lines">
    <h2><strong>Brady Hawkins</strong></h2>
    <p>Hi! Thanks for stopping by.</p>
    <p>
      My name is Brady. I am a Canadian software engineer based in the
      Netherlands, currently working on the financial backend at Keylane BV. I
      find the complexity interesting, and collaborating with a talented team.
      My general vibe is Mr. Rogers for your codebase; steady, thoughtful and
      here to help.
    </p>
    <p>
      If there's anything here that takes your interest, or something I can help
      you with, it'd be great to connect.
    </p>
  </div>

  <div class="photo-container">
    <img
      src="/photo-me.webp"
      alt="Photo of Brady"
      class="home-photo"
    />
  </div>
</div>

<style>
  .home-container {
    margin: auto;
    max-width: 800px;
    width: 90%;
    z-index: 10;
  }

  .home-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2em;
    justify-content: center;
    flex-wrap: wrap;
  }

  .fade-lines > * {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 1s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-lines > *:nth-child(1) { animation-delay: 0s; }
  .fade-lines > *:nth-child(2) { animation-delay: 0.2s; }
  .fade-lines > *:nth-child(3) { animation-delay: 0.4s; }
  .fade-lines > *:nth-child(4) { animation-delay: 0.6s; }
  .fade-lines > *:nth-child(5) { animation-delay: 0.8s; }
  .fade-lines > *:nth-child(6) { animation-delay: 1.0s; }

  .photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-top: 3em;
  }

  .home-photo {
    max-width: 100%;
    width: 350px;
    height: auto;
    border-radius: 15px;
  }

  h2 {
    font-family: Lora, serif;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-color);
    line-height: 2;
    letter-spacing: 3px;
  }

  @media (max-width: 1024px) {
    .home-container {
      width: 95%;
    }

    .home-photo {
      width: 250px;
    }
  }

  @media (max-width: 767px) {
    .home-container {
      width: 90%;
    }

    .photo-container {
      flex-direction: column;
      padding-top: 2em;
    }

    .home-photo {
      width: 80%;
    }
  }
</style>
