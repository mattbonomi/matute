let alumnos = {
    nombre: 'Matias',
    edad: 39,
    nacionalidad: 'Italiano',
}

function Alumnos(nombre,edad,nacionalidad){
    this.Nombre = nombre;
    this.Edad = edad;
    this.Nacionalidad = nacionalidad;

}

let nuevoAlumno = new Alumnos('matias el de al lado de la casa de la esquina',98,'ARG')

console.log(nuevoAlumno)