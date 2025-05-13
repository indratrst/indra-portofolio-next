import React, { useMemo } from "react";
import CardExperience from "../molecules/Card/CardExperience";
import { experienceData } from "@/data/dataExperience";

const Experience: React.FC = () => {
  const filteredExperience = useMemo(() => {
    return experienceData;
  }, [experienceData]);
  return (
    <>
      <section id="portfolio" className="pt-36 pb-9 bg-white dark:bg-slate-800">
        <div className="2xl:container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16 grid gap-y-2">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Experience
              </h4>
              <h2 className="font-bold text-dark text-3xl  sm:text-4xl lg:text-5xl dark:text-light">
                My Experience
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg ">
                Beberapa sertifikat yang telah saya dapatkan setelah
                menyelesaikan kelas dan event pada beberapa platform
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  w-full  h-[500px]">
          <div className="w-full h-full text-dark  grid py-16 px-52">
            <div className="flex flex-col gap-y-5">
              <h2 className="text-3xl text-black">Experience</h2>
              <div className="grid gap-y-2 border-b-2 pb-9">
                <h5>7 Kelas</h5>
                <h5>7 Event</h5>
              </div>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore earum excepturi tenetur accusamus repudiandae
                architecto quia alias quidem autem temporibus.
              </p>
            </div>
          </div>
          <div className="w-full  h-full flex px-10">
            <CardExperience experiences={filteredExperience} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
