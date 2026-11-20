import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// Mặc định web chạy ở gốc tên miền (Vercel, tên miền riêng).
// Bản GitHub Pages build bằng `npm run deploy` với --base=/video-ai-kiem-tien/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  server: { port: 8080 },
});
