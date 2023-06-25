// function addborda(id){
//     quintafeira = document.querySelector("#" + id) // o termo id foi usado pq o nome que usei no parametro da função foi id, poderia ser qualquer nome
//     quintafeira.style.border = "5px solid red"
// }
//addborda("sexta") //quinta é o ID da imagem identificado no index.html

function mudarcard(selecao)
{
    var element = document.querySelector(selecao)
    element.classList.toggle("card") // o toggle alterna a função
}
// function uti_teclado()
// {
//     document.addEventListener('keydown', (event) => {
//         var name = event.key
//         var code = event.code
//         alert(`Tecla pressionada ${name} \r\n Key code: ${code}`)
//     } , false)
// }
// uti_teclado()

function addKeyboardEventListeners () {
    document.addEventListener('keydown', (event) =>  {

    var ingresso1 = document.getElementById("quinta")
    var ingresso2 = document.getElementById("sexta")
    var ingresso3 = document.getElementById("esgotado")
    var ingresso4 = document.getElementById("domingo")
    
    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card")
        ingresso2.classList.remove("card")
        ingresso3.classList.remove("card")
        ingresso4.classList.remove("card")
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card")
        ingresso2.classList.toggle("card")
        ingresso3.classList.remove("card")
        ingresso4.classList.remove("card")
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card")
        ingresso2.classList.remove("card")
        ingresso3.classList.toggle("card")
        ingresso4.classList.remove("card")
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card")
        ingresso2.classList.remove("card")
        ingresso3.classList.remove("card")
        ingresso4.classList.toggle("card")
    } 
} , false)
}
addKeyboardEventListeners()