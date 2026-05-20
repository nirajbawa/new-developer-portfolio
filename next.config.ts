import type { NextConfig } from "next";

const allowedOrigins: string[] = ["localhost:3000"];

// Add fallback for current active ngrok tunnel
allowedOrigins.push("f656-2409-40c2-6016-e625-8d99-78d6-5b93-c57c.ngrok-free.app");

// Dynamically handle any ngrok/local network tunnels from env variables
if (process.env.NGROK_URL) {
  // Automatically strip http:// or https:// and any trailing paths
  const parsedOrigin = process.env.NGROK_URL
    .replace(/^https?:\/\//, "")
    .split("/")[0];
  if (!allowedOrigins.includes(parsedOrigin)) {
    allowedOrigins.push(parsedOrigin);
  }
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: allowedOrigins
};

export default nextConfig;
