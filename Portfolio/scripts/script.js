(function(){

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

    


})()