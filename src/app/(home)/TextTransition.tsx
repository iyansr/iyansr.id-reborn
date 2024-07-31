"use client";

import React from "react";
import RTextTransition, { presets } from "react-text-transition";
const TEXTS = ["React Native", "React", "Frontend", "NextJS", "Fullstack"];

export function TextTransition() {
  const [index, setIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  if (!mounted) return null;

  return (
    <RTextTransition springConfig={presets.wobbly} className="text-purple-500 font-semibold">
      {TEXTS[index % TEXTS.length]}
    </RTextTransition>
  );
}
