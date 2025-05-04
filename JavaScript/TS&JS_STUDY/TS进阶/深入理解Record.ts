type Direction = "up" | "right" | "down" | "left";
type RecordDirection = Record<Direction, number>

const direction: RecordDirection = {
    up: 1,
    right: 2,
    down: 3,
    left: 4
}


// 初始化对象
interface IPerson {
    name: string;
    age: number;
    email?: string;
    gender?: string;
}

type Person = Record<keyof IPerson, string>
const person: Person = {
    name: "Xinchao",
    age: "25",
    email: 'test@126.com',
    gender: '男'
}


// 枚举值管理
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
type ColorHexCode = Record<Color, string>

const colorHexCode: ColorHexCode = {
    [Color.Red]: '红色',
    [Color.Green]: '绿色',
    [Color.Blue]: '蓝色'
}