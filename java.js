

  class Accesorio {
	constructor(nombre, color, categoria, imagen) {
	  this.nombre = nombre;
	  this.color = color;
	  this.categoria = categoria;
	  this.imagen = imagen;
	}
  
	eliminar() {
	  let categoria = this.categoria;
	  let index = stockDeAccesorios[categoria].indexOf(this);
	  if (index !== -1) {
		stockDeAccesorios[categoria].splice(index, 1);
		actualizarStock();
	  }
	}
  
	agregarImagen(imagen) {
	  this.imagen = imagen;
	  actualizarStock();
	}
  }
  
  let stockDeAccesorios = {
	anillos: [],
	collares: [],
	pulseras: []
  };
  
  document.getElementById("agregarBtn").addEventListener("click", agregarAccesorio);
  document.getElementById("imagen").addEventListener("change", previewImagen);
  
  function agregarAccesorio() {
	let categoria = document.getElementById("categoria").value;
	let cantidad = document.getElementById("cantidad").value;
	let color = document.getElementById("color").value;
	let imagen = document.getElementById("preview").src;
  
	if (cantidad > 0 && color !== "" && imagen) {
	  for (let i = 0; i < cantidad; i++) {
		let nuevoAccesorio = new Accesorio("accesorio " + (i + 1), color, categoria, imagen);
		stockDeAccesorios[categoria].push(nuevoAccesorio);
	  }
  
	  actualizarStock();
	  document.getElementById("mensaje").textContent = ""; // Limpiar mensaje de error si existe
	} else {
	  document.getElementById("mensaje").textContent = "Ingresa una cantidad, un color y selecciona una imagen válida.";
	}
  }
  
  function previewImagen() {
	let file = document.getElementById("imagen").files[0];
	if (file) {
	  let reader = new FileReader();
	  reader.onload = function(e) {
		document.getElementById("preview").src = e.target.result;
		document.getElementById("preview").style.display = "block";
	  };
	  reader.readAsDataURL(file);
	} else {
	  document.getElementById("preview").style.display = "none";
	}
  }
  
  function actualizarStock() {
	let listaStock = document.getElementById("stock");
	listaStock.innerHTML = "";
  
	for (let categoria in stockDeAccesorios) {
	  let listaCategoria = document.createElement("ul");
	  let tituloCategoria = document.createElement("h2");
	  tituloCategoria.textContent = categoria.toUpperCase();
	  listaCategoria.appendChild(tituloCategoria);
  
	  stockDeAccesorios[categoria].forEach(accesorio => {
		let li = document.createElement("li");
		li.textContent = accesorio.nombre + " - Color: " + accesorio.color;
  
		let imagen = document.createElement("img");
		imagen.src = accesorio.imagen;
		imagen.classList.add("image-preview");
		li.appendChild(imagen);
  
		let botonEliminar = document.createElement("button");
		botonEliminar.textContent = "Eliminar";
		botonEliminar.addEventListener('click', function() {
		  accesorio.eliminar();
		});
  
		li.appendChild(botonEliminar);
		listaCategoria.appendChild(li);
	  });
  
	  listaStock.appendChild(listaCategoria);
	}
  }
  
  // Llamada inicial para mostrar el stock
  actualizarStock();
  