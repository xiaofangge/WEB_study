// 浅拷贝
const shallowCopy = (obj:any) => {
    // 只拷贝引用类型，过滤number和null类型
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const copyObj: any = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObj[key] = obj[key]
        }
    }
    return copyObj
}

let shallowObj = {
    name:'啊伟',
    age:18,
    like :{
        type:'coding'
    }
}
const copyObj = shallowCopy(shallowObj)
shallowObj.like.type = 'fishing'
console.log("shallowObj => ", shallowObj)
console.info("copyObj => ", copyObj)


// 深拷贝
console.info("----------------------------------------------------------")
const deepCopy = (obj:any) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    const deepCopyObj: any = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { 
            if (obj[key] instanceof Object) {
                // 是引用类型
                deepCopyObj[key]= deepCopy(obj[key])
            } else {
                deepCopyObj[key] = obj[key]
            }
        }
    }
    return deepCopyObj
}

const deepCopyObj = deepCopy(shallowObj);
shallowObj.like.type = "不错不错";
console.log("shallowObj => ", shallowObj)
console.info("deepCopyObj => ", deepCopyObj)



