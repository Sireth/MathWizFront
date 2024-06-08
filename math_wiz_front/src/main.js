import { createApp } from 'vue'

import App from './App.vue'

import "./plugins/bootstrap"
import "./plugins/axios"

const app = createApp(App)

app.mount('#app')
