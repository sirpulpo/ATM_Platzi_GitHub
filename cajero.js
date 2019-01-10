var caja = [];
caja.push(new Billete(100, 20));
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 25));
caja.push(new Billete(10, 30));
caja.push(new Billete(5, 40));

var totalCaja = 0;
var boton = document.getElementById('extraer');
var resultado = document.getElementById('resultado');

boton.addEventListener('click', entregarDinero);
function entregarDinero() {
  var div = 0;
  var papeles = 0;
  var dibuja = [];
  var entrega = [];
  var total = document.getElementById('cantidad');
  var retiro = parseInt(total.value);

  if (totalCaja >= retiro) {
    for (var billete of caja) {
      if (retiro > 0) {
        div = Math.floor(retiro / billete.valor);
        if (div > billete.cantidad) {
          papeles = billete.cantidad;
        }
        else {
          papeles = div;
        }
        billete.cantidad -= papeles;
        if (papeles != 0) {
          entrega.push(new Billete(billete.valor, papeles));
        }
        for (var i = 0; i < papeles; i++) {
          dibuja.push(new Billete(billete.valor, 1));
        }
        retiro -= (billete.valor * papeles);
      }
    }
     if (retiro == 0) {
       resultado.innerHTML = "Has retirado: <br />";
       for (var entregado of entrega) {
         resultado.innerHTML += entregado.cantidad + " de " + entregado.valor + "<br />"
       }
       for (var entregado of dibuja) {
         resultado.innerHTML += "<img src=" + entregado.img.src + " />";
       }
       resultado.innerHTML += "<hr />";
       contar();
     }
     else {
       resultado.innerHTML += "No tengo los billetes para esa suma. Intenta con otro valor multiplo de 5. <hr />";
     }
  }
  else {
    resultado.innerHTML = "Ya no tengo dinero suficiente. Lo siento. <hr />";
  }
   console.log(entrega);
}

contar();
function contar() {
  totalCaja = 0;
  for (var tot of caja) {
    totalCaja += (tot.valor * tot.cantidad);
  }
  console.log(totalCaja);
}
