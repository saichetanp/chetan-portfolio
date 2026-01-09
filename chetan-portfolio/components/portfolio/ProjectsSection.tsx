"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Github,
  Lock,
  Bug,
  Terminal,
  Shield,
  FolderGit2,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import TerminalWindow from "./TerminalWindow";

type ColorKey = "primary" | "secondary" | "accent" | "tertiary";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  colorKey: ColorKey;
  image: string;
  github: string;
  demo: string;
};

export default function ProjectsSection() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "VulnScanner Pro",
      description:
        "An automated vulnerability scanner that identifies security weaknesses in web applications using custom signatures and AI-powered analysis.",
      tags: ["Python", "Machine Learning", "Web Security"],
      icon: Bug,
      colorKey: "primary",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "CryptoVault",
      description:
        "End-to-end encrypted password manager with zero-knowledge architecture and hardware key support.",
      tags: ["Rust", "Cryptography", "Security"],
      icon: Lock,
      colorKey: "secondary",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "NetRecon",
      description:
        "Network reconnaissance toolkit for mapping infrastructure, discovering services, and identifying potential entry points.",
      tags: ["Go", "Networking", "Recon"],
      icon: Terminal,
      colorKey: "accent",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "PhishGuard",
      description:
        "Browser extension that uses ML to detect and block phishing attempts in real-time with 99.2% accuracy.",
      tags: ["JavaScript", "TensorFlow", "Extension"],
      icon: Shield,
      colorKey: "tertiary",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="font-mono text-sm mb-4"
            style={{ color: theme.primary }}
          >
            <span style={{ color: theme.primary }}>$</span>{" "}
            cd ~/projects && ls -la
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold font-mono"
            style={{ color: theme.primary }}
          >
            {">"} FEATURED_WORK
          </h2>
          <p className="text-gray-500 mt-4 font-mono text-sm">
            drwxr-xr-x  4 alex staff  128 security_tools/
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const projectColor = theme[project.colorKey];

            return (
              <TerminalWindow
                key={project.title}
                title={`${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "_")}/`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={
                          hoveredIndex === index
                            ? { scale: 1.2, rotate: 10 }
                            : { scale: 1, rotate: 0 }
                        }
                        className="p-4 rounded-xl border"
                        style={{
                          backgroundColor: `${projectColor}20`,
                          borderColor: `${projectColor}60`,
                        }}
                      >
                        <project.icon
                          className="w-8 h-8"
                          style={{ color: projectColor }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 font-mono">
                    <div className="flex items-center gap-2 mb-3">
                      <FolderGit2
                        className="w-4 h-4"
                        style={{ color: projectColor }}
                      />
                      <h3
                        className="text-lg font-bold"
                        style={{ color: projectColor }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded border"
                          style={{
                            borderColor: `${projectColor}30`,
                            backgroundColor: `${projectColor}10`,
                            color: projectColor,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="flex gap-4 pt-3 border-t"
                      style={{ borderColor: `${theme.primary}20` }}
                    >
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
                      >
                        <Github className="w-3 h-3" />
                        source/
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-white"
                      >
                        <ExternalLink className="w-3 h-3" />
                        demo/
                      </a>
                    </div>
                  </div>
                </motion.div>
              </TerminalWindow>
            );
          })}
        </div>
      </div>
    </section>
  );
}