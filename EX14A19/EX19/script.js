function Comeco(){
    do {
        resultado = prompt("Insira seu endereço!!");
        confirma = confirm("Seu endereço é: " + resultado);
    }while(!confirma)

    alert("Escreveremos seu email na página");
    document.write("Seu endereço é: " + resultado);
}