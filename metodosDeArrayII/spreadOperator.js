let pelucasAccion = ['End Game', 'Irong MAn 3', 'Capitan America']

let peliculasComedia = ['Mi porbre Angelito','Que paso ayer']

let peliculas = [pelucasAccion,peliculasComedia]

console.log(peliculas)

let generoComedias = {
    nombreGenero: 'Comedia',
    popularidad: 3
}
let miPobreAngelito = {
    nombre: 'Mi pobre Angelito',
    duracion: 120,
    ...generoComedias
}
let quePasoAyer = {
    nombre: 'Que paso ayer',
    dureacion: 110,
    ...generoComedias
}

console.log(miPobreAngelito)
console.log(quePasoAyer)

function peliculasVistas(...nombresDePeliculas){
    for(let i=0 ; i < nombresDePeliculas.length ; i++){
    console.log('La persona ya vio ' + nombresDePeliculas[i])
}
}

peliculasVistas('End Game', 'Irong Man 3','MI pobre angelito')