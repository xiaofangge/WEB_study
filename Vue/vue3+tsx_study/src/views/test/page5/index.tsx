import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
    setup() {

        const internalValue = ref<string>('')

        // 计算属性代替 v-model
        const computedValue = computed({
            get: () => internalValue.value,
            set: (newValue: string) => {
                internalValue.value = newValue
            }
        })

        // 监听计算属性的变化
        watch(computedValue, (newValue: string) => {
            console.log("new value: ", newValue)
        })

        //更新数据的方法
        const updateValue = (newValue: string) => {
            computedValue.value = newValue
        }
       
        

        return () => (
            <div>
                <input type="text" value={computedValue.value} onInput={(e) => {
                    // updateValue(e!.data)
                }}></input>
            </div>
        )
    }
})