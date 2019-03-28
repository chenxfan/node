const express = require("express");
let router = express.Router();

router.get("/newbook",(req,res)=>{
	res.send("新书");
});

router.get("/list",(req,res)=>{
	res.send("图书榜");
});

router.get("/dianzishu",(req,res)=>{
	res.send("电子书");
});

router.get("/biaoqian",(req,res)=>{
	res.send("热门标签");
});

module.exports = router;