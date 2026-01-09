"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bug, Lock, Search, Code } from "lucide-react";
import { useTheme } from "./ThemeContext";
import TerminalWindow from "./TerminalWindow";

export default function AboutSection() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Bug, label: "Bug Bounty Hunter", value: "50+ Bugs Found" },
    { icon: Lock, label: "Penetration Testing", value: "100+ Assessments" },
    { icon: Search, label: "Threat Analysis", value: "5+ Years" },
    { icon: Code, label: "Security Tools", value: "10+ Built" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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
            cat /about/README.md
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold font-mono"
            style={{ color: theme.primary }}
          >
            {">"} WHO_AM_I
          </h2>
        </motion.div>

        <TerminalWindow title="about.sh --verbose">
          <div className="p-8 font-mono">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* System info */}
              <div
                className="pb-4 border-b"
                style={{ borderColor: `${theme.primary}20` }}
              >
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">USER:</span>
                    <span
                      className="ml-2"
                      style={{ color: theme.primary }}
                    >
                      alex_morgan
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">STATUS:</span>
                    <span className="ml-2 text-green-500">
                      ● ACTIVE
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">ROLE:</span>
                    <span
                      className="ml-2"
                      style={{ color: theme.secondary }}
                    >
                      SECURITY_SPECIALIST
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">CLEARANCE:</span>
                    <span
                      className="ml-2"
                      style={{ color: theme.accent }}
                    >
                      LEVEL_5
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                <div>
                  <div className="text-gray-500 text-sm mb-2">
                    <span style={{ color: theme.primary }}>$</span>{" "}
                    cat bio.txt
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    I&apos;m a passionate cybersecurity professional with a
                    deep fascination for understanding how systems can be
                    compromised and how they can be protected.
                  </p>
                </div>

                <div>
                  <div className="text-gray-500 text-sm mb-2">
                    <span style={{ color: theme.primary }}>$</span>{" "}
                    cat specialization.txt
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    I specialize in penetration testing, vulnerability
                    research, and building security tools. I&apos;ve
                    participated in CTFs, bug bounties, and helped teams
                    strengthen security posture.
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <div className="text-gray-500 text-sm mb-2">
                    <span style={{ color: theme.primary }}>$</span>{" "}
                    ./show_stats.sh
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{
                          delay: 0.4 + index * 0.1,
                        }}
                        className="p-3 rounded border transition-all"
                        style={{
                          borderColor: `${theme.primary}20`,
                          backgroundColor: `${theme.primary}05`,
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon
                            className="w-4 h-4"
                            style={{ color: theme.primary }}
                          />
                          <span className="text-xs text-gray-500 uppercase tracking-wider">
                            {item.label}
                          </span>
                        </div>
                        <p
                          className="font-semibold"
                          style={{ color: theme.secondary }}
                        >
                          {item.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <div className="text-gray-500 text-sm mb-2">
                    <span style={{ color: theme.primary }}>$</span>{" "}
                    ls certifications/
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["CEH", "OSCP", "CISSP", "CEH-MASTER"].map(
                      (cert) => (
                        <span
                          key={cert}
                          className="px-3 py-1 rounded text-xs border"
                          style={{
                            borderColor: `${theme.primary}40`,
                            backgroundColor: `${theme.primary}15`,
                            color: theme.primary,
                          }}
                        >
                          {cert}.cert
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}