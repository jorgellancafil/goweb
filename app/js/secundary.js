function vform() {
    //alert('vform');
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == "" || email == "" || message == "") {
        alert('Nombre, Email y Mensaje son campos obligatorios, complete antes de enviar.');
        //return;
    } else {
        $("#main-contact").submit();
        //alert('submit');
    }

    //alert('fin ejecucion');

}


function selectplan(plan) {
    if (plan == "eco") {
        $("#plan").val("Plan Economico");
        $("#radio1").prop("checked", true);
    }

    if (plan == "full") {
        $("#plan").val("Plan Full");
        $("#radio2").prop("checked", true);
    }

    if (plan == "info") {
        $("#plan").val("Solicita más Información");
    }

}
