export default class NewBaoJian {
    gongzhu(number) {
        this.user = number === 1 ? '大脚' : '刘莹'
    }

    anjiao() {
        this.fuwu = `${this.user}走进房间为你足疗`
    }

    anmo() {
        this.fuwu = `${this.user}走进房间为你按摩`
    }

    taishi() {
        this.fuwu = `${this.user}走进房间服务泰式SPA`
    }

    gongting() {
        this.fuwu = `${this.user}走进房间服务宫廷御疗`
    }
}