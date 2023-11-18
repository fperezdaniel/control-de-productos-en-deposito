class Deposito {
    //constructor
    constructor() {
        this.deposito = []; //Array
    }
    //Metodos
    agregarProducto(producto) {
        //pushea elemento recibido por parametro al array
        this.deposito.push(producto);
        console.log(this.deposito);
    }
    filtrarProducto(prod) {
        return this.deposito.filter(elemento => elemento.categoria === prod);
    }
    encontrarProducto(prod) {
        return this.deposito.find(elemento => elemento.nombre === prod);
    }


    //////////////////////////////////////
    renderizarFiltrado(prod)/**Luego cambiar nombre de esta funcion */ {
        const contenedorProducto = document.getElementById("section-contenedor");
        /** Tene que ver que cuando el producto se repita ir sumandolo y no duplicarlo */
        contenedorProducto.innerHTML = "";

        prod.forEach((el) => {
            const lista = document.createElement("div");
            lista.setAttribute("class", "carduno-producto");
            lista.innerHTML = `<h5 class= "subtitulo">Producto</h5>
                                <p class= "parrafos">Categoria: ${el.categoria}</p>
                                <p class= "parrafos">Nombre: ${el.nombre}</p>
                                <p class= "parrafos">Marca: ${el.marca}</p>
                                <p class= "parrafos">Codigo: ${el.codigo}</p>
                                <p class= "parrafos">Stock: ${el.stock}</p>
                                <p class= "parrafos">Precio: $${el.precio}</p>
                                `
            contenedorProducto.appendChild(lista);
        });
    }
    agregarCodigo(objet) {
        console.log("ooobbjeetoo ", objet);
        console.log(objet.codigo, " Acaaaaziiiiiiiiiiiiiiiiii");
        const containerAgregarCodigo = document.getElementById("container-agregar-codigo");
        containerAgregarCodigo.innerHTML = ``;
        console.log(containerAgregarCodigo, " containerAgregarCodigo");
        if (objet.codigo === "" || objet.codigo === undefined) {
            const cardAgregarCodigo = document.createElement("div");
            cardAgregarCodigo.innerHTML = `
                                            <form id= "form-agregar-codigo" class= "form-cargar-codigo">
                                                <h5 class= "subtitulo-cargar-codigo">Ingrese codigo de ${objet.nombre} por favor</h5>
                                                <input name="input-agregar-codigo" type="text" placeholder="Agregar codigo" class= "input-cargar-codigo">
                                                <button class= "btn-agregar-codigo">Aceptar</button>
                                            </form>`;
            containerAgregarCodigo.appendChild(cardAgregarCodigo);
            const formAgregarCodigo = document.getElementById("form-agregar-codigo");
            const productoSinCodigo = (e) => {
                e.preventDefault();
                const inputCodigo = formAgregarCodigo["input-agregar-codigo"].value;
                console.log(inputCodigo, " inputCodigo");
                objet.codigo = inputCodigo;
                const cardCodigoProducto = document.createElement("div");
                cardCodigoProducto.setAttribute("class", "cardCodigoProducto");
                cardCodigoProducto.innerHTML = `
                                        <div class= "container-codigo-producto">
                                            <p class="parrafo-codigo"><span class= "span">Categoria:</span> ${objet.categoria}</p>
                                            <p class="parrafo-codigo"><span class= "span">Nombre:</span> ${objet.nombre}</p>
                                            <p class="parrafo-codigo"><span class= "span">Marca: </span>${objet.marca}</p>
                                            <p class="parrafo-codigo"><span class= "span">Codigo:</span> ${objet.codigo}</p>
                                            <p class="parrafo-codigo"><span class= "span">Stock:</span> ${objet.stock}</p>
                                            <p class="parrafo-codigo"><span class= "span">Precio:</span> ${objet.precio}</p>
                                        </div>`;
                containerAgregarCodigo.appendChild(cardCodigoProducto);
            }
            formAgregarCodigo.addEventListener("submit", productoSinCodigo)

        } else {
            console.log("Holiiiiiiiiiiiii");
            const cardCodigoProducto = document.createElement("div");
            cardCodigoProducto.setAttribute("class", "cardCodigoProducto");
            cardCodigoProducto.innerHTML = `
                                        <div class= "container-codigo-producto">
                                            <p class="parrafo-codigo"><span class= "span">Categoria:</span> ${objet.categoria}</p>
                                            <p class="parrafo-codigo"><span class= "span">Nombre:</span> ${objet.nombre}</p>
                                            <p class="parrafo-codigo"><span class= "span">Marca:</span> ${objet.marca}</p>
                                            <p class="parrafo-codigo"><span class= "span">Codigo:</span> ${objet.codigo}</p>
                                            <p class="parrafo-codigo"><span class= "span">Stock:</span> ${objet.stock}</p>
                                            <p class="parrafo-codigo"><span class= "span">Precio:</span> ${objet.precio}</p>
                                        </div>`;
            containerAgregarCodigo.appendChild(cardCodigoProducto);
        }
    }
    corroborarExistencia(elemento) {
        return this.deposito.some((el) => el.nombre === elemento.nombre);
    }
    buscarProductoPorIndice(objet) {
        return this.deposito.findIndex((el) => el.stock === objet.stock);
    }
    accederPropiedadEnArray(indice) {
        return this.deposito[indice].stock;

    }
}