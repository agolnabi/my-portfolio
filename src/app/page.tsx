import content from "@/data/content.json";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Hero hero={content.hero} />
        </div>
      </section>

      <section className="w-full px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <Education education={content.education} />
        </div>
      </section>

      <section className="w-full px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <Experience experience={content.experience} />
        </div>
      </section>

      <section className="w-full px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <Skills skills={content.skills} />
        </div>
      </section>

      <section className="w-full px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <Certifications certifications={content.certifications} />
        </div>
      </section>

      <section className="w-full px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <Projects projects={content.projects} />
        </div>
      </section>

      <section className="w-full px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <Recommendations recommendations={content.recommendations} />
        </div>
      </section>

      <section className="w-full px-6 py-20 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <Contact hero={content.hero} />
        </div>
      </section>
    </div>
  );
}
