const express = require("express");
let router = express.Router();

router.get("/mius",(req,res)=>{
	res.send("音乐");
});

router.get("/manhua",(req,res)=>{
	res.send("漫画");
});
module.exports = router;