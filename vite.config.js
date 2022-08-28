const { defineConfig } = require('vite');
const { VitePWA } = require('vite-plugin-pwa');

module.exports = defineConfig({
  plugins: [
    VitePWA({
      strategies: 'injectManifest',
      filename: './sw.js',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      injectManifest: {
        globPatterns: ['**/*.html'],
      },
    }),
  ],
});
