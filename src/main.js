import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@routes/index'
console.log('made by Takayev Askhat')
console.log('stack: Vue + Vite')

createApp(App).use(createPinia()).use(router).mount('#app')
