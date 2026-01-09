"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, Check, Palette } from "lucide-react";
import { useTheme } from "./ThemeContext";

function ThemeSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, currentTheme, changeTheme, themes } = useTheme();

  return (
    <>
      {/* Floating Settings Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full backdrop-blur-sm border shadow-lg group"
        style={{
          backgroundColor: `${theme.primary}20`,
          borderColor: `${theme.primary}40`,
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Settings
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            style={{ color: theme.primary }}
          />
        </motion.div>

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${theme.primary}` }}
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Settings Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Settings Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4"
            >
              <div className="bg-[#0a0a0f]/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Header */}
                <div
                  className="p-6 border-b border-white/10"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.secondary}10 100%)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${theme.primary}20` }}
                      >
                        <Palette
                          className="w-6 h-6"
                          style={{ color: theme.primary }}
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          Theme Settings
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">
                          Choose your preferred color scheme
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Theme Options */}
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(themes).map(([key, themeOption]) => {
                      const isSelected = currentTheme === key;

                      return (
                        <motion.button
                          key={key}
                          onClick={() => changeTheme(key)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative p-6 rounded-2xl border-2 transition-all text-left group"
                          style={{
                            backgroundColor: isSelected
                              ? `${themeOption.primary}10`
                              : "transparent",
                            borderColor: isSelected
                              ? themeOption.primary
                              : "rgba(255,255,255,0.1)",
                          }}
                        >
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-3 right-3 p-1.5 rounded-full"
                              style={{
                                backgroundColor: themeOption.primary,
                              }}
                            >
                              <Check className="w-4 h-4 text-black" />
                            </motion.div>
                          )}

                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">
                              {themeOption.icon}
                            </span>
                            <div>
                              <h3 className="text-lg font-bold text-white">
                                {themeOption.name}
                              </h3>
                              <p className="text-gray-400 text-xs">
                                Color Theme
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            {[themeOption.primary, themeOption.secondary, themeOption.accent].map(
                              (color) => (
                                <div
                                  key={color}
                                  className="w-12 h-12 rounded-lg"
                                  style={{
                                    backgroundColor: color,
                                    boxShadow: `0 0 20px ${color}40`,
                                  }}
                                />
                              )
                            )}
                          </div>

                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                            style={{
                              background: `radial-gradient(circle at 50% 50%, ${themeOption.primary}15 0%, transparent 70%)`,
                            }}
                          />
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-gray-400 text-sm text-center">
                      💡 Your theme preference is saved automatically
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* 👇 CRITICAL: force module detection */
export default ThemeSettings;
export { ThemeSettings };