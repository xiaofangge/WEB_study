// 字符串模板与extends/infer
type str = "beyond";

// 获开头
type getFirst<T> = T extends `${infer First}${infer Rest}`? First : never;
type FirstLetter = getFirst<str>; // type FirstLetter = "b"

// 获取除开头的部分
type getRest<T> = T extends `${infer First}${infer Rest}` ? Rest : never;
type RestLetters = getRest<str>; // type RestLetters = "eyond"

// 以y分隔
type Split<T> = T extends `${infer Front}y${infer Back}` ? Back : never;
type Splitted = Split<str>; // type Splitted = "ond"


// 1. 判断开头
type startsWidth<str extends string, prefix extends string> = str extends `${prefix}${infer Rest}` ? true : false;
type startsWidthKong = startsWidth<"kong", "">; // type startsWidthKong = true
type StartsWithBe = startsWidth<str, "be">; //type StartsWithBe = true
type StartsWithC = startsWidth<str, "c">; // type StartsWithC = false



// 2、转为首字母大写
type UppercaseFirst<T extends string> = T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : never;
type UppercaseStr = UppercaseFirst<str>; // type UppercaseStr = "Beyond"


// 3. 文本替换
type ReplaceOne<str extends string, from extends string, to extends string> = str extends `${infer Front}${from}${infer Rest}` ? `${Front}${to}${Rest}` : str;
type ReplaceStr = ReplaceOne<str, "o", "a">; // type ReplaceStr = "beyand"


// 4. 键值对转索引  a=1 => {a:1}
type ConvertStrToRecord<str extends string> = str extends `${infer key}=${infer value}` ? { [k in key]: value } : never;
type ConvertStrToRecordStr = ConvertStrToRecord<"a=1">; 
// type ConvertStrToIndexStr = {
    // a: "1";
// }



// as 重映射-索引的重命名

// 1. 索引大写
interface IOut {
    aaa: 1,
    bbb: 2,
    fun: () => void
}
type UpperKeys<T extends Record<string, any>> = {
    [K in keyof T as (T[K] extends Function ? K : Uppercase<K>)]: T[K]
}
type res = UpperKeys<IOut>;
// type res = {
//     AAA: 1;
//     BBB: 2;
//     fun: () => void;
// }


// 2. 合并索引
interface IOut2 {
    ccc: 3,
    ddd: 4
}
type CombineIndex<A extends Record<string, any>, B extends Record<string, any>> = {
    [K in keyof A | keyof B] : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never
}
type combine = CombineIndex<IOut, IOut2>;
// type combine = {
//     aaa: 1;
//     bbb: 2;
//     fun: () => void;
//     ccc: 3;
//     ddd: 4;
// }


// 巧用递归

// 1. 文本替换 替换所有
type ReplaceAll<Str extends string, From extends string, To extends string> = Str extends `${infer Front}${From}${infer Rest}` ? `${Front}${To}${ReplaceAll<Rest, From, To>}` : Str;
type ReplaceAllStr = ReplaceAll<"12333333456", "3", "A">; // type ReplaceAllStr = "12AAAAAA456"

// 2. 字符串反转
type Reverse<Str extends string, Res extends string = ""> = Str extends `${infer First}${infer Rest}` ? Reverse<Rest, `${First}${Res}`> : Res;
type ReverseStr = Reverse<"hello">; // type ReverseStr = "olleh"




// 解析字符串
// a=1&b=2&c=3 => {a:1, b:2, c:3}
/**
 * 1. & 分割取 键值对 处理
 * 2. 处理单个的 键值对 转换为 索引类型
 * 3. 把 转换后的 索引类型 合并
 */
type Parse<Str extends string, Res extends Record<string, any> = {}> = 
  Str extends `${infer One}&${infer Rest}` ?
  Parse<Rest, CombineIndex<Res, ConvertStrToRecord<One>>> :
  CombineIndex<Res, ConvertStrToRecord<Str>>

type parseToRecord = Parse<"a=1&b=2&c=3">; // type parseToRecord = {a: "1", b: "2", c: "3"}


// 升级
// 如果只有键没有值，则返回 {key: true}
type ConvertStrToRecordUp<Str extends string> = Str extends `${infer Key}=${infer Value}` ? 
    { [K in Key] : Value } : Str extends `${infer Key}` ? { [K in Key]: true } : {};
type ConvertStrToRecordUpStr = ConvertStrToRecordUp<"a">;
// type ConvertStrToRecordUpStr = {
//     a: true;
// }

// 合并重复索引
type CheckDuplicate<A extends Record<string, any>, B extends Record<string, any>> = keyof B extends keyof A ? AddR<A, B> : CombineIndex<A, B>;
type AddR<A extends Record<string, any>, B extends Record<string, any>> = {
    [K in keyof A] : K extends keyof B ?
    CheckInclue<A[K], B[K]> extends true ? A[K] :  // 重复索引，合并值，值不能重复
    A[K] extends any[] ? [...A[K], B[K]] : [A[K], B[K]] : A[K]
}

type CheckInclue<A extends any[], B extends string> = A extends [infer First, ...infer Rest] ? 
    First extends B ? true : CheckInclue<Rest, B> : false;
type checkIncludeDemo = CheckInclue<["a", "b", "c"], "a">; // type checkIncludeDemo = true


type ParseUp<Str extends string, Res extends Record<string, any> = {}> = 
  Str extends `${infer One}&${infer Rest}` ?
  ParseUp<Rest, CheckDuplicate<Res, ConvertStrToRecordUp<One>>> :
  CheckDuplicate<Res, ConvertStrToRecordUp<Str>>

type parseToRecordUp = ParseUp<"a=1&b&a=2&a=3&c&d=4&e&e=10&a=3">; 
// type parseToRecordUp = {
//     b: true;
//     c: true;
//     a: ["1", "2", "3"];
//     e: [true, "10"];
//     d: "4";
// }