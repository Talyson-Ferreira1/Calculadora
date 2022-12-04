var display = document.querySelector('.display');
var containerCalculadora = document.querySelector('.container');


containerCalculadora.addEventListener("click", (botaoClicado)=>{

    let caracter;

    if(botaoClicado.target.classList == "display" || botaoClicado.target.classList == "container") return

    if(botaoClicado.target.classList.contains("clearAll")){ 

        caracter = 'clearAll'; 
        tratamentoDosOperadores(caracter)
        return 
    }

    if(botaoClicado.target.classList.contains("delet")){ 

        caracter = 'delete'; 
        tratamentoDosOperadores(caracter)
        return 
    }

    caracter = botaoClicado.target.innerText; 
    
    tratamentoDosOperadores(caracter)
    
})


function tratamentoDosOperadores(numero){

    switch (numero) {
        case 'delete':
            
            numero = ""
            display.innerText =  display.innerText.substring(0, display.innerText.length -1);  
            return 
                                  
        case 'clearAll':
            
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
   
    console.log( numero.parentElement)

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