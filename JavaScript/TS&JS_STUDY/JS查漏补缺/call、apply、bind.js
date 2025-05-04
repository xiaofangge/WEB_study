{
    function Person(name) {
        this.name = name;
    }
    Person.prototype = {
        constructor: Person,
        showName: function () {
            console.log(this.name);
        }
    }
    const person = new Person('fangruichuan'); 
    person.showName(); // fangruichuan

    const animal = {
        name: 'dog'
    }
    // call
    person.showName.call(animal); // dog

    // apply
    person.showName.apply(animal); // dog

    // bind
    person.showName.bind(animal)(); // dog


    console.log("求数组中的最大和最小值-------------------------")
    const arr = [34,5,3,6,54,6,-67,5,7,6,-8,687];
    console.log(Math.max.call(Math, ...arr)); // 687
    console.log(Math.min.call(Math, ...arr)); // -8
    console.log(Math.max.apply(Math, arr)); // 687
    console.log(Math.min.apply(Math, arr)); // -8


    console.log("将伪数组转换为数组------------------------")
    const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};
    const arr2 = Array.prototype.slice.call(arrayLike);
    console.log(arr2); // ['a', 'b', 'c']


    console.log("数组追加--------------------")
    const arr3 = [1, 2, 3]
    const arr4 = [4, 5, 6]
    Array.prototype.push.apply(arr3, arr4);
    console.log(arr3); // [1, 2, 3, 4, 5, 6]


    console.log("判断变量类型-------------------------")
    console.log(Object.prototype.toString.call(123)); // [object Number]
    console.log(Object.prototype.toString.call('abc')); // [object String]
    console.log(Object.prototype.toString.call(true)); // [object Boolean]
    console.log(Object.prototype.toString.call(null)); // [object Null]
    console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
    console.log(Object.prototype.toString.call({})); // [object Object]
    console.log(Object.prototype.toString.call([])); // [object Array]
    console.log(Object.prototype.toString.call(function () {})); // [object Function]
    console.log(Object.prototype.toString.call(new Date())); // [object Date]
    console.log(Object.prototype.toString.call(/test/)); // [object RegExp]
    console.log(Object.prototype.toString.call(Math)); // [object Math]
}