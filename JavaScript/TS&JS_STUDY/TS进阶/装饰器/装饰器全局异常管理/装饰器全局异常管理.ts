const ErrorDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<any>) => {
    const method = descriptor.value;
    descriptor.value = () => {
        try {
            method()
        } catch (e:any) {
            console.log('%c这是一个装饰器全局异常处理器', 'font-size: 25px; color: green')
            console.log(`%c${e.message}`, 'font-size: 18px; color: red;')
        }
    }
} 

class ErrorController {

    @ErrorDecorator
    public find() {
        throw new Error("您查找的用户不存在")
    }
}
new ErrorController().find()