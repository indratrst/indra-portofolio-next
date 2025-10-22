"use client";

import { ProjectType } from "@/data/type";
import CardProject from "../molecules/Card/CardProject";
import { projectData } from "@/data/dataProject";
import { useMemo } from "react";
import Image from "next/image";

const Project: React.FC = () => {
  const filteredProjects = useMemo(() => {
    return projectData;
  }, []);
  return (
    <section
      id="project"
      className="pt-6 lg:pt-16 pb-9 bg-basic dark:bg-dark relative shadow-lg"
    >
      <div className="relative w-full mx-auto flex  overflow-hidden md:py-10 lg:py-0">
        {/* <Image
          width={400}
          height={50}
          src="/project-left.svg"
          alt="pic hero"
          className="absolute  md:-mt-28  -ms-[75px] lg:ms-[100px] transform  scale-[.8] lg:scale-[.4]  md:scale-[.5] lg:opacity-100 opacity-95"
        />
        <Image
          fill
          src="/project-right.svg"
          alt="pic hero"
          className="absolute  mx-auto -ms-[75px] lg:ms-[600px]  scale-[.4] md:scale-[.5] lg:mt-16 transform lg:scale-[.4] opacity-100"
        /> */}
        <div className="max-w-xl mx-auto text-center relative">
          <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>

          <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-light">
            Project
          </h2>
          <p className="font-medium text-base text-secondary md:text-lg px-6">
            Beberapa project yang pernah terlibat dengan berbagai kebutuhan dan
            fitur yang memungkinkan kita untuk mempermudah aktivitas.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-4 lg:px-0">
        <CardProject projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Project;
