"use client";

import React, { ReactNode } from "react";
import { useTheme } from "./ThemeContext";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg overflow-hidden border ${className}`}
      style={{ borderColor: `${theme.primary}30` }}
    >
      {/* Terminal Header */}
      <div
        className="flex items-center gap-2 px-4 py-2 border-b"
        style={{
          backgroundColor: `${theme.primary}10`,
          borderColor: `${theme.primary}30`,
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs font-mono text-gray-400 ml-2">
          {title}
        </span>
      </div>

      {/* Terminal Content */}
      <div className="bg-[#0a0a0f]/95 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}

/* 👇 CRITICAL: force TS module detection */
export default TerminalWindow;
export { TerminalWindow };