test('toBe匹配器-测试007号技师的匹配', () => {
    // expect('007号技师').toBe('007号技师')

    const a = { number: '007' };
    // toBe 等同于 ===
    expect(a).toBe({ number: '007' })
});


test('oEqual匹配器', () => {
    const a = { number: '007' };
    // 内容结果的匹配
    expect(a).toEqual({ number: '007' })
})


test('toBeNull匹配器', () =>{
    const a = null;
    expect(a).toBeNull();
})

test('toBeUndefined匹配器', () => {
    const a = undefined;
    let b;
    expect(a).toBeUndefined();
    expect(b).toBeUndefined();
})

test("toBeDefined匹配器", () => {
    const a = 1;
    expect(a).toBeDefined();
    let b = '123';
    expect(b).toBeDefined();
})

// 匹配真
test('toBeTruthy匹配器', () => {
    const a = 0;
    expect(a).toBeTruthy();
    let b = 1;
    expect(b).toBeTruthy();
})

// 匹配假
test('toBeFalsy匹配器', () => {
    const a = 0;
    expect(a).toBeFalsy();
})


// ======= 数字匹配器
// >
test('toBeGreaterThan匹配器', () => {
    const a = 8;
    expect(a).toBeGreaterThan(8);
})


// >=
test("toBeGreaterThanOrEqual匹配器", () => {
    const a = 8;
    expect(a).toBeGreaterThanOrEqual(8);
})

// <
test('toBeLessThan匹配器', () => {
    const a = 7;
    expect(a).toBeLessThan(8)
})

// <=
test('toBeLessThanOrEqual匹配器', () => {
    const a = 9;
    expect(a).toBeLessThanOrEqual(8)
})


// toBeCloseTo 解决浮点数问题
test("toBeCloseTo匹配器", () => {
    // expect(0.1 + 0.2).toEual(0.3)
    expect(0.1 + 0.2).toBeCloseTo(0.3)
})


// 检查字符串是否包含子字符串或者匹配正则表达式
test('toMatch匹配器', () => {
    const str = '小野的WEB世界, 鱼皮, 不高兴就喝水'
    expect(str).toMatch('鱼皮')
})


// 检查数组或者可迭代对象中是否包含某个元素
test('toContain匹配器', () => {
    const arr = ['小野的WEB世界', '鱼皮', '不高兴就喝水']
    expect(arr).toContain('鱼皮')
})

test('toContain匹配器', () => {
    const arr = ['小野的WEB世界', '鱼皮', '不高兴就喝水']
    const data = new Set(arr);
    expect(data).toContain('鱼皮')
})


// 检查抛出的异常是否一致
const throwErrorFunc = () => {
    throw new Error("This is a error")
}
test('toThrow匹配器', () => {
    expect(throwErrorFunc).toThrow('This is a errors')
})

const noErrorFunc = () => {
}
test('toThrow匹配器', () => {
    // not 代表反向匹配
    expect(noErrorFunc).not.toThrow()
})