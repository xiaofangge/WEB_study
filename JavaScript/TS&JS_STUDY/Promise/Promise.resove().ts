const p1 = Promise.resolve('p1-resolve-hello');
p1.then(value => console.log(value)); // p1-resolve-hello


Promise.resolve().then(() => Promise.resolve("123")).then(value => console.log(value)); // 123

const p2 = new Promise((resolve, reject) => {
    resolve('p2-resolve-world');
})
const p3 = Promise.resolve(p2);
console.info("p2 === p3", p2 === p3) // true
p3.then(value => console.log("p3 => ", value)); // p2-resolve-world


const thenable = {
    then: function(resolve: any, reject: any) {
        resolve('thenable-resolve-world');
    }
}
Promise.resolve(thenable).then(value => console.log("thenable => ", value)); // thenable-resolve-world