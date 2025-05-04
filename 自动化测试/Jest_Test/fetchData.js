import axios from "axios";

export const fetchDataFunc = (fn) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
        fn(res.data)
    })
}


export const fetchDataTwo = () => axios.get('https://jsonplaceholder.typicode.com/posts/1')

export const fetchDataThree = () => axios.get('https://jsonplaceholder.typicode.com/posts/1')