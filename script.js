function start() {
	for (let i=0; i<9; i++){		
	let random = parseInt(Math.random()*1000);
	document.querySelector("body").innerHTML += `<div id='div-${i}' class='circle'>${random}</div>`;
	setInterval(() => {call(i)},1000);
} 
	for (let it=0; it<9; it++){		
	let randomt = parseInt(Math.random()*1000);
	document.querySelector("body").innerHTML += `<span id='span-${it}'>${randomt}</span>`;
	setInterval(() => {callt(it)},1000);
} 
}
function call(i) {
	let height = parseInt(Math.random()*200);
	let width = parseInt(Math.random()*200);
	let right = parseInt(Math.random()*85);
	let top = parseInt(Math.random()*80);
	let r = parseInt(Math.random()*256);
	let g = parseInt(Math.random()*256);
	let b = parseInt(Math.random()*256);
	let a = 0.2;
	let ab = 0.7;
	document.querySelector(`#div-${i}`).style.height = `${height}px`;
	document.querySelector(`#div-${i}`).style.width = `${height}px`;
	document.querySelector(`#div-${i}`).style.right = `${right}%`;
	document.querySelector(`#div-${i}`).style.top = `${top}vh`;
	document.querySelector(`#div-${i}`).style.border = `${height/15}px solid rgb(${r},${g},${b})`;
	document.querySelector(`#div-${i}`).style["font-size"] = `${height/2}px`;
	document.querySelector(`#div-${i}`).style.color = `rgb(${r},${b},${g})`;
	document.querySelector(`#div-${i}`).style["background-color"] = `rgba(${r},${g},${b},${a})`;
	document.querySelector("body").style["background-color"] = `rgb(${b},${g},${r},${ab})`;
}
function callt(it) {
	let height = parseInt(Math.random()*200);
	let width = parseInt(Math.random()*200);
	let left = parseInt(Math.random()*85);
	let top = parseInt(Math.random()*80);
	let r = parseInt(Math.random()*256);
	let g = parseInt(Math.random()*256);
	let b = parseInt(Math.random()*256);
	let a = 0.2;
	let ab = 0.7;
	document.querySelector(`#span-${it}`).style.height = `${height}px`;
	document.querySelector(`#span-${it}`).style.width = `${height}px`;
	document.querySelector(`#span-${it}`).style.left = `${left}%`;
	document.querySelector(`#span-${it}`).style.top = `${top}vh`;
	document.querySelector(`#span-${it}`).style.border = `${height/15}px solid rgb(${r},${g},${b})`;
	document.querySelector(`#span-${it}`).style["font-size"] = `${height/2}px`;
	document.querySelector(`#span-${it}`).style.color = `rgb(${r},${b},${g})`;
	document.querySelector(`#span-${it}`).style["background-color"] = `rgba(${r},${g},${b},${a})`;
}

