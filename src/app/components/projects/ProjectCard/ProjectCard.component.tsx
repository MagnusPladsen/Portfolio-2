import { Project } from "@/app/types/types";
import Image from "next/image";
import H2 from "../../typography/H2/H2.component";
import Link from "next/link";
import ArrowIcon from "../../icons/ArrowIcon.component";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      key={project.id}
      className={`relative pb-6 w-[90vw] lg:w-full xl:max-w-lg xl:mx-auto bg-white rounded-lg border border-gray-200 shadow-md`}
    >
      <div className="mb-5">
        <Image
          src={project.image}
          alt={project.title}
          width={240}
          height={240}
          priority
          className={`rounded-t-lg object-cover w-full shadow-inner`}
        />
      </div>
      <div className="flex justify-between items-center mb-5 text-gray-500 px-6">
        <p className="bg-green-200 text-green-600 text-xs inline-flex items-center px-2.5 py-1 rounded gap-2">
          Grade: <span className="font-bold">{project.grade}</span>
        </p>

        <p className="bg-green-200 text-green-600 text-xs inline-flex items-center px-2.5 py-1 rounded gap-2">
          Status : <span className="font-bold">{project.status}</span>
        </p>
      </div>

      <H2 className="mb-2 text-xl tracking-tight text-gray-900  truncate text-ellipsis px-6">
        {project.title}
      </H2>
      <div className="mb-5 h-[calc(1rem*3)] font-light text-gray-500 line-clamp-3 px-6">
        {project.description}
      </div>
      <div className="flex justify-between items-center flex-row-reverse px-6">
        <Link
          href={project.url}
          className="flex gap-2 items-center font-medium text-primary hover:underline"
        >
          <p>See live</p>
          <ArrowIcon />
        </Link>
        <Link
          className="flex gap-2 items-center font-medium text-primary hover:underline"
          href={project.repo}
        >
          <p>Repository</p>
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
