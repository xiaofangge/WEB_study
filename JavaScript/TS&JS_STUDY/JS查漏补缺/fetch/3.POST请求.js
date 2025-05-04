const addBook = async () => {
    const obj = {
        bookname: '魔法书之如何快速学好前端',
        author: '阿尼亚',
        publisher: '格兰芬多'
    }

    const res = await fetch('http://ajax-base-api-t.itheima.net/api/addbook', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
    })

    const json = await res.json()
    console.log("json => ", json)
}

addBook()