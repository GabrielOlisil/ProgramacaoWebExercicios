
function Comeco(){
    var resultado;
    do{

        resultado = confirm("Ao contrário da alert, eu exibo uma caixa de resposta optativa, retornando uma resposta verdadeira ou falsa, entendeu? (ok para sim e cancelar para não)");
        if (!resultado){
            NaoEntendeu();
            resultado = confirm("Eai? Entendeu agora???");
        }
    }
    while(!resultado)
}

function NaoEntendeu(){
    alert("Oi, sou eu, alert. Vamos lá, olha bem para as opções que voce tem nessa caixa de diálogo. É só o ok, viu? Já na minha irma, confirm, você pode escolher 'ok', ou 'cancelar'!!!!")
}