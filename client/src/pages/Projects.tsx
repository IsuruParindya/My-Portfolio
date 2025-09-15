import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // TODO: Replace with real project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      category: "Full-Stack",
      projectUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSockets"],
      category: "Frontend",
      projectUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Analytics API",
      description: "RESTful API for weather data analytics with caching, rate limiting, and comprehensive documentation. Serves data to multiple client applications.",
      technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker"],
      category: "Backend",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "Mobile-first web application for tracking personal finances with data visualization, budget planning, and expense categorization.",
      technologies: ["Next.js", "Chart.js", "Prisma", "NextAuth", "Vercel"],
      category: "Full-Stack",
      projectUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media managers with real-time metrics, automated reporting, and multi-platform integration.",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB", "AWS"],
      category: "Full-Stack",
      projectUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Code Review Tool",
      description: "Internal tool for code review process automation with GitHub integration, automated testing, and team collaboration features.",
      technologies: ["React", "GitHub API", "Node.js", "Jest", "Docker"],
      category: "Frontend",
      githubUrl: "https://github.com",
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-page-subtitle">
            A collection of projects that showcase my skills in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 text-muted-foreground">
            <Badge variant="secondary" className="gap-2">
              <span className="font-semibold text-foreground" data-testid="text-showing-count">
                {filteredProjects.length}
              </span>
              <span data-testid="text-projects-label">
                {filteredProjects.length === 1 ? 'project' : 'projects'}
              </span>
            </Badge>
            {filter !== "All" && (
              <>
                <span>•</span>
                <span data-testid="text-filter-category">
                  Filtered by: <strong>{filter}</strong>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4" data-testid="text-no-projects-emoji">🔍</div>
            <h3 className="text-xl font-semibold mb-2" data-testid="text-no-projects-title">
              No projects found
            </h3>
            <p className="text-muted-foreground" data-testid="text-no-projects-description">
              Try selecting a different category to see more projects.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 py-16 border-t border-border">
          <h2 className="text-2xl font-bold mb-4" data-testid="text-cta-title">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-cta-description">
            Have an interesting project in mind? I'd love to hear about it and discuss 
            how we can bring your ideas to life.
          </p>
          <Button 
            size="lg" 
            onClick={() => window.location.href = "mailto:hello@example.com?subject=Project Inquiry"}
            data-testid="button-cta-contact"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
}