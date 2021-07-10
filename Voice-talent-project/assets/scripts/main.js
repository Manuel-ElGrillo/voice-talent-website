window.onload = () => {

    //Pidiendo el nombre del usuario para imprimirlo en algunas partes del HTML

    function imprimirNombreActor () {

        let nombreActor = prompt("Indica tu nombre y apellido, por favor.", "Voice talent random xD");

        for( i = 0; i <= 5; i++ ) {
            let nombre = document.querySelector(`.nombre-actor${i}`);
            nombre.innerHTML = nombreActor;
        }
        
    }
    
    imprimirNombreActor(); 


    //Validación de formulario

    const datosFormulario = {
        nombre: "",
        telefono: "",
        email: "",
        empresa: "",
        servicio: "",
        mensaje: ""
    }

    const nombre = document.querySelector("#nombre");
    const telefono = document.querySelector("#telefono");
    const email = document.querySelector("#email");
    const empresa = document.querySelector("#empresa");
    const servicio = document.querySelector("#servicio");
    const mensaje = document.querySelector("#mensaje");

    function inputsCliente (event) {
        datosFormulario[event.target.id] = event.target.value;
    }

    nombre.addEventListener("input", inputsCliente);
    telefono.addEventListener("input", inputsCliente);
    email.addEventListener("input", inputsCliente);
    empresa.addEventListener("input", inputsCliente);
    servicio.addEventListener("input", inputsCliente);
    mensaje.addEventListener("input", inputsCliente);

    function mensajeError(mensaje) {
        const error = document.createElement("p");
        error.textContent = mensaje;
        error.classList.add("mensaje-error");

        formulario.appendChild(error);

        setTimeout( () => {
            error.remove();
        }, 3000);
    }

    function mensajeConfirmacion (mensaje) {
        const succes = document.createElement("p");
        succes.textContent = mensaje;
        succes.classList.add("mensaje-enviado");

        formulario.appendChild(succes);

        setTimeout( () => {
            succes.remove();
        }, 3000);
    }

    const formulario = document.querySelector(".form");

    formulario.addEventListener("submit", function (event){
        event.preventDefault();

        const {nombre, telefono, email, empresa, servicio, mensaje} = datosFormulario;

        if (nombre === "" || telefono === "" || email === "" || empresa === "" || servicio === "" || mensaje === "") {
            mensajeError("Todos los campos son obligatorios. Por favor, vuelva a llenar todos los campos.");
        } else {
            mensajeConfirmacion("Mensaje enviado satisfactoriamente.")
        }

        // console.log("Formulario enviado =)");
    });
    
}

