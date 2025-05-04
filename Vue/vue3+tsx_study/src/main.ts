import { createApp } from 'vue';
import App from './App'


import 'element-plus/dist/index.css'
import "@/assets/css/plugin/element.scss";
import "@/assets/css/main.scss";
import "@/assets/css/pagePublic.scss";
// 阿里图标
import "@/assets/iconfont/iconfont.css";
import 'vxe-table/lib/style.css';
import "@/assets/css/plugin/vxe-table/index.scss";


import 'xe-utils';
// import VXETablePluginExportXLSX from '@/core/plugin/VXETablePluginExportXLSX'
import VXETable from 'vxe-table';
import pinia from "@/store";
import router from "@/router";
import { isMicroEnv } from '@/core/micro/helpers';
import { setUpCore } from './core/appSetup';

import * as utils from '@/libs/utils'

const app = createApp(App);

app.config.globalProperties.$utils = utils
// 将所有标签前缀为 'jsjiajia' 的标签视为自定义元素
// app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('xinchao-');

app.config.optionMergeStrategies.custom = (toVal, fromVal) => {
    return fromVal || toVal;
}

app.mixin({
    custom: 'This is Mixin\'s option',
    created() {
        console.log(this.$options.custom)
    },
})

app.use(VXETable)
if (!isMicroEnv) {
    app.use(router)
}

setUpCore(app);



app.use(pinia)
app.mount('#app_yk');

