import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          three: ['Vector3', 'Matrix4', 'MathUtils'],
          'lodash-es': ['get', 'random', 'debounce', 'throttle'],
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      dirs: [],
      // eslint报错解决
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      resolvers: [
        NaiveUiResolver()
        // {
        //   type: 'component',
        //   resolve: (name) => {
        //     console.log(name)
        //     if (name.match(/^(N[A-Z]|n-[a-z])/)) return { name, from: 'naive-ui' }
        //   }
        // }
      ]
    }),
    viteMockServe({
      mockPath: '../../mock/',
      watchFiles: false
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          library: ['vue', 'pinia'],
          tools: ['gsap', 'lodash-es'],
          'naive-ui': ['naive-ui']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.vue']
  },
  server: {
    cors: true, // 默认启用并允许任何源
    host: '0.0.0.0',
    port: 7000
  }
})
