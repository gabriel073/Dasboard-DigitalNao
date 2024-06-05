import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    deps: {
      inline: [
        'react-world-countries-map', // Aquí se pueden incluir otras dependencias ESM que necesitas
      ],
    },
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
  },
})
