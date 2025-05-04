import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

const componentsPool: Map<String, any> = new Map()
componentsPool.set(MyButton?.name ?? "", MyButton)
componentsPool.set(MyInput?.name ?? "", MyInput)

export default {

    install(app: any, options: any) {
        // console.log("options => ", options)
        // console.log("componentsPool => ", componentsPool)
        if (options?.components.length > 0) {
            // 按需加载
            options.components.map((com: String) => {
                componentsPool.has(com) && app.component(com, componentsPool.get(com))
            })
        } else {
            // 全部加载
            for (let [name, com] of componentsPool.entries()) {
                app.component(name, com)
            }
        }
    }
}