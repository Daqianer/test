const express = require("express");
const proxy = require("http-proxy-middleware");
const history = require("connect-history-api-fallback")
const app = express();

app.use("^/dd",proxy({
    target:"http://39.97.42.25:8080",
    changeOrigin:true,
    pathRewrite:{
        "^/dd":"/"
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