import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  category: string;
  description: string;
  skills: string[];
}

export default function SkillCard({
  category,
  description,
  skills,
}: SkillCardProps) {
  return (
    <Card
      className="h-full border border-primary shadow-lg dark:border-slate-500"
      data-testid={`card-skill-${category.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <CardHeader>
        <CardTitle
          className="text-lg"
          data-testid={`text-category-${category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {category}
        </CardTitle>
        <CardDescription
          data-testid={`text-description-${category
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={`${skill}-${index}`}
            variant="secondary"
            data-testid={`badge-skill-${skill
              .toLowerCase()
              .replace(/\s+/g, "-")}-${index}`}
          >
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
