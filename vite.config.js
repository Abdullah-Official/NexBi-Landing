import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/business_data": "https://nexbi-prototype-backend-v1-316384244630.europe-west2.run.app",
    }  
  } ,
  plugins: [react(), tailwindcss()],
})
