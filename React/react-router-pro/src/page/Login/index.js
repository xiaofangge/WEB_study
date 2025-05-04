import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return <div>
        我是登录页面
        {/* 声明式导航 */}
        <p><Link to="/article">跳转到文章页</Link></p>
        {/* 编程式导航 */}
        <p><button onClick={() => navigate("/article")}>跳转到文章页</button></p>
        <p><button onClick={() => navigate("/article?id=1001&name=fangruichuan")}>searchParams传参</button></p>
        <p><button onClick={() => navigate("/article/1002/jack")}>Params传参</button></p>
        </div>;
};

export default Login;