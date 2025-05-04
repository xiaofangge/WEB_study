function getCount(a: number, b: number): number {
    let count = 0;
    const lastNumber = Math.pow(a, b);
    for (let num = 1; num < lastNumber; num++) {
        if (arePrime(num, lastNumber)) {
            count++;
        }
    }
    return count % 998244353;
}
// 互质的意思是两个数的最大公约数为1
function arePrime(a: number, b: number) : boolean {
    // 计算最大公约数
    function gcd(a: number, b: number) : number {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    return gcd(a, b) === 1;
}

console.log(getCount(2, 5))