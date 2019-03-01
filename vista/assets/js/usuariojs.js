var x;
x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    loadDataTableUsuarios();
    tooltip();
    rgUsuario();

}

function rgUsuario() {  
  $('#formregistro').submit(function(event){
  event.preventDefault();
  var apaterno = $("#apaterno").val();
  var amaterno = $("#amaterno").val();
  var cedula = $("#cedula").val();
  var nombre =$("#nombre").val();
  var usuario = $("#usuario").val();
  var clave = $("#clave").val();  
  
  if (apaterno == null || apaterno.length == 0) {
    $("#campoapaterno").addClass("has-error");
    alert("Por favor ingresa tu apellido paterno");
    return false;
  }
  else {
    $("#campoapaterno").removeClass("has-error");
  }
  
  if (amaterno == null || amaterno.length == 0) {
    $("#campoamaterno").addClass("has-error");
    alert("Por favor ingresa tu apellido materno");
    return false;
  }else {
    $("#campoamaterno").removeClass("has-error");
  }

  if (cedula == null || cedula.length == 0) {
    $("#campocedula").addClass("has-error");
    alert("Por favor ingresa  el numero de cedula");
    return false;
  }
  else {
    $("#campoapaterno").removeClass("has-error");
  }

  if (nombre == null || nombre.length == 0) {
    $("#camponombre").addClass("has-error");
    alert("Por favor ingresa tu nombre.")
    return false;
  }else {
    $("#camponombre").removeClass("has-error");    
  }
       
  if (usuario == null || usuario.length == 0) {
    $("#campousuario").addClass("has-error");
    alert("Por favor ingresa tu usuario");
    return false;
  }else {
    $("#campousuario").removeClass("has-error");
  }
  
  if (clave == null || clave.length == 0) {
    $("#campoclave").addClass("has-error");
    alert("Por favor ingresa tu clave de acceso");
    return false;
  }else {
    $("#campoclave").removeClass("has-error");    
  }     
    $("#notificacion").html("");
    var datos = "action=insert&" + $("#formregistro").serialize();
    $.post("../controlador/usersController.php", datos, function(data) {        
        $('#notificacion').html(data);
        $('#notificacion').fadeIn();  
    });    
  });
}

function upUsuario() {         
    $("#mensaje").html("");
    var datos = "action=savedata&" + $("#formactualizar").serialize();
    $.post("../controlador/usersController.php", datos, function(data) {        
        $('#mensaje').html(data);
        $('#mensaje').fadeIn();
    });
}

function traeDatosUsuarioId(user) {
  $("#mensaje").html("");
  $('#contenido-update').html("");
  var id    = user.id;
  var datos = "action=update&id="+id ;
  $.post("../controlador/usersController.php", datos, function(data) {
      $('#contenido-update').html(data);        
  });
}

function delUsuario(user) { 
    if(confirm('¿Seguro que desea eliminar este usuario?')){
      $("#mensaje-delete").html("");
      var id    = user.id;
      var datos = "action=delete&id="+id ;
      $.post("../controlador/usersController.php", datos, function(data) {
          $('#mensaje-delete').prepend(data);
          $('#mensaje-delete').show('slow');
          $('#mensaje-delete').fadeOut(5000);  
      });     
    } 
}

function loadUsers() {
    $('#contenido').html("");
    $.post("users.php", function(response) {        
        $('#contenido').html(response);
        $('#contenido').fadeIn();
    });
}

function tooltip() {
   $('[data-toggle="tooltip"]').tooltip(); 
}

function loadDataTableUsuarios() {
  $('#example').DataTable( {  
    "bDeferRender": true,
    "ajax": "../controlador/loadListController.php?action=users",        
    "columns": [
    { "data" : "id" },
    { "data" : "cedula"},
    { "data" : "paterno" },
    { "data" : "materno" },
    { "data" : "nombre"},
    { "data" : "usuario"},
    { "data" : "clave"},
    { "data" : "tipo"},
    { "data" : "status"},
    { "data" : "fecha"},
    { "data" : "acciones"}
    ],      
    "sPaginationType": "full_numbers",          
    "oLanguage": {
            "sProcessing":     "Procesando...",
        "sLengthMenu": 'Mostrar <select class="form-control">'+
            '<option value="10">10</option>'+
            '<option value="20">20</option>'+
            '<option value="30">30</option>'+
            '<option value="40">40</option>'+
            '<option value="50">50</option>'+
            '<option value="-1">Todos</option>'+
            '</select> registros',    
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando del (_START_ al _END_) de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Filtrar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Por favor espere - cargando...",
        "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Último",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
        }
  });

 
}

function computeLoan(){
	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;

var cad =
'<!DOCTYPE html>'
'<html>'
'<head>'
'<meta charset="UTF-8">'
'<script>'


'</script>'
'</head>'
'<body>'
'<p>Loan Amount: $<input id="amount" type="number" min="1" max="1000000" onchange="computeLoan()"></p>'
'<p>Interest Rate: <input id="interest_rate" type="number" min="0" max="100" value="10" step=".1" onchange="computeLoan()">%</p>'
'<p>Months: <input id="months" type="number" min="1" max="72" value="1" step="1" onchange="computeLoan()"></p>'
'<h2 id="payment"></h2>'
'</body>'
'</html>'

return cad;
}