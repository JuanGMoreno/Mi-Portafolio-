// Shared by both languages. Use null until a public URL is available.
export const projectsItems = [
  {
    key: "project1",
    name: "Crisal",
    imageUrl: "/images/projects/Crisal/foto3-crisal.webp",
    projectUrl: "https://crisal-bi-gestion-de-venta-directa.vercel.app",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Express", "TanStack Query", "Zustand"],
    githubUrl: "https://github.com/JuanGMoreno/Crisal_Bi_Gestion_de_venta_directa",
  },
  {
    key: "project2",
    name: "Taskrod",
    imageUrl: "/images/projects/Taskrod/foto3-taskrod.webp",
    projectUrl: "https://www.taskrod.com/auth/signin?next=/",
    technologies: ["Next.js", "Tailwind CSS", "AWS"],
    // Company project: no public repository supplied.
    githubUrl: null,
  },
  {
    key: "project3",
    name: "Valhalla",
    imageUrl: "/images/projects/Valhalla/foto1-valhalla.webp",
    projectUrl: "https://fron-end-valhalla.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Motion", "TypeScript"],
    githubUrl: "https://github.com/JuanGMoreno/fron-end-Valhalla",
  },
  {
    key: "project4",
    name: "BK-Studio",
    imageUrl: "/images/projects/KB-Studio/foto1-kbstudio.webp",
    projectUrl: "https://bk-studio-bay.vercel.app/",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    githubUrl: "https://github.com/JuanGMoreno/BK-Studio",
  },
] as const;
