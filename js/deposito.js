class Deposito {
    //constructor
    constructor() {
        this.deposito = JSON.parse(localStorage.getItem("deposito")) || []; //Array
    }
    //Metodos
    agregarProducto(producto) {
        /** Verifica existencia producto */
        const verificarExistencia = this.corroborarExistencia(producto);
        if (verificarExistencia) {
            // accedo indice
            const elementoPorIndice = this.buscarProductoPorIndice(producto);
            /// mediante indice accedo propiedad stock y sumo con stock existente
            this.deposito[elementoPorIndice].stock += producto.stock;
        } else {
            //pushea elemento recibido por parametro al array
            this.deposito.push(producto);
        }
        localStorage.setItem("deposito", JSON.stringify(this.deposito));
    }
    ////////////////////////////////
    filtrarProducto(prod) {
        return this.deposito.filter(elemento => elemento.categoria === prod);
    }
    encontrarProducto(prod) {
        return this.deposito.find(elemento => elemento.nombre === prod);
    }


    //////////////////////////////////////
    renderizarProducto(prod) {
        const contenedorProducto = document.getElementById("section-contenedor");
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
        const containerAgregarCodigo = document.getElementById("container-agregar-codigo");
        containerAgregarCodigo.innerHTML = ``;
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
            const inputCodigo = formAgregarCodigo["input-agregar-codigo"].value.toLowerCase();
            if (inputCodigo !== "" && inputCodigo.length >= 7) {
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
            } else {
                alert("Error por favor completar los campos");
            }

        }
        formAgregarCodigo.addEventListener("submit", productoSinCodigo);
    }
    corroborarExistencia(producto) {
        return this.deposito.some((el) => el.codigo === producto.codigo);
    }
    buscarProductoPorIndice(producto) {
        return this.deposito.findIndex((el) => el.codigo === producto.codigo);
    }
    calculoDeproductos() {
        return this.deposito.reduce((acc, el) => acc += el.precio * el.stock, 0);
    }
    renderizarCalculoDeProductos(total) {
        const contenedorProducto = document.getElementById("section-contenedor");
        const containerCalculo = document.createElement("div");
        containerCalculo.setAttribute("class", "container-Caldulo-producto");
        containerCalculo.innerHTML = `
                                        <p>Total: $${total}</p>
                                        `;
        contenedorProducto.appendChild(containerCalculo);
    }
    calculoDeproductosFiltrados(producto) {
        return producto.reduce((acc, el) => acc += el.precio * el.stock, 0);
    }

}