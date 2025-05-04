const MessageDecorator: ClassDecorator = (target: Function) => {
    target.prototype.message = (content: string) => {
        console.log(content)
    }
}

@MessageDecorator
class RegisterController {
    public register() {
        console.log("注册业务处理中，请稍等...")
        setTimeout(() => {
            (<any>this).message('注册成功')
        }, 2000)
    }
}
const register = new RegisterController()
register.register()


@MessageDecorator
class LoginController {
    public login() {
        setTimeout(() => {
            console.log("登录业务处理中，请稍后...")
        }, 3000)
        setTimeout(() => {
            (<any>this).message('登录成功')
        }, 5000)
    }
}
const login = new LoginController()
login.login()