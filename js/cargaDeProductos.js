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
	codigo: "AUR282",
	stock: 200,
	precio: 1200,
});
/** 4 */
const tiraDeAsado = new Producto({
	categoria: "carne",
	nombre: "tira de asado",
	marca: "coto",
	codigo: "AUR283",
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
	codigo: "ABC229",
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
	codigo: "ABC231",
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
	codigo: "ADR997",
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
	codigo: "ADR999",
	stock: 10,
	precio: 1000000,

});/** 4 */
const parlanteBluetooth = new Producto({
	categoria: "electronicos",
	nombre: "parlante con bluetooth",
	marca: "philco",
	codigo: "ADR1000",
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


/////objetoDeposito.renderizarProducto(objetoDeposito.deposito);
///////////////////////////

///////////////////////////////////////////
/** Menu en deposito */
function menuEnPantalla() {
	const containerMenu = document.getElementById("container-menu");
	const cardMenu = document.createElement("div");
	cardMenu.setAttribute("class", "card-container-menu")
	cardMenu.innerHTML = `  
	                        <h5 class="titulo-menu">Bienvenido al menu</h5>
                            <div class="parrafo-option">
	                            <p>A.Cargar producto.</p>
	                            <p>B.Filtrar producto por categoría.</p>
	                            <p>C.Buscar producto por nombre.</p>
								<p>D.Ver productos.</p>
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
	const menuInput = (e) => {
		e.preventDefault();
		const inputOpcionesDelusuario = formMenu["opcion-usuario"].value.toUpperCase();
		opcionesDelUsuario(inputOpcionesDelusuario);
	}
	formMenu.addEventListener("submit", menuInput);
}

/**Opciones de menu */
function opcionesDelUsuario(opcionUsuario) {
	switch (opcionUsuario) {
		case "A":
			cargaDeProductos();
			break;
		case "B":
			buscarProductoPorcategoria();
			break;
		case "C":
			buscarProductoPorNombre();
			break;
		case "D":
			verProductos();
			break;
		default:
			alert("Error al ingresar datos, vuelva a intentar");
	}
}


/////////////////////////////////////////////////////////

/** carga de producto */
function cargaDeProductos() {
	const formProductoCarga = document.getElementById("carga-producto");
	formProductoCarga.innerHTML = "";
	const cardProductos = document.createElement("div");
	cardProductos.setAttribute("class", "div-container-inputs");
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
                                    <button class="boton-producto-reset" type="reset">Borras campos</button>
									<button id ="btn-cancel-form" class="boton-producto-x">X</button>
								</form>
								
                                `;
	formProductoCarga.appendChild(cardProductos);
	const btnCancel = document.getElementById("btn-cancel-form");
	const contenedorProducto = document.getElementById("section-contenedor");
	btnCancel.addEventListener("click", () => {
		formProductoCarga.innerHTML = "";
		contenedorProducto.innerHTML = "";
	});

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
		objetoDeposito.agregarProducto(productoDelUsuario);
		objetoDeposito.renderizarProducto(objetoDeposito.deposito);
		const calculoDeProductos = objetoDeposito.calculoDeproductos();
		objetoDeposito.renderizarCalculoDeProductos(calculoDeProductos);
	} else {
		alert("Se observan campos vacios por favor completelos todos");
	}
}

function validarCargaDeProducto() {
	const formProductos = document.getElementById("form-inputs-producto");
	formProductos.addEventListener("submit", validarInputproducto);

}


///////////////////////////////////////////////////////


/** metodo filter */
/* const sectionProductoFiltrado = document.getElementById("section-producto-filtrado");
	sectionProductoFiltrado.innerHTML = ``; */

function buscarProductoPorcategoria() {
	const formProductoCarga = document.getElementById("carga-producto");
	formProductoCarga.innerHTML = "";
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
	formProductoCarga.appendChild(cardProductoFiltrado);
	const formularioProductoFiltrado = document.getElementById("form-filtrado-producto");
	const productoFiltrado = (evento) => {
		evento.preventDefault();
		const usuarioFiltrarproducto = formularioProductoFiltrado["filtrando-producto"].value.toLowerCase();
		if (usuarioFiltrarproducto === "" || usuarioFiltrarproducto === null) {
			alert("Datos invalidos");
		} else {
			const productoObtenidoFilter = objetoDeposito.filtrarProducto(usuarioFiltrarproducto);
			objetoDeposito.renderizarProducto(productoObtenidoFilter);
			const total = objetoDeposito.calculoDeproductosFiltrados(productoObtenidoFilter);
			objetoDeposito.renderizarCalculoDeProductos(total);
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

/** Buscar producto por nombre */
/* const containerBuscarProducto = document.getElementById("container-buscar-producto");
	containerBuscarProducto.innerHTML = ""; */
function buscarProductoPorNombre() {
	const formProductoCarga = document.getElementById("carga-producto");
	formProductoCarga.innerHTML = "";
	const cardNombreProducto = document.createElement("div");
	cardNombreProducto.setAttribute("class", "card-codigo-prod");
	cardNombreProducto.innerHTML = `
                                    <form id= "form-cargar-codigo" class= "form-container-codigo">
                                        <h5 class="titulo-buscar-codigo">Ingrese nombre producto</h5>
                                        <input class="input-carga-codigo" name="cargar-codigo" type="text" placeholder="nombre">
                                        <button class= "btn-buscar-codigo">Aceptar</button>
										<button id= "ver-listado" class= "btn-buscar-codigo">Ver listado</button>
                                    </form>`;
	formProductoCarga.appendChild(cardNombreProducto);
	const formCargarProducto = document.getElementById("form-cargar-codigo");
	const btnVerListado = document.getElementById("ver-listado");
	btnVerListado.addEventListener("click", verListadoProducto);
	const buscarproductoPorCodigo = (e) => {
		e.preventDefault();
		const nombreProducto = formCargarProducto["cargar-codigo"].value.toLowerCase();
		if (nombreProducto.trim() === "") {
			alert("Datos errones linea 382");
		} else {
			const productoObtenido = objetoDeposito.encontrarProducto(nombreProducto);
			console.log(productoObtenido, " productoObtenido linea 374")
			verificarExitenciaDeCodigo(productoObtenido);
		}
	}
	formCargarProducto.addEventListener("submit", buscarproductoPorCodigo);
}
function verListadoProducto(e){
	e.preventDefault();
	const contenedorProducto = document.getElementById("section-contenedor");
    
	objetoDeposito.renderizarProducto(objetoDeposito.deposito);
	const btnX = document.createElement("button");
	btnX.innerText = "X";
    contenedorProducto.appendChild(btnX);
	const ocultarProductos = (e)=>{
		const contenedorProducto = document.getElementById("section-contenedor");
        contenedorProducto.innerHTML = "";
	}
	btnX.addEventListener("click", ocultarProductos);
}
/* const containerAgregarCodigo = document.getElementById("container-agregar-codigo");
	containerAgregarCodigo.innerHTML = ""; */
function verificarExitenciaDeCodigo(producto){
	const formProductoCarga = document.getElementById("carga-producto");
	formProductoCarga.innerHTML = "";
    if(producto.codigo === "" || producto.codigo === undefined){
		objetoDeposito.agregarCodigo(producto);
	}else{
		const cardCodigoProducto = document.createElement("div");
            cardCodigoProducto.setAttribute("class", "cardCodigoProducto");
            cardCodigoProducto.innerHTML = `
                                        <div class= "container-codigo-producto">
                                            <p class="parrafo-codigo"><span class= "span">Categoria:</span> ${producto.categoria}</p>
                                            <p class="parrafo-codigo"><span class= "span">Nombre:</span> ${producto.nombre}</p>
                                            <p class="parrafo-codigo"><span class= "span">Marca:</span> ${producto.marca}</p>
                                            <p class="parrafo-codigo"><span class= "span">Codigo:</span> ${producto.codigo}</p>
                                            <p class="parrafo-codigo"><span class= "span">Stock:</span> ${producto.stock}</p>
                                            <p class="parrafo-codigo"><span class= "span">Precio:</span> ${producto.precio}</p>
                                        </div>`;
            formProductoCarga.appendChild(cardCodigoProducto);
	}
}
////////////////////
/** Opcion ver productos *//** debo ver esto */
const cerrarListadoProducto = (e) => {
	e.preventDefault();
	const listadoProducto = document.getElementById("section-contenedor");
	listadoProducto.innerHTML = "";
}
function verProductos() {
	objetoDeposito.renderizarProducto(objetoDeposito.deposito);
	const totalEnDeposito = objetoDeposito.calculoDeproductos();
	objetoDeposito.renderizarCalculoDeProductos(totalEnDeposito);
	const listadoProducto = document.getElementById("section-contenedor");
	const btnCerrar = document.createElement("button");
	btnCerrar.setAttribute("class", "btn-cerrar-deposito");
	btnCerrar.innerText = "Cerrar";
	btnCerrar.addEventListener("click", cerrarListadoProducto)
	listadoProducto.appendChild(btnCerrar);
}
