function suma(n1,n2){
    return n1+n2
}

function restar(x1,x2)
{
  return x1-x2;
}

function multiplicar(x1,x2)
{
  return x1*x2;
}

function dividir(x1,x2)
{
  if (x2==0)
  {
    return 'No se puede dividir por cero'
  }
  else
  {
    return x1/x2;
  }
}

  module.exports = suma;
module.exports = restar;
module.exports = dividir;
module.exports = multiplicar;
