import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic' // Specifica il runtime JSX da utilizzare (opzionale)
    })
  ],
  server: {
    fs: {
      strict: false // Configurazione per gestire i file ".jsx" come moduli JavaScript
    }
  }
});
