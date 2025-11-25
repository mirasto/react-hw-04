import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


const BASE_PATH = '/react-hw-04/';
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? BASE_PATH : '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
});
