const arr = [1, 2, 3, 4, 5];
const site = "https://www.baidu.com";
class User {
    static getName() {
        return "User static getName";
    }
}

export {
    User as default,
    arr,
    site
}