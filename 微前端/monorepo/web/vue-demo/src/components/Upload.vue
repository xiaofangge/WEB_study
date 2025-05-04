<script setup lang="ts">
import { ref } from 'vue'


const uploadFileList = ref<any[]>([])

/**
 * 换算文件的大小单位
 */
function formatSize(size: number) {
  // size的单位大小k
  let unit: string | undefined = undefined;
  const units: string[] = [" B", " K", " M", " G"];
  const pointLength: number = 2;
  while ((unit = units.shift()) && size > 1024) {
    size /= 1024;
  }
  return (unit === 'B' ? size : size.toFixed(pointLength === undefined ? 2 : pointLength)) + unit!;
}

/**
 * 计算文件的md5值
 */
function computedMd5(file: any, uploadFile: any) {
  return new Promise((resolve, reject) => {
    // 分片读取并计md5
    const chunkTotal = 100; // 分片数量
    const chunkSize = Math.ceil(file.size / chunkTotal); // 每片大小
    const fileReader = new FileReader();
    const md5 = new SparkMD5();
    let index = 0;
    const loadFile = (uploadFile) => {
      uploadFile.parsePercentage.value = parseInt((index / file.size) * 100);
      const slice = file.slice(index, index + chunkSize);
      
      fileReader.readAsBinaryString(slice);
    };
    loadFile(uploadFile);
    fileReader.onload = (e) => {
      md5.appendBinary(e.target.result);
      if (index < file.size) {
        index += chunkSize;
        loadFile(uploadFile);
      } else {
        // md5.end() 就是文件md5码
        resolve(md5.end());
      }
    };
  })
}

/**
 * 文件上传之前，el-upload自动触发的事件
 */
async function beforeUpload(file: any) {
  console.log('beforeUpload', file)
  let uploadFile: any = {};
  uploadFile.name = file.name;
  uploadFile.size = file.size;
  uploadFile.parsePercentage = ref(0);
  uploadFile.uploadPercentage = ref(0);
  uploadFile.uploadSpeed = "0 M/s";
  uploadFile.chunkList = null;
  uploadFile.file = file;
  uploadFile.uploadingStop = false;
  uploadFileList.value.push(uploadFile);

  const md5 = await computedMd5(file, uploadFile);
}

</script>
  
<template>
  <div class="main">
    <!-- 文件上传按钮 -->
    <el-upload
      action="#"
      :http-request="upload"
      :before-upload="beforeUpload"
      :show-file-list="false"
    >
      <el-button type="primary">选择上传文件</el-button>
    </el-upload>

    <el-divider content-position="left">上传列表</el-divider>
    <!-- 正在上传的文件列表 -->
    <div class="uploading" v-for="uploadFile in uploadFileList">
      <span class="fileName">{{ uploadFile.name }}</span>
      <span class="fileSize">{{ formatSize(uploadFile.size) }}</span>

      <div class="parse">
        <span>解析进度： </span>
        <el-progress
          :text-inside="true"
          :stroke-width="16"
          :percentage="uploadFile.parsePercentage"
        >
        </el-progress>
      </div>
      <div class="progress">
        <span>上传进度：</span>

        <el-progress
          :text-inside="true"
          :stroke-width="16"
          :percentage="uploadFile.uploadPercentage"
        >
        </el-progress>
        <span
          v-if="(uploadFile.uploadPercentage > 0) && (uploadFile.uploadPercentage < 100)
          "
        >
          <span class="uploadSpeed">{{ uploadFile.uploadSpeed }}</span>

          <el-button circle link @click="changeUploadingStop(uploadFile)">
            <el-icon size="20" v-if="uploadFile.uploadingStop == false"
              ><VideoPause
            /></el-icon>
            <el-icon size="20" v-else><VideoPlay /></el-icon>
          </el-button>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
  margin-top: 40px;
  margin-bottom: 40px;
}
.uploading {
  padding-top: 27px;
}
.progress {
  /* width: 700px; */
  display: flex;
}
.uploading .parse {
  display: flex;
}
.parse .el-progress {
  /* font-size: 18px; */
  width: 590px;
}
.progress .el-progress {
  /* font-size: 18px; */
  width: 590px;
}
.uploading .fileName {
  font-size: 17px;
  margin-right: 40px;
  margin-left: 80px;

  /* width: 80px; */
}
.uploading .fileSize {
  font-size: 17px;

  /* width: 80px; */
}

.progress .uploadSpeed {
  font-size: 17px;
  margin-left: 5px;
  padding-left: 5px;
  padding-right: 10px;
}
</style>
