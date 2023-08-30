import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';


declare const process: {
  env: {
    NODE_ENV: 'development' | 'production';
  };
};
const isProduction = process.env.NODE_ENV === 'production';

const vitePWA = VitePWA({
  srcDir: 'src',
  filename: 'sw.js',
  registerType: 'autoUpdate',
  outDir: 'dist',
  manifest: {}
});
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: isProduction ? false : true,
    port: 3000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname
    }
  },
  plugins: [
    react(),
    svgr(),
    // vitePWA,
  ],

});
