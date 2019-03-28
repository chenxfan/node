const express = require("express");
const path = require("path");
const fs = require("fs");

let app =express();

//访问静态资源
app.use(express.static(path.join(__dirname,"public")));


//注册
app.post("/doregister",(req,res)=>{
	
	let data = "";
	req.on("data",(chunk)=>{
		data+=chunk;
	})
	req.on("end",()=>{
		console.log(data);
		let obj = JSON.parse(data);
		fs.writeFile()
	})
	
	let obj = {
		success:1,
		message:"注册成功"
	}
	res.send(JSON.stringify(obj));
})


//监听8080端口
app.listen(8080,()=>{
	console.log("服务运行在8080端口")
});