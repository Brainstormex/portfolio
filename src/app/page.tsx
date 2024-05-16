import Intro from "@/components/Intro";
import SkillsShowcase from "@/components/skills/SkillsShowcase";
import { skillsData } from "@/lib/skills";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Intro />
        <SkillsShowcase skills={skillsData} />
      </div>
    </main>
  );
}
