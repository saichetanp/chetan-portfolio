"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ContactSection() {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message sent! I’ll get back to you soon.");

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
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
            <span style={{ color: theme.primary }}>$</span> nc -lvp
            1337
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold font-mono"
            style={{ color: theme.primary }}
          >
            {">"} ESTABLISH_CONNECTION
          </h2>
          <p className="text-gray-500 mt-4 font-mono text-sm">
            Listening on port 1337...
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] font-mono">
              <p className="text-gray-500">
                <span style={{ color: theme.primary }}>$</span>{" "}
                whoami
              </p>
              <p className="text-white pl-4">
                Alex Morgan – Cybersecurity Specialist
              </p>

              <p className="text-gray-500 mt-3">
                <span style={{ color: theme.primary }}>$</span>{" "}
                cat location.txt
              </p>
              <p className="text-white pl-4 flex items-center gap-2">
                <MapPin
                  className="w-4 h-4"
                  style={{ color: theme.primary }}
                />
                San Francisco, CA
              </p>

              <p className="text-gray-500 mt-3">
                <span style={{ color: theme.primary }}>$</span>{" "}
                echo $EMAIL
              </p>
              <p className="text-white pl-4 flex items-center gap-2">
                <Mail
                  className="w-4 h-4"
                  style={{ color: theme.primary }}
                />
                alex@cybersec.dev
              </p>
            </div>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  aria-label={social.label}
                >
                  <social.icon
                    className="w-5 h-5"
                    style={{ color: theme.primary }}
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <input
              required
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full h-12 px-4 rounded bg-white/[0.02] border border-white/[0.05] text-white"
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full h-12 px-4 rounded bg-white/[0.02] border border-white/[0.05] text-white"
            />

            <textarea
              required
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full min-h-[150px] px-4 py-3 rounded bg-white/[0.02] border border-white/[0.05] text-white resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`h-12 w-full rounded-xl font-semibold text-black transition-all ${theme.gradient}`}
              style={{
                boxShadow: `0 0 30px ${theme.primaryGlow}`,
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>

        <div className="mt-32 pt-8 border-t border-white/[0.05] text-center">
          <p className="text-gray-500 text-sm font-mono">
            <span style={{ color: theme.primary }}>&lt;/&gt;</span>{" "}
            Built with passion • © 2024
          </p>
        </div>
      </div>
    </section>
  );
}