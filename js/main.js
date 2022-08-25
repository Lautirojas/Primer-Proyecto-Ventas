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
// VOLVER AL LOG-IN
const volverlogin = document.querySelector("#volverlogin");
// CONTENEDOR DE VOLVER AL LOG-IN
const containervolverlogin = document.querySelector("#volverlogincontainer");
// Btn para terminar de registrarse 
const finishregister = document.querySelector("#finishregister")
// Parrafo que me dice lo faltante para el registro
const parrafo = document.querySelector("#warnings");
// Contenedor del login config
const loginconfig = document.querySelector("#loginconfig");
//
let buscar1
// Events
let usuariosLogeados2 = []

// ACTIVA EL LOGIN-REGISTER

    const cerrarsesionlogin = () => {

        localStorage.removeItem(`nombrecompleto`);
        localStorage.removeItem(`emailcompleto`);
        localStorage.removeItem(`contrasenacompleta`);

        loginconfig.classList.remove("configprofile");
        revertirsaludo();
    }

    triggerbutton.addEventListener(`click`,(e) => {
        e.preventDefault();
        modalloogin.classList.remove("logindisappear");

        if(localStorage.getItem("usersregistered")){
            usuariosLogeados2 = JSON.parse(localStorage.getItem('usersregistered'));
            buscar1 = usuariosLogeados2.find(el => el.correo === emaillogin.value && el.contrasena === passlogin.value);
        }
        
        if(!buscar1){
                overlay.style.opacity = 1;
                overlay.style.visibility = "visible";
            }
        
        if(localStorage.getItem("emailcompleto")){
            loginconfig.innerHTML = "";
            let emailLog = localStorage.getItem("emailcompleto")
            let nombreLog = localStorage.getItem("nombrecompleto")

            modalloogin.classList.add("logindisappear");
            overlay.style.opacity = 0;
            overlay.style.visibility ="hidden";
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="text-light configwelcomeuser configsection"> Bienvenido ${nombreLog}
            </div>
                <div class="configloginsection configsection">
                    <i class="fa-solid fa-user configicon1"></i><span class="text-light">Mi Cuenta</span>
                </div>
                <div class="configsection">
                    <i class="fa-solid fa-right-from-bracket configicon2"></i> 
                    <span onclick="cerrarsesionlogin()" class="text-light" id="log-out">Cerrar Sesión</span>
                </div>
            `
            loginconfig.appendChild(div)
            loginconfig.classList.toggle("configprofile")
        }
        if(buscar1){
            loginconfig.innerHTML = "";
            const div = document.createElement("div");
            // INNERHTML DE LA CONFIGURACION DEL PERFIL UNA VEZ INICIADO SESION
            div.innerHTML = `
            
            <div class="text-light configwelcomeuser configsection"> Bienvenido ${buscar1.nombre}
            </div>
                <div class="configloginsection configsection">
                    <i class="fa-solid fa-user configicon1"></i><span class="text-light">Mi Cuenta</span>
                </div>
                <div class="configsection">
                    <i class="fa-solid fa-right-from-bracket configicon2"></i> 
                    <span onclick="cerrarsesionlogin()" class="text-light" id="log-out">Cerrar Sesión</span>
                </div>
            ` 
            loginconfig.appendChild(div)
            loginconfig.classList.toggle("configprofile")
        }
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
    volverlogin.addEventListener (`click`,(e) => {
        e.preventDefault();
        modalregister.style = "transform: translateY(600px)";
        modalloogin.classList.remove("logindisappear");
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

        if(entrar === true){
            parrafo.innerHTML = warnings
        }else{
            ejecutarFormulario()
            agregarUserLogeados();
            saludo()
        }

})


    // FUNCIONES

// DEVUELVE EL REGISTER
    const revertirsaludo = () =>{
        saludousername.innerHTML = ``;
        containervolverlogin.classList.add("not-show");
        formulario.style.display = `block`;
    }

// CIERRA EL REGISTER E SALUDA AL USUARIO
    const saludo = () =>{
        saludousername.innerHTML += `Hola ${nombreapellido}, Bienvenido a ForGamers`;
        containervolverlogin.classList.remove("not-show");
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

// HACE QUE A LA VARIABLE SE LE GUARDE EL DATO GUARDADO EN EL STORAGE
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
            nombrecompleto.value = ``;
            email.value = ``;
            Contrasena.value = ``;
            })
        }
    }



    // LOGIN

    

    // VARIABLES

// INPUT DEL EMAIL LOGIN
const emaillogin = document.querySelector("#emaillogin");
// INPUT DE LA CONTRASENA LOGIN
const passlogin = document.querySelector("#passlogin");
// BOTON INICIAR SESION LOGIN
const btnlogin = document.querySelector("#btnlogin");
// TEXTO QUE INDICA SI EL ICONO ES CORRECTO O NO 
const loginp = document.querySelector("#loginp");
// ICONO CORRECTO LOGIN
const logincorrecticon = document.querySelector("#logincorrecticon");
// ICONO INCORRECTO LOGIN   
const loginxicon = document.querySelector("#loginxicon");

// FUNCIONES

    // ARRAY PARA GENTE YA REGISTRADA
    let usuariosLogeados = [];
    // CONSTRUCTORA USUARIOS
    class UsuarioCreate{
        constructor (nombre,contrasena,correo) {
            this.nombre = nombre ,
            this.contrasena = contrasena ,
            this.correo = correo
        }
    }
    // FUNCION QUE AGREGA AL STORAGE Y AL ARRAY LOS USUARIOS REGISTRADOS
    const agregarUserLogeados = ()=>{
        let newuserlogeado = new UsuarioCreate(nombrecompleto.value, Contrasena.value, email.value);
        usuariosLogeados.push(newuserlogeado);
        console.log(usuariosLogeados); 
        console.log(newuserlogeado);
        localStorage.setItem('usersregistered', JSON.stringify(usuariosLogeados));
    }

    // ENCONTRAR AL USER

    let buscar

    const encontraruserlogin = () =>{

        console.log(usuariosLogeados);
        console.log(buscar);
    }

// LISTENERS

btnlogin.addEventListener (`click`,(e) => {
    e.preventDefault();
    // VARIABLE REGEX EMAIL
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    // TEXTO A PONER EN CASO DE QUE SEA INCORRECTO
    let warnings = "";
    // TEXTO QUE VA CON DEBAJO DE LOS ICONOS
    loginp.innerHTML = "";
    
    entrar = false;
    //
    usuariosLogeados = JSON.parse(localStorage.getItem('usersregistered'));
    buscar = usuariosLogeados.find(el => el.correo === emaillogin.value && el.contrasena === passlogin.value);
    console.log(buscar)
    // usuariosLogeados.forEach(el =>{
    //     if(emaillogin.value === el)
    // })
    // VALIDACION DE QUE EL EMAIL FUE BIEN PUESTO
    if(!regexEmail.test(emaillogin.value)){
        warnings += `El email no es valido <br>`;
        entrar = true
    }
    // CHECKEA QUE EL EMAIL Y LA CONTRASENA SEAN LAS MISMAS QUE LAS QUE SE REGISTRARON
    if(!buscar){
        loginp.classList.add("color-red");// LE DA COLOR ROJO
        loginp.classList.remove("pnot-show");// HACE QUE APAREZCA EL TEXXTO
        loginxicon.classList.remove("pnot-show");// HACE QUE APAREZCA EL ICONO
        loginp.classList.remove("color-greenpage");// LE REMUEVE LA CLASE DE VERDE POR SI ACASO
        logincorrecticon.classList.add("pnot-show");// AL ICONO DE CORRECTO LO VUELVE INVISIBLE EN CASO DE QUE APAREZA
        warnings += `Usuario Incorrecto`;
        entrar = true
    }
    if(entrar === true){
        loginp.innerHTML = warnings
    }
    //(emailstorage !== emaillogin.value || contrasenastorage !== passlogin.value) ||
    else{
        encontraruserlogin(); // EJECUTA EL BUSCADO DE SU SESION CREADA
        loginp.classList.remove("color-red");// REMUEVE EL COLOR ROJO
        loginp.classList.add("color-greenpage");// LE DA COLOR VERDE
        logincorrecticon.classList.add("color-greenpage");// LE DA COLOR VERDE AL ICONO
        logincorrecticon.classList.remove("pnot-show");// LE SACA EL INVISIBLE
        loginxicon.classList.add("pnot-show");// BORRA EL ICONO DE BORRAR
        loginp.innerHTML = `Has iniciado sesion correctamente`;// TEXTO DETALLE DE INICIO DE SESION
        // TIMEOUT QUE DESAPARECE EL MODAL LOG-IN
        setTimeout(() => {
            if(buscar){
                modalloogin.classList.add("logindisappear");
                overlay.style.opacity = 0;
                overlay.style.visibility ="hidden";
                console.log("hola")
            }
        },1000);
    }
})



    // CARRITO


    // VARIABLES

// DIV CONTENEDOR DEL STOCK
const contenedorProductos = document.querySelector("#contenedor-productos");
// CONTADOR DEL CARRITO
const contadorCarrito = document.querySelector("#contadorCarrito")
// CONTENEDOR DE TU CARRITO ESTA VACIO
const carritoVacio = document.querySelector("#carritoVacio");
// DIV CREADO EN EL CARRITO
const productoEnCarrito = document.querySelector(".productoEnCarrito");
// CONTENEDOR DEL CARRITO
const contenedorCarrito = document.querySelector("#carrito-contenedor");
// CONTENEDOR DEL PRECIO TOTAL
const containpricetotal = document.querySelector("#containpricetotal")
// SPAN QUE DICE EL PRECIO TOTAL
const precioTotal = document.querySelector("#precioTotal");
// CARTEL DE MINIMO 1
let buyadvertisment
// ARRAY CARRITO
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
    // if (localStorage.getItem('usersregistered')){
    //     usuariosLogeados = JSON.parse(localStorage.getItem('usersregistered'));
    // }
    verificarStorage()
})

// FETCH PRODUCTOS  

fetch('/stock.json')
    .then((res) => res.json())
    .then ((data) => {
        
        // SE CREAN LOS PRODUCTOS AL HTML
data.forEach((producto) => {

    const div = document.createElement("div");

    div.classList.add(`list__item`);
    
    div.innerHTML = `
    <div href="#" class="product">
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


    </div>
    `

    contenedorProductos.appendChild(div)

    const boton = document.querySelector(`#agregar${producto.id}`);


    boton.addEventListener(`click`, (e) => {
        e.preventDefault();
        agregarAlCarrito(producto.id);
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
        const item = data.find((prod) => prod.id === prodId)
        //Una vez obtenida la ID, le hago un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito();
}

})  

    })



// HAGO QUE EL ICONO TACHO LO BORRE

const eliminarDelCarrito = (prodId) => {  
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item);
    carrito.splice(indice,1)
    console.log(carrito)
    localStorage.setItem("carrito",JSON.stringify(carrito));
    actualizarCarrito();
}

// BOTON QUE SUMA 1 PRODUCTO EN EL CARRITO

const Botonsuma = (prodId)  => {
    const item = carrito.find((prod) => prod.id === prodId)
    console.log(item)
    console.log(item.cantidad)
    item.cantidad++
    actualizarCarrito()
}

// BOTON QUE RESTA 1 PRODUCTO EN EL CARRITO

const Botonresta = (prodId) =>{
    const item = carrito.find((prod) => prod.id === prodId)
    if(item.cantidad > 1){
        item.cantidad--
    }else if(item.cantidad === 1){ // dejamos comprar al cliente minimo 1
        setTimeout(() => {
            buyadvertisment.classList.remove("pnot-show");
        }, 300);
    };
    actualizarCarrito()
}


//

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedor-Productos (el modal)
    if(carrito.length === 0) {
        // DIV QUE EN CASO DE QUE NO HAYA PRODUCTOS ME DEJA UN CARTEL DE CARRITO VACIO
        const div = document.createElement("div")
        div.innerHTML= `
        <div class="card-body" style="padding: 12rem 1rem;" id="carritoVacio" >
            <h5 class="card-title" style="color: #666;">Tu Carrito esta vacio</h5>
            <p class="card-text" style="color: #999;">¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
            <a href="../index.html" class="btn btn-primary">Seguir Comprando</a>
        </div>
        `
        // METO EL CARTEL ADENTRO DEL CONTENEDOR CARRITO
        contenedorCarrito.appendChild(div)
        // ACTUALIZO EL PRECIO A 0 POR SI ACASO
        precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad / 0, 0);
        // DESSAPAREZCO EL CARTEL DEL PRECIO TOTAL
        containpricetotal.classList.add(`d-none`);

    }else{ // SI EL CLIENTE CARGA UN PRODUCTO SE INSERTA EL HTML CON EL PRODUCTO Y SUS DETALLES
        carrito.forEach((prod) =>{
            // CREO EL DIV DONDE CONTENDRE EL PRODUCTO SELECCIONADO
            const div = document.createElement(`div`);
            div.innerHTML = `
    <div class="product-carrito" >
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
                            <button class="product__buttons" onclick="Botonresta(${prod.id})"><i class="fa-solid fa-minus"></i></button>
                        </form>
                            <input type="tel" autocomplete="off" disabled class="product__input" value="${prod.cantidad}">
                        <form>
                            <button type="button" class="product__buttons" onclick="Botonsuma(${prod.id})"><i class="fa-solid fa-plus"></i></button>
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
            // INSERTA LOS PRODUCTOS DENTRO DEL DIV
            contenedorCarrito.appendChild(div)
            // LE SACA EL DISPLAY NONE AL PRECIO TOTAL + SEGUIR COMPRA
            containpricetotal.classList.remove(`d-none`);
            // METE EL PRODUCTO DENTRO DEL STORAGE
            localStorage.setItem(`carrito`, JSON.stringify(carrito));
            // CREA EL PRECIO TOTAL
            precioTotal.innerText = "$" + carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
            
            
            // VARIABLES CREADAS PARA SACAR EL DEFAULT
            
            // Boton que borra enteramente el producto
            const botoneliminar = document.querySelector(".boton-eliminar")
            // cartel que salta al querer comprar menos 1 prodcuto
            buyadvertisment = document.querySelector(".buyadvertisment");
            // Le saco el default con eventlistener
            botoneliminar.addEventListener (`click`,(e)=>{
                e.preventDefault();
            })
        });
    }
        // ME MUESTRA EN EL CONTADOR DEL CARRITO CUANTOS ELEMENTOS POSEE
        contadorCarrito.innerText = carrito.length; // actualiza con la longitud del carrito.
        
        console.log(carrito);
};

