const moveDecorator: ClassDecorator = (target:any) => {
    target.prototype.name = '类装饰器'
    target.prototype.getPosition = () => {
        return { x: 100, y: 200 }
    }
}


@moveDecorator
class Tank {

}
const tank = new Tank()
console.log("tank => ", (tank as any).getPosition())
console.log("tank => ", (tank as any).name)


@moveDecorator
class Player {

}
const player = new Player()
// <> 断言
console.log("player => ", (<any>player).getPosition())
console.log("player => ", (<any>player).name)