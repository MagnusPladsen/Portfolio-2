"use client";

import { Project } from "@/app/types/types";
import Image from "next/image";
import H2 from "../../typography/H2/H2.component";
import Link from "next/link";
import ArrowIcon from "../../icons/ArrowIcon.component";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ProjectCard({ project }: { project: Project }) {
  const [showStacks, setShowStacks] = useState(false);
  return (
    <article
      key={project.id}
      className={`relative pb-6 w-[90vw] lg:w-full xl:max-w-lg xl:mx-auto bg-white rounded-lg border border-gray-200 shadow-md flex flex-col gap-8 h-fit`}
    >
      <div className="">
        <Image
          src={project.image}
          alt={project.title}
          width={240}
          height={240}
          priority
          className={`rounded-t-lg object-cover w-full shadow-inner`}
        />
      </div>
      <div className="flex justify-between items-center  text-gray-500 px-6">
        <p className="bg-green-200 text-green-600 text-xs inline-flex items-center px-2.5 py-1 rounded gap-2">
          Grade: <span className="font-bold">{project.grade}</span>
        </p>

        <p className="bg-green-200 text-green-600 text-xs inline-flex items-center px-2.5 py-1 rounded gap-2">
          Status : <span className="font-bold">{project.status}</span>
        </p>
      </div>

      <H2 className=" text-xl tracking-tight text-gray-900 truncate text-ellipsis px-6">
        {project.title}
      </H2>
      <div className=" h-[calc(1rem*3)] font-light text-gray-500 line-clamp-3 px-6">
        {project.description}
      </div>
      <div className="px-6 flex flex-wrap gap-4 items-center">
        <p
          onClick={() => setShowStacks(!showStacks)}
          className="font-medium text-primary hover:cursor-pointer hover:underline underline-offset-2 transition-all"
        >
          {!showStacks ? "See stack" : "Stack:"}
        </p>
        <AnimatePresence initial={false}>
          {showStacks ? (
            project.stacks.map((stack) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, type: "tween" }}
                >
                  <Link href={stack.url} key={stack.id} passHref>
                    <div className="flex items-center hover:underline underline-offset-2 gap-2 group">
                      <Image
                        src={stack.logo}
                        alt={stack.name}
                        width={30}
                        height={30}
                      />
                      <p
                        key={stack.id}
                        className="text-xs bg-gray-100 group-hover:bg-gray-300 text-gray-800 px-2 py-1 rounded-lg whitespace-nowrap transition-all"
                      >
                        {stack.name}
                      </p>
                    </div>
                  </Link>{" "}
                </motion.div>
              );
            })
          ) : (
            <></>
          )}
        </AnimatePresence>
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
