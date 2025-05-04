// export default class Person {
//     static sayHello() {
//         console.log('Hello, I am a person.');
//     }
// }

class Person {
    static sayHello() {
        console.log('Hello, I am a person.');
    }
}
const a = new Person();

export {
    Person as default,
    a  // 导出不了
}