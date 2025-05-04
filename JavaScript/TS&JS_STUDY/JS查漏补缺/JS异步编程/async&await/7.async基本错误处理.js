async function get() {
    console.log(a)
}
get().catch(error => {
    console.log("error => ", error) // error =>  ReferenceError: a is not defined
})


async function get2() {
    throw new Error("用户不存在")
}
get2().catch(error => {
    console.log("error2 => ", error) // error2 =>  Error: 用户不存在
})