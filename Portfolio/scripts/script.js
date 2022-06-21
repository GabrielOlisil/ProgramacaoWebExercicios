(function(){
    let intervalo = 5


    const regexEmail = /\S+@\S+\.\S+/

    let emailValido = false

    const ferramentas = document.getElementById("ferramentas-conhecidas");
    const ferramentasItens = document.querySelectorAll("#ferramentas-conhecidas > div");

    let ferramentaEvidente = 0

    for(let i = 1; i < ferramentasItens.length; i++){
        ferramentasItens[i].remove()
    }


    const btnPassar = document.getElementById("btnProximo")
    const btnVoltar = document.getElementById("btnAnterior")


    btnVoltar.addEventListener('click', () => {
        ferramentasItens[ferramentaEvidente].remove()

        ferramentaEvidente--
        ferramentaEvidente =  ferramentaEvidente >= 0? ferramentaEvidente : 3

        ferramentas.insertBefore(ferramentasItens[ferramentaEvidente], ferramentas.firstChild)
        intervalo = 5

    })



    btnPassar.addEventListener('click', () => {
        passadaAutomatica();
    })

    function passadaAutomatica(){
        
        ferramentasItens[ferramentaEvidente].remove()

        ferramentaEvidente++
        ferramentaEvidente =  ferramentaEvidente < 4? ferramentaEvidente : 0

        ferramentas.insertBefore(ferramentasItens[ferramentaEvidente], ferramentas.firstChild)

        intervalo = 5
    }






    const formulario = document.forms["contato"]

    console.log(formulario)

    formulario.addEventListener('submit', () => {
        
        if(formulario.nome.value.length > 1  && formulario.texto.value.length > 1 && emailValido){

            return true
        }
        alert("Algumas informações foram inseridas incorretamente")
        return

    })


    formulario.email.addEventListener('keyup', () => {
        emailValido = formulario.email.value.match(regexEmail)? true : false
       console.log(formulario.email.value)
    })

    function testaIntervalo(){
        
        if(intervalo == 0) {
            passadaAutomatica();
            
        }

        intervalo--
       
    }




    setInterval(testaIntervalo, 700)



})()