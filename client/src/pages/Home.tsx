import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

export default function Home() {
  const handleHireMe = () => {
    window.location.href = "mailto:hello@example.com?subject=Let's work together";
  };

  const handleDownloadResume = () => {
    // TODO: Add actual resume download functionality
    console.log("Download resume triggered");
    // For now, just show an alert
    alert("Resume download would start here!");
  };

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "GraphQL"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            <Badge 
              variant="secondary" 
              className="gap-2 py-2 px-4"
              data-testid="badge-availability"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for work
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span data-testid="text-hero-greeting">Full-Stack Developer</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-testid="text-hero-specialty">
              Building Digital Experiences
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
            I create modern, scalable web applications using cutting-edge technologies. 
            From concept to deployment, I bring ideas to life with clean code and intuitive design.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-4 w-4" />
            <span data-testid="text-location">San Francisco, CA</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              onClick={handleHireMe} 
              className="gap-2 text-lg px-8"
              data-testid="button-hero-hire-me"
            >
              <Mail className="h-5 w-5" />
              Hire Me
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleDownloadResume}
              className="gap-2 text-lg px-8"
              data-testid="button-download-resume"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Skills Preview */}
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium text-muted-foreground mb-4" data-testid="text-skills-heading">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="text-sm"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-projects">50+</div>
              <div className="text-muted-foreground" data-testid="text-stat-projects-label">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-experience">5+</div>
              <div className="text-muted-foreground" data-testid="text-stat-experience-label">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-clients">30+</div>
              <div className="text-muted-foreground" data-testid="text-stat-clients-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}