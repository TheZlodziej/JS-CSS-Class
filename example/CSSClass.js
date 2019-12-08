class CSSClass
{
	constructor(styles)
	{
		if(!document.getElementById("CSSClass"))
		{
			let styleTag = document.createElement("style");
			styleTag.id="CSSClass";
			styleTag.type = "text/css";	
			document.getElementsByTagName("head")[0].appendChild(styleTag);
		}
		
	if(styles[styles.length-1] != ";") 
		styles+=";";
	
	this.className = "CSSClass_" + Math.random().toString(36).substr(2, 9);
	document.getElementById("CSSClass").innerHTML += `.${this.className} { ${styles} } `;
	}
	
	addToElement(el)
	{
		el.classList.add(this.className);
	}
	
	removeFromElement(el)
	{
		el.classList.remove(this.className);
	}
}

let testEl = document.createElement("div");
let redBg = new CSSClass("background: red; width: 150px; height: 100px;");
let blackBg = new CSSClass("background: black; width: 200px; height: 200px;");

redBg.addToElement(testEl);

document.body.appendChild(testEl);