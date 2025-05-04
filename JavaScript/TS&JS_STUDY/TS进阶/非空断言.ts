let ruichuan: string | undefined | null = "fangruichuan"

// ruichuan = undefined // 不能将类型“undefined”分配给类型“string”


ruichuan = null;

// const el: HTMLDivElement = document.querySelector(".div") as HTMLDivElement;

const el: HTMLDivElement = document.querySelector(".div")!; // 非空断言