import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// Web được đăng tại https://kenvin88.github.io/video-ai-kiem-tien/
// Nếu sau này dùng tên miền riêng thì đổi base thành "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/video-ai-kiem-tien/" : "/",
  plugins: [react()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: { port: 8080 },
}));
