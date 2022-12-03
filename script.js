var containerAll = document.querySelector('.container');
var display = document.querySelector('.display');






containerAll.addEventListener('click', (btnValue)=>{

    if(btnValue.target.classList == "display"){
        return
    }

    let valorInserido = btnValue.target.innerText;

    showDisplay(valorInserido);
})

function showDisplay(operador){

    if(operador == 'DEL' ){
        operador = ""
        display.innerHTML =  display.innerHTML.substring(0, display.innerHTML.length -1);  
    }else if(operador == 'AC'){
        operador = ""
        display.innerHTML = ""
    }else if(operador == '='){
        operador = ""
        calcular(display.innerHTML)
    }

    display.innerHTML += operador ;
}


function calcular(resultado){
    display.innerHTML = eval(resultado);
}