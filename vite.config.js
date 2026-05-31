import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@vercel/analytics'],
  },
  build: {
    commonjsOptions: {
      include: [/@vercel\/analytics/, /node_modules/],
    },
  },
})
