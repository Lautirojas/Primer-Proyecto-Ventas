
// REGISTER 

// Variables

// Boton que activa el login
const triggerbutton = document.querySelector("#triggerbutton");
// Boton que sube el registro
const buttonregister = document.querySelector("#buttonregister")
// Boton que cierra el login
const modalclose = document.querySelector("#modalclose");
// ID LOGIN CONTAINER
const modalloogin = document.querySelector("#modalloogin");
// ID OVERLAY
const overlay = document.querySelector("#overlay");
// ID MODAL REGISTER CONTAINER
const modalregister = document.querySelector("#modalregister")
// Boton que cierra el register
const modalcloseregister = document.querySelector("#modalcloseregister");
// Boton Volver al Log-In
const registervolver = document.querySelector("#registervolver");
// Form
const formulario = document.querySelector("#formulario");
// Nombre completo
const nombrecompleto = document.querySelector("#nombre");
// Email
const email = document.querySelector("#email");
// Contrasena
const Contrasena = document.querySelector("#password");
// Luego del registro
const saludousername = document.querySelector("#saludo");
// Cerrar sesion
const logout = document.querySelector("#logout");
// Contenedor de cerrar sesion
const containerlogout = document.querySelector("#logoutcontainer");
// Btn para terminar de registrarse 
const finishregigister = document.querySelector("#finishregigister")
// Parrafo que me dice lo faltante para el registro
const parrafo = document.querySelector("#warnings");

// Events

// ACTIVA EL LOGIN-REGISTER
    triggerbutton.addEventListener(`click`,(e) => {
        e.preventDefault();
        overlay.style.opacity = 1;
        overlay.style.visibility = "visible";
        modalloogin.classList.remove("logindisappear");
    })
// CIERRA EL LOGIN 
    modalclose.addEventListener(`click`,(e) => {
        e.preventDefault();
        overlay.style.opacity = 0;
        overlay.style.visibility = "hidden";
        modalloogin.classList.add("logindisappear");
    })
// ABRE EL FORM REGISTER
    buttonregister.addEventListener(`click`,(e) => {
        e.preventDefault();
        modalregister.style.opacity = 1;
        modalregister.style.transform= "translateY(-700px)";
        modalloogin.classList.add("logindisappear");
    })
// CIERRA EL REGISTER
    modalcloseregister.addEventListener(`click`,(e) => {
        e.preventDefault();
        overlay.style.opacity = 0;
        overlay.style.visibility = "hidden";
        modalregister.style = "transform: translateY(600px)";
    })
// PODES VOLVER AL LOGIN DESDE EL REGISTER
    registervolver.addEventListener(`click`,(e) => {
        e.preventDefault();
        modalregister.style = "transform: translateY(600px)";
        modalloogin.classList.remove("logindisappear");
    });
// BORRA EL STORAGE DE QUIEN SE CREO LA CUENTA
    logout.addEventListener (`click`,(e) => {
        e.preventDefault();
        cerrarSesion();
    })

// VALIDACION PREVIA PARA REGISTRARTE

    let entrar = false;

    formulario.addEventListener("submit", e=>{
        e.preventDefault()
        let warnings = "";
            entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        parrafo.innerHTML = "";
        if(nombrecompleto.value.length <6){
            warnings += `El nombre no es valido <br>`
            entrar = true;
        }
        if(!regexEmail.test(email.value)){
            warnings += `El email no es valido <br>`
            entrar = true;
        }
        if(Contrasena.value.length < 7){
            warnings += `La contraseña no es valida <br>`
            entrar = true;
        }
        if(entrar){
            parrafo.innerHTML = warnings
        }else if(entrar === false){
            saludo();
        }

})


    // FUNCIONES

// STORAGE & REGISTER-LOGIN

//  CERRAR SESION
    const cerrarSesion = () =>{
        localStorage.removeItem(`nombrecompleto`);
        localStorage.removeItem(`emailcompleto`);
        localStorage.removeItem(`contrasenacompleta`);
        revertirsaludo();
    }

// DEVUELVE EL REGISTER
    const revertirsaludo = () =>{
        saludousername.innerHTML = ``;
        containerlogout.classList.add("not-show");
        formulario.style.display = `block`;
    }

// CIERRA EL REGISTER E SALUDA AL USUARIO
    const saludo = () =>{
        saludousername.innerHTML += `Hola ${nombreapellido}`;
        containerlogout.classList.remove("not-show");
        formulario.style.display = `none`;
    }

// VARIABLES PARA EL STORAGE
    let nombreapellido;
    let emailgmail;
    let contrasena123;


// CREA EL USUARIO E AÑADE AL STORAGE
    const ejecutarFormulario = () => {
        nombreapellido = nombrecompleto.value;
        emailgmail = email.value;
        contrasena123 = Contrasena.value; 

        localStorage.setItem(`nombrecompleto`, nombreapellido);
        localStorage.setItem(`emailcompleto`, emailgmail);
        localStorage.setItem(`contrasenacompleta`, contrasena123);

    }

// HACE QUE LA VARIABLE SE LE GUARDE EL NOMBRE GUARDADO EN EL STORAGE
    let nombrestorage = localStorage.getItem(`nombrecompleto`);
    let emailstorage = localStorage.getItem(`emailcompleto`);
    let contrasenastorage = localStorage.getItem(`contrasenacompleta`);

// VERIFICA QUE SEA EL USUARIO QUE SE REGISTRO 
    const verificarStorage = () =>{
        if (nombrestorage !== null && emailstorage !== null && contrasenastorage !== null){
            nombreapellido = nombrestorage;
            emailgmail = emailstorage;
            contrasena123 = contrasenastorage;
            saludo();
        } else {
            formulario.addEventListener(`submit`,(e) => {
                e.preventDefault();
                ejecutarFormulario();
            nombrecompleto.value = ``;
            email.value = ``;
            Contrasena.value = ``;
            })
        }
    }

    verificarStorage();

    // CARRITO

    // STOCK

    let stockProductos = [
        {id: 1, nombre: "Buzo 1", tipo: "buzo", cantidad: 1,  precio: 1200,  img: '../imagenes/mouse.png'},
        {id: 2, nombre: "Buzo 2", tipo: "buzo", cantidad: 1,  precio: 1100,  img: '../imagenes/monitor.png'},
        {id: 3, nombre: "Buzo 3", tipo: "buzo", cantidad: 1,  precio: 1200,  img: '../imagenes/placadevideo.png'},
        {id: 4, nombre: "Buzo 4", tipo: "buzo", cantidad: 1,  precio: 1400,  img: '../imagenes/notebook4.png'},
        {id: 5, nombre: "Buzo 5", tipo: "buzo", cantidad: 1,  precio: 1200,  img: '../imagenes/sillagamer3_adobe_express.png'},
        {id: 6, nombre: "Buzo 6", tipo: "buzo", cantidad: 1,  precio: 1500,  img: '../imagenes/teclado1.png'},
        {id: 7, nombre: "Remera 1", tipo: "remera", cantidad: 1,  precio: 500,  img: '../imagenes/sillagamer4_adobe_express.png'},
        {id: 8, nombre: "Remera 2", tipo: "remera", cantidad: 1,  precio: 500, img: '../imagenes/procesador-ryzen.png'},
        {id: 9, nombre: "Remera 3", tipo: "remera", cantidad: 1,  precio: 500, img: '../imagenes/ssd_240gb_kingston_adobe_express.png'},
        {id: 10, nombre: "Remera 4", tipo: "remera", cantidad: 1,  precio: 700,  img: '../imagenes/notebook1.png'},
    ]

    // VARIABLES

// DIV CONTENEDOR DEL STOCK
const contenedorProductos = document.querySelector("#contenedor-productos");
// CONTADOR DEL CARRITO
const contadorCarrito = document.querySelector("#contadorCarrito")
// CONTENEDOR DE TU CARRITO ESTA VACIO
const carritoVacio = document.querySelector("#carritoVacio");
// DIV CREADO EN EL CARRITO
const productoEnCarrito = document.querySelector(".productoEnCarrito");

// ARRAY CARRITO

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

// contenedor carrito
const contenedorCarrito = document.querySelector("#carrito-contenedor");

// SE CREAN LOS PRODUCTOS AL HTML
stockProductos.forEach((producto) => {

    const div = document.createElement("div");

    div.classList.add(`list__item`);
    
    div.innerHTML = `
    <a href="#" class="product">
            <div class="image">
                <img src=${producto.img} alt= "">
            </div>
            <div class="info">
                <h3 class="product__title">${producto.nombre}</h3>
                <div class="main__price1">
                    $${producto.precio}
                    <span class="price__promo">$8.499</span>
                </div>
                <div>
                    <div class="main__gitemcontainer1">
                                <div class="main__gitem1">
                                        <span class="main__goutline1"><button class= "boton-comprar">Comprar</button></span>
                                </div>
                                <div class="main__gitem1">
                                    <span class="main__goutline2"><i class="fas fa-shopping-cart" aria-hidden="true"></i><button id="agregar${producto.id}" class="boton-agregar">Agregar</button></span>
                                </div>
                    </div>
                </div>
            </div>


    </a>
    `

    contenedorProductos.appendChild(div)

    const boton = document.querySelector(`#agregar${producto.id}`);


    boton.addEventListener(`click`, (e) => {
        e.preventDefault();
        agregarAlCarrito(producto.id);
    })
})  

// funcion agregar al carrito

const agregarAlCarrito = (prodId) => {
    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { 
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, LO AGREGAMOS AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)
        //Una vez obtenida la ID, le hago un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito(); //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}



// HAGO QUE EL ICONO TACHO LO BORRE

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    // if (prodId > 0){
    //     carritoVacio.classList.remove("not-show");
        
    // }else{
    //     carritoVacio.classList.add("not-show");
    // }
    
    actualizarCarrito()
}


//

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";


    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedor-Productos (el modal)
    carrito.forEach((prod) =>{
        const div = document.createElement(`div`)
        div.classList.add("productoEnCarrito");

        div.innerHTML = `
<a href="#" class="product">
            <div class="image">
                <img src=${prod.img} alt= "">
            </div>
        <div class="info">
                <h3 class="product__title_carrito">${prod.nombre}</h3>
            <div class="main__price__carrito">
                $${prod.precio}
                <span class="price__promo__carrito">$8.499</span>
            </div>
            <div>
                <div class="main__gitemcontainer1">
                            <div class="main__gitem1">
                                <p> Cantidad: <span id="cantidad"> ${prod.cantidad} </span> </p>
                            </div>
                            <div class="main__gitem1">
                                <button  onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                            </div>
                </div>
            </div>
        </div>
</a>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))
    })

        contadorCarrito.innerText = carrito.length; // actualiza con la longitud del carrito.
        
        console.log(carrito)
}
