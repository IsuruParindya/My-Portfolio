import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, MapPin, MousePointer2 } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [_, setLocation] = useLocation();

  const handleViewProjects = () => {
    setLocation("/projects");
  };

  const handleDownloadResume = () => {
    const resumeUrl = "/Isuru Parindya - Cv.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Isuru Parindya CV.pdf";
    link.click();
  };

  const skills = [
    "Figma",
    "Wireframing & Mockups",
    "UI/UX Design",
    "React",
    "TypeScript",
    "HTML & CSS (modern + responsive)",
    "Tailwind CSS",
    "Git & Version Control",
    "Frontend Module Implementation",
    "UI Testing & Debugging",
  ];

  const [stats, setStats] = useState({ internships: 0, techs: 0, projects: 0 });

  useEffect(() => {
    const targets = { internships: 7, techs: skills.length, projects: 6 };
    const duration = 1500;
    const intervalTime = 30;

    const increments = {
      internships: targets.internships / (duration / intervalTime),
      techs: targets.techs / (duration / intervalTime),
      projects: targets.projects / (duration / intervalTime),
    };

    const interval = setInterval(() => {
      setStats((prev) => {
        const next = {
          internships: Math.min(prev.internships + increments.internships, targets.internships),
          techs: Math.min(prev.techs + increments.techs, targets.techs),
          projects: Math.min(prev.projects + increments.projects, targets.projects),
        };

        if (
          next.internships === targets.internships &&
          next.techs === targets.techs &&
          next.projects === targets.projects
        ) {
          clearInterval(interval);
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-[1.35] relative inline-block">
            <span className="uppercase text-5xl sm:text-6xl inline-block align-baseline bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent relative z-10">
              UI/UX

              {/* Designer Badge */}
              <span className="absolute right-full top-[90%] sm:top-[82%] md:top-[85%] -translate-y-1/2 -mr-10 sm:-mr-1 md:-mr-2 animate-floatX z-20 flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 text-white normal-case">
                  Designer
                </span>
                <MousePointer2 className="w-5 h-5 -rotate-12 text-pink-400 scale-x-[-1]" />
              </span>

              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,5 C25,10 75,0 100,5"
                  stroke="url(#grad)"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
            </span>{" "}
            <span
              className="relative bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent font-semibold text-5xl sm:text-6xl"
              data-testid="text-hero-specialty"
            >
              Engineer

              {/* Dev Badge */}
              <span className="absolute -right-12 sm:-right-10 md:-right-12 -bottom-6 sm:-bottom-5 md:-bottom-6 animate-floatY z-20 flex items-center gap-2">
                <MousePointer2 className="w-5 h-5 -rotate-6 text-purple-500" />
                <span className="px-2 py-0.5 text-xs rounded-full bg-purple-600 text-white">
                  Dev
                </span>
              </span>
            </span>

            <div
              className="text-muted-foreground font-medium text-2xl sm:text-3xl mt-2"
              data-testid="text-hero-subtitle"
            >
              Shaping User Interactions
            </div>
          </h1>

          <p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-hero-description"
          >
            UI/UX Engineer | Interface Builder | Creative Coder
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-4 w-4" />
            <span data-testid="text-location">Colombo,Sri Lanka</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={handleViewProjects}
              className="gap-2 text-lg px-8"
              data-testid="button-hero-view-projects"
            >
              <ArrowRight className="h-5 w-5" />
              View Projects
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

          <div className="max-w-3xl mx-auto">
            <p
              className="text-sm font-medium text-muted-foreground mb-4"
              data-testid="text-skills-heading"
            >
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm"
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, "-")}-${index}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.floor(stats.internships)}
              </div>
              <div className="text-muted-foreground">Internship Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.floor(stats.techs)}
              </div>
              <div className="text-muted-foreground">Technologies Learned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.floor(stats.projects)}
              </div>
              <div className="text-muted-foreground">Personal Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
