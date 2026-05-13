import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      // Turbopack en Next.js 16 resuelve @import "tailwindcss" desde el dir
      // padre del proyecto en lugar del root. Este alias fuerza la ruta absoluta.
      tailwindcss: resolve(__dirname, 'node_modules/tailwindcss'),
    },
  },
};

export default nextConfig;
