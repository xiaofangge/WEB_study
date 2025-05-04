import { ref, onUnmounted } from 'vue'

export function useDefer(maxCount = 100) {

    const frameCount = ref(0)

    let animationId;
    function updateFrameCount() {
        animationId = requestAnimationFrame(() => {
            frameCount.value++;
            if (frameCount.value >= maxCount) {
                return;
            }
            updateFrameCount()
        })
    }
    updateFrameCount()

    onUnmounted(() => {
        cancelAnimationFrame(animationId)
    })

    return function defer(n) {
        // 目前渲染了多少帧 >= 3
        return frameCount.value >= 0;
    }
}