// 改成 back.js 就不会自动进行测试了

import { baojian1, baojian2 } from "./baojian"
test('保健1方法-300元', () => {
    expect(baojian1(300)).toBe("至尊服务")
})

test('保健2方法-2000', () => {
    expect(baojian2(2000)).toBe("双人服务")
})

test('保健2方法-1000', () => {
    expect(baojian2(1000)).toBe("单人服务")
})