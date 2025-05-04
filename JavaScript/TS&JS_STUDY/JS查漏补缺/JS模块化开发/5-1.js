console.log("模块预解析啦")

class Obj {
    data = [];
    init() {
        this.data = [
            { name: "张三", age: 20 },
            { name: "王五", age: 30 }
        ]
    }
    get() {
        return this.data;
    }
}
const obj = new Obj();
obj.init()
export {
    obj
}