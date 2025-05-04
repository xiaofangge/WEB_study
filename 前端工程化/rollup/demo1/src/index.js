// import _ from 'lodash-es'
// import { log } from "./log";
// import message from "./message";
// import { name, version } from '../package.json'
// import cjsModule from './cjs-module';

// const msg = message.Hi;

// log(msg)
// log(name)
// log(version)
// // camelCase: 转换字符串为拓峰写法
// log(_.camelCase('hello world'))
// log(cjsModule.info)

import('./log').then(({ log }) => {
    log('code Spliting')
})