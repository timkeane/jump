import {defineConfig, splitVendorChunkPlugin} from 'vite';
import {resolve} from 'path';

export default defineConfig({
  base: '',
  server: {
    host: true,
  },
  build: {
    outDir: './dist',
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
    },
  },
  plugins: [
    splitVendorChunkPlugin()
  ]
});

