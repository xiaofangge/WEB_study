const obj1 = {}
const obj2 = {a: 1}

console.log(Object.keys(obj1).length === 0)
console.log(Object.entries(obj1).length === 0)
console.log(Reflect.ownKeys(obj1).length === 0)

console.log(JSON.stringify(obj1) === '{}')
console.log(obj1 === {}) // false

function isEmtpy(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log(isEmtpy(obj1))