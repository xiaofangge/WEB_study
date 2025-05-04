import { preloadApp } from 'wujie';
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import { a }  from 'common'
import router from './router'
import Wujie from 'wujie-vue3'

const {preloadApp} = Wujie
const app = createApp(App)


app.use(router).use(Wujie)

app.mount('#app')

preloadApp({ name: "vue3", url: "http://localhost:5174/", exec: true })
preloadApp({ name: "react", url: "http://localhost:5175/", exec: true })