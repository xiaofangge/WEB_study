<script setup lang="ts">
import * as Cesium from 'cesium';
import { onMounted } from 'vue';

onMounted(() => {
  const custom = new Cesium.ArcGisMapServerImageryProvider({
    layers: '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
  const viewer = new Cesium.Viewer('cesiumContainer', {
      baseLayerPicker: false,  // 隐藏底图切换按钮
      // : custom,  // 设置底图为ArcGis地图服务
      // terrainProvider: Cesium.createWorldTerrain(),  // 设置地形服务
  });
})
</script>

<template>
  <div id="cesiumContainer"></div>  
</template>

<style scoped>
  html,body,#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
