// 定义观察者对象
class Observer {
    observers: any[];
    constructor() {
        this.observers = [];
    }
    // 添加观察者
    addObserver(observer: any) {
        this.observers.push(observer);
    }
    // 移除观察者
    removeObsrver(observer: any) {
        this.observers = this.observers.filter(item => item !== observer);
    }
    // 通知观察者
    notify(message: any) {
        this.observers.forEach(observer => observer.update(message));
    }
}

// 定义具体的观察者对象
class ConcreateObserver {
    update(message: any) {
        console.log(`收到消息：${message}`);
    }
}

// 使用事例
const observer = new Observer();
const observer1 = new ConcreateObserver();
const observer2 = new ConcreateObserver();
observer.addObserver(observer1);
observer.addObserver(observer2);

observer.notify('hello'); // 收到消息：hello
// 收到消息：hello
// 收到消息：hello

observer.removeObsrver(observer1);

observer.notify('world'); // 收到消息：world
// 收到消息：world