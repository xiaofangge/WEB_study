


const detectCircle = (obj) => {
    const set = new WeakSet();
    let isCircle = false;

    const check = (obj) => {
        if (typeof obj !== 'object' || obj === null) {
            return;
        }
        if (set.has(obj)) {
            isCircle = true;
            return;
        }

        set.add(obj)

        for (const key in obj) {
            if (Object.hasOwn(obj, key)) {
                // 仅检测自身属性
                check(obj[key])
                if (isCircle) break;
            }
        }


        // 回溯清理
        set.delete(obj); 
    }

    check(obj)
    return isCircle;
}
const objA = {
    a: 2
}
objA.b = objA
console.log(detectCircle(objA)) // true

const objB = { b: 2 }
console.log(detectCircle(objB)) // false