


/* variable que almacenara el stock de accesorios
 */		let stockDeAccesorios = {
			anillos: [],
			collares: [],
			pulseras: [],
		};

/* funcion para agregar accesorios al stock
 */		function agregarAccesorios() {
/* obtiene la categoria seleccionada por el usuario
*/			let categoria = document.getElementById("categoria").value;

/* obtiene la cantidad de accesorios ingresada por el usuario
 */			let cantidad = document.getElementById("cantidad").value;

/* valida que se haya ingresado una cantidad valida
 */			if (cantidad > 0) {
/* agrega la cantidad de accesorios al stock de la categoria seleccionada
 */				for (let i = 0; i < cantidad; i++) {
					stockDeAccesorios[categoria].push("accesorio " + (i + 1));
				}

/* actualiza la lista del stock en la pagina
 */				actualizarStock();
			} else {
				alert("Ingresa una cantidad válida de accesorios.");
			}
		}

/* funcion para actualizar la lista del stock en la pagina
 */		function actualizarStock() {
/* obtiene la lista del stock en la pagina
 */			let listaStock = document.getElementById("stock");

/* vacia la lista actual
 */			listaStock.innerHTML = "";

/* agrega cada accesorio del stock a la lista
 */			for (let categoria in stockDeAccesorios) {
				let listaCategoria = document.createElement("ul");
				let tituloCategoria = document.createElement("h2");
				tituloCategoria.textContent = categoria.toUpperCase();
				listaCategoria.appendChild(tituloCategoria);

				for (let i = 0; i < stockDeAccesorios[categoria].length; i++) {
					let li = document.createElement("li");
					li.textContent = stockDeAccesorios[categoria][i];
					listaCategoria.appendChild(li);
				}

				listaStock.appendChild(listaCategoria);
			}
		}

		/* OPCION DE ELIMINACION DE PRODUCTO */

/* funcion para eliminar un accesorio del stock
 */		function eliminarAccesorio(categoria, index) {
			stockDeAccesorios[categoria].splice(index, 1);
			actualizarStock();
		}

/* funcion para actualizar la lista del stock en la pagina
 */		function actualizarStock() {
/* obtiene la lista del stock en la pagina
 */			let listaStock = document.getElementById("stock");

/* vacia la lista actual
 */			listaStock.innerHTML = "";

/* agrega cada accesorio del stock a la lista
 */			for (let categoria in stockDeAccesorios) {
				let listaCategoria = document.createElement("ul");
				let tituloCategoria = document.createElement("h2");
				tituloCategoria.textContent = categoria.toUpperCase();
				listaCategoria.appendChild(tituloCategoria);

				for (let i = 0; i < stockDeAccesorios[categoria].length; i++) {
					let li = document.createElement("li");
					li.textContent = stockDeAccesorios[categoria][i];
					
					let botonEliminar = document.createElement("button");
					botonEliminar.textContent = "Eliminar";
					botonEliminar.onclick = function() {
						eliminarAccesorio(categoria, i);
					}
					
					li.appendChild(botonEliminar);
					listaCategoria.appendChild(li);
				}

				listaStock.appendChild(listaCategoria);
			}
		}
