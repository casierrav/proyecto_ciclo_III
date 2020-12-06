function insert_Row() {
   //Trae el elemento de con id="sampleTable" que corresponde a la tabla, y almacena en x una nueva insertada al inicio de dicha tabla
   var x=document.getElementById('sampleTable').insertRow(0);
   
   //Agrega dos nuevas columnas a la fila creada, y las almacena en variables independientes
   var y = x.insertCell(0);
   var z = x.insertCell(1);
   
   //Asigna valores a cada una de las celdas (columnas en la fila) generadas
   y.innerHTML="New Cell1";
   z.innerHTML="New Cell2";
}
