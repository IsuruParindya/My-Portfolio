import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string; // optional image
  projectUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  const isWeatherDashboard = title === "Weather Dashboard";

  return (
    <Card
      className="group hover-elevate transition-all duration-300 border border-primary dark:border-slate-500 shadow-lg"
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full transition-transform duration-300
              ${isWeatherDashboard 
                ? "object-contain bg-transparent p-2 group-hover:scale-105"
                : "object-cover group-hover:scale-105"}`}
            data-testid={`img-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="text-6xl font-bold text-primary/30"
              data-testid={`text-project-placeholder-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {title.charAt(0)}
            </div>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle
          className="text-xl"
          data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {title}
        </CardTitle>
        <CardDescription data-testid={`text-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
              data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}-${index}`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {projectUrl && (
            <Button
              size="sm"
              asChild
              data-testid={`button-view-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <ExternalLink className="h-3 w-3" />
                View Project
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-3 w-3" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}