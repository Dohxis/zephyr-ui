import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-dts";

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			formats: ["cjs", "es"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				sourcemapExcludeSources: true,
			},
		},
		sourcemap: true,
		minify: false,
	},
	plugins: [react(), dts()],
	logLevel: "warn",
});
