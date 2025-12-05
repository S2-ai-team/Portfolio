
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' is crucial for GitHub Pages. 
  // It ensures assets are loaded relative to the current path, 
  // making it work regardless of the repo name (e.g. user.github.io/repo-name/).
  base: './', 
});
