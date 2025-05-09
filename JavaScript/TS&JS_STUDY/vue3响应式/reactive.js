// 判断是否为对象，注意 null 也是对象
export const isObject = val => val !== null && typeof val === 'object';
// 判断key是否存在
const hasOwn = (target, key) => Object.prototype.hasOwnProperty.call(target, key)

export function reactive(target) {
    // 首先先判断是否为对象
    if (!isObject(target)) return target;

    const handler = {
        get(target, key, receiver) {
            console.log(`获取对象属性${key}值`)
            // TODO 这里还需要收集依赖
            track(target, key)

            const result = Reflect.get(target, key, receiver)
            // 递归判断的关键，如果发现子元素存在引用类型，递归处理
            if (isObject(result)) {
                return reactive(result)
            }
            return result
        },
        set(target, key, value, receiver) {
            console.log(`设置对象属性${key}值`)

            // 首先获取旧值
            const oldVal = Reflect.get(target, key, receiver)
            // set是需要返回 布尔值的
            let result = true;
            // 判断新值和旧值是否一样来决定是否更新setter
            if (oldVal !== value) {
                result = Reflect.set(target, key, value, receiver)
                // TODO 更新操作
                trigger(target, key)
            }
            return result
        },
        deleteProperty(target, key) {
            console.log(`删除对象属性${key}`)
            // 先判断是否有key
            const hasKey = hasOwn(target, key)
            const result = Reflect.deleteProperty(target, key)

            if (hasKey && result) {
                // TODO 更新操作
                trigger(target, key)
            }
            return result;
        }
    }
    return new Proxy(target, handler)
}


// effect
// activeEffect 表示当前正在走的 effect
let activeEffect = null;
// 副作用函数
export function effect(callback) {
    activeEffect = callback;
    callback();
    activeEffect = null;
}

// track
// targetMap 表里每个key都是一个普通对象，对应他们的 depsMap
let targetMap = new WeakMap();
export function track(target, key) {
    // 如果当前没有effect就不执行追踪
    if (!activeEffect) {
        return;
    }
    // 获取当前对象的依赖图
    let depsMap = targetMap.get(target)
    // 不存在就新建
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }
    // 根据 key 从 依赖图 里获取到 effect 集合
    let dep = depsMap.get(key)
    // 不存在就新建
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    // 如果当前effect不存在，才注册到 dep 里
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect)
    }
}

// trigger 响应式触发
export function trigger(target, key) {
    // 拿到 依赖图
    const depsMap = targetMap.get(target)
    if (!depsMap) {
        // 没有被追踪，直接 return
        return;
    }
    // 拿到了 视图渲染effect 就可以进行排队更新 effect 了
    const dep = depsMap.get(key)
    // 遍历 dep 集合执行里面 effect 副作用方法
    if (dep) {
        dep.forEach(effect => {
            effect()
        })
    }
}



// ========================== ref ============================

// 判断是否是一个对象，是就用 reactive 来代理
const convert = val => isObject(val) ? reactive(val) : val;

class RefImpl {
    constructor(_rawValue) {
        this._rawValue = _rawValue;
        this.__v_isRef = true;
        // 判断 _rawValue 是否是对象
        // 如果是对象调用reactive使用 proxy来代理
        // 否则，返回 _rawValue 本身
        this._value = convert(_rawValue);
    }
    // 使用 get/set 存储器，来进行追踪和触发
    get value() {
        // 追踪依赖
        track(this, 'value');
        // get 得返回 this._value
        return this._value;
    }
    set value(newValue) {
        // 判断旧值和新值是否一致
        if (newValue === this._rawValue) {
            this._rawValue = newValue;
            // 设置新值的时候也得使用 convert 处理一下，判断新值是否是对象
            this._value = convert(this._rawValue)
            // 触发依赖
            trigger(this, 'value')
        }
    }
}

export function ref(rawValue) {
    // __v_isRef 用来标识是否是一个 ref 如果是直接返回，不用再转
    if (isObject(rawValue) && rawValue.__v_isRef) {
        return rawValue;
    }
    return new RefImpl(rawValue);
}




// ========================== toRef ====================
class ObjectRefImpl {
    constructor(proxy, _key) {
        this._proxy = proxy;   
        this._key = _key;
        // __v_isRef 用来标识是否是一个 ref
        this.__v_isRef = true;
    }
    get value() {
        // this._proxy 就是 响应式 对象， 当访问[this._key]时，this._proxy里面会去自动收集依赖
        return this._proxy[this._key]
    }
    set value(newVal) {
        // this._proxy 响应式对象，会在 this._proxy 里面set去调用trigger
        this._proxy[this._key] = newVal;
    }
}

// 暴露出去的方法
export function toRef(proxy, key) {
    return new ObjectRefImpl(proxy, key);
}


// ========================== toRefs ====================
export function toRefs(proxy) {
    // 判断当前 proxy 是 proxy数组 还是 proxy对象
    const ret = proxy instanceof Array ? new Array(proxy.length) : {};

    for (const key in proxy) {
        // 内部还是调用 toRed 进行转换为 响应式
        ret[key] = toRef(proxy, key)
    }
    return ret
} 