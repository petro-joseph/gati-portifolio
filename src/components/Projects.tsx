import { ExternalLink, Github, Laptop } from "lucide-react";
import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

const projects = [
  {
    title: "Kazi Hub",
    description:
      "Land your dream job faster — without the overwhelm. Kazi Hub uses AI to find your best-fit roles, fine-tune your resume, and even automate applications — so you spend less time stressing and more time interviewing.",
    imageLight: "/projects/kazihub.png",
    imageDark: "/projects/kazihub-dark.png",
    liveLink: "https://kazihub.vercel.app",
    github: "https://github.com/petro-joseph",
    technologies: [
      "FastAPI",
      "TensorFlow",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: ["AI-Powered", "Job Automation"],
  },
  {
    title: "Project Management App",
    description:
      "All-in-one team collaboration — simplified. Say goodbye to scattered spreadsheets and fragmented tools. This powerful app gives your team a single place to track tasks, deadlines, assets, inventories, budgets, and time — making project coordination effortless.",
    imageLight: "/projects/novaerp.png",
    imageDark: "/projects/novaerp-dark.png",
    liveLink: "https://novaerp.vercel.app/login",
    github: "https://github.com/petro-joseph/project-management-system",
    technologies: [
      "React",
      "Express",
      "PostgreSQL",
      "Docker",
      "NGINX",
      "Redis",
      "Grafana",
    ],
    features: ["Team Tool", "ERP"],
  },
  
  {
    title: "FocusFlow",
    description:
      "Boost your focus. Crush your to-do list. Stay in control. FocusFlow is the ultimate productivity planner that combines task tracking, Pomodoro timer, visual time blocking, and built-in lo-fi music — all designed to help you stay focused and get more done, effortlessly.The App Gained 200+ users in its first month of lunch ",
    imageLight: "/projects/focusflow.png",
    imageDark: "/projects/focusflow.png",
    liveLink: "https://focusflow25.vercel.app/",
    github: "https://github.com/petro-joseph",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "Serverless",
      "Vercel",
    ],
    features: ["Productivity", "Pomodoro", "Minimal UI", "Productivity", "200+ Users"],
  },
  {
    title: "ChatForger",
    description:
      "Turn your content into a 24/7 AI support agent — in minutes. ChatForger lets you build intelligent chatbots trained on your documents and website links — no code needed. Deliver instant, accurate support to your customers with a chatbot that actually understands your business.",
    imageLight: "/projects/chatforge-light.png",
    imageDark: "/projects/chatforge-dark.png",
    liveLink: "https://chatforger.vercel.app/",
    github: "https://github.com/petro-joseph",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Vercel AI SDK",
      "LangChain",
      "Pinecone",
    ],
    features: ["AI-Powered", "No-Code", "Customer Support"],
  },
];

export default function Projects() {
  const [imageLoadErrors, setImageLoadErrors] = useState<{ [key: string]: boolean }>({});
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const imageSrc = theme === "dark" ? project.imageDark : project.imageLight;

            return (
              <div
                key={project.title}
                className="project-card animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/40 mb-5 flex items-center justify-center">
                  {!imageLoadErrors[project.title] ? (
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={() =>
                        setImageLoadErrors((prev) => ({
                          ...prev,
                          [project.title]: true,
                        }))
                      }
                    />
                  ) : (
                    <Laptop className="h-12 w-12 text-primary/70" />
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.features?.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-secondary/20 text-xs font-medium rounded-full text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4">{project.description}</p>


                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-xs rounded-full text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
