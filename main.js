const form = document.getElementById("form-informaçao")
const nome = []
const telefone = []

let linhas = ''


form.addEventListener('submit', function(e){
    e.preventDefault()

    adcionaLinha()
    atualizaTabela()
})




function adcionaLinha () {
    
    const inputNomeAgenda = document.getElementById("nome-agenda")
    const inputTelefoneAgenda = document.getElementById("telefone-agenda")
    
    if (nome.includes(inputNomeAgenda.value)){
        alert(`O nome: ${inputNomeAgenda.value} já foi inserido`)
    } else {
        nome.push(inputNomeAgenda.value);
        telefone.push(inputTelefoneAgenda.value);

        let linha = '<tr>'
            linha += `<td>${inputNomeAgenda.value}</td>`
            linha += `<td>${inputTelefoneAgenda.value}</td>`
            linha += '<tr>'

            linhas += linha;
    }

    inputNomeAgenda.value = '';
    inputTelefoneAgenda.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
