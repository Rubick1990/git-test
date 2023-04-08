cont = 0;
function saludo(){
    if(cont<2||cont>0){
        no();
    }
    else if(cont>1){
        alert("Te estoy diciendo que ");
        no();
    }
    else{
    alert("Hola alumnos");
    }
    cont++;
}

function no(){
    alert("No lo presiones denuevo");
}