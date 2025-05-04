{

    // 属性装饰器
    const PropDecorator: PropertyDecorator = (...args: any[]) => {
        console.log(args)
    }

    // 参数装饰器
    const ParamDecorator: ParameterDecorator = (...args: any[]) => {
        console.log(args)
    }

    class User {
        @PropDecorator
        public id: undefined | number;

        public showName(content: string, computed: boolean, @ParamDecorator name: string) {}
    }
}