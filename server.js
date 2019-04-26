const express = require("express");
const proxy = require("http-proxy-middleware");
const history = require("connect-history-api-fallback")
const app = express();

app.use("^/lh",proxy({
    target:"http://39.106.215.229:8084",//http://10.9.67.44:8084/
    changeOrigin:true,
    pathRewrite:{
        "^/lh":"/"
    }
}))
// url重写  将所有的请求指向index.html
app.use(history(
    {
        // index:"index.html",
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    }
));
// app.use("^/lh",function (req,res) {
//     console.log(121212);
//     res.json({
//         ok:3
//     })
// })

app.use(express.static(__dirname+"/dist"));
//




app.listen(80,function () {
    console.log("success");
})