<template>
  <div class="flowChart"
       id="flowChart"></div>
</template>

<script>
import go from 'gojs'
const MAKE = go.GraphObject.make; // 声明个全局的常量MAKE，用来“创造”所需图像配置
export default {
  name: "Index",
  data () {
    return {

    };
  },
  mounted () { this.init() }
  ,
  methods: {
    init () {
      var $ = go.GraphObject.make
      var myDiagram = $(go.Diagram, "flowChart")  // 获取节点
      myDiagram.nodeTemplate = $(
        go.Node,
        'Horizontal',  // 设置位置 - 水平居中
        { background: "#44CCFF" }, // 设置模板样式
        $(go.TextBlock,
          'Horizontal',
          { font: 'bold 16px sans-serif' },
          new go.Binding("text", "key")
        ),
      )
      var myModel = $(go.Model)
      myModel.nodeDataArray = [
        { key: "东方月初" },
        { key: "王权富贵" },
        { key: "涂山红红" }
      ]
      myDiagram.model = myModel
    }

  },
};
</script>

<style scoped lang="scss">
.flowChart {
  width: 96vw;
  height: 90vh;
  margin: 0 auto;
}
</style>

