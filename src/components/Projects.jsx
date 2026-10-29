import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    title: 'Project One',
    description: 'Cinematic portfolio with smooth animations and transitions.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    title: 'Project Two',
    description: 'Interactive 3D web experience using Three.js.',
    tags: ['Next.js', 'Three.js', 'TypeScript'],
  },
]

function ProjectCard({ image, title, description, tags }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="project-card">
      <img src={image} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
