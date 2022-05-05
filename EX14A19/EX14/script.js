function Comeco(){
    resposta = confirm("Você deseja passar os numeros por parâmetro ou ver a soma pré-definida pelo sistema?");
    if(resposta){
        resultado = EscolhaNumero();
    }
    else{

        resultado = NumerosPredefinidos(30, 40);
    }

    alert(resultado)
}


function NumerosPredefinidos(numero1, numero2){
    var resultado = numero1 + numero2;
    return resultado
}

function EscolhaNumero() {
    var numero1 = prompt("Insira o Primeiro Número");
    var numero2 = prompt("Insira o Segundo Número");
    
    
    if (numero1 == ""){
        numero1 = 0;
    }
    
        
    if (numero2 == ""){
        numero2 = 0;
    }
    
    resposta = parseInt(numero1) + parseInt(numero2);
    return resposta

}