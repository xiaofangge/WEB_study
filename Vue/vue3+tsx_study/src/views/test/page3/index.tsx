import { ElButton } from 'element-plus';
import { defineComponent, ref } from 'vue';

interface IResult {
    id: number,
    name: string,
    address: {
        city: string,
        province: string
    }
}

export default defineComponent({
    setup() {
        
        let results = ref<IResult[]>([])
        const dataCounts = ref<number>(results.value.length)

        const getDatas = () => {
            const results = [];
            for (let i = 0; i < 10000000; i++) {
                results.push({
                    id: i,
                    name: `name${i}`,
                    address: {
                        city: `city${i}`, 
                        province: `province${i}`
                    }
                })
            }
            return results;
        }

        const loadData = () => {
            results.value = getDatas();
            dataCounts.value = results.value.length;
        }
        
        return () => (<>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                <div><ElButton type='primary' size='large' onClick={loadData}>加载数据</ElButton></div>
                <div><h1>当前数据量：{dataCounts.value}</h1></div>
            </div>
        </>);
    }
})