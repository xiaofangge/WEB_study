
const getData = async () => {
    try {
        const res = await fetch("http://ajax-base-api-t.itheima.net/api/getbooks")
        console.log("res => ", res)

        const json = await res.json()
        console.log("json => ", json)
    } catch (err) {
        console.log("err => ", err)
    }
}
// getData()


console.log("-------------------------")

const getDataByParam = async () => {
    try {
        const res = await fetch("http://ajax-base-api-t.itheima.net/api/getbooks?id=2")
        console.log("res => ", res)

        const json = await res.json()
        console.log("json => ", json)
    } catch (err) {
        console.log("err => ", err)
    }
}
getDataByParam()