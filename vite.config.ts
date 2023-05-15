import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/fledesma-dev/',
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
    port: 5174
  }
});
