"use client";

import { useState } from "react";

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-lg transition-all duration-300 ${
        hovered
          ? "shadow-2xl bg-neutral-200"
          : "shadow-lg bg-white"
      }`}
    >
      {children}
    </div>
  );
}
