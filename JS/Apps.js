/*let variable1;
function sumar(){
    variable1=0;
    let variable2=0;
}*/

const boton1=document.getElementById("btncuadrado");
boton1.addEventListener("click", cuadrado);
function cuadrado(){
    const varnumero1=Number(document.getElementById("num1").value);
    const imprimirdivresultado=document.getElementById("divresultado");
    const varresultado=varnumero1*varnumero1;
    imprimirdivresultado.innerText=varresultado;
    /*alert("El area es de: " + varresultado);*/
}

const boton2=document.getElementById("btnrectangulo");
boton2.addEventListener("click", rectangulo);
function rectangulo(){
    const varnumero3=Number(document.getElementById("num3").value);
    const varnumero4=Number(document.getElementById("num4").value);
    const imprimirdivresultado2=document.getElementById("divresultado2");
    const varresultado2=varnumero3*varnumero4;
    imprimirdivresultado2.innerText=varresultado2;
}

const boton3=document.getElementById("btncompra");
boton3.addEventListener("click", compra);
function compra(){
    const varnumero5=Number(document.getElementById("num5").value);
    const imprimirdivresultado3=document.getElementById("divresultado3");
    if(varnumero5>1000){
        varresultado3=varnumero5-(varnumero5*.30);
    }else{
        if(varnumero5<500){
            varresultado3=varnumero5-(varnumero5*.10);
        }
    }
    imprimirdivresultado3.innerText=varresultado3;
}

const boton4=document.getElementById("btnpares");
boton4.addEventListener("click", pares);
function pares(){
    const varnumero7=Number(document.getElementById("num7").value);
    const imprimirdivresultado4=document.getElementById("divresultado4");
    if(varnumero7%2==0){
        varresultado4="Es par";
    }else{
        varresultado4="Es impar";
    }
    imprimirdivresultado4.innerText=varresultado4;
}

const boton5=document.getElementById("btnmostrarnumeros");
boton5=addEventListener("click", mostrar);
function mostrar(){
    const listas=document.getElementById("listado");
    listas.innerText=" ";
    for(let x=100;x>=1; x--){
        //alert("Numero"+x);
        const li=document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText=x;
        listas.appendChild(li);
    }
}
