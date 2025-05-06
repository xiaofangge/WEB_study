// module.exports = {
//     foo: "hello, world"
// }

// exports.foo = "this is a foo"

const { foo } = require('./index.mjs')

console.log(foo) //  throw new ERR_REQUIRE_ESM(filename, true);