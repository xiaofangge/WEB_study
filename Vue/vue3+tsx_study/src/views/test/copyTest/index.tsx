import { ElButton, ElInput } from "element-plus";
import { defineComponent, ref } from "vue";
import { LdBox, LdBoxItem, Title } from "~/src/core/components";
import { $alert } from "~/src/core/utils";

export default defineComponent({
    setup() {

        const data1 = ref<string>("单行数据-需要复制的内容")
        const data2 = ref<string>("第一行数据\r\n第二行数据\r\n第三行数据")
        const data3 = ref<string>("第一行数据\r\n第二行数据\r\n第三行数据")

        /**
         * @param data 需要复制的内容
         */
        const handleCopy1 = (data: string) => {
            /** 创建input元素 */
            const inputEle: HTMLInputElement = document.createElement("input")
            /** 添加需要复制的内容到value属性 */
            inputEle.value = data;
            /** 向页面底部追加输入框 */
            document.body.appendChild(inputEle)
            /** 选择input元素 */
            inputEle.select()
            /** 执行复制命令 */
            document.execCommand("Copy")
            /** 弹出提示 */
            $alert({ text: "复制成功", type: "success" })
            /** 删除动态创建的input元素（复制之后再删除元素，否则无法成功赋值） */
            inputEle.remove()
        }

        /**
         * @param data 需要复制的内容
         */
        const handleCopy2 = (data: string) => {
            /** 创建textarea元素 */
            const textareaEle: HTMLTextAreaElement = document.createElement("textarea")
            /** 添加需要复制的内容到value属性 */
            textareaEle.value = data;
            /** 向页面底部追加输入框 */
            document.body.appendChild(textareaEle)
            /** 选择textarea元素 */
            textareaEle.select()
            /** 执行复制命令 */
            document.execCommand("Copy")
            /** 弹出提示 */
            $alert({ text: "复制成功", type: "success" })
            /** 删除动态创建的textarea元素（复制之后再删除元素，否则无法成功赋值） */
            textareaEle.remove()
        }

        /**
         * @param data 需要复制的内容
         */
        const handleCopy3 = (data: string) => {
            navigator.clipboard.writeText(data).then(() => {
                $alert({ text: "复制成功", type: "success" })
            }).catch(error => {
                console.log("error => ", error)
                $alert({ text: `复制失败-${error.message}`, type: "error" })
            })
        }

        return () => (
            <LdBox type="top-bottom">
                <LdBoxItem size={50}>
                    <LdBox type="left-right">
                        <LdBoxItem size={50}>
                            {{
                                header: () => <Title>execCommand方法-单行复制</Title>,
                                default: () => <div>
                                    <ElInput type="text" style={{ width: "100%" }} placeholder="输入内容" v-model={data1.value} />
                                    <br />
                                    <ElButton plain type="primary" onClick={() => handleCopy1(data1.value)}>点击复制</ElButton>
                                </div>
                            }}
                        </LdBoxItem>
                        <LdBoxItem size={50}>
                            {{
                                header: () => <Title>execCommand方法-多行复制</Title>,
                                default: () => <div>
                                    <ElInput type="textarea" autosize style={{ width: "100%" }} placeholder="输入内容" v-model={data2.value} />
                                    <br />
                                    <ElButton plain type="primary" onClick={() => handleCopy2(data2.value)}>点击复制</ElButton>
                                </div>
                            }}
                        </LdBoxItem>
                    </LdBox>
                </LdBoxItem>
                <LdBoxItem size={50}>
                    {{
                        header: () => <Title>Clipboard API</Title>,
                        default: () => <div>
                            <ElInput type="textarea" autosize style={{ width: "100%" }} placeholder="输入内容" v-model={data3.value} />
                            <br />
                            <ElButton plain type="primary" onClick={() => handleCopy3(data3.value)}>点击复制</ElButton>
                        </div>
                    }}
                </LdBoxItem>
            </LdBox>
        )
    }
})