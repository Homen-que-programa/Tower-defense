const baseAzulPosition = [450, 25]
var baseAzulVidaMax = 2500
var baseAzulVida = 2500
const baseAzulBarraId = document.getElementById('base-azul-barra')

const baseVermelhoPosition = [450, 1975]
var baseVermelhoVidaMax = 2500
var baseVermelhoVida = 2500
const baseVermelhoBarraId = document.getElementById('base-vermelho-barra')

var modoSobrevivencia = false

var caminhoAlteracoes = 0
// const tabelaCaminhoMetadeTamanho = 100
// const tabelaCaminhoMetade = []
const tabelaCaminhoTamanho = 100
const tabelaCaminho = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', '.'],
    ['A', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'V'],
    ['A', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'V'],
    ['.', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', 'B', '.', '.', '.', '.', 'B', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]


for (let i = 0; i < tabelaCaminho.length; i++) {
    document.getElementById('quadriculado').innerHTML += `<div class="linha" id="linha${i + 1}"></div>`
    for (let e = 0; e < tabelaCaminho[i].length; e++) {
        document.getElementById(`linha${i + 1}`).innerHTML += `
            <div class="coluna">
                <div class="coluna-quadrado" id="coluna-${i + 1}-${e + 1}"></div>
            </div>
        `
    }
}