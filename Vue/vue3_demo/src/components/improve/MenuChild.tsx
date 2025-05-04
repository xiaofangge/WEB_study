import { defineComponent, h } from "vue";

export default defineComponent({
    name: "MenuChild",
    setup(props, ctx) {
        const slot = ctx.slots.default ? ctx.slots.default?.() : []

        return () => {
            return h('div', null, [
                slot.map(item => {
                    return h('div', { class: `mt-${ctx.attrs.size}` }, item)
                })
            ])
        }
    },
})