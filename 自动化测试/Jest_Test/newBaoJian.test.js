import NewBaoJian from "./newBaoJian";

const baojian = new NewBaoJian()

// 在所有测试用例执行前执行一次
// beforeAll(() => {
//     console.log("beforeAll：吃完饭后，你走进了樊曦男士SPA")
// })

// beforeEach(() => {
//     console.log("beforeEach: 躺在沙发上给300元钱")
// })

// afterEach(() => {
//     console.log("afterEach: 舒服的躺在沙发上")
// })

describe("我是父级分组", () => {
    beforeAll(() => console.log("我是父级-所有测试用例执行前"))
    describe("大脚相关服务: ", () => {

        beforeAll(() => console.log("------然后，走进了666号房间"))

        afterEach(() => {
            console.log("------大脚服务得很好，给你30元小费")
        })
        test.only("测试大脚足疗", () => {
            baojian.gongzhu(1);
            baojian.anjiao()
            console.log(baojian.fuwu)
            expect(baojian.fuwu).toEqual('大脚走进房间为你足疗')
        })
        test("测试大脚泰式SPA", () => {
            baojian.gongzhu(1);
            baojian.taishi()
            console.log(baojian.fuwu)
            expect(baojian.fuwu).toEqual('大脚走进房间服务泰式SPA')
        })
    })
    
    describe("刘莹相关服务", () => {
        afterEach(() => {
            console.log("------刘莹服务得很好，给你50元小费")
        })
        test("测试刘莹按摩", () => {
            baojian.gongzhu(2);
            baojian.anmo()
            console.log(baojian.fuwu)
            expect(baojian.fuwu).toEqual('刘莹走进房间为你按摩')
        })
        test("测试刘莹宫廷御疗", () => {
            baojian.gongzhu(2);
            baojian.gongting()
            console.log(baojian.fuwu)
            expect(baojian.fuwu).toEqual('刘莹走进房间服务宫廷御疗')
        })
    })

    afterAll(() => console.log("我是父级所有测试用例执行后"))
})







// 在所有测试用例执行完成后执行一次
// afterAll(() =>{
//     console.log("afterAll: 有钱人的生活就是这么枯燥无味")
// })