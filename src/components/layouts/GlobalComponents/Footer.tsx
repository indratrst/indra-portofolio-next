"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const links = [
  {
    name: "Github",
    href: "https://github.com/indratrst/",
    icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/indra-tristia/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Email",
    href: "mailto:indratrst@email.com",
    icon: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F4F3EF] text-[#111111] border-t border-white/10">
      {/* Glow */}


      <div className=" relative z-10 mx-auto px-8 md:px-28">
        {/* CTA */}

        <div className="py-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[1250px]"
          >
            <h2 className="text-[12vw] font-medium leading-[0.85] tracking-[-0.075em] sm:text-[9vw] lg:text-[6vw]">
              Let&apos;s Build <br />
              <span className="block  lg:pl-[6vw]">
                Something Great <span className="text-[#0d4dbb]">.</span>
            </span>  
            </h2>

            <p className="mt-6 max-w-lg text-sm uppercase tracking-[0.08em] text-[#303030]">
              Frontend Developer specializing in React, Next.js, TypeScript, and modern web experiences.
            </p>
          </motion.div>

          {/* Social Links (Editorial Badges) */}
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-[#D8D6D0] bg-[#EBE9E3] px-5 py-3 text-[11px] uppercase tracking-[0.15em] text-[#111111] transition-all duration-300 hover:border-[#111111] hover:text-[#0d4dbb]"
              >
                <svg
                  role="img"
                  className="fill-current"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={link.icon} />
                </svg>

                <span>{link.name}</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Massive Brand */}

        <div className="absolute bottom-0 md:right-36 md:border-t border-white/10 md:py-16">
          <div
            className="
              select-none
              text-left
              font-bold
              tracking-[-0.04em]
              text-blue-900/[0.13]
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
              text-black/[0.17]
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
            gap-2
            md:border-t
            border-white/10
            mt-12
            md:mt-0
            py-2
            md:py-8
            text-sm
            text-zinc-500
            md:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} Indra Tristia. All rights reserved.
          </p>

          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
