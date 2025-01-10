import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.langflow.astra.datastax.com', // Backend API URL
        changeOrigin: true, // Change the origin of the request to the target URL
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix
        secure: false, // Disable SSL verification if needed (e.g., for self-signed certificates)
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src directory
    },
  },
});