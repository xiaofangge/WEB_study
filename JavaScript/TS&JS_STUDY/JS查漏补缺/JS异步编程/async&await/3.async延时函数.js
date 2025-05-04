const sleep = async (delay = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}


const show = async () => {
    for (name of ['小芳', '小红']) {
        await sleep()
        console.log(name)
    }
}
show()