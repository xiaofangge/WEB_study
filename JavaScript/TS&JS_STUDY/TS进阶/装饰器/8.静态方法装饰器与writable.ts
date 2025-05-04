{
    const ShowDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
        descriptor.value = () => {
            console.log("我是大帅哥")
        }
        descriptor.writable = false;
    }
    
    
    class User {
        @ShowDecorator
        public static show() {
            console.log("我是大傻逼")
        }
    }
    User.show()
    console.log("-----------")
    User.show = () => {     // Cannot assign to read only property 'show' of function 'class User
        console.log("我真牛逼")
    }
    User.show()
}