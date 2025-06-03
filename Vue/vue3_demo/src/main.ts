import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入样式
import { createPinia } from 'pinia';
import { ComponentPublicInstance, createApp } from 'vue';
import App from './App.vue';
import Test4 from './components/Test4.vue';
import MyUI from './libs/MyUI';
import router from "./router";
import store from './store/index';
import JsppUI from './libs/jspp-ui';

const app = createApp(App)

const pinia = createPinia();

// 挂载到全局实例上
// app.config.globalProperties.$EventBus = new mitt()

// App 组件实例
console.info(app.config)

// 得到一个已注册的组件
const component = app.component(Test4?.name ?? 'Test4')
// console.log("component: ", component)  // undefined

const component2 = app.component(Test4?.name ?? 'Test4', Test4)
// console.log("component2: ", component2)  // Test4

app.use(router)
app.use(pinia)
app.use(store)
app.use(MyUI, {
    components: ['MyButton', 'MyInput']
})
app.use(ElementPlus);
app.use(JsppUI);


// 统一错误处理
app.config.errorHandler = (err: unknown, instance: ComponentPublicInstance | null, info: string) => {
    console.error("err => ", err)
}
app.mount('#app')


