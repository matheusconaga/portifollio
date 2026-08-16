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
      ],

      manifest: {
        name: 'Matheus Lula | Fullstack Developer',
        short_name: 'Matheus Lula',

        description:
          'Portfólio de Matheus Lula — Desenvolvedor Fullstack.',

        theme_color: '#080322',
        background_color: '#080322',

        display: 'standalone',

        start_url: '/',
        scope: '/',

        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})