const img = document.querySelector(".menu-img");
const menu = document.querySelector(".menu");
const txt = document.querySelector(".copy");

img.addEventListener("click", () => {
	menu.classList.toggle("spread");
})

window.addEventListener("click", e => {
	if(menu.classList.contains("spread") && e.target != menu && e.target != img){
		menu.classList.toggle("spread");
	}
})

window.addEventListener("click", a => {
	console.log(a.target.getAttribute("class"));
})

function cambiarColor(){
	if(txt.style.color != "black"){
		txt.style.color = "black";
	}else{
		alert("El color de este texto ya esta cambiado");
	}
}

txt.addEventListener("click", cambiarColor)