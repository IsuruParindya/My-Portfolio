import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCardProps {
  category: string;
  description: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
  }>;
}

export default function SkillCard({ category, description, skills }: SkillCardProps) {
  return (
    <Card className="h-full" data-testid={`card-skill-${category.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <CardTitle className="text-lg" data-testid={`text-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
          {category}
        </CardTitle>
        <CardDescription data-testid={`text-description-${category.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium" data-testid={`text-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}>
                {skill.name}
              </span>
              <span className="text-sm text-muted-foreground" data-testid={`text-level-${skill.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}>
                {skill.level}%
              </span>
            </div>
            <Progress 
              value={skill.level} 
              className="h-2" 
              data-testid={`progress-${skill.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}