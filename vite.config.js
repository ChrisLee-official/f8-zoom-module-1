import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/f8-zoom-module-1" : "/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, "src/index.html"),
        about: path.resolve(__dirname, "src/about.html"),
        blog: path.resolve(__dirname, "src/blog.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        practice: path.resolve(__dirname, "src/practice.html"),
      },
    },
  },
  plugins: [ViteEjsPlugin()],
});
