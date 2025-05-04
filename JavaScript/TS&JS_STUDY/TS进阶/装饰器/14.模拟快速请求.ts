const RequestDecorator = (url: string): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
        const method = descriptor.value;
        
        new Promise<any[]>((resolve, reject) => {
            setTimeout(() => {
                resolve([{ id:1001, name: '张三' }, { id:1002, name: '李四' }])
            }, 2000)
        }).then((students: any[]) => {
            method(students)
        })
    }
}

class Students {

    @RequestDecorator('http://www.baidu.com/api/user')
    public find(students: any[]) {
        console.log(students)
    }
}
