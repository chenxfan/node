//		1. 判断是否是移动端
let mobile = ["iPhone", "iPad", "iPod", "Android"];
let isPc = true;
for (let i = 0; i < mobile.length; i++) {
	if (navigator.userAgent.includes(mobile[i])) {
		isPc = false;
		break;
	}
}
if (isPc) {
	$("#wrap").hide();
	$("#alert").show();
}

// touch.on("window", "touchstart", (e) => {
// 	e.perventDefault();
// })

let page = 1;//获取当前页面
touch.on("#wrap", "swipeup", function(e) {
	switch (page) {
		case 1:
			pageOne()
			page++;
			break;
		case 2:
			pageTow()
			page++;
			break;
		case 3:
			pageThree()
			page++;
			break;
		case 4:
			pageFour()
			page++;
			break;
		case 5:
			pageFive()
			page++;
			break;
		case 6:
			pageSix()
			page=1;
			break;
	}
});

touch.on("#wrap", "swipedown", function(e) {
	switch (page) {
		case 1:
			pageOneDown();
			page=6;
			break;
		case 2:
			pageTowDown()
			page--;
			break;
		case 3:
			pageThreeDown()
			page--;
			break;
		case 4:
			pageFourDown()
			page--;
			break;
		case 5:
			pageFiveDown()
			page--;
			break;
		case 6:
			pageSixDown()
			page--;
			break;
	}
});

function pageOne() {
	$("#pg1").hide();
	$("#pg2").show();
}

function pageTow() {
	$("#pg2").hide();
	$("#pg3").show();
}

function pageThree() {
	$("#pg3").hide();
	$("#pg4").show();
}

function pageFour() {
	$("#pg4").hide();
	$("#pg5").show();
}

function pageFive() {
	$("#pg5").hide();
	$("#pg6").show();
}

function pageSix() {
	$("#pg1").show();
	$("#pg6").hide();
}
//向下滑
function pageOneDown() {
	$("#pg1").hide();
	$("#pg6").show();
}

function pageTowDown() {
	$("#pg2").hide();
	$("#pg1").show();
}

function pageThreeDown() {
	$("#pg3").hide();
	$("#pg2").show();
}

function pageFourDown() {
	$("#pg4").hide();
	$("#pg3").show();
}

function pageFiveDown() {
	$("#pg5").hide();
	$("#pg4").show();
}

function pageSixDown() {
	$("#pg6").hide();
	$("#pg5").show();
}