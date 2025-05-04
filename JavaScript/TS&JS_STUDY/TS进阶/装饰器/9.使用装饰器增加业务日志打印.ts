const LogMessageDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<any>) => {
    const method = descriptor.value;
    descriptor.value = () => {
        console.time('日志保存耗时')
        console.log('保存日志开始')
        console.log(method())
        setTimeout(() => {  // 模拟保存耗时
            console.log('保存日志结束')
            console.timeEnd('日志保存耗时')
        }, 4000)
    }
}

class SaveController {
    
    @LogMessageDecorator
    public save() {
        return '正在保存...'
    }
}

new SaveController().save()