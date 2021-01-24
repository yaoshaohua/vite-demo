import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')
export default defineConfig({
  alias: {
    '/@': path.resolve(__dirname, './src')
  },
  optimizeDeps: {
    include: ['@ant-design/icons-vue', '@ant-design-vue/use']
  },
  plugins: [vue()]
})
