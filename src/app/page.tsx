import projects from "./api/projects";
import ProjectCard from "./components/projects/ProjectCard/ProjectCard.component";
import H1 from "./components/typography/H1/H1.component";

export default function Home() {
  return (
    <main className="pt-[80px] lg:pt-[120px] mx-auto xl:max-w-screen-xl pb-16 lg:px-6 gap-5">
      <H1>Projects</H1>
      <section className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-4 justify-center w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
