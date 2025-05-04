const SleepDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<any>) => {
    const method = descriptor.value;
    descriptor.value = () => {
        setTimeout(() => {  // 模拟保存耗时
            method()
        }, 4000)
    }
}

class Sleep {
    
    @SleepDecorator
    public show() {
        console.log("出来啦")
    }
}

new Sleep().show()