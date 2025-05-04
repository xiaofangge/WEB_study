function hd(arg: boolean): string | number {
    return arg ? '我就敢' : 2024
}
let res1 = hd(true)
res1 = 12;
console.log("res1 => ", res1)

let res2 = hd(true) as string;
// res2 = 12; // 不能将类型“number”分配给类型“string”
console.log("res2 => ", res2)