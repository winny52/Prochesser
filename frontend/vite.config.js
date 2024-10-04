// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// //Temporary proxy 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'http://localhost/wordpress/wp-json/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-json/, '/wp-json'),
      },
    },
  },
  define: {
    'process.env': process.env
  },
  build: {
    rollupOptions: {
      external: ['@fortawesome/fontawesome-svg-core'],
    },
  },
});
