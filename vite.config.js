import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  ViteImageOptimizer()],
  build: {
    outDir:"dist",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/css/i.test(extType)) {
            return 'assets/css/[name]-[hash][extname]';
          } else if (/ttf|otf|woff|woff2|eot/i.test(extType)) {
            return 'assets/fonts/[name]-[hash][extname]';
          } else if (/png|jpe?g|svg|gif|webp|avif/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        },
      },
    },
  },
});
