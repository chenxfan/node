const express = require("express");
let router = express.Router();

router.get("/tuijian",(req,res)=>{
	res.send("推荐专区");
});

router.get("/hot",(req,res)=>{
	res.send("热点");
});

router.get("/qianyan",(req,res)=>{
	res.send("前沿");
});

router.get("/guandian",(req,res)=>{
	res.send("观点");
});

router.get("/shijue",(req,res)=>{
	res.send("视觉");
});

router.get("/yaoyan",(req,res)=>{
	res.send("谣言");
});

router.get("/live",(req,res)=>{
	res.send("生活");
});

router.get("/zhuanlan",(req,res)=>{
	res.send("专栏");
});

module.exports = router;