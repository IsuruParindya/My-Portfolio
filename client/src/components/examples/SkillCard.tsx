import SkillCard from '../SkillCard'

export default function SkillCardExample() {
  return (
    <div className="max-w-sm">
      <SkillCard
        category="Frontend Development"
        description="Modern frontend technologies and frameworks for building responsive web applications"
        skills={[
          { name: "React", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "Tailwind CSS", level: 85 },
          { name: "Next.js", level: 80 }
        ]}
      />
    </div>
  )
}