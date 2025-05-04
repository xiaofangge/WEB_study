import { defineComponent, getCurrentInstance, ref } from "vue";
import PageOneStyle from "./pageOne.module.scss";

export default defineComponent({
  setup() {


    // 模拟10000000条数据
    const data = new Array(10000000).fill(0).map((_, e) => e += 1);

    const viewHeight = ref<number>(400); // 可视容器高度
    const itemHeight = ref<number>(20); // 每一项的高度

    const showData = ref<number[]>([]) // 显示的数据
    showData.value = data.slice(0, 20) // 初始展示的数据

    let scrollTop = ref<number>(0)    // 初始滚动距离
    function handleScroll(e: Event) {
        // 获取滚动距离
        scrollTop.value = (e.target as HTMLElement).scrollTop;
        // 初始索引 = 滚动距离 / 每一项的高度
        const begin = Math.round(scrollTop.value / itemHeight.value)
        // 结束索引 = 初始索引 + 容器高度 / 每一项高度
        const end = begin + viewHeight.value / itemHeight.value
        // 截取数据
        showData.value = data.slice(begin, end)
        console.log("showData.value => ", showData.value)
    }

    const instacne = getCurrentInstance();
    console.log("instacne => ", instacne)

    return () => (
      <>
        <xinchao-icon></xinchao-icon>
        <div onScroll={handleScroll} class={PageOneStyle['view-container']} style={{ height: viewHeight.value + 'px' }}>
          <div class={[PageOneStyle['content-container']]} style={{ 
            height: (data.length * itemHeight.value) + "px"}}>
          </div>
          <div class={[PageOneStyle['item-container']]} style={{ transform: `translateY(${scrollTop.value}px)` }}>
            {
                showData.value.map(i => {
                    return <div class={[PageOneStyle['item']]} style={{ height: itemHeight.value + "px" }}>
                        {i}
                    </div>
                })
            }
          </div>
        </div>


        {/* <div class={PageOneStyle['view-container']}>
          <div class={[PageOneStyle['content-container']]}>
          </div>
          <div class={[PageOneStyle['item-container']]}>
            {
                data.map(i => {
                    return <div class={[PageOneStyle['item']]}>{i}</div>
                })
            }
          </div>
        </div> */}
      </>
    );
  },
});
