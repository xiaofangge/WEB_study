export default {
    mounted(el: any, binding: any, vnode: any, prevNode: any) {
        console.log("tab mounted", el, binding, vnode, prevNode)
        const { activeClass, curIndex } = binding.value;
        const buttonList = el.querySelectorAll("button");
        buttonList[curIndex].classList.add(activeClass);
    },
    updated(el: any, binding: any, vnode: any, prevNode: any) {
        console.log("tab updated", el, binding, vnode, prevNode)
        const buttonList = el.querySelectorAll("button");
        let { activeClass, curIndex } = binding.oldValue;
        buttonList[curIndex].classList.remove(activeClass);
        activeClass = binding.value.activeClass;
        curIndex = binding.value.curIndex;
        buttonList[curIndex].classList.add(activeClass);
    }
}