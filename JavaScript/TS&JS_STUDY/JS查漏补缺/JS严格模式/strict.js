(function () {
    "use strict";
    console.log("这是 IIFE 中的严格模式")


    // function f(x, o) {
    //     with(o) {
    //       console.log(x)
    //     }
    // }
    // f(null, {x:3}) 

    var x = 2;
    console.log(eval("var x = 5; console.log('eval => ',x);")) // 5
    console.log('x => ', x) // 2

    var obj = {
        name: "这是一个函数"
    }
    // delete obj;

    function testThis() {
        console.log("strict this => ", this) // undefined
    }
    testThis()

    // var num = 010;

    // function testArg() {
    //     // 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    //     console.log("testArg => ", arguments.callee)
    // }

    // testArg()


    var obj2 = {}
    Object.preventExtensions(obj2)

    obj2.newProp = "test" //Cannot add property newProp, object is not extensible
    console.log(obj2)

})()