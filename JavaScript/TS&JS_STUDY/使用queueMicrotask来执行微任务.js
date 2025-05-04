setTimeout(() => {
    console.info("setTimeout")   
})

queryMicrotask(() => {
    console.info("queryMicrotask")
})