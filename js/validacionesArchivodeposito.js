/** Validacion de string */
function validandoPromptDeposito(categoria, nombre, marca, codigo, stock, precio){
    if (categoria.trim() !== "" && nombre.trim() !== "" && marca.trim() !== "" && codigo.trim() !== "" && !isNaN(stock) && !isNaN(precio)){
        return true;
	}else {
		return false;
	}
}
//////////////////////////////////////////
/** Validacion null en prompt */
function validandoNullEnDeposito (){
	const continuar = confirm("Desea continuar??? si/ no");
	if(continuar){
		menuEnDeposito();
	}else {
		alert("Esperamos que su visita haya sido placentera, hasta pronto ...!!!");
	}
}
/////////////////////////////////////////////////
/** Validacion metodo reduce */
/* function opcionMetodoReduce() {
	const continuar = confirm(`Desea ver el total de su lista ??? si / no`);
	if (continuar) {
		costoTotalFiltrado();
	} else {
		alert("Muchas gracias");
	}
} */
/** validacion continuar en sitio */
/* function continuarEnMenuDeposito() {
	const seguir = confirm("Desea volver al menú productos??? si/no");
	if (seguir) {
		menuCategoria;
	} else {
		alert(`Esperamos que su visita haya sido placentera, hasta pronto  ...!!!`);
	}
} */