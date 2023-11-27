/** Validacion de string */
function validandoPromptDeposito(categoria, nombre, marca, codigo, stock, precio){
    if (categoria.trim() !== "" && nombre.trim() !== "" && marca.trim() !== "" && codigo.trim() !== "" && !isNaN(stock) && !isNaN(precio)){
        return true;
	}else {
		return false;
	}
}
