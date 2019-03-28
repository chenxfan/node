const express = require("express");
let router = express.Router();

router.get("/tuijian",(req,res)=>{
	res.send("最新推荐");
});

router.get("/anwser",(req,res)=>{
	res.send("热门回答");
});

router.get("/zhuanqu",(req,res)=>{
	res.send("果壳专区");
});

module.exports = router;
