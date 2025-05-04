import { defineComponent, h, onMounted } from 'vue';
import Child from './child';

export default defineComponent({
    setup() {

        onMounted(() => {
            // 虚拟DOM
            let vnode = h('ul.list', [
                h('li', 'a'),
                h('li', 'b'),
                h('li', 'c')
            ])
            console.log("vnode => ", vnode)
        })
        
        return () => (<>
            <Child id="hero1" onAssign={(param) => {
                param.age
            }}></Child>
        </>);
    }
})