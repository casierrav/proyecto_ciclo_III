function set_background() {
   //Se trae el body del HTML junto con todas las etiquetas dentro de él como etiquetas hijas
   docBody = document.getElementsByTagName("body")[0];
   
   //Trae todos los elementos de etiqueta p que se encuentran en el body
   myBodyElements = docBody.getElementsByTagName("p");

   //Primer párrafo
   myp1 = myBodyElements[0];
   myp1.style.background = "rgb(255,0,0)"; //Color rojo
   //El RGB se puede trabajar con hexadecimal, o con la función RGB y cada valor entre 0 y 255 (00 a FF en Hexadecimal
   
   //Segundo párrafo
   myp2 = myBodyElements[1]; //Color amarillo
   myp2.style.background = "rgb(255,255,0)";
}