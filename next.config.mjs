import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/agentic-workshop/v03",
        destination: "/agentic-workshop",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
