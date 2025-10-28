"use client";

import { useEffect } from "react";

export default function Spotlight() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update CSS variables for spotlight position
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
