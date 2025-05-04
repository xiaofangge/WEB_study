const numbers = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
/**
 * 返回固定格式的电话号码
 * @param numbers numbers [1,2,3,4,5,6,7,8,9,0]
 * @returns (123) 456-7890
 */
function phoneNumber1(numbers: number[]) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}
console.log("phoneNumbers1 => ", phoneNumber1(numbers));
