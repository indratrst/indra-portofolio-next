"use client";

interface ExperienceItem {
  number: string;
  role: string;
  company: string;
  description: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    number: "01",
    role: "Technical Support",
    company: "PT Neuronworks Indonesia",
    description:
      "Providing technical support, troubleshooting, and assisting clients in resolving application and infrastructure issues.",
    details: ["PHP", "Git", "Dbeaver", "SqlDeveloper"],
  },
  {
    number: "02",
    role: "Front-End Developer",
    company: "PT Motiolabs Indonesia",
    description:
      "Developed responsive web applications using Vue.js React.js, Next.js, and modern frontend technologies..",
    details: [
      "Front-End Development",
      "Component Architecture",
      "Tailwind CSS",
      "JavaScript",
      "Typescript",
    ],
  },
  {
    number: "03",
    role: "Web Developer Intern",
    company: "PT Softindo Computech",
    description:
      "Built and maintained web-based applications while learning professional software development workflows..",
    details: [
      "Laravel",
      "Php",
      "PostgreSQL",
      "Laragon",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 relative min-h-[100svh] overflow-hidden bg-[#F4F3EF] text-[#111111] md:py-16"
    >
      {/* Subtle Editorial Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="mx-auto h-full max-w-full border-x border-[#D8D6D0]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] flex-col px-5 sm:px-8 lg:px-36">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col justify-between border-b border-[#D8D6D0] pb-12 pt-6 lg:flex-row lg:items-end">
          <div>
            {/* Category Badge / Sub-label */}
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#777777]">
              02 / Experience
            </p>

            {/* Display Heading */}
            <h2 className="mt-6 max-w-[1250px] text-[13vw] font-medium leading-[0.85] tracking-[-0.075em] sm:text-[10vw] lg:text-[6.5vw]">
              Work <br />
              <span className="block pl-[4vw] lg:pl-[6vw]">
                History<span className="text-[#0d4dbb]">.</span>
              </span>
            </h2>
          </div>

          {/* Editorial Description */}
          <p className="mt-8 max-w-md text-sm uppercase tracking-[0.08em] text-[#303030] lg:mt-0 lg:pb-3">
            A timeline of the work and experience that shaped how I build digital interfaces.
          </p>
        </div>

        {/* Experiences List */}
        <div className="mt-12 flex flex-col divide-y divide-[#D8D6D0] max-w-[1440px] mx-auto">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group relative py-12 transition-colors duration-300 hover:bg-[#EBE9E3]/50"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                
                {/* Kolom Kiri: Metadata (Index & company) */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-[#777777]">
                    <span>{experience.number}</span>
                    <span className="h-px w-6 bg-[#D8D6D0]" />
                    <span className="text-[#0d4dbb]">{experience.company}</span>
                  </div>
                </div>

                {/* Kolom Tengah: Role & Deskripsi */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-medium tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-[#0d4dbb] sm:text-3xl lg:text-4xl">
                    {experience.role}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#303030]">
                    {experience.description}
                  </p>
                </div>

                {/* Kolom Kanan: Detail Tags (Pill Badges) */}
                <div className="lg:col-span-4 lg:col-start-9">
                  <div className="flex flex-wrap gap-2">
                    {experience.details.map((detail) => (
                      <span
                        key={detail}
                        className="border border-[#D8D6D0] bg-[#EBE9E3] px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#303030]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Editorial Footer */}
        <div className="mt-auto border-t border-[#D8D6D0] pt-6">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#777777]">
            Experience of work
          </p>
        </div>

      </div>
    </section>
  );
}