import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Required for GitHub Pages: sets the base URL to your repo name
  // Example: if your repo is github.com/SRE-0/my-app, use "/my-app/"
  base: '/SRE-0_web/',
})
