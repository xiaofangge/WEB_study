const SleepDecoratorFactory = (times: number): MethodDecorator => (...args: any[]) => {
    const [,,descriptor] = args;
    const method = descriptor.value;
    descriptor.value = () => {
        setTimeout(() => {
            method()
        }, times)
    }
}

const PrintTimeoutDecorator: MethodDecorator = (...args: any[]) => {
    const [,,descriptor] = args
    const method = descriptor.value;
    descriptor.value = () => {
        console.time("耗时")
        method()
        console.timeEnd("耗时")
    }
}

class SleepController {
    
    @SleepDecoratorFactory(2000)
    @PrintTimeoutDecorator
    public showMsg() {
        console.log('老子出来了')
    }
}

new SleepController().showMsg()