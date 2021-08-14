function restaurante(a, b, c, d){
    this.opcion1 = a;
    this.opcion2 = b;
    this.opcion3 = c;
    this.opcion4 = d;
    }


const vegetariano = new restaurante('Guacamole', 'La Sibarita', 'La Temeraria', 'Chipotle')
const carnes = new restaurante('McDonalds', 'Burger King', 'La Pasiva', 'Pearsons')
const china = new restaurante('Cantón Chino', 'Sui Yuan', 'Arrolladitos', 'Ramen Noodles')
const pocitos = new restaurante('Berretin', 'Subway', 'Gorgonzola', 'Espinaca')
const cordon = new restaurante('Torrente', 'Ratatouille', 'Meryl', 'Ramona')
const malvin = new restaurante('Cantón Chino', 'La Pasiva', 'Ramen Noodles', 'Ramona')


//ARRAY

const restaurantes = [ 
    { id: 1,  nombre: "Guacamole", precio: 2, vegetariano: true, delivery: true, ubicacion:"Centro", tipoDeComida: "veggie"},
    { id: 2,  nombre: "La Sibarita", precio: 3, vegetariano: true, delivery: true, ubicacion:"Cordon", tipoDeComida: "veggie"},
    { id: 3,  nombre: "La Temeraria", precio: 2, vegetariano: true, delivery: true, ubicacion:"Parque Rodo", tipoDeComida: "veggie"},
    { id: 4,  nombre: "Chipotle", precio: 2, vegetariano: true, delivery: true, ubicacion:"Malvin", tipoDeComida: "veggie"},
    { id: 5,  nombre: "McDonalds", precio: 1, vegetariano: false, delivery: true, ubicacion:"Pocitos", tipoDeComida: "fast food"},
    { id: 6,  nombre: "Burger King", precio: 1, vegetariano: false, delivery: true, ubicacion:"Cordon", tipoDeComida: "fast food"},
    { id: 7,  nombre: "La Pasiva", precio: 2, vegetariano: false, delivery: true, ubicacion:"Centro", tipoDeComida: "fast food"},
    { id: 8,  nombre: "Pearsons", precio: 3, vegetariano: true, delivery: true, ubicacion:"Carrasco", tipoDeComida: "barbacoa"},
    { id: 9,  nombre: "Cantón Chino", precio: 2, vegetariano: false, delivery: true, ubicacion:"Pocitos", tipoDeComida: "china"},
    { id: 10,  nombre: "Sui Yuan", precio: 1, vegetariano: true, delivery: true, ubicacion:"Centro", tipoDeComida: "china"},
    { id: 11,  nombre: "Arrolladitos", precio: 1, vegetariano: true, delivery: true, ubicacion:"Palermo", tipoDeComida: "china"},
    { id: 12,  nombre: "Ramen Noodles", precio: 1, vegetariano: true, delivery: true, ubicacion:"Parque Rodo", tipoDeComida: "china"},
    { id: 13,  nombre: "Berretin", precio: 3, vegetariano: false, delivery: true, ubicacion:"Pocitos", tipoDeComida: "barbacoa"},
    { id: 14,  nombre: "Ratatouille", precio: 3, vegetariano: false, delivery: true, ubicacion:"Tres Cruces", tipoDeComida: "gourmet"},
]


//FUNCION FILTER
const restaurantesOpcionesVegetarianos = restaurantes.filter(restaurantes => restaurantes.vegetariano === true); 
console.log(restaurantesOpcionesVegetarianos);

const restaurantesUbicacion = restaurantes.filter(restaurantes => restaurantes.ubicacion === "Centro"); 
console.log(restaurantesUbicacion);

const restaurantesBaratos = restaurantes.filter(restaurantes => restaurantes.precio < 2); 
console.log(restaurantesUbicacion);


//PROMPT

let entrada = prompt("¿Querés pedir delivery o salir a comer?");
   switch (entrada) {
        case "delivery":
            let delivery = prompt("¿Que te pinta comer? <br /> (veggie / carnes / comida china)");
            switch (delivery) {
                case "veggie":
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button>Comida <strong>Veggie</strong><br />
                    <ol>
                        <li>${vegetariano.opcion1}</li>
                        <li>${vegetariano.opcion2}</li>
                        <li>${vegetariano.opcion3}</li>
                        <li>${vegetariano.opcion4}</li>
                    </ol>
                    </div>`)
                    break;   
                case "carnes":
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button><strong>Carnes</strong><br />
                    <ol>
                    <li>${carnes.opcion1}</li>
                    <li>${carnes.opcion2}</li>
                    <li>${carnes.opcion3}</li>
                    <li>${carnes.opcion4}</li>
                    </ol>
                    </div>`)                
                    break;
                case "china":
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button>Comida <strong>China</strong><br />
                    <ol>
                    <li>${china.opcion1}</li>
                    <li>${china.opcion2}</li>
                    <li>${china.opcion3}</li>
                    <li>${china.opcion4}</li>
                    </ol>
                    </div>`)                
                    break;
                default:
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button>¿Estás <strong>indeciso?</strong> Te dejamos algunas opciones<br />
                    <ol>
                    <li>${china.opcion1}</li>
                    <li>${vegetariano.opcion2}</li>
                    <li>${carnes.opcion3}</li>
                    <li>${vegetariano.opcion4}</li>
                    </ol>
                    </div>`)    
                    break;
                } 
        break;
            
        case "salir":
            let salir = prompt("¿Dónde te gustaría ir a comer? <br /> (pocitos / cordon / malvin)");
            switch (salir) {
                case "pocitos":
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button>Estos son los restaurantes en la ubicación seleccionada<br />
                    <ol>
                    <li>${pocitos.opcion1}</li>
                    <li>${pocitos.opcion2}</li>
                    <li>${pocitos.opcion3}</li>
                    <li>${pocitos.opcion4}</li>
                    </ol>
                    </div>`)
                    break;  
                case "cordon":
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button>Estos son los restaurantes en la ubicación seleccionada<br />
                    <ol>
                    <li>${cordon.opcion1}</li>
                    <li>${cordon.opcion2}</li>
                    <li>${cordon.opcion3}</li>
                    <li>${cordon.opcion4}</li>
                    </ol>
                    </div>`)
                    break;  
                case "malvin":
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button>Estos son los restaurantes en la ubicación seleccionada<br />
                    <ol>
                    <li>${malvin.opcion1}</li>
                    <li>${malvin.opcion2}</li>
                    <li>${malvin.opcion3}</li>
                    <li>${malvin.opcion4}</li>
                    </ol>
                    </div>`)
                    break;
                default:
                    document.write(`<div class="notification is-primary margin"><button class="delete"></button>¿Estás <strong>indeciso?</strong> Te dejamos algunas opciones<br />
                    <ol>
                    <li>${china.opcion1}</li>
                    <li>${vegetariano.opcion2}</li>
                    <li>${carnes.opcion3}</li>
                    <li>${vegetariano.opcion4}</li>
                    </ol>
                    </div>`)    
                    break;   
    }
}    



