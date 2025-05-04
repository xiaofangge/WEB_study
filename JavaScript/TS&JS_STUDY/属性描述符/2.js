const obj = {}

Object.defineProperty(obj, 'a', {
    get: function () {              // getter
        console.log("Hello");
        return 123;
    },
    set: function (val) {           // setter
        console.log("World");
    }
})

obj.a = obj.a + 2; // Hello World
console.log(obj.a); // Hello 123
