import Link from "next/link";
import { ArrowRight, Download, PhoneForwarded } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 lg:pt-20">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 blur-[180px]" />

      <div className="container mx-auto px-6 lg:px-12 py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300">
              ✨ Available for Freelance Projects
            </span>

            <h1
              className="
    text-5xl
    sm:text-6xl
    lg:text-7xl
    xl:text-8xl
    font-medium
    tracking-tighter
    leading-[0.9]
    text-white
  "
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 85%, transparent 100%)",
              }}
            >
              I&apos;m
              <br />
              <span
                className="
      bg-gradient-to-br
      from-white
      via-white
      to-[#00ccff42]
      bg-clip-text
      text-transparent
    "
              >
                Indra Tristia
              </span>
            </h1>
            <p className="mt-6 text-zinc-400 text-lg max-w-xl">
              Frontend Developer specializing in React.js, Next.js, and modern
              web technologies. Creating responsive, high-performance, and
              user-friendly digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* <Link
                href="#project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
              >
                View Projects
                <ArrowRight size={18} />
              </Link> */}

              <Link
                href="/mailto:indratrst@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition"
              >
                Contact Me
                <PhoneForwarded size={18} />
              </Link>
            </div>

            {/* TRUST LOGOS */}
            {/* <div className="mt-14">
              <p className="text-zinc-500 text-sm mb-4">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-6 text-zinc-400">
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Node.js</span>
              </div>
            </div> */}
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-zinc-500 text-sm">
                      Professional Overview
                    </p>

                    <h3 className="text-2xl font-semibold text-white mt-1">
                      Frontend Developer
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs text-green-400">Available</span>
                  </div>
                </div>

                {/* Main Number */}
                <div className="mb-8">
                  {/* <h2 className="text-6xl font-bold text-white">
                    20+
                  </h2> */}

                  {/* <p className="text-zinc-400 mt-1">
                    Projects Delivered
                  </p> */}
                </div>

                {/* Expertise */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-zinc-500 text-xs uppercase">Expertise</p>

                    <p className="text-white mt-2 font-medium">
                      React & Next.js
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-zinc-500 text-xs uppercase">
                      Experience
                    </p>

                    <p className="text-white mt-2 font-medium">2+ Years</p>
                  </div>
                </div>

                {/* Description */}
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Experienced in transforming UI/UX designs into responsive,
                    scalable, and maintainable web applications using React.js,
                    Next.js, TypeScript, and modern frontend technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies Card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <p className="text-sm text-zinc-500 mb-5">Technologies & Tools</p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Prisma",
                  "PostgreSQL",
                  "NodeJS",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
            rounded-full
            border
            border-white/10
            bg-black/20
            px-4
            py-2
            text-sm
            text-zinc-300
          "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
      <h4 className="text-2xl font-bold text-white">{value}</h4>
      <p className="text-zinc-400 text-sm mt-1">{label}</p>
    </div>
  );
}
