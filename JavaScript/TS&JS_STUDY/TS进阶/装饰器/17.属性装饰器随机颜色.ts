
const RandomColorDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
    const colors = Array.of("red", 'blue', 'green', 'skyblue', 'white', 'orange', 'gray')
    Object.defineProperty(target, propertyKey, {
        get() {
            return colors[Math.floor(Math.random() * colors.length)]
        }
    })
}

class Color {
    @RandomColorDecorator
    public color: undefined | string
}
console.log(new Color().color)