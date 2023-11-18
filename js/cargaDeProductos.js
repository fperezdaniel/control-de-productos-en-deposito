/**Carnes */
/** 1 */
const bifeChorizo = new Producto({
	categoria: "carne",
	nombre: "bife de chorizo",
	marca: "coto",
	codigo: "AUR980",
	stock: 100,
	precio: 3750,
});
/** 2 */
const vacio = new Producto({
	categoria: "carne",
	nombre: "vacio",
	marca: "coto",
	codigo: "AUR981",
	stock: 100,
	precio: 2000,
});
/** 3*/
const entraña = new Producto({
	categoria: "carne",
	nombre: "entraña",
	marca: "coto",
	codigo: "",
	stock: 200,
	precio: 1200,
});
/** 4 */
const tiraDeAsado = new Producto({
	categoria: "carne",
	nombre: "tira de asado",
	marca: "coto",
	codigo: "",
	stock: 300,
	precio: 2500,
});
/** 5 */
const chorizo = new Producto({
	categoria: "carne",
	nombre: "chorizo",
	marca: "coto",
	codigo: "AUR984",
	stock: 100,
	precio: 2500,
});

/** PANIFICADO */
/** 1 */
const pan = new Producto({
	categoria: "panificado",
	nombre: "lactal",
	marca: "fargo",
	codigo: "ABC228",
	stock: 100,
	precio: 900,
});
/** 2 */
const facturas = new Producto({
	categoria: "panificado",
	nombre: "facturas de manteca",
	marca: "coto",
	codigo: "",
	stock: 100,
	precio: 1800,
});
/** 3 */
const donas = new Producto({
	categoria: "panificado",
	nombre: "donas",
	marca: "bonafide",
	codigo: "ABC230",
	stock: 100,
	precio: 1500,
});
/** 4 */
const baguette = new Producto({
	categoria: "panificado",
	nombre: "baguette",
	marca: "coto",
	codigo: "",
	stock: 100,
	precio: 200,
});
/** 5 */
const boule = new Producto({
	categoria: "panificado",
	nombre: "boule",
	marca: "coto",
	codigo: "ABC232",
	stock: 100,
	precio: 300,
});

/**Electrodomesticos */
/** 1 */
const tv = new Producto({
	categoria: "electronicos",
	nombre: "QLED Samsung 55",
	marca: "samsung",
	stock: 10,
	precio: 370050,
});
/** 2 */
const dvd = new Producto({
	categoria: "electronicos",
	nombre: "dvd",
	marca: "sony",
	codigo: "ADR998",
	stock: 10,
	precio: 100000,
});
/** 3 */
const playCinco = new Producto({
	categoria: "electronicos",
	nombre: "playstation 5",
	marca: "sony",
	stock: 10,
	precio: 1000000,

});/** 4 */
const parlanteBluetooth = new Producto({
	categoria: "electronicos",
	nombre: "parlante con bluetooth",
	marca: "philco",
	codigo: "ADR999",
	stock: 4,
	precio: 32000,
});
/** 5 */
const monitorPc = new Producto({
	categoria: "electronicos",
	nombre: "monitor led",
	marca: "noblex",
	codigo: "",
	stock: 20,
	precio: 100000,
});

//////////////////////////////////////////
/** Objeto deposito */
const objetoDeposito = new Deposito();
/** categoria carnes */
objetoDeposito.agregarProducto(bifeChorizo);
objetoDeposito.agregarProducto(vacio);
objetoDeposito.agregarProducto(entraña);
objetoDeposito.agregarProducto(tiraDeAsado);
objetoDeposito.agregarProducto(chorizo); 
/** categoria panificado */
objetoDeposito.agregarProducto(pan);
objetoDeposito.agregarProducto(facturas);
objetoDeposito.agregarProducto(donas);
objetoDeposito.agregarProducto(baguette);
objetoDeposito.agregarProducto(boule);
/** categoria electronicos */
objetoDeposito.agregarProducto(tv);
objetoDeposito.agregarProducto(dvd);
objetoDeposito.agregarProducto(playCinco);
objetoDeposito.agregarProducto(parlanteBluetooth);
objetoDeposito.agregarProducto(monitorPc);



///////////////////////////////////////////
/** Menu en deposito */
function menuEnPantalla() {
	const containerMenu = document.getElementById("container-menu");
	console.log("containerMenu ", containerMenu);
	const cardMenu = document.createElement("div");
	cardMenu.setAttribute("class", "card-container-menu")
	cardMenu.innerHTML = `  
	                        <h5 class="titulo-menu">Bienvenido al menu</h5>
                            <div class="parrafo-option">
	                            <p>A.Cargar producto.</p>
	                            <p>B.Filtrar producto por categoría.</p>
	                            <p>C.Verificar codigos.</p>
	                            <p>D.Calculo total.</p>
								<p>E.Ver productos.</p>
                            </div>
                            <form id="form-menu" class= "form-menu-opcion">
	                            <input class="input-menu" name="opcion-usuario" type="text">
	                            <button id="button-menu" class="boton-option" >Aceptar</button>
	                            <button id="button-cancel" class="boton-option-reset" type="reset">Reset</button>
							</form>`
	containerMenu.appendChild(cardMenu);
	formMenuOpciones();
}
/** capturo la opcion ingresada por el usuario */

function formMenuOpciones() {
	const formMenu = document.getElementById("form-menu");
	console.log("formMenu 10", formMenu);
	const menuInput = (e) => {
		e.preventDefault();
		const inputOpcionesDelusuario = formMenu["opcion-usuario"].value.toUpperCase();
		console.log("InputMenu", inputOpcionesDelusuario);
		opcionesDelUsuario(inputOpcionesDelusuario);
	}
	formMenu.addEventListener("submit", menuInput);
}
/**Opciones de menu */
function opcionesDelUsuario(opcionUsuario) {
	if (opcionUsuario === null) {
		validandoNullEnDeposito();
	} else {
		switch (opcionUsuario) {
			case "A":
				cargaDeProductosRenderizados();
				break;
			case "B":
				renderizarProductoFiltrado();
				break;
			case "C":
				buscarProducto();
				break;
			case "D":
				/** calculoTotal (); */
				break;
			case "E":
				verProductos();
				break;
			default:
				alert("Error al ingresar datos, vuelva a intentar");
		}
	}
}


/////////////////////////////////////////////////////////

/** carga de producto */
function cargaDeProductosRenderizados() {
	const formProductoCarga = document.getElementById("carga-producto");
	formProductoCarga.innerHTML = "";
	console.log("formProductos ", formProductoCarga);
	const cardProductos = document.createElement("div");
	cardProductos.setAttribute("class", "div-container-inputs");
	console.log("cardProducto ", cardProductos);
	cardProductos.innerHTML = `
								<form  id= "form-inputs-producto" class= "formulario-producto-opcion">
								<p class="parrafo-productos"><span class= "span-option">Ingrese la categoria del producto por favor:</span> panificado, carne, electronicos, limpieza.</p> 
                                    <input class= "input-opcion-producto" name="opcion-producto" type="text" placeholder="Categoria">
                                    <input class= "input-opcion-producto" name="opcion-nombre" type="text" placeholder="Nombre del producto">
                                    <input class= "input-opcion-producto" name="opcion-marca" type="text" placeholder="Marca del producto">
                                    <input class= "input-opcion-producto" name="opcion-codigo" type="text" placeholder="Codigo del producto">
                                    <input class= "input-opcion-producto" name="opcion-stock" type="text" placeholder="Stock del producto">
                                    <input class= "input-opcion-producto" name="opcion-precio" type="text" placeholder="Precio del producto">
                                    <button  class="boton-producto">Aceptar</button>
                                    <button class="boton-producto-reset" type="reset">Cancelar</button>
									<button id ="btn-cancel-form" class="boton-producto-x">X</button>
								</form>
								
                                `;
	formProductoCarga.appendChild(cardProductos);
	const btnCancel = document.getElementById("btn-cancel-form");
	console.log(btnCancel);
	btnCancel.addEventListener("click", () => {
		formProductoCarga.innerHTML = "";
	})
	validarCargaDeProducto();
}

/** */
const validarInputproducto = (e) => {
	e.preventDefault();
	const formProducto = e.target;
	const categoria = formProducto["opcion-producto"].value.toLowerCase();
	const nombre = formProducto["opcion-nombre"].value.toLowerCase();
	const marca = formProducto["opcion-marca"].value.toLowerCase();
	const codigo = formProducto["opcion-codigo"].value.toUpperCase();
	const stock = parseInt(formProducto["opcion-stock"].value);
	const precio = parseFloat(formProducto["opcion-precio"].value);
	if (categoria === null || nombre === null || marca === null || codigo === null || stock === null || precio === null) {
		alert("Debe completar todos los campos por favor");
		validandoNullEnDeposito();
	} else {
		const validacionPrompt = validandoPromptDeposito(categoria, nombre, marca, codigo, stock, precio);
		if (validacionPrompt) {
			const productoDelUsuario = new Producto({
				categoria: categoria,
				nombre: nombre,
				marca: marca,
				codigo: codigo,
				stock: stock,
				precio: precio,
			});
			console.log(productoDelUsuario, " linea 287 productoDelUsuario");
			accesoIndice(productoDelUsuario);
			objetoDeposito.renderizarFiltrado(objetoDeposito.deposito);
		} else {
			alert("Se observan campos vacios por favor completelos todos");
		}
	}
}

function validarCargaDeProducto() {
	const formProductos = document.getElementById("form-inputs-producto");
	console.log("formProductos line 299", formProductos);
	formProductos.addEventListener("submit", validarInputproducto);

}
/*Ver el tema del indice que me devuelve la funcion*/

/** Acceso Indice */
function accesoIndice(elemento) {
	console.log(elemento, " linea 306 producto del ususario");
	const existenciaEnDeposito = objetoDeposito.corroborarExistencia(elemento);
    console.log(existenciaEnDeposito, "existencia en deposito linea 305");
	if (existenciaEnDeposito) {
		alert("Este producto ya se encuentra en deposito, desea sumar el stock???");
		const indiceProducto = objetoDeposito.buscarProductoPorIndice(elemento);
		console.log(indiceProducto, "  IndiceProducto");
		const indicePropiedadStock = objetoDeposito.accederPropiedadEnArray(indiceProducto);
		console.log(indicePropiedadStock);
		objetoDeposito.agregarProducto(elemento);
		
	} else {
		objetoDeposito.agregarProducto(elemento);
	}
}


/** fin acceso indice */
///////////////////////////////////////////////////////

/**
 * 
		const stockSumado = indicePropiedadStock + elemento.stock;
		console.log(stockSumado);
		elemento.stock = stockSumado
		console.log(elemento, " elemento con stock sumado");
 */
/** metodo filter */


function renderizarProductoFiltrado() {
	const sectionProductoFiltrado = document.getElementById("section-producto-filtrado");
	console.log(sectionProductoFiltrado, "sectionproductoFiltrado");
	const cardProductoFiltrado = document.createElement("div");
	cardProductoFiltrado.setAttribute("class", "container-form-filtrado");
	cardProductoFiltrado.innerHTML = `
                                        <form id= "form-filtrado-producto" class="form-producto-filtrado">
										    <p class="titulo-input-producto-filtrado">
											    <span class= "span-producto-filtrado">Categoria a filtrar:</span> Carne, Panificado, Electronicos.
	                                        </p>
	                                        <input class= "input-opcion-producto input-filtrado" name="filtrando-producto" type="text" placeholder="Ingrese categoria">
	                                        <button  class="boton-producto">Aceptar</button>
	                                        <button class="boton-producto" type="reset">Cancelar</button>
											<button id= "btn-cerrar" class="boton-producto cerrar">Cerrar</button>
                                        </form>`;
	sectionProductoFiltrado.appendChild(cardProductoFiltrado);
	const formularioProductoFiltrado = document.getElementById("form-filtrado-producto");
	console.log("formularioProductoFiltrado ", formularioProductoFiltrado);
	const productoFiltrado = (evento) => {
		evento.preventDefault();

		const usuarioFiltrarproducto = formularioProductoFiltrado["filtrando-producto"].value.toLowerCase();
		console.log(usuarioFiltrarproducto);
		if (usuarioFiltrarproducto === "" || usuarioFiltrarproducto === null) {
			alert("Datos invalidos");
		} else {
			const productoObtenidoFilter = objetoDeposito.filtrarProducto(usuarioFiltrarproducto);
			console.log(productoObtenidoFilter);
			objetoDeposito.renderizarFiltrado(productoObtenidoFilter);
		}
	}
	formularioProductoFiltrado.addEventListener("submit", productoFiltrado);
	const btnCerrarFiltrado = document.getElementById("btn-cerrar");
	btnCerrarFiltrado.addEventListener("click", vaciarListaproductoFiltrado);
}


function vaciarListaproductoFiltrado(e) {
	e.preventDefault();
	const contenedorSection = document.getElementById("section-contenedor");
	contenedorSection.innerHTML = "";
}






//////////////////////////////////////////////////////////////////////



function buscarProducto() { /** Ver esta funcion si la puedo mejorar */
	const containerBuscarProducto = document.getElementById("container-buscar-producto");
	containerBuscarProducto.innerHTML = "";
	const cardNombreProducto = document.createElement("div");
	cardNombreProducto.setAttribute("class", "card-codigo-prod");
	cardNombreProducto.innerHTML = `
                                    <form id= "form-cargar-codigo" class= "form-container-codigo">
                                        <h5 class="titulo-buscar-codigo">Ingrese nombre producto</h5>
                                        <input class="input-carga-codigo" name="cargar-codigo" type="text" placeholder="nombre">
                                        <button class= "btn-buscar-codigo">Aceptar</button>
                                    </form>`;
	containerBuscarProducto.appendChild(cardNombreProducto);
	const formCargarProducto = document.getElementById("form-cargar-codigo");
	const buscarproductoPorCodigo = (e) => {
		e.preventDefault();
		const nombreProducto = formCargarProducto["cargar-codigo"].value;
		if (nombreProducto.trim() === "" || nombreProducto === null) {
			alert("Datos errones en prompt de metodo find");
		} else {
			const productoObtenido = objetoDeposito.encontrarProducto(nombreProducto);
			console.log(productoObtenido, " meeetooodoooo findddd");
			objetoDeposito.agregarCodigo(productoObtenido)
		}
	}
	formCargarProducto.addEventListener("submit", buscarproductoPorCodigo);
}

/* 
////////////////////
/** Opcion ver productos */
const cerrarListadoProducto = (e) => {
	e.preventDefault();
	const listadoProducto = document.getElementById("section-contenedor");
	listadoProducto.innerHTML = "";
}
function verProductos() {
	objetoDeposito.renderizarFiltrado(objetoDeposito.deposito);
	const listadoProducto = document.getElementById("section-contenedor");
	const btnCerrar = document.createElement("button");
	btnCerrar.setAttribute("class", "btn-cerrar-deposito");
	btnCerrar.innerText = "Cerrar";
	btnCerrar.addEventListener("click", cerrarListadoProducto)
	listadoProducto.appendChild(btnCerrar);
}
