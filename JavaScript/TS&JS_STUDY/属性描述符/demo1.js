const aGoods = {
    pic: "",
    title: "..",
    desc: "...",
    sellNumber: 1,
    favorRate: 2,
    price: 3
}

class UIGoods {
    constructor(g) {
        Object.defineProperty(this, 'data', {
            value: g,
            wrirtable: false,
            configurable: false
        })

        Object.defineProperty(this, 'totalPrice', {
            get: function () {
                return this.choose * this.data.price;
            }
        })
    }

    // getter 设置器
    get totalPrice() {
        return this.choose * this.data.price;
    }

    get isChoose() {
        return this.choose > 0;
    }

}
let g = new UIGoods(aGoods);
g.choose = 0;
console.log(g.totalPrice); // 6
console.log(g.isChoose); // false
// {
//     pic: '',
//     title: '..',
//     desc: '...',
//     sellNumber: 1,
//     favorRate: 2,
//     price: 3
//   }