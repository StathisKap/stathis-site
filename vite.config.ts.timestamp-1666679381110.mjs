// vite.config.ts
import { sveltekit } from "file:///home/stathis/stathis-site/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig, searchForWorkspaceRoot } from "file:///home/stathis/stathis-site/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "./src/lib/",
        "./src/routes/",
        "./.svelte-kit/",
        "./src/",
        "./node_modules/",
        "./assets/"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zdGF0aGlzL3N0YXRoaXMtc2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc3RhdGhpcy9zdGF0aGlzLXNpdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc3RhdGhpcy9zdGF0aGlzLXNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHNlYXJjaEZvcldvcmtzcGFjZVJvb3QgfSBmcm9tICd2aXRlJztcblxuLy9jb25zdCBjb25maWc6IFVzZXJDb25maWcgPSB7XG4vL1x0cGx1Z2luczogW3N2ZWx0ZWtpdCgpXVxuLy99O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbc3ZlbHRla2l0KCldLFxuXHRzZXJ2ZXI6IHtcblx0XHRmczoge1xuXHRcdFx0YWxsb3c6IFtcblx0XHRcdFx0Ly8gc2VhcmNoIHVwIGZvciB3b3Jrc3BhY2Ugcm9vdFxuXHRcdFx0XHRzZWFyY2hGb3JXb3Jrc3BhY2VSb290KHByb2Nlc3MuY3dkKCkpLFxuXHRcdFx0XHQvLyB5b3VyIGN1c3RvbSBydWxlc1xuXHRcdFx0XHQnLi9zcmMvbGliLycsXG5cdFx0XHRcdCcuL3NyYy9yb3V0ZXMvJyxcblx0XHRcdFx0Jy4vLnN2ZWx0ZS1raXQvJyxcblx0XHRcdFx0Jy4vc3JjLycsXG5cdFx0XHRcdCcuL25vZGVfbW9kdWxlcy8nLFxuXHRcdFx0XHQnLi9hc3NldHMvJ1xuXHRcdFx0XVxuXHRcdH1cblx0fVxufSk7XG5cbi8vZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLGlCQUFpQjtBQUUxUixTQUFTLGNBQWMsOEJBQThCO0FBTXJELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxVQUFVLENBQUM7QUFBQSxFQUNyQixRQUFRO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDSCxPQUFPO0FBQUEsUUFFTix1QkFBdUIsUUFBUSxJQUFJLENBQUM7QUFBQSxRQUVwQztBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
