function getAttributes() {
   // el elemento de id=w3r corresponde al elemento definido como un vínculo
   var u = document.getElementById("w3r").href; //Trae la información relacionada con el destino del vínculo
   alert('The value of the href attribute of the link is : '+u);
 
   var v = document.getElementById("w3r").hreflang; //Trae lo correspondiente con el idioma definido para el vínculo
   alert('The value of the hreflang attribute of the link is : '+v);
 
   var w = document.getElementById("w3r").rel; //Trae lo relacionado con el atributo que relaciona el vínculo con el actual HTML, cuando es el valor de nofollow implica una relación no directa
   alert('The value of the rel attribute of the link is : '+w);
 
   var x = document.getElementById("w3r").target; //Trae lo relacionado con el atributo target, que implica en donde se va a cargar el vínculo. _self se carga en la misma pestaña, _blank abre el vínculo en otra pestaña
   alert('The value of the taget attribute of the link is : '+x);
 
   var y = document.getElementById("w3r").type; //Trae lo relacionado con el tipo de vínculo, que en este caso es hacia otro sitio en html. También podría ser hacia un documento o cualquier recurso disponible en la www
   alert('The value of the type attribute of the link is : '+y);  
}