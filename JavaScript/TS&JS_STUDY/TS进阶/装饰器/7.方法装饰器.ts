const ShowDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    descriptor.value = () => {
        console.log("我是大帅哥")
    }
}


class User {
    @ShowDecorator
    public show() {
        console.log("我是大傻逼")
    }
}
new User().show()