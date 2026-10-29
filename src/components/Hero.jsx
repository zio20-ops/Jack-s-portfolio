export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay" />

      <div className="hero-content">
        <div className="left">
          <h1>Crafting Digital Experiences</h1>

          <p>
            Hi, I&apos;m <span>Jack</span> — a Frontend Developer who transforms
            ideas into beautiful, performant web experiences.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Get in Touch</a>
          </div>
        </div>

        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
            alt="coding workspace"
          />
        </div>
      </div>
    </section>
  )
}
