function datosPrestamo(){
  var nombre=document.getElementsByName('nombres').value
  var cedula=document.getElementsByName('cedula').value
  var fecha=document.getElementsByName('fecha').value
  var telefono=document.getElementsByName('telefono').value
  var email=document.getElementsByName('email').value
  var provincia=document.getElementsByName('provincia').value
  var ciudad=document.getElementsByName('ciudad').value
  var calle=document.getElementsByName('calle').value
  var monto=document.getElementsByName('monto').value
  var ingresos=document.getElementsByName('ingresos').value
  var comentario=document.getElementsByName('comentario').value

  var url = "../../controlador/PrestamoController.php";

  $.ajax({
    type:"post",
    url:url,
    data:{nombre:nombre,cedula:cedula,fecha:fecha,telefono:telefono,email:email,provincia:provincia,ciudad:ciudad,calle:calle,monto:monto,ingresos:ingresos,comentario:comentario},

    success:function(datos){
      $("#mostrarDatos").html(datos);
    }
  })
}
