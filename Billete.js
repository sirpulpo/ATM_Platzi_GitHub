var imgBillete = {
  100: "billete100.png",
  50: "billete50.png",
  20: "billete20.png",
  10: "billete10.png",
  5: "billete5.png"
}
class Billete {
  constructor(v, q) {
    this.valor = v;
    this.cantidad = q;
    this.img = new Image();
    this.img.src =imgBillete[this.valor];
  }
}
