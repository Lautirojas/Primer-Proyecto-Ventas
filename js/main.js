const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    effect : `slide`,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});







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
        (entrar === true) ? parrafo.innerHTML = warnings : saludo();

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
        {id: 1, nombre: "Mouse logitech g403", tipo: "mouse", cantidad: 1,  precio: 1200,  img: '../imagenes/mouse.png'},
        {id: 2, nombre: "Monitor Msi 144Hz", tipo: "monitor", cantidad: 1,  precio: 1100,  img: '../imagenes/monitor.png'},
        {id: 3, nombre: "PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3090 VENTUS", tipo: "placa", cantidad: 1,  precio: 1200,  img: '../imagenes/placadevideo.png'},
        {id: 4, nombre: "Notebook Intel Cloudbook", tipo: "notebook", cantidad: 1,  precio: 1400,  img: '../imagenes/notebook4.png'},
        {id: 5, nombre: "Silla Gamer Game House Naranja", tipo: "silla", cantidad: 1,  precio: 1200,  img: '../imagenes/sillagamer3_adobe_express.png'},
        {id: 6, nombre: "Teclado Redragon", tipo: "teclado", cantidad: 1,  precio: 1500,  img: '../imagenes/teclado1.png'},
        {id: 7, nombre: "Silla Gamer Primus Thronos", tipo: "silla", cantidad: 1,  precio: 500,  img: '../imagenes/sillagamer4_adobe_express.png'},
        {id: 8, nombre: "Procesador Ryzen 5600g", tipo: "procesador", cantidad: 1,  precio: 500, img: '../imagenes/procesador-ryzen.png'},
        {id: 9, nombre: "Disco Solido Ssd 240Gb Kingston", tipo: "disco", cantidad: 1,  precio: 500, img: '../imagenes/ssd_240gb_kingston_adobe_express.png'},
        {id: 10, nombre: "Notebook Samsung Plus V2", tipo: "notebook", cantidad: 1,  precio: 700,  img: '../imagenes/notebook1.png'},
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
// contenedor carrito
const contenedorCarrito = document.querySelector("#carrito-contenedor");
// precio total
const precioTotal = document.querySelector("#precioTotal");
// boton de la resta carrito
let Botonresta;
// ARRAY CARRITO
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


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
    actualizarCarrito(); //LLAMAMOS A LA FUNCION QUE CREAMOS
}



// HAGO QUE EL ICONO TACHO LO BORRE

const eliminarDelCarrito = (prodId)  => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito()
}
// Suma la cantidad del producto en 1
const Botonsuma = () => {
    carrito.forEach((prod) =>{
        if(prod.cantidad >= 1){
            prod.cantidad += 1
        }else{
            prod.cantidad += 1
        }
        console.log(carrito);
        actualizarCarrito();
    })
}

//

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";


    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedor-Productos (el modal)
    carrito.forEach((prod) =>{
        const div = document.createElement(`div`)
        div.classList.add("productoEnCarrito");

        div.innerHTML = `
<div class="product" >
            <div class="image">
                <img src=${prod.img} alt= "">
            </div>
        <div class="info">
                <h3 class="product__title_carrito">${prod.nombre}</h3>
            <div class="main__price__carrito">
                <div>
                    $${prod.precio}
                    <span class="price__promo__carrito">$8.499</span>
                </div>
                <div class="product__sumaresta">
                    <form>
                        <button class="product__buttons" onclick="Botonresta(${prod.cantidad})"><i class="fa-solid fa-minus"></i></button>
                    </form>
                        <input type="tel" autocomplete="off" disabled class="product__input" value="${prod.cantidad}">
                    <form>
                        <button type="button" class="product__buttons" onclick="Botonsuma(${prod.cantidad})"><i class="fa-solid fa-plus"></i></button>
                    </form>
                </div>
                <div class="main__gitemcontainer1">
                    <div class="main__gitem1">
                        <button type="button" onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
            <div>
                <p class="buyadvertisment pnot-show">Puedes comprar desde 1 !!!</p>
            </div>
        </div>
</div>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito));

        precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
        
        // Variables a sacar el default
        
        // Boton que borra enteramente el producto
        const botoneliminar = document.querySelector(".boton-eliminar")
        // cartel que salta al querer comprar menos 1 prodcuto
        const buyadvertisment = document.querySelector(".buyadvertisment");
        // Le saco el default con eventlistener
        botoneliminar.addEventListener (`click`,(e)=>{
            e.preventDefault();
        })
        // resta la cantidad del producto
        Botonresta = () => {
        carrito.forEach((prod) =>{
            if(prod.cantidad > 1){
                prod.cantidad -= 1
            }else if(prod.cantidad === 1){ // dejamos comprar al cliente minimo 1
                buyadvertisment.classList.remove("pnot-show");
        };
        console.log(carrito);
        actualizarCarrito();
    });
};

    });
        contadorCarrito.innerText = carrito.length; // actualiza con la longitud del carrito.
        
        console.log(carrito);
};

