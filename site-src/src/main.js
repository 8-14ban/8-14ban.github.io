import { createApp } from 'vue'
import App from './App.vue'
import reveal from './directives.js'
import './style.css'

// 夜间保护：若头部脚本判定为夜间（__NS=true），则不挂载应用
if (!window.__NS) {
  const app = createApp(App)
  app.directive('reveal', reveal)
  app.mount('#app')
}
