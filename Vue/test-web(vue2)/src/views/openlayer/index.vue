<template>
  <div id="map"
       ref="map"></div>
</template>

<script>
// 首先引入几个会用的到库，具体可以查看官网API文档
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

var map = null   // 创建一个地图实例
export default {
  name: "Home",
  data () {
    return {

    }
  },
  mounted () {
    this.initMap()  // 调用初始化地图服务
  },
  methods: {
    // 初始化地图
    initMap () {
      map = new Map({
        layers: [
          new TileLayer({
            visible: true,
            source: new XYZ({
              visible: true,
              url: 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=2&scale=1&style=8',
            })
          })
        ],
        target: 'map',
        view: new View({
          center: [116.403218, 39.92372],
          zoom: 12,
          maxZoom: 18,
          projection: 'EPSG:4326',
          constrainResolution: true,  // 设置缩放级别为整数 
          smoothResolutionConstraint: false,  // 关闭无级缩放地图
        }),
      });
    }
  },
};

</script>


<style scoped lang="scss">
#map {
  width: 96vw;
  height: 90vh;
  margin: 0 auto;
}
</style>

