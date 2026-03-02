import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {federation} from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'dashboard_app',
      filename: 'remoteEntry.js',
      dts: false,
      exposes: {
        './Dashboard': './src/Dashboard.tsx',
      },
      remotes: {
        ui_library: {
          type: 'module',
          name: 'ui_library',
          entry:
            process.env.VITE_UI_LIBRARY_URL ||
            'http://localhost:3003/remoteEntry.js',
          entryGlobalName: 'ui_library',
          shareScope: 'default',
        },
        login_app: {
          type: 'module',
          name: 'login_app',
          entry:
            process.env.VITE_LOGIN_APP_URL ||
            'http://localhost:3001/remoteEntry.js',
          entryGlobalName: 'login_app',
          shareScope: 'default',
        },
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
        'react/jsx-runtime': { singleton: true, requiredVersion: '^19.0.0' },
        'react/jsx-dev-runtime': { singleton: true, requiredVersion: '^19.0.0' },
        '@mui/material': { singleton: true },
        '@emotion/react': { singleton: true },
        '@emotion/styled': { singleton: true },
        '@tanstack/react-query': { singleton: true },
        '@mui/x-data-grid': { singleton: true },
        axios: { singleton: true },
      },
    }),
    react(),
  ],
  server: {
    port: 3004,
    strictPort: true,
    origin: 'http://localhost:3004',
  },
  preview: {
    port: 3004,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
})
