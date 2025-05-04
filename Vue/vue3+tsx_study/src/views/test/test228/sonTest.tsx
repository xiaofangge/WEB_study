import { ElSelect } from "element-plus";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    datas: {
      type: Object as PropType<object>,
      required: true,
      default: null,
    },
  },
  emits: {
    choose: (selectData: string) => {

    }
  },
  setup(prop, ctx) {
    const data = prop.datas;

    const keys = Object.keys(data);

    const selectData = ref();



    ctx.emit("choose", selectData.value)

    

    return () => {
      <div>
        <ElSelect
          v-model="selectedCategory"
          placeholder="Select a category"
        >
          <el-option
            v-for="(value, key) in data"
            key="key"
            label="key"
            value="key"
          />
        </ElSelect>

        <ElSelect
          v-model="selectedCategory"
          placeholder="Select a category"
        >
          <el-option
            v-for="(value, key) in data"
            key="key"
            label="key"
            value="key"
          />
        </ElSelect>

        <ElSelect
          v-model="selectedCategory"
          placeholder="Select a category"
        >
          <el-option
            v-for="(value, key) in data"
            key="key"
            label="key"
            value="key"
          />
        </ElSelect>
      </div>;
    };
  },
});
