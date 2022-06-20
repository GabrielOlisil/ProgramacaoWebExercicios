(function(){


    const regexEmail = /\S+@\S+\.\S+/

    let emailValido = false

    const ferramentas = document.getElementById("ferramentas-conhecidas");
    const ferramentasItens = document.querySelectorAll("#ferramentas-conhecidas > div");

    let counter = 0

    for(let i = 1; i < ferramentasItens.length; i++){
        ferramentasItens[i].remove()
    }


    const btnPassar = document.getElementById("btnProximo")
    const btnVoltar = document.getElementById("btnAnterior")


    btnVoltar.addEventListener('click', () => {
        ferramentasItens[counter].remove()

        counter--
        counter =  counter >= 0? counter : 3

        ferramentas.insertBefore(ferramentasItens[counter], ferramentas.firstChild)
    })



    btnPassar.addEventListener('click', () => {
        ferramentasItens[counter].remove()

        counter++
        counter =  counter < 4? counter : 0

        ferramentas.insertBefore(ferramentasItens[counter], ferramentas.firstChild)
    })



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



})()