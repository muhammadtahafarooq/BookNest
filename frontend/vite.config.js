import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Prevent Vite from pre‑bundling the Spline runtime which causes buffer errors
  optimizeDeps: {
    exclude: ['@splinetool/runtime']
  },
  // Treat .splinecode as assets
  assetsInclude: ['**/*.splinecode'],
  // Ensure Spline component is not externalized during SSR (if used)
  ssr: {
    noExternal: ['@splinetool/react-spline']
  }
});
