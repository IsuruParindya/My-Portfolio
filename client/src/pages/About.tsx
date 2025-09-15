import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillCard from "@/components/SkillCard";

export default function About() {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Modern frontend technologies and frameworks for building responsive web applications",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      category: "Backend Development", 
      description: "Server-side technologies for building robust and scalable applications",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Express.js", level: 85 },
      ]
    },
    {
      category: "DevOps & Tools",
      description: "Development tools and practices for efficient software delivery",
      skills: [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 80 },
      ]
    }
  ];

  const interests = [
    "Open Source", "Machine Learning", "Web Performance", "UI/UX Design", 
    "Mobile Development", "Cloud Architecture", "Blockchain", "DevOps"
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-page-subtitle">
            Passionate full-stack developer with a love for creating exceptional digital experiences 
            and solving complex problems through code.
          </p>
        </div>

        {/* Profile Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Profile Image Placeholder */}
            <div className="lg:col-span-1">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <div className="text-6xl font-bold text-primary/50" data-testid="text-profile-placeholder">
                      JD
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2" data-testid="text-profile-name">
                    John Doe
                  </h2>
                  <p className="text-muted-foreground" data-testid="text-profile-title">
                    Full-Stack Developer
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-bio-title">My Story</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p data-testid="text-bio-paragraph-1">
                    With over 5 years of experience in web development, I've had the privilege of working 
                    on diverse projects ranging from startup MVPs to enterprise-scale applications. My journey 
                    began with curiosity about how websites work, and it's evolved into a passion for creating 
                    digital solutions that make a real impact.
                  </p>
                  <p data-testid="text-bio-paragraph-2">
                    I specialize in modern web technologies with a focus on React, TypeScript, and Node.js. 
                    I believe in writing clean, maintainable code and following best practices to ensure 
                    scalability and performance. When I'm not coding, you can find me contributing to open 
                    source projects or exploring the latest trends in web development.
                  </p>
                  <p data-testid="text-bio-paragraph-3">
                    I'm always excited to take on new challenges and collaborate with teams that share 
                    my passion for excellence. Let's build something amazing together!
                  </p>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-interests-title">Interests & Specializations</CardTitle>
                  <CardDescription data-testid="text-interests-description">
                    Areas I'm passionate about and continuously learning
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <Badge 
                        key={interest} 
                        variant="secondary"
                        data-testid={`badge-interest-${interest.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-skills-section-title">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-skills-section-description">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard 
                key={category.category}
                category={category.category}
                description={category.description}
                skills={category.skills}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}