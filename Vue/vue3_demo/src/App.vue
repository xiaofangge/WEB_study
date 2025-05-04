<script lang="ts">
import Mousetrap from 'mousetrap';
import { computed, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, provide, reactive, readonly, ref, toRefs } from 'vue';
import SlotScopeFather from './components/slot_作用域/Father.vue';
import Test from './components/Test.vue';
import Test2 from './components/Test2.vue';
import Test3 from './components/Test3.vue';
import Test4 from './components/Test4.vue';
import TestComputed from './components/TestComputed.vue';
import TestDirective from './components/TestDirective.vue';
import TestForRef from './components/TestForRef.vue';
import TestMarkRaw from './components/TestMarkRaw.vue';
import TestProvideFather from './components/TestProvideFather.vue';
import TestProvideOptionsAPIFather from './components/TestProvideOptionsAPIFather.vue';
import TestReactiveUtils from './components/TestReactiveUtils.vue';
import TestReadonly from './components/TestReadonly.vue';
import TestRef from './components/TestRef.vue';
import TestRefReactive from './components/TestRefReactiveUp.vue';
import TestShallow from './components/TestShallow.vue';
import TestShallowRef from './components/TestShallowRef.vue';
import TestToRaw from './components/TestToRaw.vue';
import TestToRef from './components/TestToRef.vue';
import TestUse from './components/TestUse.vue';
import TestWatch from './components/TestWatch.vue';
import TestWatchEffect from './components/TestWatchEffect.vue';
import Error from './components/error/Error.vue';
import Father from './components/mitt/Father.vue';
import SlotNameFather from './components/nameSlot/Father.vue';
import SlotFather from './components/slot/Father.vue';
import VFather from './components/v-model/VFather.vue';
import HeavyDemo from './components/demo/HeavyDemo.vue';
import PiniaFather from './components/pinia/PiniaFather.vue';
import NextTick from './components/improve/NextTick.vue';
import HFunction from './components/improve/HFunction';
import MenuFather from './components/improve/MenuFather.vue';
import Tab from './components/VUEX/Tab/index.vue';
import Page from './components/VUEX/Page/index.vue';
import MyInput from './components/attrs/MyInput.vue';
import NewText from './components/component/NewText.vue';
import NewImage from './components/component/NewImage.vue';
import NewVideo from './components/component/NewVideo.vue';
import newsData from './news.ts';


export default {
  components: {
    Test, Test2, Test3, Test4, TestDirective, TestUse, TestRefReactive, TestComputed,
    TestReadonly, TestWatchEffect, TestWatch, TestReactiveUtils, TestShallow,
    TestToRaw, TestMarkRaw, TestRef, TestToRef, TestShallowRef, TestForRef,
    TestProvideOptionsAPIFather, TestProvideFather, Father, VFather,
    SlotFather, SlotNameFather, SlotScopeFather, Error, HeavyDemo, PiniaFather,
    NextTick, HFunction, MenuFather, Tab, Page, MyInput, NewText, NewVideo, NewImage
  },
  provide: {
    // 丧失响应式
    name: '李四'
  },
  // mounted() {
  //   this.name = '老六'
  //   console.log("mounted => ", this.name)
  // },
  setup() {
    onMounted(() => {
      Mousetrap.bind('ctrl+shift+s', () => {
        alert('You pressed ctrl+shift+s')
      })
    })

    const state = reactive({
      count: 0
    })

    const title = ref<string>("Hello, Vue")

    setTimeout(() => {
      title.value = "Hello, Vue3";
    }, 2000)

    const plusCount = (num: number) => {
      state.count += num
    }

    const number = ref<number>(0)

    const itemList = ref([
      { name: '第一项', id: 10 },
      { name: '第二项', id: 20 },
      { name: '第三项', id: 30 }
    ])
    // console.log("itemList => ", itemList)

    const remove = (id: number) => {
      itemList.value = itemList.value.filter(item => !Object.is(item.id, id))
    }

    onErrorCaptured((e) => {
      // console.info("error captured => ", e)
    })

    onRenderTracked((e) => {  
      // debugger
    })

    onRenderTriggered((e) => {
      // debugger
    })

    const name = ref<string>("张三")

    const changeName = () => {
      name.value = '王五'
    }

    // 使用readonly包裹，使其不可在子组件被修改
    provide('name', readonly(name))
    provide('age', 20)
    provide('sex', '男')
    provide('hobby', '跑步')
    provide("changeName", changeName)

    const newsDataComp = computed(() => {
      return newsData.map(item => {
        return {
          ...item,
          type: `new-${item.name}`
        }
      })
    })

    return {
      ...toRefs(state),
      title,
      plusCount,
      itemList,
      remove,
      name,
      newsDataComp
    } 
  }
}


</script>

<template>
  <div>
    <!-- <div>{{ count }}</div> -->
    <!-- <Test :title="title" ></Test> -->
    <!-- <Test2 :count="count" @plus="plusCount" /> -->
    <!-- <Test3 /> -->
    <!-- <Test4 v-for="(item, index) in itemList" 
      :item="item" :key="index" @remove="remove(item.id)"  />
    <hr />
    <TestDirective />
    <hr>
    <TestUse /> -->
    <!-- <TestRefReactive /> -->
    <!-- <TestComputed /> -->
    <!-- <TestReadonly /> -->
    <!-- <TestWatchEffect /> -->
      <!-- <TestWatch /> -->
      <!-- <TestReactiveUtils /> -->
      <!-- <TestShallow /> -->
      <!-- <TestToRaw /> -->
      <!-- <TestMarkRaw /> -->
      <!-- <TestRef /> -->
      <!-- <TestToRef /> -->
      <!-- <TestShallowRef /> -->
      <!-- <TestForRef /> -->
      <!-- <TestProvideOptionsAPIFather /> -->
      <!-- <TestProvideFather /> -->
      <!-- <Father /> -->
      <!-- <VFather /> -->
      <!-- <SlotFather /> -->
      <!-- <SlotNameFather /> -->
      <!-- <SlotScopeFather /> -->
       <!-- <Error />÷ -->
    <!-- <HeavyDemo /> -->
     <!-- <PiniaFather /> -->
     <!-- <NextTick></NextTick> -->
      <!-- <HFunction /> -->
       <!-- <MenuFather /> -->
      <!-- <router-view></router-view> -->
    <Tab />
    <Page />
    <hr>
    <MyInput placeholder="我是默认值" :clearable="true" />
    <hr>
    <div class="component-style">
      <h1>Vue中动态组件使用</h1>
      <div v-for="item in newsDataComp" :key="item.id">
        <component :is="item.type"></component>
      </div>
    </div>
  </div>
</template>

<style type="scss" scoped>
.component-style {
  text-align: center;
}
</style>
