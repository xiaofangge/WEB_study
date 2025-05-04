import { useEffect, useState } from 'react'

const URL = "http://geek.itheima.net/v1_0/channels"

function Son() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("子组件中的定时器执行中...")
        }, 1000)

        return () => {
            // 清除副作用
            clearInterval(timer)
        }
    }, [])
    return <div>this is son</div>
}

function useToggle() {
    const [show, setShow] = useState(true)
    const toggle = () => setShow(!show)
    
    return { show, toggle }
}
// useState()

function App() {
    // 创建一个状态数据
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    // 没有依赖， 初始+组件更新时执行
    // useEffect(() => {
    //     console.log("副作用函数执行了")
    //     // const getList = async () => {
    //     //     const res = await fetch(URL)
    //     //     const list = await res.json()
    //     //     console.log("list => ", list)
    //     //     setList(list.data.channels)
    //     // }
    //     // getList()
    // })

    // 传入[]依赖， 初始执行
    // useEffect(() => {
    //     console.log("副作用函数执行了")
    //     // const getList = async () => {
    //     //     const res = await fetch(URL)
    //     //     const list = await res.json()
    //     //     console.log("list => ", list)
    //     //     setList(list.data.channels)
    //     // }
    //     // getList()
    // }, [])

    

    // 传入特定依赖， 初始+依赖项变化执行
    useEffect(() => {
        console.log("副作用函数执行了")
        const getList = async () => {
            const res = await fetch(URL)
            const list = await res.json()
            console.log("list => ", list)
            setList(list.data.channels)
        }
        // getList()
    }, [count])

    const {show, toggle} = useToggle()
    if (Math.random() > 5) {
        // const [value, setValue] = useState("")
    }
    return <div>123
        <button onClick={() => setCount(count+1)}>{count}</button>
        <ul>
            {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
        <hr></hr>
        <h1>useEffect-清除副作用</h1>
        {show && <Son></Son>}
        <button onClick={toggle}>{show ? "卸载子组件" : "加载子组件"}</button>
        <h1>useEffect-清除副作用</h1>
    </div>
}
export default App