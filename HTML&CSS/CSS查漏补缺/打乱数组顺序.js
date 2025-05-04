function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // 随机选择一个索引 j，0 <= j <= i
      const j = Math.floor(Math.random() * (i + 1));
      // 交换 array[i] 和 array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // 示例
  const arr = [1, 2, 3, 4, 5];
  console.log(shuffleArray(arr)); // 输出随机打乱后的数组，如 [3, 1, 5, 2, 4]
console.log("------------------------------------------")

// 验证随机性
function verifyRandomness(arr, iterations = 1000) {
    const counts = {};
    for (let i = 0; i < iterations; i++) {
        const shuffled = shuffleArray(arr);
        const key = shuffled.join(',');
        counts[key] = (counts[key] || 0) + 1;
    }
    return counts;
}

// 打印每种排列出现的次数
console.log(verifyRandomness([1, 2, 3], 1000));
                        