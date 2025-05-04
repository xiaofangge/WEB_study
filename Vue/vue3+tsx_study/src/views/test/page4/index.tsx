import { defineComponent, reactive, toRef, toRefs } from "vue";

export default defineComponent({
    setup(props) {
        defineProps({
            content: String,
        })
        const state = reactive({
            name: "JL",
            age: 18
        })
        const ageRef = toRef(state, "age")
        setTimeout(() => {
            state.age = 20
        }, 1000)
        
        setTimeout(() => {
            ageRef.value = 22
        }, 2000)

        const { name, age } = toRefs(state)
        
        setTimeout(() => {
            age.value = 24
        }, 4000)

        return () => (
            <>
                <div>{ state.age } --- { ageRef.value }</div>
                <div>{ name.value } --- { age.value }</div>
            </>
        )
    }
})