import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import mkcert from 'vite-plugin-mkcert';
import bundleCssInJs from 'vite-plugin-css-injected-by-js';
import viteRestart from 'vite-plugin-restart';

const port = 3001;

export default defineConfig(({ command, mode }) => {

    const dev = command === 'serve' || mode === 'development';

    return {
        define: dev ? {}: { 'process.env.NODE_ENV': '"production"' },
        publicDir: false,
        server: {
            https: true,
            port: port,
        },
        build: {
            minify: !dev,
            modulePreload: false,
            lib: {
                name: 'TeamInsightZ',
                entry: './src/main.ts',
                formats: ['es'],
            },

            rollupOptions: {
                output: {
                    format: 'es',
                    sourcemap: dev ? 'inline' : false,
                }
            }

        },
        plugins: [
            vue(),
            mkcert(),
            bundleCssInJs({
                topExecutionPriority: false,
                injectCodeFunction: function (css) {
                    document.addEventListener('DOMContentLoaded', function () {
                        const style = document.createElement('style');
                        style.appendChild(document.createTextNode(css));
                        document.head.appendChild(style);
                    });
                }
            }),
            viteRestart({
                restart: ['src/**/*.ts', 'src/**/*.vue']
            }),

        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }

    }

});

