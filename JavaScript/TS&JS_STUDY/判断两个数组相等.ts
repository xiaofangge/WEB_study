// 1.直接遍历
const arr1: any[] = ["apple", "banana", NaN];
const arr2: any[] = ["apple", NaN, "banana"];

function fn1(arr1: any[], arr2: any[]) {
  // Array.some(): 有一项不满足，返回false
  if (arr1.length !== arr2.length) {
    return false;
  }
//   return arr1.some((item: any) => arr2.indexOf(item) === -1) ? false : true;
  return !arr1.some((item) => !arr2.includes(item));
}
console.log("直接遍历 => ", fn1(arr1, arr2));

const arr11: any[] = ["apple", "banana", "cherry", "banana"];
const arr22: any[] = ["apple", "banana", "banana", "cherry"];

function fn2(arr1: any[], arr2: any[]) {
  // Array.some(): 有一项不满足，返回false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // return arr1.some((item: any) => arr2.indexOf(item) === -1) ? false : true;
  return !arr1.some((item) => !arr2.includes(item));
}
console.log("重复元素 直接遍历 => ", fn2(arr11, arr22));

// 2.把重复元素标识编号
function fn3(arr1: any[], arr2: any[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 重复数组元素 加1、2、3
  const countArr1 = updateArray(arr1);
  const countArr2 = updateArray(arr2);

  // arr 数组 元素重复转换成 val1，val2
  function updateArray(arr: any[]) {
    const countMap: Map<any, number> = new Map();
    const updateArr: any[] = [];
    for (const ele of arr) {
      //   const cnt = !countMap.has(ele) ? 1 : countMap.get(ele)! + 1;
      const cnt = (countMap.get(ele) || 0) + 1;
      countMap.set(ele, cnt);
      updateArr.push(`${ele}${cnt}`); // 有问题
      // 等同于
      //   if (!countMap.has(ele)) {
      //     // 如果元素是第一次出现，直接添加到结果数组
      //     countMap.set(ele, 0)
      //     updateArr.push(ele)
      //   } else {
      //     // 如果元素已经出现过，添加带有编号的新元素到结果数组
      //     const count = countMap.get(ele)! + 1
      //     countMap.set(ele, count)
      //     updateArr.push(`${ele}${count}`)
      //   }
    }
    return updateArr;
  }
  // console.log("countArr1 => ", countArr1);
  // console.log("countArr2 => ", countArr2)
  return !countArr1.some((item) => !countArr2.includes(item));
}

const array1 = ["apple", "banana", "cherry", "banana"];
const array2 = ["banana", "apple", "banana", "cherry"];
console.log("把重复元素标识编号 => ", fn3(array1, array2));

// 其实这种存在漏洞的
const array3 = ["apple", "banana", "cherry", "banana", 1, "1", "1"];
const array4 = ["banana", "apple", "banana", "cherry", "1", 1, 1];
console.log("把重复元素标识编号 存在漏洞 => ", fn3(array3, array4));

// 3.统计元素次数
function fn4(arr1: any[], arr2: any[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 创建计数对象，用于记录每个元素在数组中的出现次数
  const countMap1: Map<any, number> = count(arr1);
  const countMap2: Map<any, number> = count(arr2);

  function count(arr: any[] = []) {
    const map: Map<any, number> = new Map();
    for (const item of arr) {
      map.set(item, (map.get(item) || 0) + 1);
    }
    return map;
  }

  //检查计数对象是否相等

//   console.log("countMap1 => ", countMap1)
//   console.log("countMap2 => ", countMap2)
  for (const [key, count] of countMap1) {
    if (countMap2.get(key) !== count) {
        return false;
    }
  }
  return true;
}

const array5 = ["apple", "banana", "cherry", "banana", 1, "1", "11", 11];
const array6 = ["banana", "apple", "banana", "cherry", "1", 1, "11", 11];

console.log("统计元素次数 => ", fn4(array5, array6)); // true
console.log("统计元素次数 => ", fn4(array3, array4)); // false


// 4.+1,-1
function fn5(arr1: any[], arr2: any[]) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const countMap: Map<any, number> = new Map();

    // 计算第一个数组的元素
    for (const item of arr1) {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    }

    // 比较第二个数组
    for (const item of arr2) {
        const val = countMap.get(item)
        if (val === undefined || val <= 0) {
            return false;
        }
        countMap.set(item, val - 1)
    }
    return true;
}
console.log("+1, -1 => ", fn5(array3, array4)) // false
console.log("+1, -1 => ", fn5(array5, array6))  // true




