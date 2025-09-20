import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with HTML, Bootstrap, backend MySQL featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["HTML", "Bootstrap", "MySQL", "JavaScript", "CSS3"],
      category: "Full-Stack",
      projectUrl: "",
      githubUrl: "https://github.com/IsuruParindya/Nexus-Shop",
      imageUrl: "/images/Nexus.png",
    },
    {
      id: 2,
      title: "Vehicle Service Platform",
      description: "Collaborated on developing a Car Service Center Management System web app to manage inventory, billing, and service records.",
      technologies: ["HTML", "Bootstrap", "MySQL", "JavaScript", "CSS3"],
      category: "Full-Stack",
      projectUrl: "",
      githubUrl: "https://github.com",
      imageUrl: "/images/Car.png",
    },
    {
      id: 3,
      title: "Pet Shop Management System",
      description: "Collaborated on developing a pet shop management system in C# for handling inventory, customer records, and sales, ensuring efficient shop operations.",
      technologies: ["C#", ".NET", "SQL Server"],
      category: "Backend",
      githubUrl: "https://github.com/IsuruParindya/Pet-Shop-Management-System",
      imageUrl: "/images/Petshop.png",
    },
    {
      id: 4,
      title: "CV Generator ",
      description: "Built a React + Tailwind CSS web app to generate professional CVs with live preview and PDF export. Users can input personal info, work experience, education, skills, and projects to create a complete CV instantly.",
      technologies: ["React", "Tailwind CSS", "Lucide React", "TypeScript"],
      category: "Frontend",
      projectUrl: "https://cvgeneratorhub.netlify.app",
      githubUrl: "https://github.com/IsuruParindya/cv-generator",
      imageUrl: "/images/CV Generator.png",
    },
    {
      id: 5,
      title: "Text to Speech Desktop App",
      description: "Built a Java desktop app with JavaFX that converts text to speech with customizable voices, playback controls, and interface styling using CSS.",
      technologies: ["Java", "JavaFX", "CSS", "Maven/Gradle"],
      category: "Frontend",
      projectUrl: "",
      githubUrl: "https://github.com/IsuruParindya/Text-to-Speech-Controller",
      imageUrl: "/images/Java.png",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A responsive frontend application that shows real-time weather updates, with search functionality and dynamic backgrounds based on weather conditions.",
      technologies: ["HTML", "CSS", "JavaScript", "Fetch API", "OpenWeatherMap API"],
      category: "Frontend",
      githubUrl: "https://github.com/IsuruParindya/Weather-App",
      imageUrl: "/images/Weather.png",
    },
    {
      id: 7,
      title: "Herath Electrical & Electronics Portfolio",
      description: "Created a personal portfolio website using HTML, CSS, and JavaScript to showcase electrical and electronics projects.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      projectUrl: "https://herathelectricals.netlify.app/",
      githubUrl: "https://github.com/IsuruParindya/Electrician-portfolio",
      imageUrl: "/images/Herath.png",
    },
    {
      id: 8,
      title: "Personal Portfolio",
      description: "Built a personal portfolio website using React, Tailwind CSS, Lucide React, and TypeScript to showcase projects and skills.",
      technologies: ["React", "Tailwind CSS", "Lucide React", "TypeScript"],
      category: "Frontend",
      projectUrl: "https://parindyapigeraportfolio.netlify.app",
      githubUrl: "https://github.com",
      imageUrl: "/images/Portfolio.png",
    },
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-page-subtitle">
          A collection of projects that showcase my skills in full-stack development, from concept to deployment.
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
            imageUrl={project.imageUrl}
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
          Ready to Contribute
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-cta-description">
          Currently an undergraduate student with some experience as a UI/UX Engineer Intern, eager to contribute to real projects and grow with a team. Let’s build something great together!
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
  );
}