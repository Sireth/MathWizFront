import { createApp } from 'vue'

import App from '@/App.vue'

import "@/plugins/bootstrap"
import "@/plugins/axios"
import router from '@/components/router/router.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
