// 1. Object.keys() / Object.values(), Object.entries() / for in
let simpleColors = { colorA: "white", colorB: "black" }
let natureColors = { colorC: "green", colorD: "yellow" }
console.info(Object.setPrototypeOf(natureColors, simpleColors))  // { colorC: 'green', colorD: 'yellow' }
console.log(Object.keys(natureColors)) // [ 'colorC', 'colorD' ]

console.info("values => ", Object.values(natureColors))  // [ 'green', 'yellow' ]
console.info("entries => ", Object.entries(natureColors)) // [ [ 'colorC', 'green' ], [ 'colorD', 'yellow' ] ] 

// for..in 不仅可以循环枚举自身属性还可以枚举原型链中的属性
let enumerableKeys: any[] = [];
for (let key in natureColors) {
    enumerableKeys.push(key)
}
console.info("enumerableKeys => ", enumerableKeys) // [ 'colorC', 'colorD', 'colorA', 'colorB' ]



console.info("----------------------")
let meals = {
    mealA: "breakfast",
    mealB: "lunch",
    mealC: "Dinner"
}
for (let [key, value] of Object.entries(meals)) {
    console.info(key + ": " + value)
    meals[`${key}`] = 'snack'
}
console.log(meals)
console.info("--------------")
let mealsMap = new Map(Object.entries(meals))
console.info(mealsMap.get("mealA"))
console.info(mealsMap.get("mealB"))
console.info(mealsMap.get("mealC"))
