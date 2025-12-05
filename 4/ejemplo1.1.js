/* var nombre = prompt("Dime tu nombre");
var instituto = prompt("Nombre de instituto");

console.log(nombre);

document.write("<h1>" + nombre + "</h1>");

document.write("<table border=\"1\">");
document.write("<tr><th>Nombre</th><th>Instituto</th></tr>");
document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>");
document.write("</table>");

var nota1 = 5;
var nota2 = 4;
var notaTotal = nota1 + nota2;
var notaMedia = (nota1 + nota2) / 2; */

function mostrarFecha() {
    var now = Date();
    console.log("Ahora son: " + now);
    //alert("Ahora son las: " + now);
    document.write("<h1>" + now + "</h1>");
}

// Llamar a la función mostrarFecha cuando hago click en el botón boton1
document.getElementById("boton1").onclick = () => {
    console.log("Click sobre el boton 1...");
    mostrarFecha();
}

// Cambiar estilos de div con id micaja cuando paso el ratón por encima
/* var miCaja = document.getElementById("micaja");
miCaja.onmouseenter = () => {
    miCaja.style.backgroundColor = "green";
    miCaja.style.fontSize = "40px";
} */

//Cambiar texto del div con id micaja cuando salgo de encima del elemento
/* miCaja.onmouseleave = () => {
    miCaja.innerHTML += "Hasta luego!";
} */

// Inicializar el tamaño de letra del div con id micaja a 10px
document.getElementById("micaja").style.fontSize = "10px";

function changeFontSize() {
    //Recupero la caja (el div)
    var miCaja = document.getElementById("micaja");
    //Recupero su tamaño de letra actual
    var fontSizeMiCaja = miCaja.style.fontSize;

    //Si el tamaño de letra actual, es de 10px lo pongo a 12px
    if (fontSizeMiCaja == "10px") 
    {
        miCaja.style.fontSize = "18px";
    } 
    //Si el tamaño de letra actual es de 12px, lo pongo a 14px
    else if (fontSizeMiCaja == "18px") 
    {
        miCaja.style.fontSize = "24px";
    } 
    //Si el tamño de letra actual no cumple ninguna de las condiciones de arriba,
    // lo pongo a 10px
    else 
    {
        miCaja.style.fontSize = "10px";
    }
}

// 1. Recuperamos el botón de cambiar tamaño
var botonChangeFont = document.getElementById("botonChangeFontSize");
// 2. Asociamos el evento onclick al botón de cambiar tamaño
botonChangeFont.onclick = () => {
    // 3. Llamamos a la función de cambiar tamaño de letra
    changeFontSize();
}


