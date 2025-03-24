import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    port: 3000,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ["task-manangement-fe.onrender.com"]
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  base: './',
})
