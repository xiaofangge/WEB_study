import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
}))
app.use((req, res, next) => {
    // 设置一个
    // res.setHeader
    // res.header = res.set
    res.header({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        "Access-Control-Allow-Headers": "Content-Type,a,token,secret"
    })
    
    next()
})


app.get('/getlist', (req, res) => {
    res.json({
        code: 200,
        msg: "成功",
        data: {
            a: 1
        }
    })
})
app.listen(8000)