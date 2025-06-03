import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JsppUI from './libs/jspp-ui'

createApp(App).use(store).use(router).use(JsppUI).mount('#app')
