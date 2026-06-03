"use client";

const experiences = [
  {
    period: "2024 - 2025",
    role: "Technical Support",
    company: "PT Neuronworks Indonesia",
    description:
      "Providing technical support, troubleshooting, and assisting clients in resolving application and infrastructure issues.",
  },
  {
    period: "2023 - 2024",
    role: "Frontend Developer",
    company: "PT Motiolabs Indonesia",
    description:
      "Developed responsive web applications using React.js, Next.js, and modern frontend technologies.",
  },
  {
    period: "2023 - 2025",
    role: "Junior Programmer (Talent)",
    company: "PT Jagooit Talenta Indonesia",
    description:
      "Participated in software development programs and collaborated on various web application projects.",
  },
  {
    period: "2018",
    role: "Web Developer Intern",
    company: "PT Softindo Computech",
    description:
      "Built and maintained web-based applications while learning professional software development workflows.",
  },
];

const educations = [
  {
    year: "2022",
    institution: "Dicoding Indonesia",
    major: "Front End Developer Learning Path",
  },
  {
    year: "2016 - 2019",
    institution: "SMKN 2 Cimahi",
    major: "Rekayasa Perangkat Lunak (Software Engineering)",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-zinc-950 py-24 lg:py-36 scroll-mt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] bg-blue-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-zinc-300
              backdrop-blur-md
            "
          >
            Professional Journey
          </span>

          <h2
            className="
              mt-8
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-medium
              tracking-tighter
              leading-[0.95]
              text-white
            "
          >
            Experience &
            <br />

            <span
              className="
                bg-gradient-to-br
                from-white
                via-white
                to-[#75ff7c]
                bg-clip-text
                text-transparent
              "
            >
              Education
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            My professional journey in frontend development,
            technical support, and continuous learning.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Experience
            </h3>

            <div className="space-y-5">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-zinc-500">
                        {item.period}
                      </p>

                      <h4 className="mt-2 text-xl font-semibold text-white">
                        {item.role}
                      </h4>

                      <p className="mt-1 text-zinc-400">
                        {item.company}
                      </p>

                      <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className="
                        mt-2
                        h-3
                        w-3
                        rounded-full
                        bg-green-500
                        shadow-[0_0_20px_rgba(34,197,94,0.8)]
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Education
            </h3>

            <div className="space-y-5">
              {educations.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >
                  <p className="text-sm text-zinc-500">
                    {item.year}
                  </p>

                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {item.institution}
                  </h4>

                  <p className="mt-2 text-zinc-400">
                    {item.major}
                  </p>
                </div>
              ))}

              {/* Additional Summary Card */}
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/10
                  to-white/[0.02]
                  backdrop-blur-xl
                  p-6
                "
              >
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  Focus Areas
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "REST API",
                    "Responsive Design",
                    "UI Development",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-2
                        text-sm
                        text-zinc-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}