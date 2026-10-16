// File: client/vite.config.js
// ---------------------------------------------------------------
// Vite configuration. Vite is the dev server + build tool that
// compiles our React (JSX) code and serves it with hot reload.
// ---------------------------------------------------------------
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // The React plugin enables JSX compilation and Fast Refresh
  // (edits show up in the browser instantly without losing state).
  plugins: [react()],

  server: {
    port: 5173, // Local dev URL: http://localhost:5173
    open: true, // Automatically open the browser on `npm run dev`
  },
})
