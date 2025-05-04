function p1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("p1")
        }, 2000)
    })
}

function p2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("p2")
        }, 2000)
    })
}

// 按顺序打印
async function fun() {
    let p1value = await p1()
    console.log(p1value)
    let p2value = await p2()
    console.log(p2value)
}
fun()

// 过两秒之后 并行打印
async function fun() {
    let p1value = p1()
    let p2value = p2()
    setTimeout(() => {
        console.log(p1value)        // Promise { 'p1' }
        console.log(p2value)        // Promise { 'p2' }
    }, 2000)
}


// 并行打印(方式一)
async function fun() {
    let p1fun = p1()
    let p2fun = p2()

    let p1value = await p1fun
    let p2value = await p2fun
    console.log(p1value)        // p1
    console.log(p2value)        // p2
}


// 并行打印(方式二)
async function fun2() {
    const res = await Promise.all([p1(), p2()])
    console.log("res => ", res)     // res =>  [ 'p1', 'p2' ]
}
fun2()

