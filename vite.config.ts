import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import * as path from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },
})