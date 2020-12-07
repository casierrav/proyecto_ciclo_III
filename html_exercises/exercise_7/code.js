function createTable() {
    //Se lanzan ventanas emergentes para capturar la cantidad de filas y columnas que tendrá la tabla
    rn = window.prompt("Input number of rows", 1);
    cn = window.prompt("Input number of columns", 1);
  
    //De acuerdo a la cantidad de filas digitada, crea una nueva fila mediante un ciclo
    for(var r=0; r<parseInt(rn,10); r++) {
        var x=document.getElementById('myTable').insertRow(r);
        
        //Para cada fila, agrega la cantidad de columnas (celdas) especificada por el usuario
        for(var c=0; c<parseInt(cn,10); c++) {
            var y =  x.insertCell(c);
            y.innerHTML = "Row-" + r + " Column-" + c; 
        }
    }
}