import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/devserver/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
