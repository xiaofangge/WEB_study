import { fetchDataFunc, fetchDataThree, fetchDataTwo } from "./fetchData";


test('fetchData 测试', (done) => {
    fetchDataFunc((data) => {
        expect(data).toEqual({
           userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
        done()
    })
})


test('fetchDataTwo 测试', () => {
    fetchDataTwo().then(response => {
        expect(response.data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
    })
})


test('fetchDataThree 测试',async () => {
    await expect(fetchDataThree()).resolves.toMatchObject({
        data: {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    })
})