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
         */
        'server-pwa-192x192.png',
        'server-pwa-512x512.png',
        'server-pwa-maskable-512x512.png',

        /*
         * Analytics PWA icons.
         */
        'analytics-pwa-192x192.png',
        'analytics-pwa-512x512.png',
        'analytics-pwa-maskable-512x512.png',

        /*
         * Custom manifests.
         */
        'manifest-portfolio.webmanifest',
        'manifest-server.webmanifest',
        'manifest-analytics.webmanifest',
      ],

      /*
       * Desativa o manifest automático.
       *
       * O index.html escolhe o manifest
       * correto de acordo com o hostname:
       *
       * matheusconaga.dev
       * analytics.matheusconaga.dev
       * server.matheusconaga.dev
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

        /*
         * Remove caches antigos quando
         * uma versão nova do PWA é gerada.
         */
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