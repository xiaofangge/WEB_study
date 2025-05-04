const name = '小方'

const nameEncoded = encodeURIComponent(name);
console.log(nameEncoded)

const url = `wwww.baidu.com?name=${nameEncoded}`
console.log(url)