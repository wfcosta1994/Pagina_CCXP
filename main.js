function addborda(id){
    quintafeira = document.querySelector("#" + id) // o termo id foi usado pq o nome que usei no parametro da função foi id, poderia ser qualquer nome
    quintafeira.style.border = "5px solid red"
}
addborda("sexta") //quinta é o ID da imagem identificado no index.html
addborda("botao")