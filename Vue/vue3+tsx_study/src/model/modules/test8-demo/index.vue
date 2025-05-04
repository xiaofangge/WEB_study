<template>
    <div style="width: 100%; height: 100%">
        <ElButton type="primary" @click="open">打开本地</ElButton>
        <ElButton type="success" @click="fillData">填充数据</ElButton>
        <ElButton type="warning" @click="getData">获取数据</ElButton>
        <ElButton type="info" @click="LoadPrintPreview">打印预览</ElButton>
        <ElButton type="danger" @click="ClosePrintPreview">取消预览</ElButton>
        <ElButton type="primary" @click="PrintDocument">打印</ElButton>
        <div id="myWriterControl" style="width: 100%; height: 100%" LocalServerPort="2000" heightcompress="true"
            imagedataembedinhtml="true" serversleepfordebug="0" allowcopy="true" supportactivex="false" pixelpagespacing="5"
            ClientContextMenuType="Custom" showdebuginfo="false" HeaderFooterSelect="true" HeaderFooterEditable="true"
            FreeSelection="true" registercodeindex="0" LogUserEditTrack="true" FormView="Normal"
            GeneratePrintPreviewPDF="true" :Contentrendermode=modelFalg Workspacebackcolorstring="#e8e8e8"
            Backgroundtextoutputmode="none" :servicepageurl="state.servicePageUrl" v-bind="state.props"></div>
    </div>
</template>

<script setup lang='ts'>
import { ElButton } from "element-plus";
import { onMounted, reactive, ref, toRefs } from 'vue';
import { getOptions, useCallBack, useControl } from "~/src/core/model";
import { DfWriterConfig } from "./type";
import { BASE_URL } from "~/src/config";
/**类型 */
interface Ictl {
    servicePageUrl: string,
    ctl: any,
    props: any
}
var demoJson: any = toRefs({})
let demoUrl = ''
const modelFalg = ref<string>("")
const regex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
const match = BASE_URL.match(regex);
if (match) {
    demoUrl = "http://" + match[0] + ":8999/ServicePage.aspx";
}
const state: Ictl = reactive({
    servicePageUrl: demoUrl,
    ctl: '' as unknown as HTMLElement,
    props: {},
});

const opt = getOptions<DfWriterConfig>()
modelFalg.value = opt.demoModel
const callBack = useCallBack<DfWriterConfig>()

function loadScript(src: string) {
    return new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        script.onload = () => {
            resolve();
        };
        document.head.insertBefore(script, null);
    });
}
function BuildDCWriterControlFrame() {
    loadScript(state.servicePageUrl + `?js=1}`).then(() => {
        // 获得控件容器元素
        state.ctl = document.getElementById("myWriterControl")!;
        console.log(state.ctl.cloneNode());
        // 绑定控件
        window.BindingDCWriterClientControl(state.ctl);
        // 创建编辑器框架
        state.ctl.BuildFrame(function () {
            if (state.ctl != null) {
                state.ctl.GetContentContainer().focus();
                var ctl = document.getElementById("myWriterControl") as any;
                var result = ctl.LoadDocumentFromFile('病案首页.xml', null);
                // ctl.LoadDocumentFromString(result,"XML");
                state.ctl.DocumentLoad = function () {
                    //加载文档完成后事件
                };
            }
        });
    });
}
onMounted(() => {
    BuildDCWriterControlFrame && BuildDCWriterControlFrame();
});
function open() {
    var ctl = document.getElementById("myWriterControl") as any;
    ctl.DCExecuteCommand("FileOpen", true, null);
}

/**比较前后两个模版的差异,并找出差异 */
function compareJSON(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
    parentKey: string | null = null,
    diff: Record<string, any> = {}
): Record<string, any> {
    // 遍历obj1的所有key
    for (const key in obj1) {
        // 如果obj2中不包含当前key，则说明obj1中有一个新的key，将其添加到差异对象中
        if (!obj2.hasOwnProperty(key)) {
            diff[parentKey ?? key] = diff[parentKey ?? key] ?? {};
            diff[parentKey ?? key][key] = obj1[key];
        } else {
            // 如果当前key在obj2中存在，但是对应的值不同，也将其添加到差异对象中
            if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
                if (
                    typeof obj1[key] !== 'object' ||
                    typeof obj2[key] !== 'object'
                ) {
                    diff[parentKey ?? key] = diff[parentKey ?? key] ?? {};
                    diff[parentKey ?? key][key] = obj1[key];
                } else {
                    compareJSON(
                        obj1[key],
                        obj2[key],
                        key,
                        diff[parentKey ?? key] ??= {}
                    );
                }
            }
        }
    }
    // 遍历obj2的所有key，检查是否有obj1中没有的key，将其添加到差异对象中
    for (const key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            diff[parentKey ?? key] = diff[parentKey ?? key] ?? {};
            diff[parentKey ?? key][key] = obj2[key];
        }
    }
    return diff;
}
/**获取数据 */
async function getData() {
    var ctl = document.getElementById('myWriterControl') as any;
    ctl.WriteDataFromDocumentToDataSource();
    let arrJson = ctl.GetDataSourceBindingDescriptionsJSON()
    let newJson: Record<string, any> = {}
    if (demoJson) {
        newJson = compareJSON(arrJson, demoJson)
    }

    let res = await opt.saveDemo(newJson).finally(() => {

    })

    // var basicData = ctl.GetDocumentParameterValue("EMR_INDEX_BASIC");
    // if (basicData != null) {
    //     var json = JSON.stringify(basicData);
    //     console.log(json)
    // }
    // var feeData = ctl.GetDocumentParameterValue("EMR_CHM_INDEX_FEE");
    // if (feeData != null) {
    //     var json = JSON.stringify(feeData);
    //     console.log(json)
    // }

}
async function fillData() {
    var ctl = document.getElementById('myWriterControl') as any;
    // var values = {
    //     TOTAL_COSTS: '1',
    //     SELF_PAY: '2',
    //     COSTS1: '3',
    //     COSTS1_1: '4',
    //     COSTS2: '5',
    //     COSTS3: '6',
    //     COSTS4: '7',
    //     COSTS5: '8',
    //     COSTS6: '9',
    //     COSTS7: '10',
    //     COSTS8: '11',
    //     COSTS9: '12',
    //     COSTS9_1: '13',
    //     COSTS10: '14',
    //     COSTS10_1: '15',
    //     COSTS10_2: '15',
    //     COSTS11: '17',
    //     COSTS12: '18',
    //     COSTS13: '19',
    //     COSTS13_1: '20',
    //     COSTS13_2: '21',
    //     COSTS13_3: '22',
    //     COSTS13_4: '23',
    //     COSTS13_5: '24',
    //     COSTS13_6: '25',
    //     COSTS14: '26',
    //     OSTS14_1: '27',
    //     COSTS14_2: '28',
    //     COSTS15: '29',
    //     COSTS15_1: '30',
    //     COSTS16: '31',
    //     COSTS16_1: '32',
    //     COSTS17: '33',
    //     COSTS18: '34',
    //     COSTS19: '35',
    //     COSTS20: '36',
    //     COSTS21: '37',
    //     COSTS22: '38',
    //     COSTS23: '39',
    //     COSTS24: '40',
    //     COSTS25: '41',
    //     COSTS26: '42'
    // };
    let res = await opt.getList().finally(() => {


    })
    demoJson = res
    /**判断是否是数组 */
    if (Array.isArray(res)) {
        for (let i = 0; i < res.length; i++) {
            ctl.SetDocumentParameterValue(Object.keys(res[i]), res[i][Object.keys(res[i])[0]]);

        }
    }

    var result = ctl.WriteDataFromDataSourceToDocument();

}

function PrintDocument() {
    var ctl = document.getElementById("myWriterControl") as any;
    ctl.PrintDocument();
}

//预览模式
function LoadPrintPreview() {
    var ctl = document.getElementById("myWriterControl") as any;
    ctl.LoadPrintPreview();
}

//关闭打印预览
function ClosePrintPreview() {
    var ctl = document.getElementById("myWriterControl") as any;
    ctl.ClosePrintPreview();
}

useControl<DfWriterConfig>({
    getData,
    open,
    fillData,
    PrintDocument,
    LoadPrintPreview,
    ClosePrintPreview
})



</script>

<style lang='less' scoped></style>