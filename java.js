


class Accesorio {
	constructor(nombre, color, categoria) {
	  this.nombre = nombre;
	  this.color = color;
	  this.categoria = categoria;
	}

	eliminar() {
	  let categoria = this.categoria;
	  let index = stockDeAccesorios[categoria].indexOf(this);
	  if (index !== -1) {
		stockDeAccesorios[categoria].splice(index, 1);
		actualizarStock();
	  }
	}
  }

  let stockDeAccesorios = {
	anillos: [],
	collares: [],
	pulseras: [],
  };

  function agregarAccesorios() {
	let categoria = document.getElementById("categoria").value;
	let cantidad = document.getElementById("cantidad").value;

	if (cantidad > 0) {
	  for (let i = 0; i < cantidad; i++) {
		let color = prompt("Ingresa el color del accesorio");

		let nuevoAccesorio = new Accesorio("accesorio " + (i + 1), color, categoria);
		stockDeAccesorios[categoria].push(nuevoAccesorio);
	  }

	  actualizarStock();
	} else {
	  alert("Ingresa una cantidad válida de accesorios.");
	}
  }

  function crearElementosStock() {
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

  function actualizarStock() {
	crearElementosStock();
  }

  // Llamada inicial para mostrar el stock
  actualizarStock();
