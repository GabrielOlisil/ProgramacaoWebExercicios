function Comeco(){
    resposta = confirm("Voce deseja passar os numeros por parametro ou ver a soma prá-definida pelo sistema?");
    if(resposta){
        EscolhaNumero();
    }
    else
    NumerosPredefinidos(30, 40);
}


function NumerosPredefinidos(numero1, numero2){
    var resultado = numero1 + numero2;
    alert(resultado);
}

function EscolhaNumero() {
    var numero1 = prompt("Insira o Primeiro Número");
    var numero2 = prompt("Insira o Segundo Número");
    
    
    if (numero1 == ""){
        numero1 == 0;
    }
    
        
    if (numero2 == ""){
        numero2 == 0;
    }
    
    resposta = parseInt(numero1) + parseInt(numero2);
    alert(resposta);   
}