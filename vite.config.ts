import { defineConfig, loadEnv } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { lingui } from "@lingui/vite-plugin";
import { nitro } from "nitro/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const proxyConfig = {
    "/api/todos": {
      target: env.VITE_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => {
        const newPath = path.replace(/^\/api\/todos/, "/todos");
        console.log(
          `🔄 [TODOS PROXY] ${path} → ${String(env.VITE_API_URL)}${newPath}`,
        );
        return newPath;
      },
    },
  };

  return {
    plugins: [
      devtools({
        eventBusConfig: {
          port: 42071,
        },
      }),
      // Nitro produces the deployable server output (Vercel preset auto-detected
      // on Vercel via env). The custom Bun server was renamed to server.bun.ts
      // (root-level server.ts conflicts with Nitro) and remains usable via Docker.
      // runtime forcé : Nitro cible "bun1.x" dès que le build tourne sous bun,
      // et le runtime Bun de Vercel (beta) fait crasher la fonction.
      nitro({
        vercel: {
          functions: {
            runtime: "nodejs22.x",
          },
        },
      }),
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tanstackStart({
        router: {
          routesDirectory: "app",
          routeFileIgnorePattern: "\\.ts$",
        },
      }),
      viteReact({
        babel: {
          plugins: ["@lingui/babel-plugin-lingui-macro"],
        },
      }),
      tailwindcss(),
      lingui(),
    ],
    server: {
      proxy: proxyConfig,
      allowedHosts: ["127.0.0.1", "0.0.0.0", "localhost"],
      // inotify does not work on /mnt/c under WSL2; poll so HMR sees file changes
      watch: {
        usePolling: true,
        interval: 500,
      },
    },
  };
});
