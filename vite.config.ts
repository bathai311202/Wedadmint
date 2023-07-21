import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    include: ['@ant-design/icons'],
  },
  css: {
    devSourcemap: true,
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (path) => {
          if (path.includes('node_modules'))
            return path
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
        },
      },
    },
  },
});
