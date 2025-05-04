
const user = {
    name: "Jack",
    isLogin: true,
}

const AccessDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
    const method = descriptor.value;
    descriptor.value = () => {
        if (user.isLogin) {
            method()
        } else {
            console.log("请登录")
        }
    }
}

class Article {
    show() {
        console.log("显示文章")
    }
    @AccessDecorator
    save() {
        console.log("保存文章")
    }
}

new Article().save()    // 保存文章
user.isLogin = false;
new Article().save()    // 请登录