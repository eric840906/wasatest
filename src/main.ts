import { createApp, nextTick } from 'vue'
import '@/assets/style/main.scss'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title + ''
  })
})
