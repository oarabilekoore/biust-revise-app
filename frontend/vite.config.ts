import { defineConfig } from "vite";

export default defineConfig({
    base: "/", // Or an empty string ''
    build: {
        outDir: "dist",
        sourcemap: true,
    },
    server: {
        port: 5173,
    },
});
