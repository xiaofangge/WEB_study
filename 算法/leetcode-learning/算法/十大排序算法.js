
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

// 1、冒泡排序
const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) { // 相邻元素两两比较
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // 元素交换
            }
        }
    }
    return arr;
}
console.log("冒泡排序 => ", bubbleSort(arr))


// 2、快速排序 - 分治法
const quickSort = (arr) => {

    const sort = (arr, low, high) => {
        if (low >= high) {
            return;
        }
    
        let i = low;    
        let j = high
        const x = arr[i]; // 取出比较值
        while (i < j) {
            // 从数组尾部，找出比x小的数，放到左边
            while (arr[j] >= x && i < j) {
                j--;
            }
            // 将空出的位置，填入当前值，下标j位置空出
            if (i < j) {
                arr[i] = arr[j];
                i++;
            }
    
            // 从数组头部，找出比x大的数字
            while (arr[i] <= x && i < j) {
                i++;
            }
    
            // 将数字填入下标j中，下标i位置突出
            if (i < j) {
                arr[j] = arr[i];
                j--;
            }
            // 一直循环到左右指针i、j相遇
            // 相遇时，i==j，所以下标i位置空出的
        }
        arr[i] = x; // 将空出的位置，填入缓存的数字x，一轮排序完成
    
        // 分别对剩下的两个区间进行递归排序
        sort(arr, low, i - 1);
        sort(arr, i + 1, high);
    }

    sort(arr, 0, arr.length - 1);  
    return arr;
   
}

console.log("快速排序 => ", quickSort(arr))


// 3.1、希尔排序 - 执行插入时，使用交换法
const shellSort = (arr) => {
    // 分组规则 gap 递减
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            // 分组内数据，执行插入排序
            // 当下标大的数字，小于 下标小的数字，进行交互
            // 分组内的数字，并不是一次性比较完，需要i逐步递增，包括下个分组内的数字
            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
                j = j - gap;
            }
        }
    }
    return arr;
}
console.log("希尔排序(交换法) => ", shellSort(arr))
// 3.2、希尔排序 - 执行插入时，使用移动法
const shellSort2 = (arr) => {
    // 分组规则 gap 递减
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            // 缓存数字，空出位置
            const x = arr[j];
            // 分组内数据，执行插入排序
            // 当下标大的数字，小于 下标小的数字，进行交互
            // 分组内的数字，并不是一次性比较完，需要i逐步递增，包括下个分组内的数字
            while (j - gap >= 0 && x < arr[j - gap]) {
                arr[j] = arr[j - gap];  // 将符合条件的数字，填入空出的位置
                j = j - gap;
            }
            arr[j] = x; // 将缓存的数字，填入空出的位置
        }
    }
    return arr;
}
console.log("希尔排序(移动法) => ", shellSort2(arr))


// 4、选择排序
const selectionSort = (arr) => {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // 元素交换
            }
        }
    }
    return arr;
}
console.log("选择排序 => ", selectionSort(arr))

// 5、归并排序 - 分治
const mergeSort = (arr) => {

    // 合并两个有序数组
    const mergeSort = (leftArr, rightArr) => {
        let left = 0;
        let right = 0;
        const temp = [];

        // 使用双指针，对两个数组进行扫描
        while (left < leftArr.length && right < rightArr.length) {
            if (leftArr[left] < rightArr[right]) {
                temp.push(leftArr[left++]);
            } else {
                temp.push(rightArr[right++]);
            }
        }

        // 合并剩下的内容
        if (left < leftArr.length) {
            while (left < leftArr.length) {
                temp.push(leftArr[left++]);
            }
        }

        if (right < rightArr.length) {
            while (right < rightArr.length) {
                temp.push(rightArr[right++]);
            }
        }

        return temp;
    }

    // sort 方法，进行递归
    const sort = (arr, left, right) => {
        // 当 left !== right 时，证明还没拆分到最小元素
        if (left < right) {
            // 取中间值，拆分为两个小的数组
            const mid = Math.floor((left + right) / 2);
            // 递归拆分左边数组
            const leftArr = sort(arr, left, mid);
            // 递归拆分右边数组 
            const rightArr = sort(arr, mid + 1, right);
            // 合并两个数组
            return mergeSort(leftArr, rightArr)
        }

        // left === right 时，已经是最小元素，直接返回即可
        return left >= 0 ? [arr[left]] : []
    }

    return sort(arr, 0, arr.length - 1);
}
console.log("归并排序 => ", mergeSort(arr))


// 6、插入排序
const insertionSort = (arr) => {
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        let preIndex = i - 1;
        let current = arr[i];

        // 位置i之前，是已排好序的数字，while的作用是找到一个坑位，给当前数字current插入
        while (preIndex >= 0 && arr[preIndex] > current) {
            // 对大于current的值，往后移一位，给current的插入腾出位置
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
console.log("插入排序 => ", insertionSort(arr))


// 7、堆排序
const heapSort = (arr) => {
    const len = arr.length;

    // 构建大顶堆
    const heapify = (arr, i, len) => {
        let temp = arr[i];
        for (let k = i * 2 + 1; k < len; k = k * 2 + 1) {
            // 先判断左右叶子节点，哪个比较大
            if (k + 1 < len && arr[k + 1] > arr[k]) {
                k++;
            }
            // 将最大的叶子节点，与当前的值进行比较
            if (arr[k] > temp) {
                // k节点大于i节点的值，需要交换
                arr[i] = arr[k];
                i = k;
            } else {
                break;
            }
        }

        // i是交换后的下标，将temp放到该下标处
        arr[i] = temp;
    }

    // 构建大顶堆
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        // 开始的第一个节点是 树的最后一个非叶子节点
        // 从构建子树开始，逐步调整
        heapify(arr, i, len);
    }

    // 堆排序
    for (let j = len - 1; j > 0; j--) {
        // 交换堆顶元素和最后一个元素
        [arr[0], arr[j]] = [arr[j], arr[0]];
        // 重新调整堆
        heapify(arr, 0, j);
    }

    return arr;
}
console.log("堆排序 => ", heapSort(arr))


// 8、计数排序
const countingSort = (arr) => {
    let maxValue = Number.MIN_VALUE;
    let minValue = Number.MAX_VALUE;
    // 位移，用于处理负数
    let offset = 0;

    const result = [];

    // 取出数组的最大值，最小值
    arr.forEach(num => {
        maxValue = Math.max(minValue, num);
        minValue = Math.min(minValue, num);
    })

    if (minValue < 0) {
        offset = -minValue;
    }
    console.log("maxValue => ", maxValue)
    console.log("minValue => ", minValue)
    console.log("offset => ", offset)
    // 计数数组
    const bucket = new Array(maxValue+offset+1).fill(0); // 初始化连续的格子

    // 将数组中的每个数字，根据值放入对应的下标中
    arr.forEach(num => bucket[num + offset]++)
    
    // 读取格子中的数
    bucket.forEach((store, index) => {
        while(store--) {
            result.push(index - offset);
        }
    });
    return result;
}
console.log("计数排序 => ", countingSort(arr))


// 9、桶排序（分治法+空间换时间）
const bucketSort = (arr, bucketSize = 10) => {
    // bucketSize 每个桶可以存放的数字区间 [0, 9]
    if (arr.length <= 1) {
        return arr;
    }
    let [maxValue, minValue] = Array.of(arr[0], arr[0]);
    let result = [];

    // 取出数组的最大值，最小值
    arr.forEach(num => {
        maxValue = Math.max(maxValue, num);
        minValue = Math.min(minValue, num);
    })

    // 初始化桶的数量
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;

    // 初始化桶的容器
    // 这里的js语法，不能直接 fill([])，因为生成的二维下标数组，是同一个地址
    const buckets = new Array(bucketCount).fill(0).map(() => []); // [[], [], [], [], ...]

    // 将数字按照映射的规则，放入桶中
    arr.forEach(num => {
        const bucketIndex = Math.floor((num - minValue) / bucketSize)
        buckets[bucketIndex].push(num);
    })

    // 遍历每个桶内存储的数字
    buckets.forEach(store => {
        // 桶内只有1个数字或者空桶，或者都是重复数字，则直接合并到结果中
        if (store.length <= 1 || bucketSize === 1) {
            result = result.concat(store);
            return;
        }
        // 递归，将桶内的数字，再进行一次划分到不同的桶中
        const subSize = Math.floor(bucketSize / 2); // 减少桶内的数字区间，但必须是最少为1
        const temp = bucketSort(store, subSize <= 1 ? 1 : subSize);
        result = result.concat(temp);
    })
    return result;
}
console.log("桶排序 => ", bucketSort(arr))

// 10、基数排序
const radixSort = (arr) => {
    let maxNum = arr[0];

    // 求出最大的数字，用于确定最大进制位
    arr.forEach(num => {
        if (num > maxNum) {
            maxNum = num;
        }
    })

    // 获取最大数字有几位
    let maxDigitNum = 0;
    while (maxNum) {
        maxNum = Math.floor(maxNum / 10);
        maxDigitNum++;
    }

    /**
     * 求出数字每个进制位上的数字，只支持正整数
     * @param {*} num 整数 
     * @param {*} digit 位数，从0开始
     * @returns 
     */
    const getDigitNum = (num, digit) => {
        return Math.floor((num / Math.pow(10, digit)) % 10);
    }

    // 对每个进位上的数进行排序
    for (let i = 0; i < maxDigitNum; i++) {
        // 初始化10个桶
        let buckets = new Array(10).fill(0).map(() => [])
        for (let k = 0; k < arr.length; k++) {
            // 获取当前进位上的数字
            const bucketIndex = getDigitNum(arr[k], i);
            // 排序的数字放入对应桶中
            buckets[bucketIndex].push(arr[k]);
        }
        // 所有数字放入桶中后，现从0-9的顺序将桶中的数字取出
        const res = [];
        buckets.forEach(bucket => {
            bucket.forEach(num => {
                res.push(num);
            })
        })
        arr = res;
    }
    return arr;
}
console.log("基数排序 => ", radixSort(arr))
