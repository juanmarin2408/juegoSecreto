let numeroSecreto;
let numeroIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales(){
    asignarTextoElemento('h1',"Titulo actualizado");
    asignarTextoElemento('p',"Ingrese el numero del 1 al "+numeroMaximo);
    numeroSecreto = GenerarNumeroAleatorio();
    //alert(numeroSecreto);
    numeroIntentos = 1;
}

function VerificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    //alert(numeroUsuario);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`ganaste en ${numeroIntentos} ${numeroIntentos === 1 ? "vez":"veces"}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor");
            numeroIntentos++;
            limpiarCaja()
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor");
            numeroIntentos++;
            limpiarCaja()
        }
    }
    return;
}

function limpiarCaja(){
   document.getElementById('numeroUsuario').value = "";
   return;
}

function GenerarNumeroAleatorio(){
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1;
    //return numeroAleatorio;
    console.log(numeroAleatorio);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se jugaron todos los numeros posibles");
        
    }else{

        if(listaNumerosSorteados.includes(numeroAleatorio)){
            return GenerarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }
    
}

function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

