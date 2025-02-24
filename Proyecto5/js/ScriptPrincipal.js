document.addEventListener("DOMContentLoaded", configurarApp);

function configurarApp()
{
    var canvas = document.getElementById("mi-canvas");
    var ctx = canvas.getContext("2d");

    function ajustarCanvas() {
        canvas.width = window.innerWidth;
    }

    // Ajustar el tamaño inicial del canvas
    ajustarCanvas();

    dibujaFooter(canvas,ctx);

    // Redimensionar el canvas si la ventana cambia de tamaño
    window.addEventListener("resize", ajustarCanvas);
}
function dibujaFooter(canvas, contexto)
{
    contexto.fillStyle = "rgb(88, 83, 83, 0.8)";
    contexto.moveTo(0,0);
    contexto.quadraticCurveTo(0,-50,canvas.width-100,canvas.height-80);
    contexto.fill();
}