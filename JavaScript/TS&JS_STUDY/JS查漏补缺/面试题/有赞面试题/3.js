function Ofo() { }
function Bike() {
    this.useTime = 0;
}

var myOfo = new Ofo();                    // 7
Ofo.prototype = new Bike();               // 8  // 将 Ofo 的原型设置为一个新的 Bike 实例
var yourOfo = new Ofo();                  // 9
console.log(myOfo.useTime);               // 10  undefined
console.log(yourOfo.useTime);             // 11     0
var bike = new Bike();                    // 13   不是同一个对象
console.log(Ofo.prototype === bike);      // 14     false