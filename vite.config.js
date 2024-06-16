import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: '/Portfolio/',  // Ensure this matches your repository name
=======
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
>>>>>>> 50de4b2174c4277713a75e5b100ec9bf9a2a61ca
});
