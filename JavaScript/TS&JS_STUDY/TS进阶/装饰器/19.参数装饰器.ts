import 'reflect-metadata'
{

    const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => {
        // 哪些参数需要验证
        let requiredParam: number[] = []
        requiredParam.push(parameterIndex)

        Reflect.defineMetadata('required', requiredParam, target, propertyKey!)
    }

    const ValidateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
        const method = descriptor.value;
        descriptor.value = function () {
            const requiredParam: number[] = Reflect.getMetadata('required', target, propertyKey) || [];
            requiredParam.forEach(index => {
                if (index > arguments.length || arguments[index] === undefined) {
                    throw new Error('请传递必要的参数')
                }
            })
            method.apply(this, arguments)
        }
    }

    class User {

        @ValidateDecorator
        find(name: string, age: number, @RequiredDecorator id: number) {
            console.log(id)
        }
    }

    new User().find("心潮", 23, 1002) // 1002
}