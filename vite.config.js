import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import imagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteCompression({
            algorithm: 'gzip',
            ext: '.gz'
        }),
        imagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 60,
            },
            webp: {
                quality: 70,
            },
        }),
    ],
    build: {
        sourcemap: true,
        target: 'esnext',
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    utils: ['axios', 'lodash'],
                    animations: ['aos'],
                    routing: ['react-router-dom']
                }
            }
        }
    },
    server: {
        port: 5173,
        open: true
    }
});