let autos = [{
    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL 123",
    vendido: false},
    { 
    marca: "Toyota",
    modelo: "Corolla",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "jjk 116",
    vendido: false
    
    }] ;

    let concesionaria = {
        autos: autos,
        buscarAuto: function(patente){
           for(let i = 0;i<autos.length;i++){
              if(autos[i].patente == patente) {
                 return autos[i];
              }
           }
           return null;
     },
     venderAuto: function(patente){
        if(this.buscarAuto(patente) != null){
           let index = autos.indexOf(this.buscarAuto(patente));
           autos[index].vendido = true;
           }
     },
     autosParaLaVenta: function(){
     return autos = this.autos.filter(function (elemento){
           return !elemento.vendido
        })
     },
     };