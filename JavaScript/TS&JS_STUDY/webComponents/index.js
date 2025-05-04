"use strict";
window.onload = () => {
    class Wujie extends HTMLElement {
        constructor() {
            super();
            // shadowdom 样式隔离
            let dom = this.attachShadow({ mode: "open" });
            let template = document.querySelector("#wujie");
            // 深拷贝
            dom.appendChild(template.content.cloneNode(true));
            console.log(this.getAttr('url'), this.getAttr('age'));
        }
        getAttr(attr) {
            return this.getAttribute(attr);
        }
        // 生命周期自动触发有东西插入
        connectedCallback() {
            console.log('类似于vue的 mounted');
        }
        // 生命周期卸载
        disconnectedCallback() {
            console.log("类似于vue的 destroy");
        }
        // 跟watch类似
        attributeChangedCallback(name, oldVal, newVal) {
            console.log("跟vue的 watch 类似，有属性变化自动触发");
        }
    }
    // 类似于Vue组件
    window.customElements.define('wu-jie', Wujie); // 挂载完成
};
