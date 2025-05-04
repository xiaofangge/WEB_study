const MoveDecorator: ClassDecorator = (target:Function) => {
    target.prototype.getPosition = (): {x: number, y:number} => {
        return { x: 100, y: 200 }
    }
}

const BasketballDecorator: ClassDecorator = (target: Function) => {
    target.prototype.playBasketball = (): string => {
        return "打篮球"
    }
}

@MoveDecorator
@BasketballDecorator
class Student {
    
}

const student = new Student()
console.log((<any>student).getPosition())
console.log((<any>student).playBasketball())