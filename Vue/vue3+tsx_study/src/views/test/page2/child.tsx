import { defineComponent, PropType } from 'vue';

interface IParam {
    /** 姓名 */
    name: string,
    /** 年龄 */
    age: number
}

export default defineComponent({
    props: {
        /** 编号 */
        id: {
            type: String as PropType<string>,
            required: true
        }
    },
    emits: {
        /**
         * 
         * @param param 
         */
        assign: (param: IParam) => {},
    },
    setup(props, { emit, expose }) {
    }
})