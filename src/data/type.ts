import { StaticImageData } from "next/image";

export type ProjectType = {
  image: string;
  categories: string[];
  title: string;
  description: string;
  link?: string; // Opsional
  github?: string; // Opsional
};

export type ExperienceType = {
  image: string;
  title: string;
  description: string;
  link?: string; // Opsional
  github?: string; // Opsional
  time?: string; // Opsional
};

export type AcheivementType = {
  image: string;
  title: string;
  description?: string;
};
