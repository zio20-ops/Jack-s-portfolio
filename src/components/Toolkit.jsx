import { useScrollReveal } from '../hooks/useScrollReveal'

const tools = [
  { title: 'React & Next.js', description: 'Modern component-based development.' },
  { title: 'Tailwind & CSS', description: 'Pixel perfect responsive UI.' },
  { title: 'JavaScript', description: 'Interactive and dynamic experiences.' },
  { title: 'Three.js', description: 'Immersive 3D experiences.' },
]

function ToolCard({ title, description }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="tool-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default function Toolkit() {
  return (
    <section className="toolkit section">
      <div className="container">
        <h2>My Toolkit</h2>

        <div className="tool-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
