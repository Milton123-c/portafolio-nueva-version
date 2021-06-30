
$(document).ready(()=>{
     
     $("#form_one").submit((event)=>{
          
          
          var nameOne = $("#gmail_nombre_uno").val();
          var messageOne = $("#message_one").val();
          $("#errorUno").hide();
          
          if(nameOne != "" && messageOne != ""){
               event.preventDefault();
               $("#errorUno").hide();
               $("#message_one").focus();

               var name = 'csrftoken';
               var cookieValue = null;
               if (document.cookie && document.cookie != '') {
                   var cookies = document.cookie.split(';');
                   for (var i = 0; i < cookies.length; i++) {
                       var cookie = jQuery.trim(cookies[i]);
                       // Does this cookie string begin with the name we want?
                       if (cookie.substring(0, name.length + 1) == (name + '=')) {
                           cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                           break;
                       }
                   }
               }

               var  csrftoken = cookieValue;

               var datos = {
                    name : $('#gmail_nombre_uno').val(),
                    message: $('#message_one').val()
               };

               var url = "/formOne";

               
               fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(datos),
                    headers:{
                         'X-CSRFToken' : csrftoken,
                         "Accept": "application/json",
                         'Content-Type': 'application/json'
                    }
               })
               .then((response)=>{
                    if(response.ok){
                         alert('datos enviados');
                    }else{
                         alert('error')
                    }
               })
               .catch(error => console.log("error"));

          }else{    
               event.preventDefault();
              $("#errorUno").show(50);
               $("#errorUno").text("¡Error!, Campos Vacios");
               
               $("#errorUno").addClass("bounceInDown");
          }
     });


     $("#form_two").submit((event)=>{
          
          
          var nameTwo = $("#gmail_nombre_dos").val();
          var messageTwo = $("#message_two").val();
          $("#errorDos").hide();
          
          if(nameTwo != "" && messageTwo != ""){
               $("#errorDos").hide();
               $("#message_two").focus();

               
               var name = 'csrftoken';
               var cookieValue = null;
               if (document.cookie && document.cookie != '') {
                   var cookies = document.cookie.split(';');
                   for (var i = 0; i < cookies.length; i++) {
                       var cookie = jQuery.trim(cookies[i]);
                       // Does this cookie string begin with the name we want?
                       if (cookie.substring(0, name.length + 1) == (name + '=')) {
                           cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                           break;
                       }
                   }
               }

               var  csrftoken = cookieValue;

               var datos = {
                    name : $('#gmail_nombre_dos').val(),
                    message: $('#message_two').val()
               };

               var url = "/formOne";

               
               fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(datos),
                    headers:{
                         'X-CSRFToken' : csrftoken,
                         "Accept": "application/json",
                         'Content-Type': 'application/json'
                    }
               })
               .then((response)=>{
                    if(response.ok){
                         alert('datos enviados');
                    }else{
                         alert('error')
                    }
               })
               .catch(error => console.log("error"));
          }else{    
               event.preventDefault();
              $("#errorDos").show(50);
               $("#errorDos").text("¡Error!, Campos Vacios");
               
               $("#errorDos").addClass("bounceInDown");
          }
     });
     
});
      