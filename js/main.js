function compare_tiempo(a, b){
    if(a.tiempo < b.tiempo){
            return -1;
    }else if(a.tiempo > b.tiempo){
            return 1;
    }else{
            return 0;
    }
  }

//ARRAY

const recetas = [ 
    { id: 1,  nombre: "Guacamole", ingredientes: ["palta", "cebolla", "tomate", "limon"], ingredientesOpcionales: ["merken", "pimienta"], vegano: true, tiempo: 5, tipoDeComida: ["snack", "acompañamiento", "salado"] },
    { id: 2,  nombre: "Pasta Caprese", ingredientes: ["fideos", "tomate", "albahaca", "queso", "aceite"], vegano: true, tiempo: 30, tipoDeComida: ["almuerzo", "cena", "salado"]},
    { id: 3,  nombre: "Wrap de verduras", ingredientes: ["tortilla", "queso", "cebolla", "tomate"], ingredientesOpcionales: ["morron", "berenjena", "garbanzos"], vegano: false, tiempo: 5, tipoDeComida: ["almuerzo", "cena", "salado"]},
    { id: 4,  nombre: "Sandwich Margarita", ingredientes: ["pan", "queso", "salsa de tomate", "albahaca", "manteca"], vegano: false, tiempo: 5, tipoDeComida: ["almuerzo", "cena", "salado"]},
    { id: 5,  nombre: "Omelette Rapidito", ingredientes: ["huevo", "queso", "leche", "aceite"], ingredientesOpcionales: ["arvejas", "jamon veg", "albahaca", "tomate"], vegano: false, tiempo: 5, tipoDeComida: ["almuerzo", "cena", "salado", "desayuno"]},
    { id: 6,  nombre: "Garbanzos Crunchy", ingredientes: ["garbanzos", "aceite"], ingredientesOpcionales: ["pimenton", "ajíl", "curry"], vegano: true, tiempo: 30, tipoDeComida: ["snack", "acompañamiento", "salado"]},
    { id: 7,  nombre: "Chop Suey", ingredientes: ["fideos", "cebolla", "morron", "salsa de soja"], ingredientesOpcionales: ["berenjena", "ajo", "albahaca"], vegano: true, tiempo: 30, tipoDeComida: ["snack", "acompañamiento", "salado"]},
    { id: 8,  nombre: "Huevitos Revueltos", ingredientes: ["huevo", "aceite", "pan"], ingredientesOpcionales: ["queso", "cibulette", "albahaca", "pimienta"], vegano: false, tiempo: 5, tipoDeComida: ["snack", "desayuno", "almuerzo", "salado"]},
    { id: 9,  nombre: "Panqueques de Banana", ingredientes: ["banana", "avena"], ingredientesOpcionales: ["miel", "mermelada"], vegano: true, tiempo: 5, tipoDeComida: ["snack", "desayuno", "dulce"]},



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
const recetasRapidas = recetas.filter(recetas => recetas.tiempo === 5); 
console.log(recetasRapidas);

console.log("Lista de recetas en orden de tiempo");
console.log(recetas.sort(compare_tiempo));




/*PROMPT

let entrada = prompt("¿Con cuánto tiempo disponés? todo el tiempo del mundo / un buen rato / 5 minutos");
   switch (entrada) {
        case "todo el tiempo del mundo":
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
            
        case "un buen rato":
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


*/

