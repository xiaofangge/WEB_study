import { defineComponent, h, ref } from "vue";

export default defineComponent({
  name: "HFunction",
  setup() {
    const arr = ref([
      { id: 0, name: "HTML" },
      { id: 1, name: "CSS" },
      { id: 2, name: "JavaScript" }
    ])

    const childListLog = (item: any) => {
      console.log(item)
    }

    return () => {
      return h('ul', null, [
        arr.value.map(item => {
          return h('li', { 
            key: item.id, 
            onClick: () => childListLog(item)
          }, item.name)
        })
      ])
    }
  }
})