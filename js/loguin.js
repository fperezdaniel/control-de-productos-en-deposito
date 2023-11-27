const baseDeDatos = [
    {
        usuario: "fer2023",
        contrasenia: "ferwolf"
    },
    {
        usuario: "cin2023",
        contrasenia: "cinrun"
    },
    {
        usuario: "amy2023",
        contrasenia: "bebe"
    },
];

localStorage.setItem("baseDeDatos",JSON.stringify(baseDeDatos));
/** Aplicando DOM */

const formularioLogin = document.getElementById("form-login");
console.log(formularioLogin);
const loginDatosUsuario = (event) => {
    event.preventDefault();
    console.log(event);
    const nombreUsuario = formularioLogin["nombre-usuario"].value;
    console.log(nombreUsuario);
    const contraseniaUsuario = formularioLogin["contrasenia-usuario"].value;
    console.log(contraseniaUsuario);
    if (nombreUsuario.trim() !== "" && contraseniaUsuario.trim() !== "") {
        const userValido = baseDeDatos.find((el) => el.usuario === nombreUsuario);
        console.log(userValido);
        if (userValido){
            if(userValido.contrasenia === contraseniaUsuario){
                alert(`Los datos son correctos, bienvenido ${userValido.usuario}`);
                formularioLogin.classList.add("oculto");
                
                menuEnPantalla();

            }else{
                alert("Contraseña invalida");
            }
        }else {
            alert("El usuario no es valido");
        }
    }else{
        alert("Erro, debe completar los campos");
    }
}
formularioLogin.addEventListener("submit", loginDatosUsuario);   
/** Fin DOM login */
