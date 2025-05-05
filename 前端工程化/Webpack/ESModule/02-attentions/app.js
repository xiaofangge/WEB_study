import { name, age } from "./module.js";

// name = 'john' // app.js:3 Uncaught TypeError: Assignment to constant variable.

console.log(`${name}-${age}`)

setTimeout(() => {
    console.log(`${name}-${age}`)
}, 1000)