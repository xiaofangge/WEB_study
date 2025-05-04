import 'reflect-metadata'

let obj = {
    name: '心潮'
}

Reflect.defineMetadata("xj", {url: 'www.xinchao.com'}, obj, 'name')

console.log(Reflect.getMetadata('xj', obj, 'name'))