function getFormvalue() {
   //Trae el elemento de acuerdo al id form1, que en este caso será el formulario
   var x = document.getElementById("form1");

   //Hace un ciclo para recorrer cada uno de los elementos que hacen parte del formulario
   for (var i=0;i<x.length;i++) {
      //Se evita imprimir el valor del botón, solamente se imprime todo lo diligenciado
      if (x.elements[i].value!='Submit') {  
         console.log(x.elements[i].value);
      }  
   }
}