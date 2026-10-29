import { useScrollReveal } from '../hooks/useScrollReveal'

const traits = [
  {
    icon: '🎨',
    title: 'Design-Driven',
    description: 'Every interface is built with intention and visual harmony.',
  },
  {
    icon: '⚡',
    title: 'Performance-First',
    description: 'Speed and accessibility are non-negotiable.',
  },
  {
    icon: '🚀',
    title: 'Always Evolving',
    description: 'Continuously learning modern web technologies.',
  },
]

function AboutCard({ icon, title, description }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>Beyond Code: A Frontend Developer&apos;s Vision</h2>

        <p className="section-text">
          I don&apos;t just write code — I craft experiences. Every pixel, animation,
          and interaction is an opportunity to tell a story and solve a real problem.
        </p>

        <div className="cards">
          {traits.map((t) => (
            <AboutCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
