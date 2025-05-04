import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import router from './router'
import { createPinia } from 'pinia'
import './styles/global.css'

const app = createApp(App)
const pinia = createPinia()

app.use(VXETable)
app.use(router)
app.use(pinia)
app.mount('#app')
