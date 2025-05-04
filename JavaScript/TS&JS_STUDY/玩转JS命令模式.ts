class Command {
    document: Documents = new Documents("");
    execute() {}
    undo() {}
    redo() {}
}

// 具体命令： 打开文档
class OpenDocumentCommand extends Command {
    constructor(document: Documents) {
        super()
        this.document = document;
    }
    execute(): void {
        this.document.open()
    }
    undo(): void {
        this.document.close()
    }
    redo(): void {
        this.execute()
    }
}
// 具体命令：保存文档
class SaveDocumentCommand extends Command {
    constructor(document: Documents) {
        super();
        this.document = document;
    }
    execute(): void {
        this.document.save()
    }
    undo(): void {
        // 撤销保存状态，恢复文档到上一个保存点或初始状态
        this.document.restore();
    }
    redo(): void {
        this.execute()
    }
}


// 接收者：文档
class Documents {
    name: string = "";
    content: string = "";
    saveContent: string = "";
    constructor(name: string) {
        this.name = name;
        this.content = "";
        this.saveContent = ""
    }
    open() {
        console.log(`打开文档: ${this.name}`)
    }
    close() {
        console.log(`关闭文档: ${this.name}`)
    }
    save() {
        this.saveContent = this.content
        console.log(`保存文档: ${this.name}`)
    }
    restore() {
        this.content = this.saveContent;
        console.log(`恢复文档: ${this.name}`)
    }
    setContent(content: string) {
        this.content = content;
        console.log(`设置文档内容: ${this.name}`)
    }
    getContent() {
        console.log(`获取文档内容: ${this.name}`)
        return this.content;
    }
}

// 调用者：按钮
class Button {
    commandQueue: Command[]; // 待执行命令队列
    undoStack: Command[];     // 上一次队列
    redoStack: Command[];     // 重做队列
    constructor() {
        this.commandQueue = [];
        this.undoStack = [];
        this.redoStack = [];
    }
    // 将命令加入队列
    addToQueue(command: Command) {
        this.commandQueue.push(command)
    }
    // 执行队列中的命令
    executeQueue() {
        console.log("执行命令队列: ")
        while (this.commandQueue.length > 0) {
            const command = this.commandQueue.shift();
            command?.execute();
            this.undoStack.push(command!)
        }
    }
    // 撤销上一次执行的命令
    undo() {
        if (this.undoStack.length === 0) {
            console.log("没有可撤销的命令");
            return;
        }
        const comand = this.undoStack.pop();
        comand?.undo();
        this.redoStack.push(comand!)
        console.log(`撤销上一次命令: ${comand?.document.name}`)
    }
    // 重新执行上一次撤销的命令
    redo() {
        if (this.redoStack.length === 0) {
            console.log("没有可重新执行的命令");
            return;
        }
        const command = this.redoStack.pop();
        command?.redo();
        this.undoStack.push(command!)
        console.log(`重新执行上一次撤销的命令: ${command?.document.name}`)
    }
}

// 使用事例
const doucments = new Documents("example.txt");

const openCommand = new OpenDocumentCommand(doucments)
const saveCommand = new SaveDocumentCommand(doucments)

const button = new Button()
// 将命令加入队列
button.addToQueue(openCommand)
button.addToQueue(saveCommand)
// 执行命令队列
button.executeQueue();
// 撤销命令
button.undo();
// 重新执行命令
button.redo();


