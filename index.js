
// Obtener el formulario de opinión
var opinionForm = document.getElementById("opinionForm");

// Función para manejar el envío del formulario
function enviarOpinion(event) {
    // Detener el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var opinion = document.getElementById("opinion").value;

    // Aquí puedes hacer lo que necesites con los valores, como enviarlos a un servidor
    // Por ejemplo, puedes usar fetch() para enviarlos a un servidor

    // Ejemplo de cómo imprimir los valores en la consola
    console.log("Nombre:", nombre);
    console.log("Opinión:", opinion);

    // Aquí puedes hacer más acciones, como mostrar un mensaje de éxito o redirigir a otra página
}

// Agregar un event listener para el evento submit del formulario de opinión
opinionForm.addEventListener("submit", enviarOpinion);
