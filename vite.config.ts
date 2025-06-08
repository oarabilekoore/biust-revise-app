import { defineConfig } from "vite";

export default defineConfig({
    base: "/biust-revise-app/",
    build: {
        outDir: "dist",
        sourcemap: true,
    },
    server: {
        port: 3000,
    },
});
