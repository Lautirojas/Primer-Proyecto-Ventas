
// REGISTER

let members = [];

class member {
    constructor(username,email,password,dni,phone) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.dni = dni;
        this.phone = phone;
    }
}

function Login (){
    let register = new member;
    members.push(register);
    console.log(members)
    return register;
}

const newUser = () => {
    let username = prompt("Ingrese su nombre");
    let email = prompt("Ingrese su correo electronico");
    let password = prompt("Ingrese su contraseña deseada");
    let dni = prompt("Ingrese su numero de dni");
    let phone = prompt("Ingrese su numero de telefono");

    let register = new member(username,email,password,dni,phone);
    members.push(register);
    console.log(members);

    return register;
}

newUser()

// BUSQUEDA DE PRODUCTO + SU PRECIO

let listaProductos = [
    {nombre: "gabinete", price: 7.499},
    {nombre: "monitor", price: 39.999},
    {nombre: "memoria ram", price: 7.499},
    {nombre: "mouse", price: 4.999},
    {nombre: "teclado", price: 9.999},
    {nombre: "placa de video", price: 69.999}
]


    let search2 = prompt("que producto queres buscar?").toLowerCase();
    let search3

    if(search3 = listaProductos.find(el => el.nombre == search2)){
        alert(`el objeto buscado es ${search3.nombre} y su precio es ${search3.price}`);
    }else if(search3 === undefined) {
        alert("El producto que esta buscando no existe o no hay stock");
    }else{
        alert("El producto que esta buscando no existe o no hay stock");
    }


    // CARRITO

    //Suma el todo el precio del los producto agragados al carrito

    const carrito = [];

    let totalCarrito = 0;

    function comprar(){    
        let busquedas = prompt("Que producto deseas comprar?").toLowerCase()   
        let objeto = listaProductos.find(el => el.nombre == busquedas);   
        carrito.push(objeto);  
        totalCarrito = carrito.reduce((cont, el) => cont + el.price, 0);
        console.log(totalCarrito);
        console.log(carrito);
    }
    comprar()
    