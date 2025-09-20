import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/IsuruParindya", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/isuru-parindya-pigera-a62137338/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/parindyapigera?s=09", label: "Twitter" },
    { icon: Mail, href: "mailto:parindyapigera2gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            <span data-testid="text-copyright">
              © {currentYear} Parindya. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                data-testid={`button-${link.label.toLowerCase()}`}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}