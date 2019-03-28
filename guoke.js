const express = require("express");
let app = express();

app.use("/home",require("./router/gkhome.js"));
app.use("/man",require("./router/kexueren.js"));
app.use("/music",require("./router/music.js"));

app.get("/login",(req,res)=>{
	res.send("登录");
});
app.get("/zhuce",(req,res)=>{
	res.send("注册");
});
app.listen(8080,()=>{
	console.log("服务运行在8080");
});