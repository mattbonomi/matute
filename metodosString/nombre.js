let frase = ' '

let nombre = ' ' 


function tiraNombre(frase,nombre){
    if (frase.indexOf(nombre) >= 0){
        return frase.slice((frase.indexOf(nombre)),(frase.indexOf(nombre)+(nombre.length)))
    
    } else{
        return 'No Esta'
    }
}

console.log(tiraNombre('Hola!, soy Carli','Carli'))






