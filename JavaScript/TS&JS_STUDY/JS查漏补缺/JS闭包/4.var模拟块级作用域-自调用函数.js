for (var i = 0; i < 3; i++) {
    ((a) => {
        setTimeout(() => {
            console.log(a)
        }, 1000)
    })(i)
}