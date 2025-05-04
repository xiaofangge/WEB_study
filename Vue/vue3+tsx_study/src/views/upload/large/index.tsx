import axios from "axios";
import { ElButton, ElCard, ElForm, ElFormItem, ElInput, ElProgress, ElUpload, UploadFile, UploadFiles, UploadRequestOptions } from "element-plus";
import { defineComponent, reactive, ref } from "vue";

export interface IUploadFile {
    name: string,
    file: UploadFile[]
}

export default defineComponent({
    name: "LargeUpload",
    setup() {

        const form = reactive<IUploadFile>({
            name: '',
            file: [],
        })
        const percentageRef = ref(0);
        const fileList = ref<any[]>([])

        // http-request	覆盖默认的 Xhr 行为，允许自行实现上传文件的请求
        const handleUpload = async (param: UploadRequestOptions) => {
            console.info("uploading file => ", param)
            // form.file = param.file
        }

         // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
         const handleChange = async (file: UploadFile, fileList: UploadFiles) => {
            console.log("form.file => ", file)
            // 定义分片大小
            const chunkSize = 5 * 1024 * 1024 // 5MB
            // 上传文件
            const uploadFile = file.raw;
            // 上传问价其他属性
            const { name, size, type } = uploadFile!;
            // 检查上传文件
            

            // 1、检查上传文件 （判断之前有没有上传过）
            let index = 0;  // 默认分片索引
            const {data:{code, data}} = await axios.post('upload/uploadfilebigInspect', { name })
            if (code === 20000) {
                index = data.index;
            }
            console.log(index);

            // 2、分片上传 6片
            let dir = '';  // 目录名（文件名+md5）
            let start: number = 0;  // 分片起始位置
            start = index > 0 ? chunkSize * index : 0;
            while(start < size) {
                // 分割，切片
                let blob = null
                if (start + chunkSize > size) {
                    // 大
                    blob = uploadFile?.slice(start, size)
                } else {
                    // 小
                    blob = uploadFile?.slice(start, start + chunkSize)
                }
                start += chunkSize;

                let blobFile = new File([blob!], name);
                let formData = new FormData();
                formData.append('index', index + "");
                formData.append('file', blobFile);
                // 上传
                const {data} = await axios.post('upload/uploadfilebig', formData, {
                    headers: {
                        'Content-Type':'multipart/form-data'
                    }
                })
                dir = data.dir; // 目录名（文件名+md5）
                // 获取进度
                percentageRef.value = parseInt(((start / Number(size)) * 100).toString());
                index++;
            }   

            // 3、合并分片
            // name: 'vidio.mp4'
            // dir: 目录名（文件名+md5）
            // ext: 'mp4'
            let [ fileName, ext ] = name.split('.');
            const res = await axios.post('upload/uploadfilebigMerge', { name, dir, ext })
         }

      
        return () => (
            <ElCard class="box-card">
                {{
                    header: () => {
                        return <div class="card-header">
                            <span>大文件上传</span>
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
                                    httpRequest={handleUpload}
                                    limit={1}
                                    drag={true}         
                                    onChange={handleChange}
                                >
                                    <ElButton type="primary">文件上传</ElButton>
                                    {{
                                        tip: () => {
                                            return  <div class="el-upload__tip">
                                                <ElProgress percentage={percentageRef.value} v-show={percentageRef.value > 0}
                                                    format={(percentage) => percentage >= 100 ? '上传完成' : `${percentage}%`} />
                                                jpg/png files with a size less than 500KB.
                                            </div>
                                        }
                                    }}
                                </ElUpload>
                            </ElFormItem>
                        </ElForm>
                    }
                }}
            </ElCard>
        )
    }
})