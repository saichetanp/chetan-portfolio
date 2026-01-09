"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Terminal, FileCode, Eye } from "lucide-react";
import { useTheme } from "./ThemeContext";
import TerminalWindow from "./TerminalWindow";

type ColorKey = "primary" | "secondary" | "accent" | "tertiary";

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  colorKey: ColorKey;
  skills: Skill[];
};

function SkillsSection() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: "Offensive Security",
      icon: Shield,
      colorKey: "primary",
      skills: [
        { name: "Penetration Testing", level: 95 },
        { name: "Web App Security", level: 90 },
        { name: "Network Exploitation", level: 85 },
        { name: "Social Engineering", level: 80 },
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: Terminal,
      colorKey: "secondary",
      skills: [
        { name: "Burp Suite", level: 95 },
        { name: "Metasploit", level: 90 },
        { name: "Nmap / Wireshark", level: 92 },
        { name: "Kali Linux", level: 95 },
      ],
    },
    {
      title: "Programming",
      icon: FileCode,
      colorKey: "accent",
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash Scripting", level: 88 },
        { name: "JavaScript", level: 75 },
        { name: "C/C++", level: 70 },
      ],
    },
    {
      title: "Defense & Analysis",
      icon: Eye,
      colorKey: "tertiary",
      skills: [
        { name: "SIEM / Log Analysis", level: 85 },
        { name: "Incident Response", level: 88 },
        { name: "Malware Analysis", level: 80 },
        { name: "Forensics", level: 75 },
      ],
    },
  ];

  const tools = [
    { name: "Burp Suite", icon: "🔥" },
    { name: "Metasploit", icon: "💀" },
    { name: "Nmap", icon: "🔍" },
    { name: "Wireshark", icon: "🦈" },
    { name: "Ghidra", icon: "👻" },
    { name: "IDA Pro", icon: "🔬" },
    { name: "Hashcat", icon: "🔓" },
    { name: "SQLMap", icon: "💉" },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent, ${theme.primary}05, transparent)`,
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 relative z-10"
        >
          <div className="font-mono text-sm mb-4" style={{ color: theme.primary }}>
            <span style={{ color: theme.primary }}>$</span> ./scan_skills.sh --all
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold font-mono"
            style={{ color: theme.primary }}
          >
            {">"} TECHNICAL_ARSENAL
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 relative z-10">
          {skillCategories.map((category, catIndex) => {
            const categoryColor = theme[category.colorKey];

            return (
              <TerminalWindow
                key={category.title}
                title={`${category.title.toLowerCase().replace(/\s+/g, "_")}.sh`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: catIndex * 0.1 }}
                  className="p-6 font-mono"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-5 h-5" style={{ color: categoryColor }} />
                    <h3 className="text-lg font-semibold" style={{ color: categoryColor }}>
                      {category.title.toUpperCase()}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1.5 text-xs">
                          <span className="text-gray-400">
                            <span style={{ color: theme.primary }}>▸</span> {skill.name}
                          </span>
                          <span style={{ color: categoryColor }}>[{skill.level}%]</span>
                        </div>
                        <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                            className="h-full"
                            style={{
                              background: categoryColor,
                              boxShadow: `0 0 10px ${categoryColor}80`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TerminalWindow>
            );
          })}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="relative z-10"
        >
          <TerminalWindow title="tools_inventory.sh">
            <div className="p-6 font-mono">
              <div className="text-sm text-gray-500 mb-4">
                <span style={{ color: theme.primary }}>$</span> ls /usr/local/security/tools/
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded border"
                    style={{
                      borderColor: `${theme.primary}20`,
                      backgroundColor: `${theme.primary}05`,
                    }}
                  >
                    <span className="text-lg">{tool.icon}</span>
                    <span className="text-xs text-gray-400">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}

/* 👇 CRITICAL: force TS module detection */
export default SkillsSection;
export { SkillsSection };