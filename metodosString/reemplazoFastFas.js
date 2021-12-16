let texto = ' '
let reemplazar = ' '
let reemplazo = ' '
let replace = texto.replace(reemplazar,reemplazo)
console.log(replace)

function reemplazoFastFast(texto,reemplazar,reemplazo){
    let replace = texto.replace(reemplazar,reemplazo)
    return replace

}

console.log(reemplazoFastFast('un mal dia','mal','buen'))