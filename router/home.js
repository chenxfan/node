const express = require("express");
//创建路由实例
let router = express.Router();

//子路由
router.get("/hot",(req,res)=>{
	res.send("热点内容");
});

router.get("/time",(req,res)=>{
	res.send("时间");
});

router.get("/list",(req,res)=>{
	res.send("排行榜");
});

module.exports = router;