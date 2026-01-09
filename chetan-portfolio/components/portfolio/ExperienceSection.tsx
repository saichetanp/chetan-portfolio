"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useTheme } from "./ThemeContext";

type Experience = {
  type: "work" | "education" | "certification";
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
};

export default function ExperienceSection() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: Experience[] = [
    {
      type: "work",
      title: "Senior Security Consultant",
      company: "CyberDefense Corp",
      period: "2022 - Present",
      description:
        "Leading penetration testing engagements and red team operations for Fortune 500 clients.",
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Security Analyst",
      company: "SecureNet Solutions",
      period: "2020 - 2022",
      description:
        "Conducted vulnerability assessments and incident response for enterprise environments.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "M.S. Cybersecurity",
      company: "Stanford University",
      period: "2018 - 2020",
      description:
        "Specialized in network security and cryptographic systems.",
      icon: GraduationCap,
    },
    {
      type: "certification",
      title: "OSCP & CEH Certified",
      company: "Offensive Security / EC-Council",
      period: "2019",
      description:
        "Obtained industry-leading certifications in offensive security.",
      icon: Award,
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent, ${theme.secondary}05, transparent)`,
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 relative z-10"
        >
          <div
            className="font-mono text-sm mb-4"
            style={{ color: theme.primary }}
          >
            <span style={{ color: theme.primary }}>$</span>{" "}
            git log --all --decorate --oneline
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold font-mono"
            style={{ color: theme.primary }}
          >
            {">"} COMMIT_HISTORY
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative z-10">
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, ${theme.primary}, ${theme.secondary}, ${theme.accent})`,
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-[#0a0a0f] border-2 z-10"
                style={{ borderColor: theme.primary }}
              >
                <div
                  className="absolute inset-1 rounded-full animate-pulse"
                  style={{ backgroundColor: theme.primary }}
                />
              </div>

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-8"
                    : "md:ml-auto md:pl-8"
                }`}
              >
                <div
                  className="p-6 rounded-2xl bg-white/[0.02] border transition-all"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = `${theme.primary}50`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.05)")
                  }
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-xl transition-colors border"
                      style={{
                        backgroundColor: `${theme.primary}10`,
                        borderColor: `${theme.primary}30`,
                      }}
                    >
                      <exp.icon
                        className="w-5 h-5"
                        style={{ color: theme.primary }}
                      />
                    </div>

                    <div className="flex-1 font-mono">
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          color: theme.primary,
                          backgroundColor: `${theme.primary}15`,
                          border: `1px solid ${theme.primary}30`,
                        }}
                      >
                        {exp.period}
                      </span>

                      <h3 className="text-lg font-bold text-white mt-2">
                        {exp.title}
                      </h3>
                      <p
                        className="text-sm mt-1"
                        style={{ color: theme.secondary }}
                      >
                        @ {exp.company}
                      </p>
                      <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                        <span style={{ color: theme.primary }}>▸</span>{" "}
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}