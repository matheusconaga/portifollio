import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),

    tailwindcss(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'logo_matheus.svg',
        'apple-touch-icon.png',

        /*
         * Portfolio PWA icons.
         */
        'pwa-192x192.png',
        'pwa-512x512.png',
        'pwa-maskable-512x512.png',

        /*
         * Mini Server PWA icons.
         * Vamos criar esses arquivos
         * no próximo passo.
         */
        'server-pwa-192x192.png',
        'server-pwa-512x512.png',
        'server-pwa-maskable-512x512.png',

        /*
         * Custom manifests.
         */
        'manifest-portfolio.webmanifest',
        'manifest-server.webmanifest',
      ],

      /*
       * Desativa o manifest automático
       * porque teremos um manifest
       * diferente para cada hostname.
       */
      manifest: false,

      workbox: {
        navigateFallback:
          '/index.html',

        /*
         * Nunca deixa o Service Worker
         * transformar chamadas da API
         * em index.html.
         */
        navigateFallbackDenylist: [
          /^\/api(?:\/|$)/,
          /\.pdf$/i,
        ],

        cleanupOutdatedCaches: true,
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(
        __dirname,
        './src',
      ),
    },
  },
})

