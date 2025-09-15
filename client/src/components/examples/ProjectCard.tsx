import ProjectCard from '../ProjectCard'

export default function ProjectCardExample() {
  return (
    <div className="max-w-sm">
      <ProjectCard
        title="E-Commerce Platform"
        description="A full-stack e-commerce platform with React, Node.js, and PostgreSQL featuring user authentication, payment processing, and admin dashboard."
        technologies={["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"]}
        projectUrl="https://example.com"
        githubUrl="https://github.com"
      />
    </div>
  )
}