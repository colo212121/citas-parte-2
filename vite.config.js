import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Primer-TP-React-Parte-1/',
  "homepage": 'https://github.com/colo212121/Primer-TP-React-Parte-1'
})
