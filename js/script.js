cont = 0;
function saludo(){
    if(cont<3||cont>1){
        no();
    }
    else if(cont>0){
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