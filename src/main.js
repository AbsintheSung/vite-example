import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import './assets/main.css'

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import "bootstrap-icons/font/bootstrap-icons.css"

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('useLoading',Loading)
app.mount('#app')
