// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createVuePlugin } from 'vite-plugin-vue2';
import path from 'path';

const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
    plugins: [
        createVuePlugin(),
    ],
    server: {
        port: 8080,
        hmr: { overlay: false }
    },
    resolve: {
        alias: {
            '~/': `${pathSrc}/`,
            // '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@': `${path.resolve(__dirname, 'src')}/`
        }
    },
});
