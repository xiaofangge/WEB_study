// 1、可选链
const user = {
  name: "John",
  address: {
    city: "New York",
    postalCode: "12345",
  },
};

const city = user?.address?.city;
console.log(city); // "New York"
const invalidCode = user?.address?.postalCode?.toLowerCase();
console.log(invalidCode); // undefined

// 2、keyof运算符
console.info("--------------------------keyof运算符------------------");
interface User {
  id: number;
  name: string;
  email: string;
}
function getUserProperty(user: User, property: keyof User) {
  return user[property];
}
const user1: User = {
  id: 1,
  name: "Fang Ruichuan",
  email: "frc1878364351@126.com",
};
const name1 = getUserProperty(user1, "name");
console.info(name1); // "Fang Ruichuan"
// const invalidAge = getUserProperty(user1, "age"); //  Argument of type '"age"' is not assignable to parameter of type 'keyof User'.
// console.info(invalidAge); // undefined

// 3、交叉类型
console.info("--------------------------交叉类型---------------------");
interface Loggable {
  log: () => void;
}
interface Serializable {
  serialize: () => string;
}
type Logger = Loggable & Serializable;

class ConsoleLogger implements Loggable {
  log() {
    console.log("'Logging to console...");
  }
}

class FileLogger implements Loggable, Serializable {
  log() {
    console.log("'Logging to file...");
  }
  serialize() {
    return "Serialized to string...";
  }
}
// const logger4: Logger = new ConsoleLogger();
// logger4.log();
const logger5: Logger = new FileLogger();
logger5.log();
console.log(logger5.serialize());

// 4、映射类型
console.info("--------------------------映射类型--------------------------");
interface Student {
  id: number;
  name: string;
  email: string;
}
type PartialStudent = { [K in keyof Student]?: Student[K] };
const partialStudent: PartialStudent = {
  name: "Fang Ruichuan",
  email: "frc1878364351@126.com",
};
console.info(partialStudent); // { name: "Fang Ruichuan", email: "frc1878364351@126.com" }

// 5、装饰器
// function uppercase(target: any, propertyKey: string) {
//   let value = target[propertyKey];

//   const getter = () => value;
//   const setter = (newValue: string) => {
//     value = newValue.toUpperCase();
//   };

//   Object.defineProperty(target, propertyKey, {
//     get: getter,
//     set: setter,
//     enumerable: true,
//     configurable: true,
//   });
// }

// class PersonDecorator {
//   @uppercase
//   name: string;
// }
// const personDecorator = new PersonDecorator();
// personDecorator.name = "fang rui chuan";
// console.info(personDecorator.name); // "FANG RUI CHUAN"


// 6、只读属性
console.info("--------------------------只读属性---------------------");
class Circle {
    readonly radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea() {
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}
const circle = new Circle(5);
console.log(circle.radius); // 5
// circle.radius = 10; // Cannot assign to 'radius' because it is a read-only property
console.info(circle.getArea()); // 78.53981633974483


// // 7、类型别名 type 
// console.info("--------------------------类型别名------------------------");
// type Name = string;


// 8、类型守卫和类
console.info("--------------------------类型守卫和类---------------------");
class Animal {
    name: string
    constructor(name: string) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!")
    }
}
function makeSound(animal: Animal) {
    // 类型守卫
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        console.log("Unknown animal")
    }
}
const dog = new Dog("Rufus");
const animal = new Animal("Unknow");
makeSound(dog); // Woof!
makeSound(animal); // Unknown animal