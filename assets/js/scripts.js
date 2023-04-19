import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

var c = document.getElementById("salad");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();