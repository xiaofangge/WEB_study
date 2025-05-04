const obj = {
    id: '1',
    name: 'fangruichuan',
}

// 1. 获取属性描述符
const desc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(desc); 
// {
//     value: 'fangruichuan',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }


console.info("----------------------------")
// 2. 设置属性描述符
Object.defineProperty(obj, 'id', {
    value: '101',
    writable: false, // 不可重写
    enumerable: false, // 不可遍历
    configurable: false // 不可修改描述符本身
})

Object.defineProperty(obj, 'id', {  // TypeError: Cannot redefine property: id
    writable: true,
})
obj.id = '102'; // 无效

console.log(obj.id); // 101
console.log(Object.keys(obj)); // ['name']