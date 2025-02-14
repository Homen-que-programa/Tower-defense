var recursosAzul = {
    ouro: [5000, document.getElementById('ouro-azul')],
    comida: [2000, document.getElementById('comida-azul')],
    recurso: [3000, document.getElementById('recurso-azul')],
    producao: [0, 0, 0]
}
var recursosVermelho = {
    ouro: [5000, document.getElementById('ouro-vermelho')],
    comida: [2000, document.getElementById('comida-vermelho')],
    recurso: [3000, document.getElementById('recurso-vermelho')],
    producao: [0, 0, 0]
}

var brocasAzul = [[], [], [], [], []]
var brocasVermelho = [[], [], [], [], []]

var matrizUpigradesOuro = [
    [[20, 0, 10], [10, 0, 5], 1],
    [[50, 10, 25], [25, 10, 15], 2],
    [[100, 20, 60], [50, 10, 30], 4],
    [[250, 80, 120], [125, 40, 60], 10],
    [[600, 200, 300], [300, 100, 150], 20]
]
var matrizUpigradesComida = [
    [[20, 0, 10], [10, 0, 5], 1],
    [[50, 10, 25], [25, 10, 15], 2],
    [[100, 20, 60], [50, 10, 30], 4],
    [[250, 80, 120], [125, 40, 60], 10],
    [[600, 200, 300], [300, 100, 150], 20]
]
var matrizUpigradesRecurso = [
    [[20, 0, 10], [10, 0, 5], 1],
    [[50, 10, 25], [25, 10, 15], 2],
    [[100, 20, 60], [50, 10, 30], 4],
    [[250, 80, 120], [125, 40, 60], 10],
    [[600, 200, 300], [300, 100, 150], 20]
]

recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]

recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]




var matrizEscolhaAzul = [false, false, false, false, false]
var clickBrocaAzul = 7
var matrizEscolhaVermelho = [false, false, false, false, false]
var clickBrocaVermelho = 7

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

function escolhaBroca(numeroEscolha, origemEspaco) {
    for (let i = 0; i < matrizEscolhaAzul.length; i++) {
        if (matrizEscolhaAzul[i] && origemEspaco === i) {
            if (numeroEscolha === 0) {
                if (recursosAzul.ouro[0] >= matrizUpigradesOuro[0][0][0] && recursosAzul.comida[0] >= matrizUpigradesOuro[0][0][1] && recursosAzul.recurso[0] >= matrizUpigradesOuro[0][0][2]) {
                    recursosAzul.ouro[0] -= matrizUpigradesOuro[0][0][0]
                    recursosAzul.comida[0] -= matrizUpigradesOuro[0][0][1]
                    recursosAzul.recurso[0] -= matrizUpigradesOuro[0][0][2]
                    recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                    recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                    recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                    brocasAzul[i] = ["ouro", matrizUpigradesOuro[0][2], 0, matrizUpigradesOuro[0][1], matrizUpigradesOuro[0][0]]
                    document.getElementById(`receber-broca-${i+1}`).style.cssText += 'width: 1400px;height: 400px;'
                    document.getElementById(`nome-broca-${i+1}`).innerHTML = "Ouro"
                    document.getElementById(`nome2-broca-${i+1}`).innerHTML = "Ouro"
                    document.getElementById(`recurso-broca-${i+1}`).innerHTML = brocasAzul[i][1]
                    document.getElementById(`nivel-broca-${i+1}`).innerHTML = brocasAzul[i][2]
                    document.getElementById(`broca-venda-ouro-${i+1}`).innerHTML = brocasAzul[i][3][0]
                    document.getElementById(`broca-venda-comida-${i+1}`).innerHTML = brocasAzul[i][3][1]
                    document.getElementById(`broca-venda-recurso-${i+1}`).innerHTML = brocasAzul[i][3][2]
                    document.getElementById(`broca-preco-ouro-${i+1}`).innerHTML = matrizUpigradesOuro[1][0][0]
                    document.getElementById(`broca-preco-comida-${i+1}`).innerHTML = matrizUpigradesOuro[1][0][1]
                    document.getElementById(`broca-preco-recurso-${i+1}`).innerHTML = matrizUpigradesOuro[1][0][2]
                }
            } else if (numeroEscolha === 1) {
                if (recursosAzul.ouro[0] >= matrizUpigradesComida[0][0][0] && recursosAzul.comida[0] >= matrizUpigradesComida[0][0][1] && recursosAzul.recurso[0] >= matrizUpigradesComida[0][0][2]) {
                    recursosAzul.ouro[0] -= matrizUpigradesComida[0][0][0]
                    recursosAzul.comida[0] -= matrizUpigradesComida[0][0][1]
                    recursosAzul.recurso[0] -= matrizUpigradesComida[0][0][2]
                    recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                    recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                    recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                    brocasAzul[i] = ["comida", matrizUpigradesComida[0][2], 0, matrizUpigradesComida[0][1], matrizUpigradesComida[0][0]]
                    document.getElementById(`receber-broca-${i+1}`).style.cssText += 'width: 1400px;height: 400px;'
                    document.getElementById(`nome-broca-${i+1}`).innerHTML = "Comida"
                    document.getElementById(`nome2-broca-${i+1}`).innerHTML = "Comida"
                    document.getElementById(`recurso-broca-${i+1}`).innerHTML = brocasAzul[i][1]
                    document.getElementById(`nivel-broca-${i+1}`).innerHTML = brocasAzul[i][2]
                    document.getElementById(`broca-venda-ouro-${i+1}`).innerHTML = brocasAzul[i][3][0]
                    document.getElementById(`broca-venda-comida-${i+1}`).innerHTML = brocasAzul[i][3][1]
                    document.getElementById(`broca-venda-recurso-${i+1}`).innerHTML = brocasAzul[i][3][2]
                    document.getElementById(`broca-preco-ouro-${i+1}`).innerHTML = matrizUpigradesComida[1][0][0]
                    document.getElementById(`broca-preco-comida-${i+1}`).innerHTML = matrizUpigradesComida[1][0][1]
                    document.getElementById(`broca-preco-recurso-${i+1}`).innerHTML = matrizUpigradesComida[1][0][2]
                }
            } else if (numeroEscolha === 2) {
                if (recursosAzul.ouro[0] >= matrizUpigradesRecurso[0][0][0] && recursosAzul.comida[0] >= matrizUpigradesRecurso[0][0][1] && recursosAzul.recurso[0] >= matrizUpigradesRecurso[0][0][2]) {
                    recursosAzul.ouro[0] -= matrizUpigradesRecurso[0][0][0]
                    recursosAzul.comida[0] -= matrizUpigradesRecurso[0][0][1]
                    recursosAzul.recurso[0] -= matrizUpigradesRecurso[0][0][2]
                    recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                    recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                    recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                    brocasAzul[i] = ["recurso", matrizUpigradesRecurso[0][2], 0, matrizUpigradesRecurso[0][1], matrizUpigradesRecurso[0][0]]
                    document.getElementById(`receber-broca-${i+1}`).style.cssText += 'width: 1400px;height: 400px;'
                    document.getElementById(`nome-broca-${i+1}`).innerHTML = "Recurso"
                    document.getElementById(`nome2-broca-${i+1}`).innerHTML = "Recurso"
                    document.getElementById(`recurso-broca-${i+1}`).innerHTML = brocasAzul[i][1]
                    document.getElementById(`nivel-broca-${i+1}`).innerHTML = brocasAzul[i][2]
                    document.getElementById(`broca-venda-ouro-${i+1}`).innerHTML = brocasAzul[i][3][0]
                    document.getElementById(`broca-venda-comida-${i+1}`).innerHTML = brocasAzul[i][3][1]
                    document.getElementById(`broca-venda-recurso-${i+1}`).innerHTML = brocasAzul[i][3][2]
                    document.getElementById(`broca-preco-ouro-${i+1}`).innerHTML = matrizUpigradesRecurso[1][0][0]
                    document.getElementById(`broca-preco-comida-${i+1}`).innerHTML = matrizUpigradesRecurso[1][0][1]
                    document.getElementById(`broca-preco-recurso-${i+1}`).innerHTML = matrizUpigradesRecurso[1][0][2]
                }
            }
            break
        }
    }
}

function clicarBroca(num) {
    clickBrocaAzul = num
}

function deletarBroca() {
    setTimeout(() => {
        recursosAzul.ouro[0] += brocasAzul[clickBrocaAzul][3][0]
        recursosAzul.comida[0] += brocasAzul[clickBrocaAzul][3][1]
        recursosAzul.recurso[0] += brocasAzul[clickBrocaAzul][3][2]
        recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
        recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
        recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
        brocasAzul[clickBrocaAzul] = []
        document.getElementById(`receber-broca-${clickBrocaAzul+1}`).style.cssText += 'width: 0;height: 0;'
    }, 50)
}

function upigrades(origemEspaco) {
    let verificacao = 0
    if (brocasAzul[origemEspaco][0] === "ouro") {
        if (
            recursosAzul.ouro[0] >= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][0] &&
            recursosAzul.comida[0] >= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][1] &&
            recursosAzul.recurso[0] >= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            recursosAzul.ouro[0] -= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][0]
            recursosAzul.comida[0] -= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][1]
            recursosAzul.recurso[0] -= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][2]
            brocasAzul[origemEspaco][2]++
            document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][0]
            document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][1]
            document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][2]
            brocasAzul[origemEspaco][1] = matrizUpigradesOuro[brocasAzul[origemEspaco][2]][2]
            brocasAzul[origemEspaco][3] = matrizUpigradesOuro[brocasAzul[origemEspaco][2]][1]
            brocasAzul[origemEspaco][4] = matrizUpigradesOuro[brocasAzul[origemEspaco][2]][0]
        }
    } else if (brocasAzul[origemEspaco][0] === "comida") {
        if (
            recursosAzul.ouro[0] >= matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][0] &&
            recursosAzul.comida[0] >= matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][1] &&
            recursosAzul.recurso[0] >= matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            recursosAzul.ouro[0] -= matrizUpigradesComida[brocasAzul[origemEspaco][2]][0][0]
            recursosAzul.comida[0] -= matrizUpigradesComida[brocasAzul[origemEspaco][2]][0][1]
            recursosAzul.recurso[0] -= matrizUpigradesComida[brocasAzul[origemEspaco][2]][0][2]
            brocasAzul[origemEspaco][2]++
            document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][0]
            document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][1]
            document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][2]
            brocasAzul[origemEspaco][1] = matrizUpigradesComida[brocasAzul[origemEspaco][2]][2]
            brocasAzul[origemEspaco][3] = matrizUpigradesComida[brocasAzul[origemEspaco][2]][1]
            brocasAzul[origemEspaco][4] = matrizUpigradesComida[brocasAzul[origemEspaco][2]][0]
        }
    } else if (brocasAzul[origemEspaco][0] === "recurso") {
        if (
            recursosAzul.ouro[0] >= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][0] &&
            recursosAzul.comida[0] >= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][1] &&
            recursosAzul.recurso[0] >= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            recursosAzul.ouro[0] -= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][0][0]
            recursosAzul.comida[0] -= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][0][1]
            recursosAzul.recurso[0] -= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][0][2]
            brocasAzul[origemEspaco][2]++
            document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][0]
            document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][1]
            document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][2]
            brocasAzul[origemEspaco][1] = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][2]
            brocasAzul[origemEspaco][3] = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][1]
            brocasAzul[origemEspaco][4] = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][0]
        }
    }
    if (verificacao === 0) return
    recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
    recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
    recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
    document.getElementById(`recurso-broca-${origemEspaco+1}`).innerHTML = brocasAzul[origemEspaco][1]
    document.getElementById(`nivel-broca-${origemEspaco+1}`).innerHTML = brocasAzul[origemEspaco][2]
    document.getElementById(`broca-venda-ouro-${origemEspaco+1}`).innerHTML = brocasAzul[origemEspaco][3][0]
    document.getElementById(`broca-venda-comida-${origemEspaco+1}`).innerHTML = brocasAzul[origemEspaco][3][1]
    document.getElementById(`broca-venda-recurso-${origemEspaco+1}`).innerHTML = brocasAzul[origemEspaco][3][2]
}



function espacoBrocaDireita(numeroEspaco) {
    for (let i = 0; i < matrizEscolhaVermelho.length; i++) {
        if (numeroEspaco === i && matrizEscolhaVermelho[i]) {
            matrizEscolhaVermelho[i] = false
            document.getElementById(`espaco-escolha-direita-${i+1}`).style.opacity = '0'
        } else if (numeroEspaco === i) {
            matrizEscolhaVermelho[i] = true
            document.getElementById(`espaco-escolha-direita-${i+1}`).style.opacity = '1'
        } else {
            matrizEscolhaVermelho[i] = false
            document.getElementById(`espaco-escolha-direita-${i+1}`).style.opacity = '0'
        }
    }
}

function escolhaBrocaDireita(numeroEscolha, origemEspaco) {
    for (let i = 0; i < matrizEscolhaVermelho.length; i++) {
        if (matrizEscolhaVermelho[i] && origemEspaco === i) {
            if (numeroEscolha === 0) {
                if (recursosVermelho.ouro[0] >= matrizUpigradesOuro[0][0][0] && recursosVermelho.comida[0] >= matrizUpigradesOuro[0][0][1] && recursosVermelho.recurso[0] >= matrizUpigradesOuro[0][0][2]) {
                    recursosVermelho.ouro[0] -= matrizUpigradesOuro[0][0][0]
                    recursosVermelho.comida[0] -= matrizUpigradesOuro[0][0][1]
                    recursosVermelho.recurso[0] -= matrizUpigradesOuro[0][0][2]
                    recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                    recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                    recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                    brocasVermelho[i] = ["ouro", matrizUpigradesOuro[0][2], 0, matrizUpigradesOuro[0][1], matrizUpigradesOuro[0][0]]
                    document.getElementById(`receber-broca-direita-${i+1}`).style.cssText += 'width: 1400px;height: 400px;'
                    document.getElementById(`direita-nome-broca-${i+1}`).innerHTML = "Ouro"
                    document.getElementById(`direita-nome2-broca-${i+1}`).innerHTML = "Ouro"
                    document.getElementById(`direita-recurso-broca-${i+1}`).innerHTML = brocasVermelho[i][1]
                    document.getElementById(`direita-nivel-broca-${i+1}`).innerHTML = brocasVermelho[i][2]
                    document.getElementById(`direita-broca-venda-ouro-${i+1}`).innerHTML = brocasVermelho[i][3][0]
                    document.getElementById(`direita-broca-venda-comida-${i+1}`).innerHTML = brocasVermelho[i][3][1]
                    document.getElementById(`direita-broca-venda-recurso-${i+1}`).innerHTML = brocasVermelho[i][3][2]
                    document.getElementById(`direita-broca-preco-ouro-${i+1}`).innerHTML = matrizUpigradesOuro[1][0][0]
                    document.getElementById(`direita-broca-preco-comida-${i+1}`).innerHTML = matrizUpigradesOuro[1][0][1]
                    document.getElementById(`direita-broca-preco-recurso-${i+1}`).innerHTML = matrizUpigradesOuro[1][0][2]
                }
            } else if (numeroEscolha === 1) {
                if (recursosVermelho.ouro[0] >= matrizUpigradesComida[0][0][0] && recursosVermelho.comida[0] >= matrizUpigradesComida[0][0][1] && recursosVermelho.recurso[0] >= matrizUpigradesComida[0][0][2]) {
                    recursosVermelho.ouro[0] -= matrizUpigradesComida[0][0][0]
                    recursosVermelho.comida[0] -= matrizUpigradesComida[0][0][1]
                    recursosVermelho.recurso[0] -= matrizUpigradesComida[0][0][2]
                    recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                    recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                    recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                    brocasVermelho[i] = ["comida", matrizUpigradesComida[0][2], 0, matrizUpigradesComida[0][1], matrizUpigradesComida[0][0]]
                    document.getElementById(`receber-broca-direita-${i+1}`).style.cssText += 'width: 1400px;height: 400px;'
                    document.getElementById(`direita-nome-broca-${i+1}`).innerHTML = "Comida"
                    document.getElementById(`direita-nome2-broca-${i+1}`).innerHTML = "Comida"
                    document.getElementById(`direita-recurso-broca-${i+1}`).innerHTML = brocasVermelho[i][1]
                    document.getElementById(`direita-nivel-broca-${i+1}`).innerHTML = brocasVermelho[i][2]
                    document.getElementById(`direita-broca-venda-ouro-${i+1}`).innerHTML = brocasVermelho[i][3][0]
                    document.getElementById(`direita-broca-venda-comida-${i+1}`).innerHTML = brocasVermelho[i][3][1]
                    document.getElementById(`direita-broca-venda-recurso-${i+1}`).innerHTML = brocasVermelho[i][3][2]
                    document.getElementById(`direita-broca-preco-ouro-${i+1}`).innerHTML = matrizUpigradesComida[1][0][0]
                    document.getElementById(`direita-broca-preco-comida-${i+1}`).innerHTML = matrizUpigradesComida[1][0][1]
                    document.getElementById(`direita-broca-preco-recurso-${i+1}`).innerHTML = matrizUpigradesComida[1][0][2]
                }
            } else if (numeroEscolha === 2) {
                if (recursosVermelho.ouro[0] >= matrizUpigradesRecurso[0][0][0] && recursosVermelho.comida[0] >= matrizUpigradesRecurso[0][0][1] && recursosVermelho.recurso[0] >= matrizUpigradesRecurso[0][0][2]) {
                    recursosVermelho.ouro[0] -= matrizUpigradesRecurso[0][0][0]
                    recursosVermelho.comida[0] -= matrizUpigradesRecurso[0][0][1]
                    recursosVermelho.recurso[0] -= matrizUpigradesRecurso[0][0][2]
                    recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                    recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                    recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                    brocasVermelho[i] = ["recurso", matrizUpigradesRecurso[0][2], 0, matrizUpigradesRecurso[0][1], matrizUpigradesRecurso[0][0]]
                    document.getElementById(`receber-broca-direita-${i+1}`).style.cssText += 'width: 1400px;height: 400px;'
                    document.getElementById(`direita-nome-broca-${i+1}`).innerHTML = "Recurso"
                    document.getElementById(`direita-nome2-broca-${i+1}`).innerHTML = "Recurso"
                    document.getElementById(`direita-recurso-broca-${i+1}`).innerHTML = brocasVermelho[i][1]
                    document.getElementById(`direita-nivel-broca-${i+1}`).innerHTML = brocasVermelho[i][2]
                    document.getElementById(`direita-broca-venda-ouro-${i+1}`).innerHTML = brocasVermelho[i][3][0]
                    document.getElementById(`direita-broca-venda-comida-${i+1}`).innerHTML = brocasVermelho[i][3][1]
                    document.getElementById(`direita-broca-venda-recurso-${i+1}`).innerHTML = brocasVermelho[i][3][2]
                    document.getElementById(`direita-broca-preco-ouro-${i+1}`).innerHTML = matrizUpigradesRecurso[1][0][0]
                    document.getElementById(`direita-broca-preco-comida-${i+1}`).innerHTML = matrizUpigradesRecurso[1][0][1]
                    document.getElementById(`direita-broca-preco-recurso-${i+1}`).innerHTML = matrizUpigradesRecurso[1][0][2]
                }
            }
            break
        }
    }
}

function clicarBrocaDireita(num) {
    clickBrocaVermelho = num
}

function deletarBrocaDireita() {
    setTimeout(() => {
        recursosVermelho.ouro[0] += brocasVermelho[clickBrocaVermelho][3][0]
        recursosVermelho.comida[0] += brocasVermelho[clickBrocaVermelho][3][1]
        recursosVermelho.recurso[0] += brocasVermelho[clickBrocaVermelho][3][2]
        recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
        recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
        recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
        brocasVermelho[clickBrocaVermelho] = []
        document.getElementById(`receber-broca-direita-${clickBrocaVermelho+1}`).style.cssText += 'width: 0;height: 0;'
    }, 50)
}

function upigradesDireita(origemEspaco) {
    let verificacao = 0
    if (brocasVermelho[origemEspaco][0] === "ouro") {
        if (
            recursosVermelho.ouro[0] >= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][0] &&
            recursosVermelho.comida[0] >= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][1] &&
            recursosVermelho.recurso[0] >= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            recursosVermelho.ouro[0] -= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][0][0]
            recursosVermelho.comida[0] -= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][0][1]
            recursosVermelho.recurso[0] -= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][0][2]
            brocasVermelho[origemEspaco][2]++
            document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][0]
            document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][1]
            document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][2]
            brocasVermelho[origemEspaco][1] = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][2]
            brocasVermelho[origemEspaco][3] = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][1]
            brocasVermelho[origemEspaco][4] = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][0]
        }
    } else if (brocasVermelho[origemEspaco][0] === "comida") {
        if (
            recursosVermelho.ouro[0] >= matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][0] &&
            recursosVermelho.comida[0] >= matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][1] &&
            recursosVermelho.recurso[0] >= matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            recursosVermelho.ouro[0] -= matrizUpigradesComida[brocasVermelho[origemEspaco][2]][0][0]
            recursosVermelho.comida[0] -= matrizUpigradesComida[brocasVermelho[origemEspaco][2]][0][1]
            recursosVermelho.recurso[0] -= matrizUpigradesComida[brocasVermelho[origemEspaco][2]][0][2]
            brocasVermelho[origemEspaco][2]++
            document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][0]
            document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][1]
            document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][2]
            brocasVermelho[origemEspaco][1] = matrizUpigradesComida[brocasVermelho[origemEspaco][2]][2]
            brocasVermelho[origemEspaco][3] = matrizUpigradesComida[brocasVermelho[origemEspaco][2]][1]
            brocasVermelho[origemEspaco][4] = matrizUpigradesComida[brocasVermelho[origemEspaco][2]][0]
        }
    } else if (brocasVermelho[origemEspaco][0] === "recurso") {
        if (
            recursosVermelho.ouro[0] >= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][0] &&
            recursosVermelho.comida[0] >= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][1] &&
            recursosVermelho.recurso[0] >= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            recursosVermelho.ouro[0] -= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][0][0]
            recursosVermelho.comida[0] -= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][0][1]
            recursosVermelho.recurso[0] -= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][0][2]
            brocasVermelho[origemEspaco][2]++
            document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][0]
            document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][1]
            document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][2]
            brocasVermelho[origemEspaco][1] = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][2]
            brocasVermelho[origemEspaco][3] = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][1]
            brocasVermelho[origemEspaco][4] = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][0]
        }
    }
    if (verificacao === 0) return
    recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
    recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
    recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
    document.getElementById(`direita-recurso-broca-${origemEspaco+1}`).innerHTML = brocasVermelho[origemEspaco][1]
    document.getElementById(`direita-nivel-broca-${origemEspaco+1}`).innerHTML = brocasVermelho[origemEspaco][2]
    document.getElementById(`direita-broca-venda-ouro-${origemEspaco+1}`).innerHTML = brocasVermelho[origemEspaco][3][0]
    document.getElementById(`direita-broca-venda-comida-${origemEspaco+1}`).innerHTML = brocasVermelho[origemEspaco][3][1]
    document.getElementById(`direita-broca-venda-recurso-${origemEspaco+1}`).innerHTML = brocasVermelho[origemEspaco][3][2]
}



setInterval(() => {
    for (let i = 0; i < brocasVermelho.length; i++) {
        if (brocasVermelho[i].length > -1) {
            if (brocasVermelho[i][0] === "ouro") {
                recursosVermelho.ouro[0] += brocasVermelho[i][1]
                recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
            } else if (brocasVermelho[i][0] === "comida") {
                recursosVermelho.comida[0] += brocasVermelho[i][1]
                recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
            } else if (brocasVermelho[i][0] === "recurso") {
                recursosVermelho.recurso[0] += brocasVermelho[i][1]
                recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
            }
        }
    }
    for (let i = 0; i < brocasAzul.length; i++) {
        if (brocasAzul[i].length > -1) {
            if (brocasAzul[i][0] === "ouro") {
                recursosAzul.ouro[0] += brocasAzul[i][1]
                recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
            } else if (brocasAzul[i][0] === "comida") {
                recursosAzul.comida[0] += brocasAzul[i][1]
                recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
            } else if (brocasAzul[i][0] === "recurso") {
                recursosAzul.recurso[0] += brocasAzul[i][1]
                recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
            }
        }
    }
}, 1000)