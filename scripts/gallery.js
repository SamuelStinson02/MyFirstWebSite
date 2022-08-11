const imagenes = document.querySelector(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".image-light");

const contenedor = document.querySelector(".contenedor-galeria");

contenedor.addEventListener("click", a => {
	aparecerImagen(a.target.getAttribute("src"));
})

function aparecerImagen(imagen){
	imagenesLight.src = imagen;
	contenedorLight.classList.toggle("show");
	imagenesLight.classList.toggle("showImage");
	img.style.opacity = "0";
}

contenedorLight.addEventListener("click", (e) => {
	if(e.target != imagenesLight){
		contenedorLight.classList.toggle("show");
		imagenesLight.classList.toggle("showImage");
		img.style.opacity = "1";
	}
})