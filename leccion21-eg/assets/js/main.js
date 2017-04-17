var imagen = document.getElementsByClassName("img");
// var cerrar = document.getElementsByClassName("cerrar")[0];
// var pizarra = document.getElementById("pizarra");
var recibirImg = document.getElementById("recibirImg");
var longitud = imagen.length;
// cerrar.addEventListener("click",cerrar);

for(var i=0; i< longitud; i++){
	imagen[i].addEventListener("click",mostrar);
	console.log(imagen[i]);
}

function mostrar(){
	// pizarra.style.display = "block";
	recibirImg.src = this.src;
}

// function cerrar(){
// 	pizarra.style.display = "none";
// }