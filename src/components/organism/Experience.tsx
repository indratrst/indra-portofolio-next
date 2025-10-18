import React, { useMemo } from "react";
import CardExperience from "../molecules/Card/CardExperience";
import { experienceData } from "@/data/dataExperience";

const Experience: React.FC = () => {
  const filteredExperience = useMemo(() => {
    return experienceData;
  }, [experienceData]);
  return (
    <>
      <section
        id="experience"
        className="pt-12 pb-8 md:pb-14 lg:pb-12 lg:py-36 scroll-mt-24  bg-white dark:bg-dark"
      >
        <div className="2xl:container ">
          {/* <div className="w-full px-4">
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
          </div> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  w-full lg:h-[500px]">
          <div className="w-full h-full text-dark  grid px-5 lg:px-52 pb-10">
            <div className="font-newSpirit leading-[1.1]">
              <h2 className="text-[50px] lg:text-[120px] text-primary">My</h2>
              <h2
                className="text-[60px] lg:text-[120px] text-dark
             dark:text-white"
              >
                Journey
              </h2>

              <div className="grid gap-y-2 border-b-2 border-primary dark:border-reds border-dotted " />
              <img
                src="/dotted.svg"
                alt="pic hero"
                className="absolute  max-w-full mx-auto -ms-[75px] lg:-ms-[290px]  scale-[.3] -mt-56 -right-16 lg:left-48  lg:mt-3 transform lg:scale-[.6]"
              />
              {/* className="absolute max-w-full mx-auto -ms-[75px] lg:ms-[290px]  scale-[.3] -mt-56 -right-20 lg:mt-16 transform lg:scale-[.6]" */}
              {/* <h5>7 Kelas</h5>
                <h5>7 Event</h5> */}
              {/* <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore earum excepturi tenetur accusamus repudiandae
                architecto quia alias quidem autem temporibus.
              </p> */}
            </div>
          </div>
          <div className="w-full  h-full md:flex px-10">
            {/* <CardExperience experiences={filteredExperience} /> */}
            <div className="w-full">
              <div className="w-full px-4">
                <div className="mx-auto mb-2">
                  <h2 className="font-bold text-sand  mb-4 text-2xl lg:text-2xl">
                    Experience
                  </h2>
                  {/* <p className="font-medium text-base text-secondary md:text-lg ">
                    Perjalanan karir yang dilalui setelah beberapa tahun
                    kebelakang.
                  </p> */}
                </div>
                <ol className="relative border-l border-gray-400 dark:border-gray-700">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-sand rounded-full mt-1.5 -left-1.5 border border-white   dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2024 - 2025
                    </time>
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-white">
                      Pt Neuronworks Indonesia
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Technical Support
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-sand rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2023 - 2024
                    </time>
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-white">
                      Pt Motiolabs Indonesia
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Frontend Developer
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-sand rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2023 - 2025
                    </time>
                    <h3 className="text-lg font-semibold text-gray-500 dark:text-white">
                      Pt Jagooit Talenta Indonesia
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Junior Programmer (Talent)
                    </p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-sand rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2018
                    </time>
                    <h3 className="text-lg font-semibold text-gray-500  dark:text-white">
                      Pt Softindo Computech
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Web Developer ( Intern )
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 w-full">
              <div className="w-full px-4">
                <div className=" mx-auto  mb-2">
                  <h2 className="font-bold text-sand text-2xl mb-4  lg:text-2xl">
                    Education
                  </h2>
                  {/* <p className="font-medium text-base text-secondary md:text-lg ">
                    Perjalanan karir yang dilalui setelah beberapa tahun.
                  </p> */}
                </div>
                <img
                  src="/dotted.svg"
                  alt="pic hero"
                  className="absolute  max-w-full mx-auto -ms-[75px] lg:ms-[150px]  scale-[1.6] lg:-mt-64 transform  -rotate-180 lg:scale-[.6] lg:opacity-100 opacity-0"
                />
                <ol className="relative border-l border-gray-400 dark:border-gray-700">
                  {/* <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2023
                    </time>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                      Pt Jagooit Talenta Indonesia
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Full Stack Web Developer
                    </p>
                  </li> */}
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-sand rounded-full mt-1.5 -left-1.5 border border-sand dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                      Dicoding
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Front End Developer
                    </p>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-sand rounded-full mt-1.5 -left-1.5 border border-sand dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2019
                    </time>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                      Smk Negeri 2 Cimahi
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      RPL
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
