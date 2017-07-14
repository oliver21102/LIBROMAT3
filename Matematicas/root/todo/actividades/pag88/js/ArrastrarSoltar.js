 
var arrastreIndex=30;



function ran(num){
      var numeros=[];
      for (var i=1; i<num+1; i++)
      {
        numeros.push(i);
      }

      for (var  j=0; j<num; j++)
      {
        var tmp = numeros[j];
        var k = Math.floor(Math.random() * numeros.length);
        numeros[j] = numeros[k];
        numeros[k] = tmp;
      }
      return numeros;
    }

function desordenar(ar1){
   var numeros=ran(ar1.length);
   var posiciones1=[];
   
    for( var i=0; i<ar1.length; i++){
    posiciones1.push({lf:ar1[i].style.left,tp:ar1[i].style.top});
 
 
     }

  for( var ii=0; ii<ar1.length; ii++){
   ar1[ii].style.left=posiciones1[numeros[ii]-1].lf;
  ar1[ii].style.top=posiciones1[numeros[ii]-1].tp;

  }

}



 function iniciandoEventos(){
 
 var pal= document.getElementsByClassName("palabras");
 desordenar(pal);
    for(var i=0; i< pal.length; i++){
     $("#"+pal[i].id).draggable({containment: "window",revert:true,drag:arrastrar});
    }
        
    $("#n1").droppable({accept:"#a1",drop:soltar});
    $("#n2").droppable({accept:"#a2",drop:soltar});
    $("#n3").droppable({accept:"#a3",drop:soltar});
    $("#n4").droppable({accept:"#a4",drop:soltar});
    $("#n5").droppable({accept:"#a5",drop:soltar});
    
 }

 function arrastrar(event,ui){
 var elemento=event.target.id;
 document.getElementById(elemento).style.zIndex=arrastreIndex;
 arrastreIndex++;
}

var cantidad=0;

function soltar(event,ui){
dimension= document.getElementsByClassName("espacio").length;
   var elemento=event.target.id;
 
  document.getElementById(ui.draggable.attr('id')).style.left=$("#"+elemento).css("left");
  document.getElementById(ui.draggable.attr('id')).style.top=$("#"+elemento).css("top");
 
 ui.draggable.draggable('option','revert',false);
 ui.draggable.draggable('option','disabled',true);
    cantidad++; // sonidoMB();
    sonidoBien();
    
 
    
  if(cantidad==dimension){
       mostrarSig();
      /*setTimeout(
        function(){
        window.location="fin.html";

        },2000
        );*/
   }
} 
   
 function mostrarSig(){
  pausar();

    var aaa= $("#flechaAtras").parent().attr("alt");
console.log(aaa);
    if(aaa=="2"){
         setTimeout(
  function(){
 window.location="fin.html";

  },2000
      );
    }else{
 $("#flecha").css("visibility","visible");
    }

 }

 function pausar(){
  var s=document.getElementById("sonidoFondo");
//  s.pause();

}

function sonidoBien(){

   var b=document.createElement("audio");
   b.src="./sonidos/bien.mp3";
   b.play();

}
