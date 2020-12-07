function changeContent() {
   //window.prompt se usa para lanzar una ventana emergente, en este caso, solicitando un valor que se almacena en la variable que corresponda
   rn = window.prompt("Input the Row number(0,1,2)", "0");
   cn = window.prompt("Input the Column number(0,1)","0");
   content = window.prompt("Input the Cell content");  

   //Se toma una celda de la tabla, usando el id de la tabla, inicialmente sacando la fila
   var x = document.getElementById('myTable').rows[parseInt(rn,10)].cells;
   //Estando en la fila, se ubica la columna correspondiente y se asigna el valor escrito por el usuario
   x[parseInt(cn,10)].innerHTML = content;
}