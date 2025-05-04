<template>
  <dir>
    <p style="font-size:30px;color:blue;text-align:center">知识点:元素和连接关系定义、元素颜色、填充色、线的颜色、节点位置、标签颜色</p>
    <div id="mountNode">

    </div>
  </dir>

</template>

<script>
import G6 from '@antv/g6';
// 定义数据源
const data = {
  // 点集
  nodes: [
    {
      id: 'node1',
      label: "Circle1",
      x: 1600,
      y: 500,
    },
    {
      id: 'node2',
      x: 300,
      y: 500,
      label: "Circle2",
    },
  ],
  // 边集
  edges: [
    // 表示一条从 node1 节点连接到 node2 节点的边
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};

export default {
  name: "Index",
  data () {
    return {
    };
  },
  methods: {
  },
  mounted () {
    // 创建 G6 图实例
    const graph = new G6.Graph({
      container: 'mountNode', // 指定图画布的容器 id
      // 画布宽高
      width: document.getElementById('mountNode').scrollWidth,
      height: document.getElementById('mountNode').scrollHeight,
      defaultNode: {
        type: "circle",
        size: [400],
        color: "#5B8FF9",
        style: {
          fill: "#9EC9FF",
          lineWidth: 30
        },
        labelCfg: {
          style: {
            fill: "#fff",
            fontSize: 80
          }
        }
      },
      defaultEdge: {
        style: {
          stroke: "#ff0000"
        }
      }
    });
    // 读取数据
    graph.data(data);
    // 渲染图
    graph.render();

  }
};
</script>

<style scoped lang="scss">
#mountNode {
  width: 100vw;
  height: 100vh;
}
</style>

