import {useState, createContext, useContext} from 'react'


// 父传子
// 父组件传递数据，在子组件标签身上绑定属性来传递
// 子组件接收数据，使用props对象来接收父组件传递过来的数据


function Son(props) {
    const sonMsg = "this is a son msg"
    // props 为只读属性
    console.log("props => ", props)
    // props.name = "new Name" 报错
    const handleSonMsg = () => {
        props.onGetSonMsg(sonMsg)
    }
    return (
        <>
            <div>this is son, {props.name}, jsx: {props.child}, children: {props.children}</div>
            <button onClick={handleSonMsg}>发送</button>
        </>
    )
}

function A({onGetSonAMsg}) {
    const msg = "this is A msg"
    const handleSend = () => {
        onGetSonAMsg(msg)
    }
    return <div>this is SonA component {msg} <button onClick={handleSend}>发送到B</button></div>
}

function B({msg}) {
    return <div>this is SonB component {msg}</div>
}


// 跨层通信
const MsgContext = createContext()
function C() {
    return <div>
        this is C
        <D></D>
    </div>
}

function D() {
    const grandFatherMsg = useContext(MsgContext)
    return <div>this is D {grandFatherMsg}</div>
}

function App() {
    const [msg, setMsg] = useState("")
    const name = "this is app name"
    const getSonMsg = (msg) => {
        console.log("msg => ", msg)
        setMsg(msg)
    }
    const [sonAmsg, setSonAmsg] = useState("")
    const getSonAMsg = (msg) => {
        console.log("SonA msg => ", msg)
        setSonAmsg(msg)
    }
    return (
        <div>
            this is Father, {msg}
            <Son 
                onGetSonMsg={getSonMsg}
                name={name}
                age={20}
                isTrue={true}
                fun={() => { console.log("fun") }}
                child={<span>this is a span</span>}
                list={['react', 'vue', 'angular']}
                obj={{address: "xxxx", 外号: "山鸡"}}
            >
                <span>this is a p</span>
            </Son>


            <hr></hr>
            <h2>兄弟组件通信</h2>
            <ul>
                <li>1、子传父</li>
                <li>2、父传子</li>
            </ul>
            <A onGetSonAMsg={getSonAMsg}></A>
            this is Father Component
            <B msg={sonAmsg}></B>

            <hr></hr>
            <h2>使用Context跨层级组件通信</h2>
            <ul>
                <li>1、createContext()方法创建一个上下文对象</li>
                <li>2、在顶层组件中使用Provider组件提供数据</li>
                <li>3、在底层组件中，通过使用useContext钩子函数使用数据</li>
            </ul>
            <MsgContext.Provider value={name}>
                this is Father
                <C></C>
            </MsgContext.Provider>
        </div>
    )
}
export default App;