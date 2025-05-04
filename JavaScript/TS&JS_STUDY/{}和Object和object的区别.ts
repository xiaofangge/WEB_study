// function test1(param: {}) {

// }

// test1(1)
// test1({})
// test1("foo")
// test1({ name: "foo" })

// test1(null)
// test1(undefined)

// // {} 包含了除了null和undefined的所有类型, unknown 可以包含null和undefined

// let obj1: {} = {}
// obj1 = { foo: "bar" }
// // {} 对它所指向的对象一无所知，访问任何属性或者方法都会报找不到
// let foo = obj1.foo




// function test2(param: Object) {

// }

// test2(1)
// test2({})
// test2("foo")
// test2({ name: "foo" })

// test2(null)
// test2(undefined)


// let obj2: Object = {}
// obj2 = { foo: "bar" }
// obj2.foo = ''



// let obj3: object = {}
// obj3 = { foo: "bar" }
// obj3.foo = ''