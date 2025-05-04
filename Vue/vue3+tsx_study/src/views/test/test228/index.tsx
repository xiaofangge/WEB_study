import { defineComponent, reactive, ref } from "vue";
import SonTest from "./sonTest";

export default defineComponent({
    setup() {
        
        const input = {
            "Fruits": {
              "Citrus": ["Orange", "Lemon"],
              "Berries": ["Strawberry", "Blueberry"]
            },
            "Vegetables": {
              "Leafy": ["Lettuce", "Spinach"],
              "Root": ["Carrot", "Beetroot"]
            }
           }
        
        const data = reactive(input)

        const sonRef = ref();

        const chooseVal = ref()
        
        return () => {
            <SonTest ref={sonRef} datas={data} onChoose={(val) => {
                chooseVal.value = val;
            }}></SonTest>
        }
    }
})