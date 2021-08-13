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



console.table(vegetariano)
console.table(carnes)
console.table(china)


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



