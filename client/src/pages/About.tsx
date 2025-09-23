import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillCard from "@/components/SkillCard";

export default function About() {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Modern frontend technologies and frameworks for building responsive web applications",
      skills: ["Web Fundamentals", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "UI/UX Design",
      description: "Designing user-friendly interfaces and engaging user experiences",
      skills: ["Figma", "Wireframing", "Prototyping", "Khroma → color palette generator(AI)"],
    },
    {
      category: "Product Design & Collaboration",
      description: "Creating scalable design systems and collaborating across teams",
      skills: ["Design Systems", "Accessibility (WCAG)", "User Research", "Collaboration Tools"],
    },
  ];

  const interests = [
    "UI/UX Design",
    "Interaction Design",
    "User Research & Testing",
    "Design Systems",
    "Prototyping & Wireframing",
    "React, TypeScript, Tailwind CSS",
    "Product Design",
    "Motion & Microinteractions",
    "Usability & Web Performance",
  ];

  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Profile Section */}
        <div className="text-center mb-16">
          <img
            src="/images/Isuru.png"
            alt="Isuru"
            className="w-56 h-56 mx-auto rounded-full object-cover mb-6 shadow-lg border-2 border-purple-500 dark:border-slate-500"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m a passionate UI/UX Engineer who loves building clean, intuitive, and modern digital experiences. 
            My focus is on creating user-friendly designs and scalable solutions that deliver real impact.
          </p>
        </div>

        {/* Interests Card */}
        <Card className="w-full mb-16 border border-purple-500 dark:border-slate-500 shadow-lg">
          <CardHeader>
            <CardTitle data-testid="text-interests-title">Interests & Specializations</CardTitle>
            <CardDescription data-testid="text-interests-description">
              Areas I’m passionate about and continuously improving
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  data-testid={`badge-interest-${interest.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <section>
          <div className="text-center mb-12 ">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-skills-section-title">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg" data-testid="text-skills-section-description">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category) => (
              <SkillCard 
                key={category.category}
                category={category.category}
                description={category.description}
                skills={category.skills}
              />
            ))}
          </div>

          {/* Experience Card */}
          <Card className="w-full border border-purple-500 dark:border-slate-500 shadow-lg mb-12">
            <CardHeader>
              <CardTitle 
                data-testid="text-experience-title" 
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
              >
                Experience
              </CardTitle>
              <CardDescription 
                data-testid="text-experience-role" 
                className="text-lg font-semibold text-primary mt-1"
              >
                User Interface Engineering Intern
              </CardDescription>
              <CardDescription 
                data-testid="text-experience-duration" 
                className="text-md font-medium text-muted-foreground mt-1"
              >
                ICIEOS • Mar 2025 - Sep 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>Designed UI flows for multiple projects including POS, Landlord, Mobile Apps, Caregiver Platform, and Company Portfolio.</li>
                <li>Developed a shared Design Library to ensure UI consistency across projects.</li>
                <li><strong>POS System:</strong> Assisted with front-end tasks and improved usability.</li>
                <li><strong>Landlord System:</strong> Collaborated with team to meet project requirements.</li>
                <li><strong>Caregiver Platform & Portfolio:</strong> Helped with front-end and UI consistency across modules.</li>
                <li>Engaged in cross-functional team collaboration using Git, following structured industrial project practices.</li>
                <li>Participated in client meetings for requirement gathering and professional exposure.</li>
                <li>Conducted UI Testing and debugged issues in mobile & web applications, enhancing system stability and user experience.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="w-full border border-purple-500 dark:border-slate-500 shadow-lg mb-12">
            <CardHeader>
              <CardTitle data-testid="text-education-title" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </CardTitle>
              <CardDescription data-testid="text-education-degree" className="text-lg font-semibold text-primary mt-1">
                BSc. Information Technology
              </CardDescription>
              <CardDescription data-testid="text-education-duration" className="text-md font-medium text-muted-foreground mt-1">
                BCI Campus • 2023 - Present
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="text-base font-medium">
                Currently studying for a BSc (Hons) in IT, with a focus on distributed systems and cloud computing, applied machine learning, data mining, and mobile application development at BCI Campus, Negombo.
              </p>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card className="w-full border border-purple-500 dark:border-slate-500 shadow-lg">
            <CardHeader>
              <CardTitle data-testid="text-education-title" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Certifications</CardTitle>
              <CardDescription>Additional academic achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">University of Moratuwa</h3>
                <p className="text-sm text-muted-foreground">
                  Web Design for Beginners (2025) <br />
                  Front-End Web Development (2025) <br />
                  Python for Beginners E-Certificate (2024)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Udemy</h3>
                <p className="text-sm text-muted-foreground">
                 UI/UX Design Course (Completed during UI/UX Engineer Internship, 2025)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">BCI Campus</h3>
                <p className="text-sm text-muted-foreground">
                  Certificate in Java Programming (2023)
                </p>
              </div>
            </CardContent>
          </Card>

        </section>
      </div>
  );
}