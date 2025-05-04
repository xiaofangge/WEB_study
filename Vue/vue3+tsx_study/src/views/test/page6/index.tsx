import { defineComponent, nextTick, onMounted, ref } from "vue";

export default defineComponent({
    setup() {

        const myValue = ref('initial value');

       


        onMounted(() => {
            setTimeout(() => {
                // 在DOM更新后执行第一个回调
                nextTick(() => {
                    console.log("DOM 已更新")
                })

                // 在DOM更新后执行第二个回调
                nextTick(() => {
                    console.log("第二个回调函数")
                })
            }, 3000)
        })


        return () => (
            <div>
                { myValue.value }
            </div>
        )
    }
})