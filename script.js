var display = document.querySelector('.display');
var containerCalculadora = document.querySelector('.container');



containerCalculadora.addEventListener("click", (botaoClicado)=>{

    if(botaoClicado.target.classList == "display" || botaoClicado.target.classList == "container") return

    let caracter = botaoClicado.target.innerHTML;
    
    tratamentoDosOperadores(caracter)
    
})

function tratamentoDosOperadores(numero){

    switch (numero) {
        case 'DEL':
            
            numero = ""
            display.innerHTML =  display.innerHTML.substring(0, display.innerHTML.length -1);  
            return 
                                  
        case 'AC':
            
            numero = ""
            display.innerHTML = ""
            return 
      
        case '=':

            numero = ""
            calcularOperacao(display.innerHTML)
            return

        default:
            break;
    } 

    if(display.innerHTML.length >= 19) return

    numberLowerCase();
    mostrarNoDisplay(numero);
}

function mostrarNoDisplay(numeroTratado){

    let numSemFormatacao = display.innerHTML += numeroTratado;
    let numComFormatacao = new Intl.NumberFormat().format(numSemFormatacao)

    display.innerHTML = numSemFormatacao

}

function calcularOperacao(resultado){

    display.innerHTML = eval(resultado);

}

function numberLowerCase(){

    if(display.innerHTML.length >= 12){
    
        display.classList.add("lowerCase")
    
    }else{
        display.classList.remove("lowerCase")
    }
}