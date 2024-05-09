document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var ciudad = document.getElementById("ciudad").value;

    var mensaje = "Hola " + nombre + " Bienvenido a mi pagina web. Tu edad es " + edad + " años y vivis en " + ciudad + ".";
    document.getElementById("mensaje-bienvenida").textContent = mensaje;

    var diasVividos = edad * 365;
    var diasMensaje = "Viviste aproximadamente " + diasVividos + " dias.";
    document.getElementById("dias-vividos").textContent = diasMensaje;

});