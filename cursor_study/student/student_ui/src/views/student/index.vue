<template>
  <div class="student-container">
    <div class="search-box">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline">
        <el-form-item label="学号">
          <el-input v-model="queryParams.studentNo" placeholder="请输入学号" clearable />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="queryParams.name" placeholder="请输入姓名" clearable />
        </el-form-item>
        <el-form-item label="班级">
          <el-select v-model="queryParams.classId" placeholder="请选择班级" clearable>
            <el-option
              v-for="item in classList"
              :key="item.id"
              :label="item.className"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="operation-box">
      <el-button type="primary" @click="handleAdd">新增学生</el-button>
      <el-button type="danger" :disabled="selectedIds.length === 0" @click="handleBatchDelete">
        批量删除
      </el-button>
    </div>

    <div class="table-box">
      <el-table
        v-loading="loading"
        :data="studentList"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column prop="studentNo" label="学号" align="center" />
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column label="性别" align="center">
          <template #default="scope">
            {{ scope?.row?.gender === 1 ? '男' : '女' }}
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" align="center" />
        <el-table-column prop="phone" label="手机号" align="center" />
        <el-table-column prop="className" label="班级" align="center" />
        <el-table-column label="状态" align="center">
          <template #default="scope">
            <el-tag v-if="scope?.row?.status" :type="statusTypeMap[scope.row.status]">
              {{ statusTextMap[scope.row.status] }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template #default="scope">
            <template v-if="scope?.row">
              <el-button type="primary" link @click="handleView(scope.row)">查看</el-button>
              <el-button type="success" link @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="danger" link @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-box">
        <el-pagination
          v-model:current-page="queryParams.pageNum"
          v-model:page-size="queryParams.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 新增/编辑学生对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      width="600px"
      :close-on-click-modal="false"
    >
      <el-form
        ref="studentFormRef"
        :model="studentForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="学号" prop="studentNo">
          <el-input v-model="studentForm.studentNo" placeholder="请输入学号" />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="studentForm.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="studentForm.gender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input-number v-model="studentForm.age" :min="1" :max="100" />
        </el-form-item>
        <el-form-item label="身份证号" prop="idCard">
          <el-input v-model="studentForm.idCard" placeholder="请输入身份证号" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="studentForm.phone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="studentForm.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="studentForm.address" placeholder="请输入地址" />
        </el-form-item>
        <el-form-item label="班级" prop="classId">
          <el-select v-model="studentForm.classId" placeholder="请选择班级">
            <el-option
              v-for="item in classList"
              :key="item.id"
              :label="item.className"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="入学年份" prop="gradeYear">
          <el-date-picker
            v-model="studentForm.gradeYear"
            type="year"
            placeholder="选择年份"
            value-format="YYYY"
            format="YYYY"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="studentForm.status" placeholder="请选择状态">
            <el-option :label="'在读'" :value="1" />
            <el-option :label="'休学'" :value="2" />
            <el-option :label="'毕业'" :value="3" />
            <el-option :label="'退学'" :value="4" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelDialog">取 消</el-button>
          <el-button type="primary" @click="submitForm">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 查看学生详情对话框 -->
    <el-dialog v-model="viewDialogVisible" title="学生详情" width="600px">
      <el-descriptions :column="2" border>
        <el-descriptions-item label="学号">{{ viewForm.studentNo }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ viewForm.name }}</el-descriptions-item>
        <el-descriptions-item label="性别">
          {{ viewForm.gender === 1 ? '男' : '女' }}
        </el-descriptions-item>
        <el-descriptions-item label="年龄">{{ viewForm.age }}</el-descriptions-item>
        <el-descriptions-item label="身份证号">{{ viewForm.idCard }}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{ viewForm.phone }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ viewForm.email }}</el-descriptions-item>
        <el-descriptions-item label="地址">{{ viewForm.address }}</el-descriptions-item>
        <el-descriptions-item label="班级">{{ viewForm.className }}</el-descriptions-item>
        <el-descriptions-item label="入学年份">{{ viewForm.gradeYear }}</el-descriptions-item>
        <el-descriptions-item label="状态">
          <el-tag :type="statusTypeMap[viewForm.status]">
            {{ statusTextMap[viewForm.status] }}
          </el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="viewDialogVisible = false">关 闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { getStudentList, getStudentById, addStudent, updateStudent, deleteStudent, batchDeleteStudent } from '@/api/student'
import { getClassList } from '@/api/class'

// 状态映射
const statusTextMap = {
  1: '在读',
  2: '休学',
  3: '毕业',
  4: '退学'
}

const statusTypeMap = {
  1: 'success',
  2: 'warning',
  3: 'info',
  4: 'danger'
}

// 查询参数
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
  studentNo: '',
  name: '',
  classId: undefined
})

// 表单规则
const rules = reactive<FormRules>({
  studentNo: [
    { required: true, message: '请输入学号', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]{5,15}$/, message: '学号格式不正确', trigger: 'blur' }
  ],
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '姓名长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
  phone: [
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  email: [
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  idCard: [
    { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证号', trigger: 'blur' }
  ],
  classId: [{ required: true, message: '请选择班级', trigger: 'change' }],
  status: [{ required: true, message: '请选择状态', trigger: 'change' }]
})

// 数据列表
const loading = ref(false)
const studentList = ref<any[]>([])
const total = ref(0)
const classList = ref<any[]>([])
const selectedIds = ref<number[]>([])

// 对话框相关
const dialogVisible = ref(false)
const dialogTitle = ref('')
const viewDialogVisible = ref(false)
const studentFormRef = ref<FormInstance>()
const studentForm = reactive<any>({
  id: undefined,
  studentNo: '',
  name: '',
  gender: 1,
  age: 18,
  idCard: '',
  phone: '',
  email: '',
  address: '',
  classId: undefined,
  gradeYear: new Date().getFullYear(),
  status: 1
})
const viewForm = reactive<any>({})

// 重置表单
const resetForm = () => {
  studentForm.id = undefined
  studentForm.studentNo = ''
  studentForm.name = ''
  studentForm.gender = 1
  studentForm.age = 18
  studentForm.idCard = ''
  studentForm.phone = ''
  studentForm.email = ''
  studentForm.address = ''
  studentForm.classId = undefined
  studentForm.gradeYear = new Date().getFullYear()
  studentForm.status = 1
}

// 查询列表
const getList = async () => {
  loading.value = true
  try {
    const { data } = await getStudentList(queryParams)
    studentList.value = data.records
    total.value = data.total
  } catch (error) {
    console.error('获取学生列表失败', error)
    ElMessage.error('获取学生列表失败')
  } finally {
    loading.value = false
  }
}

// 查询班级列表
const getClasses = async () => {
  try {
    const { data } = await getClassList()
    classList.value = data
  } catch (error) {
    console.error('获取班级列表失败', error)
    ElMessage.error('获取班级列表失败')
  }
}

// 查询按钮
const handleQuery = () => {
  queryParams.pageNum = 1
  getList()
}

// 重置查询
const resetQuery = () => {
  queryParams.studentNo = ''
  queryParams.name = ''
  queryParams.classId = undefined
  handleQuery()
}

// 选择变更
const handleSelectionChange = (selection: any[]) => {
  selectedIds.value = selection.map(item => item.id)
}

// 新增按钮
const handleAdd = () => {
  resetForm()
  dialogTitle.value = '新增学生'
  dialogVisible.value = true
}

// 编辑按钮
const handleEdit = async (row: any) => {
  try {
    const { data } = await getStudentById(row.id)
    Object.assign(studentForm, data)
    dialogTitle.value = '编辑学生'
    dialogVisible.value = true
  } catch (error) {
    console.error('获取学生详情失败', error)
    ElMessage.error('获取学生详情失败')
  }
}

// 查看按钮
const handleView = async (row: any) => {
  try {
    const { data } = await getStudentById(row.id)
    Object.assign(viewForm, data)
    // 查询班级名称
    if (data.classId) {
      const classItem = classList.value.find(item => item.id === data.classId)
      if (classItem) {
        viewForm.className = classItem.className
      }
    }
    viewDialogVisible.value = true
  } catch (error) {
    console.error('获取学生详情失败', error)
    ElMessage.error('获取学生详情失败')
  }
}

// 删除按钮
const handleDelete = (row: any) => {
  ElMessageBox.confirm('确认删除该学生记录吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    try {
      await deleteStudent(row.id)
      ElMessage.success('删除成功')
      getList()
    } catch (error) {
      console.error('删除失败', error)
      ElMessage.error('删除失败')
    }
  }).catch(() => {})
}

// 批量删除
const handleBatchDelete = () => {
  if (selectedIds.value.length === 0) {
    ElMessage.warning('请至少选择一条记录')
    return
  }
  
  ElMessageBox.confirm(`确认删除选中的 ${selectedIds.value.length} 条记录吗？`, '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    try {
      await batchDeleteStudent(selectedIds.value)
      ElMessage.success('批量删除成功')
      getList()
    } catch (error) {
      console.error('批量删除失败', error)
      ElMessage.error('批量删除失败')
    }
  }).catch(() => {})
}

// 分页大小变更
const handleSizeChange = (val: number) => {
  queryParams.pageSize = val
  getList()
}

// 页码变更
const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val
  getList()
}

// 取消对话框
const cancelDialog = () => {
  dialogVisible.value = false
  resetForm()
}

// 提交表单
const submitForm = async () => {
  if (!studentFormRef.value) return
  
  await studentFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        if (studentForm.id) {
          // 编辑
          await updateStudent(studentForm)
          ElMessage.success('修改成功')
        } else {
          // 新增
          await addStudent(studentForm)
          ElMessage.success('新增成功')
        }
        dialogVisible.value = false
        getList()
      } catch (error: any) {
        console.error('保存失败', error)
        ElMessage.error(error.message || '保存失败')
      }
    }
  })
}

// 页面加载时获取数据
onMounted(() => {
  getList()
  getClasses()
})
</script>

<style scoped>
.student-container {
  padding: 20px;
}

.search-box {
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.operation-box {
  margin-bottom: 20px;
}

.table-box {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.pagination-box {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style> 