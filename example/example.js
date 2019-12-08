let redBg = new CSSClass("background: red; width: 150px; height: 100px;");
let blackBg = new CSSClass("background: black; width: 200px; height: 200px;");

let testEl = document.createElement("div");
let changeBgBtn = document.createElement("button");
let isBgBlack = flase;

changeBgBtn.addEventListener("click", ()=>{
	if(isBgBlack)
	{
		redBg.addToElement(testEl);
		blackBg.removeFromElement(testEl);
	}	
	
	else 
	{
		redBg.removeFromElement(testEl);
		blackBg.addToElement(testEl);
	}
	
	isBgBlack = !isBgBlack;
});

document.body.appendChild(testEl);
document.body.appendChild(changeBgBtn);
