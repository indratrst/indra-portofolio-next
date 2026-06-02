"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

const links = [
  {
    name: "Github",
    href: "https://github.com/yourgithub",
    // icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourlinkedin",
    // icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 border-t border-white/10">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 bg-blue-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 bg-purple-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* CTA */}

        <div className="py-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-4xl"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              Available for Opportunities
            </span>

            <h2 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
              Let's Build
              <br />

              <span className="bg-gradient-to-r from-blue-700 to-red-700 bg-clip-text text-transparent">
                Something Great
              </span>

              <br />
              Together.
            </h2>

            <p className="mt-8 max-w-2xl text-lg text-zinc-400">
              Frontend Developer specializing in React,
              Next.js, TypeScript and modern web
              experiences.
            </p>
          </motion.div>

          {/* Links */}

          <div className="mt-16 flex flex-wrap gap-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-6
                    py-4
                    text-zinc-300
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  {/* <Icon size={18} /> */}

                  <span>{link.name}</span>

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Massive Brand */}

        <div className="absolute bottom-0 md:right-36 border-t border-white/10 py-16">
          <div
            className="
              select-none
              text-left
              font-bold
              tracking-[-0.08em]
              text-white/[0.04]
              text-[90px]
              sm:text-[120px]
              md:text-[180px]
              lg:text-[240px]
              leading-none
            "
          >
            INDRA
          </div>

          <div
            className="
              -mt-4
              select-none
              text-center
              font-bold
              tracking-[-0.08em]
              text-white/[0.04]
              text-[90px]
              sm:text-[120px]
              md:text-[180px]
              lg:text-[240px]
              leading-none
            "
          >
            TRISTIA
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            py-8
            text-sm
            text-zinc-500
            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} Indra Tristia.
            All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}