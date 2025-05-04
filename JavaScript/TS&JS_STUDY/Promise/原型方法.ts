// then
// 成功的情况
new Promise((resolve, reject) => resolve("ok")).then(data => console.log("dara => ", data)); // ok
// 失败的情况
new Promise((resolve, reject) => reject("error")).then(null, (error) => console.log("erorr => ", error)) // error

// 链式调用
new Promise((resolve, reject) => resolve("ok")).then().then().then(data => console.log("链式调用1 => ", data)); // ok
new Promise((resolve, reject) => resolve("ok")).then(value => "okok").then(data => console.log("链式调用2 then返回一个变量 => ", data)); // okok
new Promise((resolve, reject) => resolve("ok")).then(value => {
    return new Promise((resolve, reject) => resolve("okok"));
}).then(data => console.log("链式调用3 then返回一个Promise => ", data)); // okok



// catch
new Promise((resolve, reject) => reject("error")).catch(error => console.log("catch => ", error)); // error
// 链式调用
new Promise((resolve, reject) => reject("error")).catch().catch().catch(error => console.log("catch链式调用1 => ", error)); // error