"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  ChevronDown,
  Terminal,
  Lock,
  Wifi,
  Activity,
} from "lucide-react";
import { useTheme } from "./ThemeContext";
import MatrixRain from "./MatrixRain";

function HeroSection() {
  const { theme } = useTheme();

  const [text, setText] = useState("");
  const [bootSequence, setBootSequence] = useState<string[]>([]);

  const fullText = "Cybersecurity Specialist";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Boot sequence messages
  useEffect(() => {
    const messages = [
      "Initializing security protocols...",
      "Loading threat detection modules...",
      "Establishing encrypted connection...",
      "Systems online. Welcome, Alex Morgan.",
    ];

    messages.forEach((msg, i) => {
      setTimeout(() => {
        setBootSequence((prev) => [...prev, msg]);
      }, i * 800);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <MatrixRain />

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.03) 3px)",
          }}
        />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-[size:50px_50px]"
          style={{
            backgroundImage: `linear-gradient(${theme.primary}20 1px, transparent 1px),
                              linear-gradient(90deg, ${theme.primary}20 1px, transparent 1px)`,
          }}
        />
      </div>

      {/* Glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{ backgroundColor: `${theme.primary}15` }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
        style={{ backgroundColor: `${theme.secondary}15` }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg overflow-hidden border backdrop-blur-sm"
          style={{
            borderColor: `${theme.primary}40`,
            backgroundColor: "rgba(10, 10, 15, 0.8)",
          }}
        >
          {/* Terminal Header */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b font-mono text-sm"
            style={{
              backgroundColor: `${theme.primary}15`,
              borderColor: `${theme.primary}30`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-gray-400">root@alex-morgan:~</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Wifi className="w-3 h-3" style={{ color: theme.primary }} />
                <span>SECURED</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3" style={{ color: theme.primary }} />
                <span>ENCRYPTED</span>
              </div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <div className="mb-8 space-y-1">
              {bootSequence.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xs md:text-sm"
                  style={{ color: theme.secondary }}
                >
                  <span style={{ color: theme.primary }}>[OK]</span> {msg}
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h1
                className="text-4xl md:text-6xl font-bold"
                style={{ color: theme.primary }}
              >
                SAI CHETAN PANATHUKULA
              </h1>

              <div
                className="text-xl md:text-2xl"
                style={{ color: theme.secondary }}
              >
                {text}
                <span className="animate-pulse">_</span>
              </div>

              <p className="text-gray-400 max-w-xl">
                Protecting digital assets and hunting threats in the cyber
                realm. Specialized in ethical hacking and secure systems.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: Shield, label: "OSCP Certified" },
                  { icon: Terminal, label: "Ethical Hacker" },
                  { icon: Activity, label: "5+ Years Active" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded border text-xs"
                    style={{
                      borderColor: `${theme.primary}40`,
                      backgroundColor: `${theme.primary}10`,
                    }}
                  >
                    <item.icon
                      className="w-3 h-3"
                      style={{ color: theme.primary }}
                    />
                    <span className="text-gray-400">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6" style={{ color: theme.primary }} />
      </motion.div>
    </section>
  );
}

/* 👇 CRITICAL: force TS module detection */
export default HeroSection;
export { HeroSection };