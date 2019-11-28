const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json())
// 服务开启后访问指定编译好的dist文件下的数据
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('/', function (req, res) {
    fs.readFile("index.html",(err,data)=>{
        console.log(data)
        // res.send(data)
    })
   
})
// 后端api路由
// app.use('/api', userApi);
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
