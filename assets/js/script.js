import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

//al importar el bundle no funciona (carousel por ejemplo), el de arriba si funciona bien
//import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";


$(document).ready(function () {
    $("#btn-send").click(function (event) {
        const nombre = $("#inputName").val();
        const email = $("#inputEmail").val();
        const mensaje = $("#inputMessage").val();
        const aceptaTerminos = $("#invalidCheck").is(':checked');

        if (nombre === "" || email === "" || mensaje === "" || !aceptaTerminos) {
            event.preventDefault(); // Evita que se envíe el formulario
            alert("Por favor, completa todos los campos del formulario y acepta los términos y condiciones.");
        } else {
            alert("Gracias por tu mensaje, te contactaremos dentro de 24 hrs hábiles");
            $("#form__contact")[0].reset();
        }
    });
});