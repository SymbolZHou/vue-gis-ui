import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import VueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  base: '.',
  build: {
    outDir: '../../main'
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       echarts: ['echarts'],
    //       ol: ['ol'],
    //       library: ['vue', 'vue-router', 'pinia'],
    //       'vue3-openlayers': ['vue3-openlayers'],
    //       tools: ['gsap', 'lodash-es'],
    //       'element-plus': ['element-plus']
    //     }
    //   }
    // }
  },
  plugins: [
    cesium(),
    vue({
      script: {
        defineModel: true
      }
    }),
    vueJsx(),
    // VueDevTools(),
    viteMockServe({
      mockPath: '../../mock/'
      // watchFiles: true
    }),
    createSvgIconsPlugin({
      iconDirs: ['./src/icons'],
      symbolId: 'remix-icon-[dir]-[name]'
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          three: ['Vector3', 'Matrix4', 'MathUtils'],
          dayjs: [['default', 'dayjs']],
          'lodash-es': ['get', 'keyBy', 'isEmpty', 'debounce', 'throttle'],
          'naive-ui': ['useDialog', 'useModal', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      // eslint报错解决
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    host: '0.0.0.0',
    cors: true, // 默认启用并允许任何源
    port: 10002,
    proxy: {
      '^/api': {
        target: 'http://192.168.1.139:8088/', //http://192.168.1.139:8080/
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
