// 项目的根组件
import './index.css'
import { useState, useRef } from "react";

// App => index.js => public/index.html(root)
function App() {

  const a = 10;
  function getName() {
    return "心潮"
  }

  const getAge = () => {
    return "18岁"
  }

  const data = [
    {id: 1001, name: "Vue"},
    {id: 1002, name: "React"},
    {id: 1003, name: "Angular"}
  ]

  const isLogin = false;  

  const artileType = 3;

  function getArtile() {
    switch (artileType) {
      case 0: return <div>我是无图模式</div>
      case 1: return <div>我是单图模式</div>
      case 2: return <div>我是双图模式</div>
      case 3: return <div>我是三图模式</div>
      default: return <div>默认模式</div>
    }
  }

  const handleClick = () => {
    window.alert("点击了")
  }

  // 定义组件: 首字母大写
  function MyButton() {
    return <button onClick={handleClick}>click me</button>
  }

  // 调用useState() 添加一个状态变量(数据驱动视图)
  const [count, setCount] = useState(0)
  const handleCountClick = () => {
    // 用新值修改count，然后重新渲染UI
    setCount(count + 1)

    // 直接修改，无法更新
    // count++;
    // setCount(count)
  }


  const [form, setForm] = useState({ name: "jack" })
  const handleFormChange = () => {
    // 直接修改，无法更新
    // form.name = "john"

    setForm({
      ...form,
      name: "John"
    })
  }

  const myLineStyle = {
    color: "red"
  }

  // 声明一个react状态
  const [value, setValue] = useState("")

  // 声明一个ref对象
  const inputRef = useRef(null);
  const showInputDom = () => {
    console.dir(inputRef.current)
  }

  return (
    <div className="App">
      this is App
      {/* 识别字符串 */}
      <p>{'this is a message'}</p>

      {/* 识别js变量 */}
      <p>{a}</p>

      {/* 函数调用 */}
      <p>{getName()}</p>

      {/* 方法调用 */}
      <p>{new Date().getMonth()}</p>

      {/* 使用js对象 */}
      <p style={{ color: "red" }}>{getAge()}</p>
      <hr></hr>


      {/* 循环渲染: 每个元素加上key，提升渲染 */}
      <ul>
        {
          data.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
      <hr></hr>

      {/* 条件渲染 */}
      <span>{isLogin && <p>真漂亮</p>}</span>
      <span>{isLogin ? <p>{"已登录"}</p> : <p>{"loading..."}</p>}</span>

      <hr/>
      {/* 复杂条件渲染 */}
      {getArtile()}

      <hr></hr>
      <MyButton></MyButton>
      <MyButton />
      <hr></hr>
      <button onClick={handleCountClick}>{count}</button>
      <button onClick={handleFormChange} style={{ marginLeft: "1em" }}>修改form</button> <span>{form.name}</span>

      <hr></hr>
      {/* 行内样式控制 */}
      <p style={myLineStyle}>行内样式控制</p>
      {/* 通过className来控制 */}
      <p className="foo">通过className来控制</p>

      <hr></hr>
      <div className='marquee'>
        <span>Lorem ipsum dolor sit amet elit. Animi, aliquid.</span>
      </div>
      <hr></hr>

      {/* 绑定受控表单 */}
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <hr></hr>

      <input type='text' ref={inputRef} value={"123"} />
      <button onClick={showInputDom}>获取DOM对象</button>
    </div>
  );
}

export default App;
