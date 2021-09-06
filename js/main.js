//ARRAY
const recetas = [ 
    { id: 1,  nombre: "Guacamole", ingredientes: ["palta", "cebolla", "tomate", "limon"], ingredientesOpcionales: ["merken", "pimienta"], vegano: true, tiempo: 5, tipoDeComida: "snack", codigo: 5,},
    { id: 2,  nombre: "Pasta Caprese", ingredientes: ["fideos", "tomate", "albahaca", "queso", "aceite"], vegano: true, tiempo: 30, tipoDeComida: "almuerzo/cena", codigo: 2, img: "img/pasta-caprese.jpg"},
    { id: 3,  nombre: "Wrap de verduras", ingredientes: ["tortilla", "queso", "cebolla", "tomate"], ingredientesOpcionales: ["morron", "berenjena", "garbanzos"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena", codigo: 1, img: "img/wrap.jpg"},
    { id: 4,  nombre: "Sandwich Margarita", ingredientes: ["pan", "queso", "salsa de tomate", "albahaca", "manteca"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena", codigo: 1},
    { id: 5,  nombre: "Omelette Rapidito", ingredientes: ["huevo", "queso", "leche", "aceite"], ingredientesOpcionales: ["arvejas", "jamon veg", "albahaca", "tomate"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena", codigo: 1},
    { id: 6,  nombre: "Garbanzos Crunchy", ingredientes: ["garbanzos", "aceite"], ingredientesOpcionales: ["pimenton", "ajíl", "curry"], vegano: true, tiempo: 30, tipoDeComida: "snack", codigo: 5},
    { id: 7,  nombre: "Chop Suey", ingredientes: ["fideos", "cebolla", "morron", "salsa de soja"], ingredientesOpcionales: ["berenjena", "ajo", "albahaca"], vegano: true, tiempo: 30, tipoDeComida:  "almuerzo/cena", codigo: 2},
    { id: 8,  nombre: "Huevitos Revueltos", ingredientes: ["huevo", "aceite", "pan"], ingredientesOpcionales: ["queso", "cibulette", "albahaca", "pimienta"], vegano: false, tiempo: 5, tipoDeComida: "desayuno/merienda", codigo: 3, img: "img/huevos.jpg"},
    { id: 9,  nombre: "Panqueques de Banana Fast and Furious", ingredientes: ["banana", "avena"], ingredientesOpcionales: ["miel", "mermelada"], vegano: true, tiempo: 5, tipoDeComida: "desayuno/merienda", codigo: 3},
    { id: 10,  nombre: "Panqueques Domingueros", ingredientes: ["banana", "avena", "huevo", "leche", "harina", "azucar", "polvo de hornear"], ingredientesOpcionales: ["miel", "mermelada", "canela", "maple syrup"], vegano: false, tiempo: 30, tipoDeComida: "desayuno/merienda", codigo: 4, img:"img/panqueques.jpg"},
    { id: 11,  nombre: "Overnight Oats", ingredientes: ["avena", "leche", "miel", "vainilla"], ingredientesOpcionales: ["miel", "mermelada", "canela", "maple syrup"], vegano: true, tiempo: 30, tipoDeComida: "desayuno/merienda", codigo: 4},
    { id: 12,  nombre: "Barritas de avena", ingredientes: ["avena", "miel", "manteca de mani", "canela"], ingredientesOpcionales: ["chocolate"], vegano: true, tiempo: 30, tipoDeComida: "desayuno/merienda", codigo: 4},


]

const almuerzoCenaRapido = recetas.filter(receta => receta.codigo === 1); 
console.log(almuerzoCenaRapido);//

const almuerzoCenaLento = recetas.filter(receta => receta.codigo === 2); 
console.log(almuerzoCenaLento);//

const desayunoMeriendaRapido = recetas.filter(receta => receta.codigo === 3); 
console.log(desayunoMeriendaRapido);//

const desayunoMeriendaLento = recetas.filter(receta => receta.codigo === 4); 
console.log(desayunoMeriendaLento);//

const snacks = recetas.filter(receta => receta.codigo === 5); 
console.log(snacks);//



//DOM


function show(){
 
  let name_rules=document.getElementById("form_utopian").selectComida.value;
  let rules_description=document.getElementById("sectionparamodal");
 
  if (name_rules=="desayuno")
    {
      const desayunoMeriendaRapido = recetas.filter(receta => receta.codigo === 3); 
      for (const receta of desayunoMeriendaRapido) {
        $("#sectionparamodal").append(`<section class = "section">
        <div class = "container">
           <div id="modal" class = "modal">
              <div class = "modal-background"></div>
                    <article class = "media">
                      <div class = "media-content">
                        <div class = "content">
                          <div class="card">
                            <div class="header">
                            <img src="${receta.img}" alt="">
                            </div>
                            <div class="text">
                               <h1 class="food">
                               ${receta.nombre}
                               </h1>                  
                               <p class="info">Ingredientes:${receta.ingredientes}</p>
                            </div>
                            <a href="#" class="btn">A cocinar!</a>
                         </div>
                        </div>
                     </div>
                    </article>
              <button class = "modal-close is-large" aria-label="close"></button>
           </div>
        </div>
      </section>`)
      }
    }
  else if (name_rules=="almuerzo")
    {
      const almuerzoCenaRapido = recetas.filter(receta => receta.codigo === 1); 
      for (const receta of almuerzoCenaRapido) {
        $("#sectionparamodal").append(`<section class = "section">
        <div class = "container">
           <div id="modal" class = "modal">
              <div class = "modal-background"></div>
                    <article class = "media">
                      <div class = "media-content">
                        <div class = "content">
                          <div class="card">
                            <div class="header">
                            <img src="${receta.img}" alt="">
                            </div>
                            <div class="text">
                               <h1 class="food">
                               ${receta.nombre}
                               </h1>                  
                               <p class="info">Ingredientes:${receta.ingredientes}</p>
                            </div>
                            <a href="#" class="btn">A cocinar!</a>
                         </div>
                        </div>
                     </div>
                    </article>
              <button class = "modal-close is-large" aria-label="close"></button>
           </div>
        </div>
      </section>`)
      }
    }
  else if (name_rules=="merienda")
    {
      const desayunoMeriendaLento = recetas.filter(receta => receta.codigo === 4); 
      for (const receta of desayunoMeriendaLento) {
        $("#sectionparamodal").append(`<section class = "section">
        <div class = "container">
           <div id="modal" class = "modal">
              <div class = "modal-background"></div>
                    <article class = "media">
                      <div class = "media-content">
                        <div class = "content">
                          <div class="card">
                            <div class="header">
                            <img src="${receta.img}" alt="">
                            </div>
                            <div class="text">
                               <h1 class="food">
                               ${receta.nombre}
                               </h1>                  
                               <p class="info">Ingredientes:${receta.ingredientes}</p>
                            </div>
                            <a href="#" class="btn">A cocinar!</a>
                         </div>
                        </div>
                     </div>
                    </article>
              <button class = "modal-close is-large" aria-label="close"></button>
           </div>
        </div>
      </section>`)
      }

    }

    else if (name_rules=="cena")
    {
      const almuerzoCenaLento = recetas.filter(receta => receta.codigo === 2); 
      for (const receta of almuerzoCenaLento) {
        $("#sectionparamodal").append(`<section class = "section">
        <div class = "container">
           <div id="modal" class = "modal">
              <div class = "modal-background"></div>
                    <article class = "media">
                      <div class = "media-content">
                        <div class = "content">
                          <div class="card">
                            <div class="header">
                            <img src="${receta.img}" alt="">
                            </div>
                            <div class="text">
                               <h1 class="food">
                               ${receta.nombre}
                               </h1>                  
                               <p class="info">Ingredientes:${receta.ingredientes}</p>
                            </div>
                            <a href="#" class="btn">A cocinar!</a>
                         </div>
                        </div>
                     </div>
                    </article>
              <button class = "modal-close is-large" aria-label="close"></button>
           </div>
        </div>
      </section>`)
      }
    }
}

$(".modal-button").click(function() {
  var target = $(this).data("target");
  $("html").addClass("is-clipped");
  $(target).addClass("is-active");
  });
  
  $(".modal-close").click(function() {
  $("html").removeClass("is-clipped");
  $(this).parent().removeClass("is-active");
  });


//Local storage
let selectComida = document.getElementById("selectComida");
let selectTiempo = document.getElementById("selectTiempo");
let veganoCheckbox = document.getElementById("veganoCheckbox");

let saveButton = document.getElementById("saveButton");
let retrieveButton = document.getElementById("retrieveButton");

function saveResponses() {
	localStorage.setItem("Comida", selectComida.value);
	localStorage.setItem("Tiempo", selectTiempo.value);
  localStorage.setItem("Vegano", veganoCheckbox.value);
}

saveButton.addEventListener("click", saveResponses);

function retrieveResponses() {
	selectComida.value = localStorage.getItem("Comida");
  selectTiempo.value = localStorage.getItem("Tiempo");
  veganoCheckbox.value = localStorage.getItem("Vegano");
}

retrieveButton.addEventListener("click", function(e) { e.preventDefault(); retrieveResponses(); });

