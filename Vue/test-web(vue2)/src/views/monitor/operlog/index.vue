<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div>
    <!-- 搜索与添加区域 -->
    <el-form style="margin-top: 10px;margin-left: 10px;" :inline="true" :model="queryInfo.query" class="demo-form-inline">
      <el-form-item label="系统模块">
        <el-input
          size="small"
          v-model="queryInfo.query.title"
          placeholder="请输入系统模块"
        ></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select size="small" clearable v-model="queryInfo.query.businessType" placeholder="操作类型" @change="getLogList">
          <el-option v-for="item in operTypeList"
              :key="item.dictValue"
              :value="item.dictValue"
              :label="item.dictLabel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="操作时间">
        <el-date-picker
          size="small"
          value-format="yyyy-MM-dd"
          @change="getLogList"
          v-model="queryInfo.query.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item>
        <el-button size="small" icon="el-icon-search" type="primary" @click="getLogList">搜索</el-button>
      </el-form-item>
    </el-form>
    <!-- 用户列表区域 -->
    <el-table :data="logList">
      <el-table-column prop="operId" label="日志编号"></el-table-column>
      <el-table-column prop="title" label="系统模块"></el-table-column>
      <el-table-column prop="businessType" label="操作类型">
        <template slot-scope="scope">
            <el-tag
            :type="scope.row.businessType === 3 ? 'danger' :
            scope.row.businessType === 2 ? 'info' :
            [6, 8].includes(scope.row.businessType) ? 'warning' : 'success'"
            >{{ operTypeList.find(item => item.dictValue === scope.row.businessType.toString()).dictLabel }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="operLocation" label="操作地点"></el-table-column>
      <el-table-column prop="operTime" label="操作日期"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- 删除按钮 -->
          <el-button type="danger" icon="el-icon-delete" plain size="mini" @click.native="handleDelete(scope.row.operId)"
            >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination
      style="float: right;margin-top: 10px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getDicts } from '../../../api/system/dict/data'
import { deleteLog, logList } from '../../../api/system/operlog'

export default {
  data() {
    return {
      // 获取日志的参数对象
      queryInfo: {
        // 查询参数
        query: {
          // 系统模块
          title: '',
          // 类型
          businessType: '',
          time: ''
        },
        // 当前的页码数
        pagenum: 1,
        // 每页显示多少条数据
        pagesize: 10
      },
      // 获取的日志列表
      logList: [],
      // 总数
      total: 0,
      // 操作类型字典
      operTypeList: []
    }
  },
  created() {
    this.getLogList()
    this.getOperTypeList()
  },
  methods: {
    async getOperTypeList() {
      const dictRes = await getDicts('sys_oper_type')
      this.operTypeList = dictRes.data.map(item => {
        return {
          dictValue: item.dictValue,
          dictLabel: item.dictLabel
        }
      })
    },
    async handleDelete(operId) {
      this.$confirm(`是否确认删除日志编号为“${operId}”的数据项`, '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        const deleteRes = await deleteLog(operId)
        if (deleteRes.code === 200) {
          this.$message.success('操作成功')
          this.getLogList()
        } else if (deleteRes.code === 404) {
          this.$message.error(deleteRes.msg)
        }
      })
    },
    async getLogList() {
      const res = await logList({
        pageNum: this.queryInfo.pagenum,
        pageSize: this.queryInfo.pagesize,
        title: this.queryInfo.query.title,
        businessType: this.queryInfo.query.businessType,
        param: {
          beginTime: this.queryInfo.query.time[0],
          endTime: this.queryInfo.query.time[1]
        }
      })
      if (res.code !== 200) {
        return this.$message('获取日志列表失败！')
      }
      this.logList = res.rows.map((item) => {
        return {
          ...item,
          operTime: item.operTime.substring(0, 10)
        }
      })
      this.total = res.total
    },
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize
      this.getLogList()
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage
      this.getLogList()
    }
  }
}
</script>

<style scoped lang="scss"></style>
