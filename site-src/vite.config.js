import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 产物输出到 site-src/dist，构建后再由脚本同步到仓库根（部署目录）
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    cssCodeSplit: false
  }
})
