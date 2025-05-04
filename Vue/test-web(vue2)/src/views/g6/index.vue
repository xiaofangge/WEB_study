<template>
  <div id="mountNode"></div>
</template>

<script>
import { data, layoutOption, selfNodeOptions } from './data.js';
import G6 from '@antv/g6';
G6.registerLayout('kx', layoutOption);
Object.keys(selfNodeOptions).forEach(item => {
  debugger
  G6.registerNode(item, selfNodeOptions[item]);
})

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
      container: 'mountNode', // 指定图画布的容器 id，与第 9 行的容器对应
      // 画布宽高
      width: document.getElementById('mountNode').scrollWidth,
      height: document.getElementById('mountNode').scrollHeight,
      "minZoom": 0.01,
      "fitCenter": false,
      "modes": {
        "default": [
          {
            "type": "drag-canvas",
            "enableOptimize": true
          },
          "drag-node",
          {
            "type": "zoom-canvas",
            "minZoom": 0.01,
            "maxZoom": 100,
            "enableOptimize": true,
            "optimizeZoom": 0.02
          }
        ]
      },
      "animate": true,
      "fitView": true,
      "defaultNode": {
        "type": "rect",
        "size": [
          160,
          80
        ],
        "style": {
          "fill": "#5B8FF9",
          "stroke": "#5B8FF9",
          "lineWidth": 3
        },
        "labelCfg": {
          "style": {
            "fill": "#fff",
            "fontSize": 18
          }
        },
        "linkPoints": {
          "top": false,
          "bottom": false,
          "left": false,
          "right": false,
          "size": 5,
          "fill": "#fff",
          "lineWidth": 1,
          "stroke": "#7afbfd"
        }
      },
      "defaultEdge": {
        "type": "line",
        "style": {
          "radius": 1,
          "offset": 100,
          "endArrow": false,
          "stroke": "black",
          "lineWidth": 5,
          "lineAppendWidth": 25
        }
      },
      "nodeStateStyles": {
        "active": {
          "opacity": 1,
          "stroke": "red"
        },
        "inactive": {
          "opacity": 0.2
        },
        "hideLabel": {
          "node-label": {
            "opacity": 0
          }
        },
        "showLabel": {
          "node-label": {
            "opacity": 1
          }
        },
        "high": {
          "opacity": 1,
          "stroke": "red"
        },
        "break": {
          "fill": "white"
        },
        "closed": {
          "fill": "blue"
        }
      },
      "edgeStateStyles": {
        "active": {
          "stroke": "#0a837b",
          "lineWidth": 10
        },
        "high": {
          "stroke": "red",
          "lineWidth": 15
        }
      },
      "layout": {
        "type": "kx",
        "lineLength": 180,
        "offsetRatio": 1,
        "nodeSpecRatio": 0.5,
        "optimizeSpace": false,
        "screenRatio": 1.6,
        "weight": {
          "ContactBreaker": 10000,
          "NewSubstation": 100000
        }
      },
      // "plugins": [
      //   {
      //     "_cfgs": {
      //       "container": null,
      //       "className": "minimap 1676339606266",
      //       "viewportClassName": "g6-minimap-viewport",
      //       "type": "delegate",
      //       "padding": 50,
      //       "size": [
      //         250,
      //         150
      //       ],
      //       "delegateStyle": {
      //         "fill": "#40a9ff",
      //         "stroke": "#096dd9"
      //       },
      //       "refresh": true
      //     },
      //     "_events": {},
      //     "destroyed": false
      //   },
      //   {
      //     "_cfgs": {
      //       "offsetX": 6,
      //       "offsetY": 6,
      //       "itemTypes": [
      //         "node"
      //       ],
      //       "trigger": "contextmenu"
      //     },
      //     "_events": {},
      //     "destroyed": false
      //   },
      //   {
      //     "_cfgs": {
      //       "offsetX": 10,
      //       "offsetY": 20,
      //       "itemTypes": [
      //         "node"
      //       ],
      //       "trigger": "mouseenter"
      //     },
      //     "_events": {},
      //     "destroyed": false
      //   }
      // ]
    });
    // 读取数据
    console.log(graph);
    debugger

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

