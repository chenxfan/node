const express = require("express");

let app =express();

//接入子路由
app.use("/home",require("./router/home.js"));
app.use("/read",require("./router/read.js"));
app.use("/movie",require("./router/movie.js"));

app.listen(8080,(res,req)=>{
	console.log("服务运行在8080")
})

app.get("/zhuce",(req,res)=>{
	res.send("zhuce");
});

app.get("/denglu",(req,res)=>{
	res.send("denglu");
});