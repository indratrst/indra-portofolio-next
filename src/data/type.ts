import { StaticImageData } from "next/image";

export type ProjectType = {
  image: string;
  categories: string[];
  title: string;
  description: string;
  link?: string; // Opsional
  github?: string; // Opsional
};
