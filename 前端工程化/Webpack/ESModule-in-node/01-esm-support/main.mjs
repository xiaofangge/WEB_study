import { foo, bar } from "./module.mjs";

console.log(`${foo}, ${bar}`)

import fs from 'fs';

fs.writeFileSync('./foo.txt', 'es module working')

// 内置模块兼容了 ESM 的提取成员方式
import { writeFileSync } from "fs";
writeFileSync('./bar.txt', 'es module working')