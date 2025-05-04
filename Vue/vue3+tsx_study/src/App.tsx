import { defineComponent } from 'vue';
import { dateZhCN, NConfigProvider, NMessageProvider, zhCN } from 'naive-ui';
import { ElConfigProvider } from "element-plus";
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import Model from "@/core/components/Model";
import { RouterView } from 'vue-router';
import { init } from "./init";
import { isMicroEnv, useInitMicro } from '@/core/micro/helpers';
import MicroViewsContriller from "@/core/micro/viewsController"
import { useMainCorePage } from './core/appSetup';
import Component from './core/components/TableSelectPage/component';


export default defineComponent({
    setup() {
        useInitMicro();
        const { dynaticTsx, config } = useMainCorePage();
        init();
        return () => (<>
            <NConfigProvider
                class="wh100"
                locale={zhCN}
                date-locale={dateZhCN}
            >
                <NMessageProvider keepAliveOnHover={true}>
                    <ElConfigProvider size={config.fontSize} locale={zhCn}>
                        {
                            isMicroEnv ? <MicroViewsContriller /> : <RouterView />
                        }
                        <Model style="display:none" model={dynaticTsx}></Model>
                    </ElConfigProvider>
                </NMessageProvider>
            </NConfigProvider>
        </>);
    }
})