import Vue from 'vue'
import App from './App.vue'
import Msg from './components/MyMessage'

Vue.config.productionTip = false

Vue.prototype.$myMsg = Msg;

new Vue({
  render: h => h(App),
}).$mount('#app')
