var lateralMatrizAzul = [["lateral-soldados", false], ["lateral-brocas", false]]
var lateralMatrizVermelho = [["lateral-soldados-direita", false], ["lateral-brocas-direita", false]]
var posicionarAtivo = [false, false]
var posicionarAtulizacao = 0

var matrizPrecoUnidades = [[0, 30, 5], [0, 80, 10], [10, 250, 30], [10, 100, 15]]

var intervaloPosicionarAzul
var intervaloPosicionarVermelho
var posicionarAtulizacaoCopyAzul
var caminhoAlteracoesCopyAzul
var posicionarAtulizacaoCopyVermelho
var caminhoAlteracoesCopyVermelho

function abrirLateralAzul(_numLateral) {
    for (let i = 0; i < lateralMatrizAzul.length; i++) {
        if (_numLateral === i && lateralMatrizAzul[i][1]) {
            lateralMatrizAzul[i][1] = false
            document.getElementById(lateralMatrizAzul[i][0]).style.cssText += `width: 0px;`
        } else if (_numLateral === i) {
            lateralMatrizAzul[i][1] = true
            document.getElementById(lateralMatrizAzul[i][0]).style.cssText += `width: 1400px;`
        } else {
            lateralMatrizAzul[i][1] = false
            document.getElementById(lateralMatrizAzul[i][0]).style.cssText += `width: 0px;`
        }
    }
}
function abrirLateralVermelho(_numLateral) {
    for (let i = 0; i < lateralMatrizVermelho.length; i++) {
        if (_numLateral === i && lateralMatrizVermelho[i][1]) {
            lateralMatrizVermelho[i][1] = false
            document.getElementById(lateralMatrizVermelho[i][0]).style.cssText += `width: 0px;`
        } else if (_numLateral === i) {
            lateralMatrizVermelho[i][1] = true
            document.getElementById(lateralMatrizVermelho[i][0]).style.cssText += `width: 1400px;`
        } else {
            lateralMatrizVermelho[i][1] = false
            document.getElementById(lateralMatrizVermelho[i][0]).style.cssText += `width: 0px;`
        }
    }
}

function posicionarSoldados(_timeOuCansel, _unidadeEscolhida) {
    if (_timeOuCansel === 'azul') {
        if (matrizPrecoUnidades[_unidadeEscolhida][0] > recursosAzul.ouro[0] || matrizPrecoUnidades[_unidadeEscolhida][1] > recursosAzul.comida[0] || matrizPrecoUnidades[_unidadeEscolhida][2] > recursosAzul.recurso[0]) {
            return false
        }
    }
    if (_timeOuCansel === 'vermelho') {
        if (matrizPrecoUnidades[_unidadeEscolhida][0] > recursosVermelho.ouro[0] || matrizPrecoUnidades[_unidadeEscolhida][1] > recursosVermelho.comida[0] || matrizPrecoUnidades[_unidadeEscolhida][2] > recursosVermelho.recurso[0]) {
            return false
        }
    }
    document.getElementById('quadriculado').style.opacity = '1'
    if (_timeOuCansel === 'cancelarAzul' || (_timeOuCansel === 'azul' && posicionarAtivo[0])) {
        posicionarAtivo[0] = false
        clearInterval(intervaloPosicionarAzul)
        if (posicionarAtivo[1]) {
            for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                for (let e = 0; e <= tabelaCaminhoAzul[i].length/2-2; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                for (let e = 0; e < tabelaCaminhoAzul[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarAtivo[1])) {
        posicionarAtivo[1] = false
        clearInterval(intervaloPosicionarVermelho)
        if (posicionarAtivo[0]) {
            for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                for (let e = tabelaCaminhoAzul[i].length/2; e < tabelaCaminhoAzul[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                for (let e = 0; e < tabelaCaminhoAzul[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'azul') {
        posicionarAtulizacao++
        posicionarAtivo[0] = true
        posicionarAtulizacaoCopyAzul = posicionarAtulizacao
        caminhoAlteracoesCopyAzul = -5
        intervaloPosicionarAzul = setInterval(() => {
            if (posicionarAtulizacaoCopyAzul !== posicionarAtulizacao || caminhoAlteracoesCopyAzul !== caminhoAlteracoes) {
                posicionarAtulizacaoCopyAzul = posicionarAtulizacao
                caminhoAlteracoesCopyAzul = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                    for (let e = 0; e < tabelaCaminhoAzul[i].length; e+=2) {
                        if (e >= tabelaCaminhoAzul[i].length/2-4) {
                            if (!posicionarAtivo[1]) {
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminhoAzul[i][e] !== '.' || tabelaCaminhoAzul[i+1][e] !== '.' || tabelaCaminhoAzul[i][e+1] !== '.' || tabelaCaminhoAzul[i+1][e+1] !== '.') {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {
                                recursosAzul.ouro[0] -= matrizPrecoUnidades[_unidadeEscolhida][0]
                                recursosAzul.comida[0] -= matrizPrecoUnidades[_unidadeEscolhida][1]
                                recursosAzul.recurso[0] -= matrizPrecoUnidades[_unidadeEscolhida][2]
                                recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                                recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                                recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                                if (_unidadeEscolhida === 0) {
                                    criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 35, 1000, 1, 300, 70, 50, 'background: brown;')
                                } else if (_unidadeEscolhida === 1) {
                                    criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 200, 20, 500, 1, 500, 250, 50, 'background: grey;')
                                } else if (_unidadeEscolhida === 2) {
                                    criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 600, 150, 2500, 2, 300, 70, 75, 'background: green;')
                                } else if (_unidadeEscolhida === 3) {
                                    criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 400, 100, 1500, 1.5, 800, 600, 50, 'background: blue;')
                                }
                                posicionarSoldados('cancelarAzul', 0)
                            }
                        }
                    }
                }
            }
        }, 100)
    } else if (_timeOuCansel === 'vermelho') {
        posicionarAtulizacao++
        posicionarAtivo[1] = true
        posicionarAtulizacaoCopyVermelho = posicionarAtulizacao
        caminhoAlteracoesCopyVermelho = -5
        intervaloPosicionarVermelho = setInterval(() => {
            if (posicionarAtulizacaoCopyVermelho !== posicionarAtulizacao || caminhoAlteracoesCopyVermelho !== caminhoAlteracoes) {
                posicionarAtulizacaoCopyVermelho = posicionarAtulizacao
                caminhoAlteracoesCopyVermelho = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoVermelho.length; i+=2) {
                    for (let e = 0; e < tabelaCaminhoVermelho[i].length; e+=2) {
                        if (e < tabelaCaminhoVermelho[i].length/2+4) {
                            if (!posicionarAtivo[0]) {
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminhoVermelho[i][e] !== '.' || tabelaCaminhoVermelho[i+1][e] !== '.' || tabelaCaminhoVermelho[i][e+1] !== '.' || tabelaCaminhoVermelho[i+1][e+1] !== '.') {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {
                                recursosVermelho.ouro[0] -= matrizPrecoUnidades[_unidadeEscolhida][0]
                                recursosVermelho.comida[0] -= matrizPrecoUnidades[_unidadeEscolhida][1]
                                recursosVermelho.recurso[0] -= matrizPrecoUnidades[_unidadeEscolhida][2]
                                recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                                recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                                recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                                if (_unidadeEscolhida === 0) {
                                    criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 35, 1000, 1, 300, 70, 50, 'background: brown;')
                                } else if (_unidadeEscolhida === 1) {
                                    criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 200, 20, 500, 1, 500, 250, 50, 'background: grey;')
                                } else if (_unidadeEscolhida === 2) {
                                    criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 600, 150, 2500, 2, 300, 70, 75, 'background: green;')
                                } else if (_unidadeEscolhida === 3) {
                                    criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 400, 100, 1500, 2, 800, 600, 50, 'background: blue;')
                                }
                                posicionarSoldados('cancelarVermelho', 0)
                            }
                        }
                    }
                }
            }
        }, 100)
    }
    return true
}