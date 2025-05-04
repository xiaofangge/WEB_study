const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let tokens = line.split(' ');
        let a = parseFloat(tokens[0]);
        let res;
        if (a >= 0 && a < 5) {
            res = parseFloat(a + 2.5).toFixed(3)
        } else if (a >= 5 && a < 10) {
            res = parseFloat(2 - 1.5 * Math.pow(a - 3, 2)).toFixed(3)
        } else if (a >= 10 && a < 20) {
            res = parseFloat(a / 2 - 1.5).toFixed(3)
        }
        console.log(res)
    }
}()
