/**
 * 循环len次将卡牌往后移
 * @param arr 
 * @param len 
 */
function moveCardBack(arr: string[], len: number) : string[] {
    for (let i = 0; i < len; i++) {
        const backEle = arr.shift();
        arr.push(backEle!);
    }
    return arr;
}
/**
 * 将arr前面len张牌插到中间位置
 * @param arr 
 * @param len 
 */
function moveCardMiddleRandom(arr: string[], len: number): string[] {
    // 这个位置必须是在len+1到arr.length-1之间
    const middlePosition = Math.floor(Math.random() * (arr.length - len - 1)) + len+1;
    return [...arr.slice(len, middlePosition), ...arr.slice(0, len), ...arr.slice(middlePosition)]
}

// 步骤一：初始化8张牌，假设为 ["J", "B", "K", "A", "J", "B", "K", "A"]
const initArr = ["J", "B", "K", "A", "J", "B", "K", "A"];
console.log("第一步，拿出四张牌, 对折成八张, 序列为 => ", initArr.join("") + "\n---")

// 步骤二：名字长度随机选取，这里取2到5（其实任意数字都行）
const nameLen = Math.floor(Math.random() * 4) + 2;
const secondArr = moveCardBack(initArr, nameLen)
console.log(`第二步，随机选取名字长度为${nameLen}, 将前面${nameLen}张卡片移到后面, 序列为 => ` + secondArr.join("") + "\n---")

// 步骤三：把牌堆顶三张放到中间任意位置
const thirdArr = moveCardMiddleRandom(secondArr, 3)
console.log("第三步，将牌堆顶三张放到中间任意位置, 序列为 => ", thirdArr.join("") + "\n---")

// 步骤四: 将顶牌放起来
const topEle = thirdArr.shift();
console.log(`步骤四，把顶上的牌拿走，拿走的牌为⭐️⭐️【${topEle}】⭐️⭐️，这时，序列为 => `, thirdArr.join("") + "\n---")

// 步骤五（无关步骤）：根据南方人/北方人/不确定，把顶上的1/2/3张牌插入到中间任意位置
// 随机选择1、2、3中的任意一个数字
const moveNum = Math.floor(Math.random() * 3) + 1;
const fifthArr = moveCardMiddleRandom(thirdArr, moveNum)
console.log(`步骤五，我${moveNum === 1 ? "是南方人" : moveNum === 2 ? "是北方人" : "不确定自己是什么人"}, 把${moveNum}张牌插入到中间任意位置，序列为 => `, fifthArr.join("") + "\n---")

// 步骤六（关键步骤）：根据性别男或女，移除牌堆顶的1或2张牌
const maleNum = Math.floor(Math.random() * 2) + 1;
for (let i = 0; i < maleNum; i++) {
    fifthArr.shift()
}
console.log(`步骤六，我是${maleNum === 1 ? "男" : "女"}生，移除顶部的${maleNum}张牌，此时，序列为 => ` + fifthArr.join("") + "\n---")

// 步骤七（关键步骤）：把顶部的牌移动到末尾，执行7次（见证奇迹的时刻）
const sevenArr = moveCardBack(fifthArr, 7)
console.log("步骤七，把顶部的牌移动到末尾，执行7次，此时，序列为 => ", sevenArr.join("") + "\n---")

// 步骤八（关键步骤）：好运留下来，烦恼丢出去，到最后一张
console.log(`步骤八：把牌堆顶一张牌放到末尾，再移除一张牌，直到只剩下一张牌。`);
while(sevenArr.length > 1) {
    const topLuckEle = sevenArr.shift(); 
    sevenArr.push(topLuckEle!)  // 好运留下来
    console.log(`好运留下来:${topLuckEle}, 此时序列为 => ${sevenArr.join("")}`)
    const topWorryEle = sevenArr.shift(); // 烦恼丢出去
    console.log(`烦恼丢出去:${topWorryEle}, 此时序列为 => ${sevenArr.join("")}`)
}

console.log(`---\n最终结果 => ⭐️⭐️【${sevenArr[0]}】⭐️⭐️, 步骤四拿走的牌 => ⭐️⭐️【${topEle}】⭐️⭐️`)
