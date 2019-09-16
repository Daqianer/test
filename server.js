const express = require("express");
const proxy = require("http-proxy-middleware");
const history = require("connect-history-api-fallback")
const app = express();

app.use("^/http://127.0.0.1",proxy({
//     target:"http://34.83.176.200",
    changeOrigin:true,
    pathRewrite:{
        "^/http://127.0.0.1":"/"
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




app.listen(3000,function () {
    console.log("success");
})
