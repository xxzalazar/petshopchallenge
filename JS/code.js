if(document.getElementById("enviar1")){
document.getElementById("enviar1").addEventListener("click", function(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu mensaje ha sido enviado',
        showConfirmButton: false,
        timer: 1500
      })
})
}
if(document.getElementById("productos")){
$(document).ready(
    $.ajax({
        url: `https://apipetshop.herokuapp.com/api/articulos`,
        success: function(data){
            datos=data.response
           console.log(datos)
           mi_programa(datos)
        }
    }),
)

function mi_programa(datos){
    var app = new Vue({
        el: '#app',
        data:{
            toys:[],
            med:[],
        }
    })
    datos.map(pto =>{
        if(pto.tipo == "Juguete"){
            app.toys.push(pto)
        }else{
            app.med.push(pto)
        }
    })
   
}
}