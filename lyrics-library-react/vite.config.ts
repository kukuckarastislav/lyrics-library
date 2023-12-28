import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
//import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //basicSsl(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,scss,ts,tsx,jsx,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 5000000
      },
      manifest: {
        name: 'Lyrics Library',
        short_name: 'Lyrics Library',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg', // Adjust the path to your icon
            sizes: '800x800',
            type: 'image/png',
          },
        ],
      }
    })
  ],
})
