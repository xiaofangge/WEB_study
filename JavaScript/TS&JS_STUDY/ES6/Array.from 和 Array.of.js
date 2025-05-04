function doSomething() {
    console.log(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3 }
    let args = Array.prototype.slice.call(arguments)
    args.push('新参数')
    console.log(args)
}

doSomething(1, 2, 3) // [1, 2, 3, '新参数']


// console.log("-------------")
// const btns = document.getElementsByTagName('button')
// console.log(btns)
// Array.from(btns).forEach(btn => console.log(btn))


console.log("----------------------------")
console.log(Array.from('hello')) // [ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.from([1, 2, 3], (x) => x * 5)) // [ 5, 10, 15 ]
// 等同于
console.log(Array.from([1, 2, 3]).map(x => x * 5)) // [ 5, 10, 15 ]


console.log(Array.from({length: 3}, () => "jack"))   // [ 'jack', 'jack', 'jack' ]