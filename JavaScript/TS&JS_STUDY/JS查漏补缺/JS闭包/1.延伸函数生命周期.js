function hd() {
    let n = 1;
    return function sum() {
       console.log(++n)
    }
    sum()
}
let a = hd();
a(); // 2
a(); // 3
a(); // 4
a(); // 5
a(); // 6
let b = hd()
b() // 2
b() //3
let c = hd()
c() // 2

console.log("---------- 用完就删 --------")
function hd2() {
    let n = 1;
    function sum() {
       console.log(++n)
    }
    sum()
}
hd2()   // 2
hd2()   // 2
hd2()   // 2


console.log("-------------------------------")
const hd3 = () => {
    let n = 1;
    return () => {
        const m = () => console.log(++n)
        m()
    }
}
hd3()() // 2
hd3()() // 2


console.log("-------------------------------")
const hd4 = () => {
    let n = 1;
    return () => {
        return () => console.log(++n)
    }
}
const h4 = hd4()()
h4();   // 2
h4();   // 3
h4();   // 4