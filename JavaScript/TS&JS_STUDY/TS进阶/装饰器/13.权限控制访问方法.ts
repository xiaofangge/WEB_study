{
    type IUser = {
        name: string,
        isLogin: boolean,
        permissions: string[]
    }
    const user:IUser = {
        name: "Jack",
        isLogin: true,
        permissions: ['save', 'update']   // 用户拥有的权限
    }
    
    const AccessDecorator = (perms: string[]): MethodDecorator => {
        return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
            const method = descriptor.value;

            const validate = perms.every(per => user.permissions.includes(per))
            
            descriptor.value = () => {
                if (user.isLogin && validate) {
                    console.log("验证通过")
                    method()
                    return;
                } 
                console.log("验证失败")
            }
        }
    } 
    
    class Article {
        show() {
            console.log("显示文章")
        }
        @AccessDecorator(['save', 'update'])    // 要求的权限
        save() {
            console.log("保存文章")
        }
    }
    
    new Article().save()
}
