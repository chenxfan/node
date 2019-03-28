const express = require("express");
let router = express.Router();

router.get("/hot",(req,res)=>{
	res.send("热门数据");
});

router.get("/newmovie",(req,res)=>{
	res.send("最新电影");
});

router.get("/hotmovie",(req,res)=>{
	res.send("最热电影");
});

router.get("/dianshij",(req,res)=>{
	res.send("最热电视剧");
});

router.get("/yingping",(req,res)=>{
	res.send("影评数据");
});

router.get("/koubei",req,res)=>{
	res.send("口碑榜");
});

module.exports = router;