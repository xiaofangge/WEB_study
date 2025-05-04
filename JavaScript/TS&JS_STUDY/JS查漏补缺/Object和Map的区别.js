// 1.构造方式不同
const smbObj = {
    1: 'ShowMeBug',
    1: 'ShowMeMoney'
}

// Map则是通过内置构造函数Map创建
const smbsMap = new Map([
    [1, 'ShowMeBug'],
    [2, 'ShowMeMoney']
])


// 2.Object中的键是字符串，Map中的键可以是任意类型

console.log(Object.prototype)


// 3.Map会保留键的顺序，Object不会
console.log("-------------------")
const smbsObj2 = {
    2: 'ShowMeMoney',
    1: 'ShowMeBug'
}
console.log(Object.entries(smbsObj2))

const smbsMap2 = new Map([
    [1, 'ShowMeBug'],
    [2, 'ShowMeMoney']
])
console.log(Object.entries(smbsMap2))


// JSON支持对象，但不支持Map
const json1 = JSON.stringify(smbsObj2)
console.log("json1 => ", json1)     // {"1":"ShowMeBug","2":"ShowMeMoney"}
const json2 = JSON.stringify(smbsMap2)
console.log("json2 => ", json2)     // {}