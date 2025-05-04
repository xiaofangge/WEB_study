const str = "nfuimkn2020ljf985";
const res1 = [...str].filter(item => !Number.isNaN(parseInt(item))).join('')
console.log("rest1 => ", res1)
const res2 = str.match(/\d/g).join('');
console.log("res2 => ", res2)