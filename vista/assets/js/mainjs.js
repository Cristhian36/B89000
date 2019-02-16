var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    loadUsers();
    loadEmpleados();

}
function loadUsers() {
    $('#contenido').html("");
    $.post("users.php", function(response) {        
        $('#contenido').html(response);
        $('#contenido').fadeIn();
    });
}

function loadEmpleados() {
    $('#contenido').html("");
    $.post("empleado.php", function(response) {        
        $('#contenido').html(response);
        $('#contenido').fadeIn();
    });
  } 
