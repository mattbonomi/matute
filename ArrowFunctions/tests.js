let esMultiplo= (a,b) => {a+b
    let resto = a%b
    return resto == 0
}
console.log(esMultiplo(4,3))

let tengoQUeTrabajar = dia => {
    if(dia == 'Sabado' || dia == 'Domingo'){
        return 'No tenes que trabajar'
    } return 'si tenes que trabajar'
}
console.log(tengoQUeTrabajar('Miercoles'))