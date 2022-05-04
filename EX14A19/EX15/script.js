function Comeco(){
    resposta = confirm("Deseja definir os valores ou ver a soma do sistema?");
    if(resposta){
        nota1 = parseInt(prompt("Insira a Primeira nota"));
        nota2 = parseInt(prompt("Insira a Segunda nota"));
        CalcularMedia(nota1, nota2);
    }
    else
    CalcularMedia(60, 60);
}

function CalcularMedia(nota1, nota2) {
    media = (nota1 + nota2) / 2;
    resultado = media >= 60? "Aprovado" : "Reprovado";
    alert("O aluno com a média " + media + " foi " + resultado);
}