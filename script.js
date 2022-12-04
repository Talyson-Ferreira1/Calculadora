var display = document.querySelector('.display');
var containerCalculadora = document.querySelector('.container');



containerCalculadora.addEventListener("click", (botaoClicado)=>{

    if(botaoClicado.target.classList == "display" || botaoClicado.target.classList == "container") return

    let caracter = botaoClicado.target.innerText;
    
    tratamentoDosOperadores(caracter)
    
})

function tratamentoDosOperadores(numero){

    switch (numero) {
        case 'DEL':
            
            numero = ""
            display.innerText =  display.innerText.substring(0, display.innerText.length -1);  
            return 
                                  
        case 'AC':
            
            numero = ""
            display.innerText = ""
            return 
      
        case '=':

            numero = ""
            calcularOperacao(display.innerText)
            return

        default:
            break;
    } 

    if(display.innerText.length >= 19) return

    numberLowerCase();
    mostrarNoDisplay(numero);
}

function mostrarNoDisplay(numeroTratado){

    let numSemFormatacao = display.innerText += numeroTratado;
    let numComFormatacao = new Intl.NumberFormat().format(numSemFormatacao)

    display.innerText = numSemFormatacao

}

function calcularOperacao(resultado){

    display.innerText = eval(resultado);

}

function numberLowerCase(){

    if(display.innerText.length >= 12){
    
        display.classList.add("lowerCase")
    
    }else{
        display.classList.remove("lowerCase")
    }
}