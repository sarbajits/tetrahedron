import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  base: '/tetrahedron/',

  server: {
    host: true,      // ← This enables access via local network
    port: 5173       // Optional: you can set any available port
  }
})
