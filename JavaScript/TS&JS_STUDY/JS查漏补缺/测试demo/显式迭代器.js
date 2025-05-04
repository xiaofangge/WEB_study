const arr = ['张三', '李四', '王五']
const it = arr[Symbol.iterator]();
console.log(it)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())      // { value: undefined, done: true }


// 幂运算符 **
console.log(2 ** 3)  // 2 * 2 * 2 = 8


// 空值合并 ??
const num = 0;
// 0是一个正常数字，但是当它参与逻辑运算的时候即为“假”
console.log(num || 300) // 300
// ?? 前面的值为null 或 undefined 的时候才为“假”
console.log(num ?? 100) // 0
