import Image from "next/image";
import projects from "./api/projects";

export default function Home() {
  console.log(projects);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Projects</h1>
      <section className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <article key={project.id} className="m-4 p-4 border rounded-lg">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <Image src={project.image} alt={project.title} height={200} width={200} />
            <div className="flex flex-wrap">
              {/* {project.stacks.map((stack) => (
                <div key={stack.id} className="m-2">
                  <Image src={"/public/images/NorAuc.jpg"} alt={stack.name} height={200} width={200} />
                </div>
              ))} */}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
