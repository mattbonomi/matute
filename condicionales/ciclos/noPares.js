function noParesDeContarImparesHasta(numero){
let contador = 0   
    for (let x=0 ; x<=numero ; x++){
        x%2!=0 ? contador++ : ''

    }
    return contador
}
console.log(noParesDeContarImparesHasta(10))