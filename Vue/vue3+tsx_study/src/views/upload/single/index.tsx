import axios from "axios";
import { ElButton, ElCard, ElForm, ElFormItem, ElInput, ElMessage, ElNotification, ElUpload, UploadRawFile, UploadRequestOptions } from "element-plus";
import { defineComponent, reactive, ref } from "vue";

export interface IUploadFile {
    name: string,
    file: File
}

export default defineComponent({
    name: "SingleUpload",
    setup() {

        const form = reactive({
            name: '',
            file: {} as File,
        })

        const fileList = ref<any[]>([])

        // http-request	覆盖默认的 Xhr 行为，允许自行实现上传文件的请求
        const handleUpload = async (param: UploadRequestOptions) => {
            console.info("uploading file => ", param)
            form.file = param.file
        }

        // 上传文件为之前的钩子，参数为上传的文件
        const handleBeforeUpload = (file: UploadRawFile) => {
            console.info("before upload file => ", file)
            // 类型限制
            const isJPG = file.type === 'image/jpeg'
            if (!isJPG) {
                ElMessage.warning("上传的图片只能是JPG格式")
            }
            // 文件大小限制
            const isLt2M = file.size / 1024 / 1024 < 2
            if (!isLt2M) {
                ElMessage.warning("上传的图片大小不能超过2MB")
            }
            return isJPG && isLt2M
        }

        // 提交
        const handleSubmit = async () => {
            console.info("submit form => ", form)
            let formData = new FormData()
            formData.append('name', form.name)
            formData.append('file', form.file)
            const { data } = await axios.post('upload/create', formData, {
                headers: {'Content-type': 'multipart/form-data'}
            })
            if (data.code === 200) {
                ElNotification({
                    title: '上传成功',
                    message: '文件上传成功',
                    type:'success',
                    duration: 2000,
                })
            }
        }

        // 当超出限制时，执行的钩子函数
        const handleExceed = (files: File[]) => {
            ElMessage.warning("超出文件上传最大数")
        }

        return () => (
            <ElCard class="box-card">
                {{
                    header: () => {
                        return <div class="card-header">
                            <span>单文件上传</span>
                        </div>
                    },
                    default: () => {
                        return <ElForm label-width="120px" model={form}>
                            <ElFormItem label="文件名称">
                                <ElInput readonly v-model={form.name} />
                            </ElFormItem>
                            <ElFormItem label="文件上传">
                                <ElUpload
                                    fileList={fileList.value}
                                    class="upload-demo"
                                    action="#"
                                    autoUpload={false}
                                    httpRequest={handleUpload}
                                    limit={3}
                                    onExceed={handleExceed}
                                    beforeUpload={handleBeforeUpload}
                                    listType="picture-card"
                                >
                                    <ElButton type="primary">Click to upload</ElButton>
                                    {{
                                        tip: () => {
                                            return  <div class="el-upload__tip">
                                                jpg/png files with a size less than 500KB.
                                            </div>
                                        }
                                    }}
                                </ElUpload>
                            </ElFormItem>
                            <ElFormItem label="">
                                <ElButton type="primary" onClick={handleSubmit}>提交</ElButton>
                            </ElFormItem>
                        </ElForm>
                    }
                }}
            </ElCard>
        )
    }
})