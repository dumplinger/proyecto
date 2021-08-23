//ARRAY
var recetas = [ 
    { id: 1,  nombre: "Guacamole", ingredientes: ["palta", "cebolla", "tomate", "limon"], ingredientesOpcionales: ["merken", "pimienta"], vegano: true, tiempo: 5, tipoDeComida: "snack" },
    { id: 2,  nombre: "Pasta Caprese", ingredientes: ["fideos", "tomate", "albahaca", "queso", "aceite"], vegano: true, tiempo: 30, tipoDeComida: "almuerzo/cena"},
    { id: 3,  nombre: "Wrap de verduras", ingredientes: ["tortilla", "queso", "cebolla", "tomate"], ingredientesOpcionales: ["morron", "berenjena", "garbanzos"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena"},
    { id: 4,  nombre: "Sandwich Margarita", ingredientes: ["pan", "queso", "salsa de tomate", "albahaca", "manteca"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena"},
    { id: 5,  nombre: "Omelette Rapidito", ingredientes: ["huevo", "queso", "leche", "aceite"], ingredientesOpcionales: ["arvejas", "jamon veg", "albahaca", "tomate"], vegano: false, tiempo: 5, tipoDeComida: "almuerzo/cena"},
    { id: 6,  nombre: "Garbanzos Crunchy", ingredientes: ["garbanzos", "aceite"], ingredientesOpcionales: ["pimenton", "ajíl", "curry"], vegano: true, tiempo: 30, tipoDeComida: "snack"},
    { id: 7,  nombre: "Chop Suey", ingredientes: ["fideos", "cebolla", "morron", "salsa de soja"], ingredientesOpcionales: ["berenjena", "ajo", "albahaca"], vegano: true, tiempo: 30, tipoDeComida:  "almuerzo/cena"},
    { id: 8,  nombre: "Huevitos Revueltos", ingredientes: ["huevo", "aceite", "pan"], ingredientesOpcionales: ["queso", "cibulette", "albahaca", "pimienta"], vegano: false, tiempo: 5, tipoDeComida: "desayuno/merienda"},
    { id: 9,  nombre: "Panqueques de Banana Fast and Furious", ingredientes: ["banana", "avena"], ingredientesOpcionales: ["miel", "mermelada"], vegano: true, tiempo: 5, tipoDeComida: "desayuno/merienda"},
    { id: 10,  nombre: "Panqueques Domingueros", ingredientes: ["banana", "avena", "huevo", "leche", "harina", "azucar", "polvo de hornear"], ingredientesOpcionales: ["miel", "mermelada", "canela", "maple syrup"], vegano: false, tiempo: 30, tipoDeComida: "desayuno/merienda"},
    { id: 11,  nombre: "Overnight Oats", ingredientes: ["avena", "leche", "miel", "vainilla"], ingredientesOpcionales: ["miel", "mermelada", "canela", "maple syrup"], vegano: true, tiempo: 30, tipoDeComida: "desayuno/merienda"},
    { id: 12,  nombre: "Barritas de avena", ingredientes: ["avena", "miel", "manteca de mani", "canela"], ingredientesOpcionales: ["chocolate"], vegano: true, tiempo: 30, tipoDeComida: "desayuno/merienda"},


]



//PROMPT
let entrada = prompt("¿Con cuánto tiempo disponés? todo el tiempo del mundo / un buen rato / 5 minutos");
//Primero se le pregunta al usuario el tiempo con el que dispone, basado en su respuesta se le consulta que tipo de comida
//Generé filtros que toman ambas condiciones y seleccionan las recetas que se adecúan mejor para sugerirle al usuario mediante un alert

   switch (entrada) {
        case "todo el tiempo del mundo":
            let muchoTiempo = prompt("¿Que vas a comer? (desayuno / almuerzo / merienda / cena)");
            switch (muchoTiempo) {
                case "desayuno":
                    
                    var desayunoMeriendaElaborado = {

                        tipoDeComida: "desayuno/merienda",
                      
                        tiempo: 30
                      
                      };  
                       
                      
                    recetas = recetas.filter(function(item) {
                      
                        for (var key in desayunoMeriendaElaborado) {
                      
                          if (item[key] === undefined || item[key] != desayunoMeriendaElaborado[key])
                      
                            return false;
                      
                        }
                      
                        return true;
                      
                      });
                    
                    
                      for (var receta of recetas) {
                        let result = document.createElement("div");
                        //Definimos el innerHTML del elemento con una plantilla de texto
                        result.innerHTML = `<h3>La receta que te recomendamos es: ${receta.nombre}</h3>
                                                <p>Sus ingredientes son: ${receta.ingredientes}</p>
                                                <b>Tiempo para cocinarlo: ${receta.tiempo} minutos</b>`;
                        document.body.appendChild(result);
                    }
                    
                    break;
                case "merienda":
                    var desayunoMeriendaElaborado = {

                        tipoDeComida: "desayuno/merienda",
                      
                        tiempo: 30
                      
                      };  
                       
                      
                    recetas = recetas.filter(function(item) {
                      
                        for (var key in desayunoMeriendaElaborado) {
                      
                          if (item[key] === undefined || item[key] != desayunoMeriendaElaborado[key])
                      
                            return false;
                      
                        }
                      
                        return true;
                      
                      });
                                          
                    break;      
                case "almuerzo":
                    var almuerzoCenaElaborado = {

                        tipoDeComida: "almuerzo/cena",
                      
                        tiempo: 30
                      
                      };  
                       
                      
                    recetas = recetas.filter(function(item) {
                      
                        for (var key in almuerzoCenaElaborado) {
                      
                          if (item[key] === undefined || item[key] != almuerzoCenaElaborado[key])
                      
                            return false;
                      
                        }
                      
                        return true;
                      
                      });
      
                    break;
                case "cena":
                    var almuerzoCenaElaborado = {

                        tipoDeComida: "almuerzo/cena",
                      
                        tiempo: 30
                      
                      };  
                       
                      
                    recetas = recetas.filter(function(item) {
                      
                        for (var key in almuerzoCenaElaborado) {
                      
                          if (item[key] === undefined || item[key] != almuerzoCenaElaborado[key])
                      
                            return false;
                      
                        }
                      
                        return true;
                      
                      });
       
                    break;
                default:
                    const snacks = recetas.filter(recetas => recetas.tipoDeComida === "snack"); 
                    alert(JSON.stringify(snacks));
                    break;
                } 
        break;
            
        case "un buen rato":
            let buenRato = prompt("¿Que vas a comer? (desayuno / almuerzo / merienda / cena)");
            switch (buenRato) {
                case "desayuno":
                       
                    var desayunoMeriendaElaborado = {

                        tipoDeComida: "desayuno/merienda",
                      
                        tiempo: 30
                      
                      };  
                       
                      
                    recetas = recetas.filter(function(item) {
                      
                        for (var key in desayunoMeriendaElaborado) {
                      
                          if (item[key] === undefined || item[key] != desayunoMeriendaElaborado[key])
                      
                            return false;
                      
                        }
                      
                        return true;
                      
                      });

                    break;                     
                case "merienda":
                  var desayunoMeriendaElaborado = {

                    tipoDeComida: "desayuno/merienda",
                  
                    tiempo: 30
                  
                  };  
                   
                  
                recetas = recetas.filter(function(item) {
                  
                    for (var key in desayunoMeriendaElaborado) {
                  
                      if (item[key] === undefined || item[key] != desayunoMeriendaElaborado[key])
                  
                        return false;
                  
                    }
                  
                    return true;
                  
                  });

                break;      
                case "almuerzo":
                  var almuerzoCenaElaborado = {

                    tipoDeComida: "almuerzo/cena",
                  
                    tiempo: 30
                  
                  };  
                   
                  
                recetas = recetas.filter(function(item) {
                  
                    for (var key in almuerzoCenaElaborado) {
                  
                      if (item[key] === undefined || item[key] != almuerzoCenaElaborado[key])
                  
                        return false;
                  
                    }
                  
                    return true;
                  
                  });
                    break;
                case "cena":
                  var almuerzoCenaElaborado = {

                    tipoDeComida: "almuerzo/cena",
                  
                    tiempo: 30
                  
                  };  
                   
                  
                recetas = recetas.filter(function(item) {
                  
                    for (var key in almuerzoCenaElaborado) {
                  
                      if (item[key] === undefined || item[key] != almuerzoCenaElaborado[key])
                  
                        return false;
                  
                    }
                  
                    return true;
                  
                  });
                    break;
                default:
                  const snacks = recetas.filter(recetas => recetas.tipoDeComida === "snack"); 
                  document.write(JSON.stringify(snacks));  
                    break; 
                  }
        break;

        case "5 minutos":
            let cincoMin = prompt("¿Que vas a comer? (desayuno / almuerzo / merienda / cena)");
            switch (cincoMin) {
                case "desayuno":
                       
                    var desayunoMeriendaRapido = {

                        tipoDeComida: "desayuno/merienda",
                      
                        tiempo: 5
                      
                      };  
                       
                      
                    recetas = recetas.filter(function(item) {
                      
                        for (var key in desayunoMeriendaRapido) {
                      
                          if (item[key] === undefined || item[key] != desayunoMeriendaRapido[key])
                      
                            return false;
                      
                        }
                      
                        return true;
                      
                      });

                    break;                     
                case "merienda":
                  var desayunoMeriendaRapido = {

                    tipoDeComida: "desayuno/merienda",
                  
                    tiempo: 5
                  
                  };  
                   
                  
                recetas = recetas.filter(function(item) {
                  
                    for (var key in desayunoMeriendaRapido) {
                  
                      if (item[key] === undefined || item[key] != desayunoMeriendaRapido[key])
                  
                        return false;
                  
                    }
                  
                    return true;
                  
                  });

                break;  
                case "almuerzo":
                  var almuerzoCenaRapido = {

                    tipoDeComida: "almuerzo/cena",
                  
                    tiempo: 5
                  
                  };  
                   
                  
                recetas = recetas.filter(function(item) {
                  
                    for (var key in almuerzoCenaRapido) {
                  
                      if (item[key] === undefined || item[key] != almuerzoCenaRapido[key])
                  
                        return false;
                  
                    }
                  
                    return true;
                  
                  });

                    break;
                case "cena":
                  var almuerzoCenaRapido = {

                    tipoDeComida: "almuerzo/cena",
                  
                    tiempo: 5
                  
                  };  
                   
                  
                recetas = recetas.filter(function(item) {
                  
                    for (var key in almuerzoCenaRapido) {
                  
                      if (item[key] === undefined || item[key] != almuerzoCenaRapido[key])
                  
                        return false;
                  
                    }
                  
                    return true;
                  
                  });

                    break;
                default:
                  const snacks = recetas.filter(recetas => recetas.tipoDeComida === "snack"); 
                  document.write(JSON.stringify(snacks));  
                    break; 
                  }
        break;
}

//DOM


