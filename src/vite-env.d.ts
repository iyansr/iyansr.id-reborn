/// <reference types="vite/client" />

// src/vite-env.d.ts
declare module '*.md' {
  const content: string;
  export default content;
}
