var recursosAzul = {
    ouro: [500, document.getElementById('ouro-azul')],
    comida: [500, document.getElementById('comida-azul')],
    recurso: [500, document.getElementById('recurso-azul')],
    producao: [0, 0, 0]
}
var recursosVermelho = {
    ouro: [500, document.getElementById('ouro-vermelho')],
    comida: [500, document.getElementById('comida-vermelho')],
    recurso: [500, document.getElementById('recurso-vermelho')],
    producao: [0, 0, 0]
}

var brocasAzul = [[], [], [], [], []]
var brocasVermelho = [[], [], [], [], []]

var matrizUpigradesOuro = [
    [[0, 10, 20], [0, 10, 20], 1],
    [[10, 25, 50], [5, 15, 25], 2],
    [[25, 60, 100], [15, 30, 50], 4],
    [[80, 120, 250], [40, 60, 125], 10],
    [[200, 400, 650], [100, 200, 325], 20]
]
var matrizUpigradesComida = [
    [[20, 0, 10], [20, 0, 10], 1],
    [[50, 10, 25], [25, 10, 15], 2],
    [[100, 25, 60], [50, 15, 30], 4],
    [[250, 80, 120], [125, 40, 60], 10],
    [[650, 200, 400], [325, 100, 200], 20]
]
var matrizUpigradesRecurso = [
    [[5, 20, 5], [5, 20, 5], 1],
    [[20, 40, 20], [10, 20, 10], 2],
    [[50, 100, 50], [25, 50, 25], 4],
    [[115, 220, 115], [60, 110, 60], 10],
    [[300, 550, 300], [150, 275, 150], 20]
]

recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]

recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]


let elementPrecoCompraOuro = document.getElementsByClassName('broca-ouro')
let elementPrecoCompraComida = document.getElementsByClassName('broca-comida')
let elementPrecoCompraRecurso = document.getElementsByClassName('broca-recurso')
for (let i = 0; i < elementPrecoCompraOuro.length; i++) {
    elementPrecoCompraOuro[i].querySelector('.preco-compra-ouro').innerHTML = matrizUpigradesOuro[0][0][0]
    elementPrecoCompraOuro[i].querySelector('.preco-compra-comida').innerHTML = matrizUpigradesOuro[0][0][1]
    elementPrecoCompraOuro[i].querySelector('.preco-compra-recurso').innerHTML = matrizUpigradesOuro[0][0][2]
}
for (let i = 0; i < elementPrecoCompraComida.length; i++) {
    elementPrecoCompraComida[i].querySelector('.preco-compra-ouro').innerHTML = matrizUpigradesComida[0][0][0]
    elementPrecoCompraComida[i].querySelector('.preco-compra-comida').innerHTML = matrizUpigradesComida[0][0][1]
    elementPrecoCompraComida[i].querySelector('.preco-compra-recurso').innerHTML = matrizUpigradesComida[0][0][2]
}
for (let i = 0; i < elementPrecoCompraRecurso.length; i++) {
    elementPrecoCompraRecurso[i].querySelector('.preco-compra-ouro').innerHTML = matrizUpigradesRecurso[0][0][0]
    elementPrecoCompraRecurso[i].querySelector('.preco-compra-comida').innerHTML = matrizUpigradesRecurso[0][0][1]
    elementPrecoCompraRecurso[i].querySelector('.preco-compra-recurso').innerHTML = matrizUpigradesRecurso[0][0][2]
}
for (let i = 0; i < esquerdaSoldadosIds.length; i++) {
    document.querySelector(`#${esquerdaSoldadosIds[i]} .preco-unidade-ouro`).innerHTML = matrizPrecoUnidades[i][0]
    document.querySelector(`#${esquerdaSoldadosIds[i]} .preco-unidade-comida`).innerHTML = matrizPrecoUnidades[i][1]
    document.querySelector(`#${esquerdaSoldadosIds[i]} .preco-unidade-recurso`).innerHTML = matrizPrecoUnidades[i][2]
}
for (let i = 0; i < direitaSoldadosIds.length; i++) {
    document.querySelector(`#${direitaSoldadosIds[i]} .preco-unidade-ouro`).innerHTML = matrizPrecoUnidades[i][0]
    document.querySelector(`#${direitaSoldadosIds[i]} .preco-unidade-comida`).innerHTML = matrizPrecoUnidades[i][1]
    document.querySelector(`#${direitaSoldadosIds[i]} .preco-unidade-recurso`).innerHTML = matrizPrecoUnidades[i][2]
}


var matrizEscolhaAzul = [false, false, false, false, false]
var clickBrocaAzul = 7
var matrizEscolhaVermelho = [false, false, false, false, false]
var clickBrocaVermelho = 7

function espacoBroca(numeroEspaco) {
    esquerdaAtivos[2] = true
    esquerdaAtivos[3] = false
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
                    esquerdaBrocasEstados[esquerdaBrocas] = true
                    esquerdaAtivos[2] = true
                    esquerdaAtivos[0] = false
                    esquerdaAtivos[1] = false
                    esquerdaAtivos[3] = false
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
                    esquerdaBrocasEstados[esquerdaBrocas] = true
                    esquerdaAtivos[2] = true
                    esquerdaAtivos[0] = false
                    esquerdaAtivos[1] = false
                    esquerdaAtivos[3] = false
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
                    esquerdaBrocasEstados[esquerdaBrocas] = true
                    esquerdaAtivos[2] = true
                    esquerdaAtivos[0] = false
                    esquerdaAtivos[1] = false
                    esquerdaAtivos[3] = false
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
    if (brocasAzul[origemEspaco][2]+1 >= matrizUpigradesOuro.length) return
    if (brocasAzul[origemEspaco][0] === "ouro") {
        if (
            recursosAzul.ouro[0] >= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][0] &&
            recursosAzul.comida[0] >= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][1] &&
            recursosAzul.recurso[0] >= matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            brocasAzul[origemEspaco][2]++
            recursosAzul.ouro[0] -= matrizUpigradesOuro[brocasAzul[origemEspaco][2]][0][0]
            recursosAzul.comida[0] -= matrizUpigradesOuro[brocasAzul[origemEspaco][2]][0][1]
            recursosAzul.recurso[0] -= matrizUpigradesOuro[brocasAzul[origemEspaco][2]][0][2]
            if (brocasAzul[origemEspaco][2]+1 < matrizUpigradesOuro.length) {
                document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][0]
                document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][1]
                document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasAzul[origemEspaco][2]+1][0][2]
            } else {
                document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = 0
            }
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
            brocasAzul[origemEspaco][2]++
            recursosAzul.ouro[0] -= matrizUpigradesComida[brocasAzul[origemEspaco][2]][0][0]
            recursosAzul.comida[0] -= matrizUpigradesComida[brocasAzul[origemEspaco][2]][0][1]
            recursosAzul.recurso[0] -= matrizUpigradesComida[brocasAzul[origemEspaco][2]][0][2]
            if (brocasAzul[origemEspaco][2]+1 < matrizUpigradesComida.length) {
                document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][0]
                document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][1]
                document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasAzul[origemEspaco][2]+1][0][2]
            } else {
                document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = 0
            }
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
            brocasAzul[origemEspaco][2]++
            recursosAzul.ouro[0] -= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][0][0]
            recursosAzul.comida[0] -= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][0][1]
            recursosAzul.recurso[0] -= matrizUpigradesRecurso[brocasAzul[origemEspaco][2]][0][2]
            if (brocasAzul[origemEspaco][2]+1 < matrizUpigradesRecurso.length) {
                document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][0]
                document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][1]
                document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasAzul[origemEspaco][2]+1][0][2]
            } else {
                document.getElementById(`broca-preco-ouro-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`broca-preco-comida-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`broca-preco-recurso-${origemEspaco+1}`).innerHTML = 0
            }
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
    direitaAtivos[2] = true
    direitaAtivos[3] = false
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
                    direitaBrocasEstados[direitaBrocas] = true
                    direitaAtivos[2] = true
                    direitaAtivos[0] = false
                    direitaAtivos[1] = false
                    direitaAtivos[3] = false
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
                    direitaBrocasEstados[direitaBrocas] = true
                    direitaAtivos[2] = true
                    direitaAtivos[0] = false
                    direitaAtivos[1] = false
                    direitaAtivos[3] = false
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
                    direitaBrocasEstados[direitaBrocas] = true
                    direitaAtivos[2] = true
                    direitaAtivos[0] = false
                    direitaAtivos[1] = false
                    direitaAtivos[3] = false
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
    if (brocasVermelho[origemEspaco][2]+1 >= matrizUpigradesOuro.length) return
    if (brocasVermelho[origemEspaco][0] === "ouro") {
        if (
            recursosVermelho.ouro[0] >= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][0] &&
            recursosVermelho.comida[0] >= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][1] &&
            recursosVermelho.recurso[0] >= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][2]
        ) {
            verificacao++
            brocasVermelho[origemEspaco][2]++
            recursosVermelho.ouro[0] -= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][0][0]
            recursosVermelho.comida[0] -= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][0][1]
            recursosVermelho.recurso[0] -= matrizUpigradesOuro[brocasVermelho[origemEspaco][2]][0][2]
            if (brocasVermelho[origemEspaco][2]+1 < matrizUpigradesOuro.length) {
                document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][0]
                document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][1]
                document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesOuro[brocasVermelho[origemEspaco][2]+1][0][2]
            } else {
                document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = 0
            }
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
            brocasVermelho[origemEspaco][2]++
            recursosVermelho.ouro[0] -= matrizUpigradesComida[brocasVermelho[origemEspaco][2]][0][0]
            recursosVermelho.comida[0] -= matrizUpigradesComida[brocasVermelho[origemEspaco][2]][0][1]
            recursosVermelho.recurso[0] -= matrizUpigradesComida[brocasVermelho[origemEspaco][2]][0][2]
            if (brocasVermelho[origemEspaco][2]+1 < matrizUpigradesComida.length) {
                document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][0]
                document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][1]
                document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesComida[brocasVermelho[origemEspaco][2]+1][0][2]
            } else {
                document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = 0
            }
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
            brocasVermelho[origemEspaco][2]++
            recursosVermelho.ouro[0] -= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][0][0]
            recursosVermelho.comida[0] -= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][0][1]
            recursosVermelho.recurso[0] -= matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]][0][2]
            if (brocasVermelho[origemEspaco][2]+1 < matrizUpigradesRecurso.length) {
                document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][0]
                document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][1]
                document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = matrizUpigradesRecurso[brocasVermelho[origemEspaco][2]+1][0][2]
            } else {
                document.getElementById(`direita-broca-preco-ouro-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`direita-broca-preco-comida-${origemEspaco+1}`).innerHTML = 0
                document.getElementById(`direita-broca-preco-recurso-${origemEspaco+1}`).innerHTML = 0
            }
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
        if (brocasVermelho[i].length > 0) {
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
        if (brocasAzul[i].length > 0) {
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