$(document).ready(()=>{

     //event with scroll of windows

     $("html, body").animate({
          scrollTop : 0
     },0);

     
     //hide att shilder
     $("#project").hide();
     $("#curriculum").hide();
     $("#my_goals").hide();
     $("#my_objectives").hide();
     $("#footer").hide();
     

      var uno, dos, tres, cuatro, cinco, sies ;
      uno = true;
      dos = true;
      tres = true;
      cuatro = true;
      cinco = true;
     seis = false;
     

     let scrollTop = $(window).scrollTop();

     
     $(window).scroll(()=>{
          var positionScroll = $(this).scrollTop();
          
          let pantalla = $(window).width();

          if(true){
               if(positionScroll > 100){
                    seis = false;
               }else{
                    sies = true;
               }
     
               if(sies){
                    if(positionScroll > 170 && positionScroll < 370){
                    
                         if(uno){
                              $("#project").show(400);
                              $("#project").addClass("flipInX");
                              uno = false;
                         }
                         
                    }else if(positionScroll > 780 && positionScroll < 890 ){
          
                         if(dos){
                              $("#curriculum").show(400);
                              $("#curriculum").addClass("flipInY");
                              $("#frame-pdf").attr('src',"../curriculum/curriculum.pdf");
                              dos = false;
                         }
                       
                    }else if(positionScroll > 1300 && positionScroll < 1400){
          
                         if(tres){
                              $("#my_goals").show(400);
                              $("#my_goals").addClass("bounceInDown");
                              tres = false;
                         }
                        
                    }else if (positionScroll > 1520 && positionScroll < 1600){
                         
                         if(cuatro){
                              $("#my_objectives").show(400);
                              $("#my_objectives").addClass("zoomInDown");
                              cuatro = false;
                         }
                         
                    }else if(positionScroll > 1800 && positionScroll < 2000){
                         if(cinco){
                              $("#footer").show(400);
                              $("#footer").addClass("zoomInDown");
                              cinco = false;
                         }
                    }
               }
          }


          
     });

});