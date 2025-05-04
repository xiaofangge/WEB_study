const myStorage = (function () {
    const cache = {}
    return {
        set: (key, val) => {
            cache[key] = val
        },
        get: (key) => {
            if (Object.prototype.hasOwnProperty.call(cache, key)) {
                return cache[key]
            }
        }
    }
})()

myStorage.set('name', 'Tom')
myStorage.set('age', 20)
console.log(myStorage.get('name')) //   Tom
console.log(myStorage.get('age')) //   20
