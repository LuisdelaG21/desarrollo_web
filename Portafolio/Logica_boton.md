```JavaScript
/*
   2. BOTÓN TANQUE / ESTRATEGA
*/
/*
   Rutas de las dos imágenes del personaje lateral.
   Cambia "magneto.png" al nombre exacto de tu segunda imagen.
*/
const imagenEstratega = "../Resources/loki.png";
const imagenTanque    = "../Resources/magneto.png"; // ← pon aquí tu archivo de tanque

/* Referencia al botón y a la imagen lateral */
const botonRol   = document.getElementById("btn-toggle-rol");
const imgLateral = document.getElementById("lateral-img");

/*
   Variable que recuerda el estado actual.
   false = mostrando Estratega (estado inicial)
   true  = mostrando Tanque
*/
let esTanque = false;

/* Al hacer clic en el botón alternamos entre los dos roles */
botonRol.addEventListener("click", function() {

    if (esTanque == false) {
        /* --- Cambiar a modo Tanque --- */
        botonRol.textContent = "Estratega >>>"; // nuevo texto del botón
        imgLateral.src       = imagenTanque; // nueva imagen
        esTanque = true;
    } else {
        /* --- Volver a modo Estratega --- */
        botonRol.textContent = "Tanque >>>";        // texto original
        imgLateral.src       = imagenEstratega; // imagen original
        esTanque = false;
    }

});
```
