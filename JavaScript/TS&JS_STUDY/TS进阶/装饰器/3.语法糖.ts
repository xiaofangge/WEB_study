const move2Decorator: ClassDecorator = (target:Function) => {
    console.log("target => ", target)
    target.prototype.name = '类装饰器'
    target.prototype.getPosition = (): {x: number, y:number} => {
        return { x: 100, y: 200 }
    }
}


class Tank2 {

}
move2Decorator(Tank2)
const tank2 = new Tank2()
console.log("tank => ", (tank2 as any).getPosition())
console.log("tank => ", (tank2 as any).name)