import Intro from "@/components/Intro";
import ProjectCardList from "@/components/projects/ProjectCardList";
import SkillsShowcase from "@/components/skills/SkillsShowcase";
import { cardData } from "@/lib/projects";
import { skillsData } from "@/lib/skills";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen">
        <Intro />
        <SkillsShowcase skills={skillsData} />
        <ProjectCardList cardData={cardData} />
      </div>
    </main>
  );
}
