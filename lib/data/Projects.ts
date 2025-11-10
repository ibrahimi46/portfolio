import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "PinkMart",
    description:
      "Full-stack e-commerce grocery platform with AI-powered image search, Stripe payments, and admin analytics.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "MobileNetV2",
      "Drizzle ORM",
    ],
    github: "https://github.com/ibrahimi46/pinkmart",
    live: "https://pink-mart.vercel.app",
    featured: true,
  },
  {
    title: "Gemini Clone",
    description:
      "Responsive AI chat application with real-time messaging and dynamic UI, inspired by Google Gemini.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
    github: "https://github.com/ibrahimi46/gemini-clone",
    live: "https://gemini-clone-app-orpin.vercel.app",
  },
  {
    title: "SLURM Cluster Setup Toolkit",
    description:
      "Bash automation toolkit for deploying SLURM clusters with NFS, Munge, and node provisioning.",
    tags: ["Bash", "Linux", "HPC", "SLURM", "NFS", "Munge"],
    github: "https://github.com/ibrahimi46/slurm-cluster-setup",
    
  },
];