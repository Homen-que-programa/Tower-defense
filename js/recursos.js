var recursosAzul = {
    ouro: [0, document.getElementById('ouro-azul')],
    comida: [0, document.getElementById('comida-azul')],
    recurso: [0, document.getElementById('recurso-azul')]
}
var recursosVermelho = {
    ouro: [0, document.getElementById('ouro-vermelho')],
    comida: [0, document.getElementById('comida-vermelho')],
    recurso: [0, document.getElementById('recurso-vermelho')]
}

recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]

recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]




var matrizEscolhaAzul = [false, false, false, false, false]
var clickBroca = 7

function espacoBroca(numeroEspaco) {
    for (let i = 0; i < matrizEscolhaAzul.length; i++) {
        if (numeroEspaco === i && matrizEscolhaAzul[i]) {
            matrizEscolhaAzul[i] = false
            document.getElementById(`espaco-escolha-${i+1}`).style.opacity = '0'
        } else if (numeroEspaco === i) {
            matrizEscolhaAzul[i] = true
            document.getElementById(`espaco-escolha-${i+1}`).style.opacity = '1'
        } else {
            matrizEscolhaAzul[i] = false
            document.getElementById(`espaco-escolha-${i+1}`).style.opacity = '0'
        }
    }
}

function escolhaBroca(numeroEscolha) {
    for (let i = 0; i < matrizEscolhaAzul.length; i++) {
        if (matrizEscolhaAzul[i]) {
            document.getElementById(`receber-broca-${i+1}`).innerHTML = document.getElementById('modelo-broca-ouro').innerHTML
            break
        }
    }
}

function clicarBroca(num) {
    clickBroca = num
}

function deletarBroca() {
    console.log(clickBroca)
    document.getElementById(`receber-broca-${clickBroca+1}`).innerHTML = ''
}