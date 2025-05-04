const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const getRange = (begin, end) => {
    return (v) => {
        return v >= begin && v <= end;
    }
}
console.log(arr.filter(getRange(20, 50))); // [20, 30, 40, 50]
console.log(arr.filter(getRange(40, 60))); // [40, 50, 60]



console.log("-------------------------")
const goods = [
    {
        title: "A",
        price: 30,
    },
    {
        title: "B",
        price: 10,
    },
    {
        title: "C",
        price: 50,
    },
    {
        title: "D",
        price: 20,
    },
    {
        title: "E",
        price: 40,
    },
    {
        title: "F",
        price: 60,
    },
    {
        title: "G",
        price: 300,
    },
    {
        title: "H",
        price: 80,
    },
    {
        title: "I",
        price: 20,
    },
    {
        title: "J",
        price: 200
    }
]
console.log("---------------- 商品区间 -----------------")
const getPriceRange = (begin, end) => (val) => val.price >= begin && val.price <= end;
console.table(goods.filter(getPriceRange(20, 50))); // [ { title: 'B', price: 10 }, { title: 'D', price: 20 }, { title: 'E', price: 40 }, { title: 'F', price: 60 }, { title: 'I', price: 20 } ]
console.table(goods.filter(getPriceRange(40, 200))); 


console.log("---------------- 商品排序 -----------------")
const sortGoods = (key, order = "asc") => (a, b) => order === "asc"? a[key] - b[key] : b[key] - a[key];
console.table(goods.sort(sortGoods("price"))); // [ { title: 'B', price: 10 }, { title: 'D', price: 20 }, { title: 'E', price: 40 }, { title: 'F', price: 60 }, { title: 'I', price: 20 }, { title: 'A', price: 30 }, { title: 'C', price: 50 }, { title: 'H', price: 80 }, { title: 'J', price: 200 }, { title: 'G', price: 300 } ]
console.table(goods.sort(sortGoods("price", "desc"))); 
