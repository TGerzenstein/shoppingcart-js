

class Producto {
    constructor (
        nombreMarca,
        precioProducto,
        stockProducto ) 
        
    {
        this.marca = nombreMarca;
        this.precio = precioProducto;
        this.stock = stockProducto;
    };

    mostrarProductosEnPantalla() {
        document.getElementById("carrito").innerHTML = `
        <div>  
             <h2>  ${this.marca}  </h2> 
             <p>  ${this.precio}  </p> 
       </div> 
       `
    };
};


let baseDeDatos = [];

let producto1 = new Producto ("Coreracer Adidas", "$42000", 12 );
let producto2 = new Producto ("Nike", "$12000", 12 );
let producto3 = new Producto ("New Balance", "$32000", 0 );
let producto4 = new Producto ("Salomon", "$16000", 12 );
let producto5 = new Producto ("Montagne", "$30000", 12 );
let producto6 = new Producto ("Converse", "$14000", 12 );

baseDeDatos.push(producto1);
baseDeDatos.push(producto2);
baseDeDatos.push(producto3);
baseDeDatos.push(producto4);
baseDeDatos.push(producto5);
baseDeDatos.push(producto6);



let aux = ` `
for(let i=0; i<baseDeDatos.length; i++) {
    if ( baseDeDatos[i].stock > 0 ) {

    aux +=
    `
    <div style= "padding: 2rem;
                 width: 30%;
                 height: 40%;
                 background-color: #fff;
                 margin-left: 2rem;
                 display: flex;
                 flex-direction: column;">  
        <img src="/zapas.jpg" alt="..."
        style= "width: 70%;
                height: 70%;  
                background-color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <h2  style= "font-size: 1.20rem;
                    padding-top: 1rem;
                    ">${baseDeDatos[i].marca}</h2> 
        <h3 
            style= "color: grey;
            padding-top: 0.30rem;
            padding-bottom: 0.40rem;
            font-size: 1.10rem;
            ">${baseDeDatos[i].precio}</h3> 
        <button onclick="AgregarAlCarrito">Agregar al carrito</button>   
    </div>
    `;
    }
};


document.getElementById("productos").innerHTML = aux;

let carrito = [baseDeDatos];


function agregarAlCarrito() {
     localStorage.setItem("carrito",JSON.stringify(carrito));
};
