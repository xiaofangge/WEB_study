import Vue from 'vue'
import Message from './MyMessage.vue'

const Msg = Vue.extend(Message)

export default (options = {}) => {
    const instance = new Msg({
        el: document.createElement('div'),
        data() {
            return {
                label: options.label
            }
        }
    })
    document.body.appendChild(instance.$el);
    setTimeout(() => {
        instance.$data.show = false;
    }, options?.time ?? 3000)
}