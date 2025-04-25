var lateralMatrizAzul = [["lateral-soldados", false], ["lateral-brocas", false], ["lateral-torres", false]]
var lateralMatrizVermelho = [["lateral-soldados-direita", false], ["lateral-brocas-direita", false]]
var posicionarAtivo = [false, false]
var posicionarAtulizacao = 0
var posicionarTorreAtivo = [false, false]
var posicionarTorreAtulizacao = 0

var matrizPrecoUnidades = [[0, 20, 10], [0, 30, 20], [10, 70, 35], [10, 100, 15]]
var matrizPrecoTorres = [[50, 30, 70]]

var posicionarIntervaloAzul
var posicionarIntervaloVermelho
var posicionarAtulizacaoCopyAzul
var posicionarAtulizacaoCopyVermelho
var caminhoAlteracoesCopyAzul
var caminhoAlteracoesCopyVermelho

var posicionarTorreIntervaloAzul
var posicionarTorreIntervaloVermelho
var posicionarTorreAtulizacaoCopyAzul
var posicionarTorreAtulizacaoCopyVermelho
var caminhoTorreAlteracoesCopyAzul
var caminhoTorreAlteracoesCopyVermelho

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
        clearInterval(posicionarIntervaloAzul)
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
        clearInterval(posicionarIntervaloVermelho)
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
        posicionarIntervaloAzul = setInterval(() => {
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
                                let verificacao = false
                                if (_unidadeEscolhida === 0) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 25, 1000, 1, 500, 70, 50, 'background: brown;', 1)
                                        verificacao = true
                                    }
                                } else if (_unidadeEscolhida === 1) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite-1) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 200, 30, 500, 1, 650, 250, 50, 'background: grey;', 2)
                                        verificacao = true
                                    }
                                } else if (_unidadeEscolhida === 2) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite-2) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 800, 100, 1700, 1.5, 500, 70, 75, 'background: green;', 3)
                                        verificacao = true
                                    }
                                } else if (_unidadeEscolhida === 3) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite-2) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 400, 100, 1500, 1.5, 800, 600, 50, 'background: blue;', 3)
                                        verificacao = true
                                    }
                                }
                                if (verificacao) {
                                    recursosAzul.ouro[0] -= matrizPrecoUnidades[_unidadeEscolhida][0]
                                    recursosAzul.comida[0] -= matrizPrecoUnidades[_unidadeEscolhida][1]
                                    recursosAzul.recurso[0] -= matrizPrecoUnidades[_unidadeEscolhida][2]
                                    recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                                    recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                                    recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
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
        posicionarIntervaloVermelho = setInterval(() => {
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
                                let verificacao = false
                                if (_unidadeEscolhida === 0) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 35, 1000, 1, 500, 70, 50, 'background: brown;', 1)
                                        verificacao = true
                                    }
                                } else if (_unidadeEscolhida === 1) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite-1) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 30, 500, 1, 650, 250, 50, 'background: grey;', 2)
                                        verificacao = true
                                    }
                                } else if (_unidadeEscolhida === 2) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite-2) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 800, 100, 1700, 1.5, 500, 70, 75, 'background: green;', 3)
                                        verificacao = true
                                    }
                                } else if (_unidadeEscolhida === 3) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite-2) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 400, 100, 1500, 2, 800, 600, 50, 'background: blue;', 3)
                                        verificacao = true
                                    }
                                }
                                if (verificacao) {
                                    recursosVermelho.ouro[0] -= matrizPrecoUnidades[_unidadeEscolhida][0]
                                    recursosVermelho.comida[0] -= matrizPrecoUnidades[_unidadeEscolhida][1]
                                    recursosVermelho.recurso[0] -= matrizPrecoUnidades[_unidadeEscolhida][2]
                                    recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                                    recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                                    recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
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




function posicionarTorres(_timeOuCansel, _torreEscolhida) {
    if (_timeOuCansel === 'azul') {
        if (matrizPrecoTorres[_torreEscolhida][0] > recursosAzul.ouro[0] || matrizPrecoTorres[_torreEscolhida][1] > recursosAzul.comida[0] || matrizPrecoTorres[_torreEscolhida][2] > recursosAzul.recurso[0]) {
            return false
        }
    }
    if (_timeOuCansel === 'vermelho') {
        if (matrizPrecoTorres[_torreEscolhida][0] > recursosVermelho.ouro[0] || matrizPrecoTorres[_torreEscolhida][1] > recursosVermelho.comida[0] || matrizPrecoTorres[_torreEscolhida][2] > recursosVermelho.recurso[0]) {
            return false
        }
    }
    document.getElementById('quadriculado').style.opacity = '1'
    if (_timeOuCansel === 'cancelarAzul' || (_timeOuCansel === 'azul' && posicionarTorreAtivo[0])) {
        posicionarTorreAtivo[0] = false
        clearInterval(posicionarTorreIntervaloAzul)
        if (posicionarTorreAtivo[1]) {
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
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarTorreAtivo[1])) {
        posicionarTorreAtivo[1] = false
        clearInterval(posicionarTorreIntervaloVermelho)
        if (posicionarTorreAtivo[0]) {
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
        posicionarTorreAtulizacao++
        posicionarTorreAtivo[0] = true
        posicionarTorreAtulizacaoCopyAzul = posicionarTorreAtulizacao
        caminhoAlteracoesCopyAzul = -5
        posicionarTorreIntervaloAzul = setInterval(() => {
            if (posicionarTorreAtulizacaoCopyAzul !== posicionarTorreAtulizacao || caminhoAlteracoesCopyAzul !== caminhoAlteracoes) {
                posicionarTorreAtulizacaoCopyAzul = posicionarTorreAtulizacao
                caminhoAlteracoesCopyAzul = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                    for (let e = 0; e < tabelaCaminhoAzul[i].length; e+=2) {
                        if (e >= tabelaCaminhoAzul[i].length/2-4) {
                            if (!posicionarTorreAtivo[1]) {
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminhoAzul[i][e] !== '.' || tabelaCaminhoAzul[i+1][e] !== '.' || tabelaCaminhoAzul[i][e+1] !== '.' || tabelaCaminhoAzul[i+1][e+1] !== '.') {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {
                                let verificacao = false
                                if (_torreEscolhida === 0) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 25, 1000, 1, 500, 70, 50, 'background: brown;', 1)
                                        verificacao = true
                                    }
                                } else if (_torreEscolhida === 1) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite-1) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 200, 30, 500, 1, 650, 250, 50, 'background: grey;', 2)
                                        verificacao = true
                                    }
                                } else if (_torreEscolhida === 2) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite-2) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 800, 100, 1700, 1.5, 500, 70, 75, 'background: green;', 3)
                                        verificacao = true
                                    }
                                } else if (_torreEscolhida === 3) {
                                    if (quantiaUnidadeAzul < quantiaUnidadeLimite-2) {
                                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 400, 100, 1500, 1.5, 800, 600, 50, 'background: blue;', 3)
                                        verificacao = true
                                    }
                                }
                                if (verificacao) {
                                    recursosAzul.ouro[0] -= matrizPrecoUnidades[_torreEscolhida][0]
                                    recursosAzul.comida[0] -= matrizPrecoUnidades[_torreEscolhida][1]
                                    recursosAzul.recurso[0] -= matrizPrecoUnidades[_torreEscolhida][2]
                                    recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                                    recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                                    recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                                }
                                posicionarTorres('cancelarAzul', 0)
                            }
                        }
                    }
                }
            }
        }, 100)
    } else if (_timeOuCansel === 'vermelho') {
        posicionarTorreAtulizacao++
        posicionarTorreAtivo[1] = true
        posicionarTorreAtulizacaoCopyVermelho = posicionarTorreAtulizacao
        caminhoAlteracoesCopyVermelho = -5
        posicionarTorreIntervaloVermelho = setInterval(() => {
            if (posicionarTorreAtulizacaoCopyVermelho !== posicionarTorreAtulizacao || caminhoAlteracoesCopyVermelho !== caminhoAlteracoes) {
                posicionarTorreAtulizacaoCopyVermelho = posicionarTorreAtulizacao
                caminhoAlteracoesCopyVermelho = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoVermelho.length; i+=2) {
                    for (let e = 0; e < tabelaCaminhoVermelho[i].length; e+=2) {
                        if (e < tabelaCaminhoVermelho[i].length/2+4) {
                            if (!posicionarTorreAtivo[0]) {
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminhoVermelho[i][e] !== '.' || tabelaCaminhoVermelho[i+1][e] !== '.' || tabelaCaminhoVermelho[i][e+1] !== '.' || tabelaCaminhoVermelho[i+1][e+1] !== '.') {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {
                                let verificacao = false
                                if (_torreEscolhida === 0) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 35, 1000, 1, 500, 70, 50, 'background: brown;', 1)
                                        verificacao = true
                                    }
                                } else if (_torreEscolhida === 1) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite-1) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 150, 30, 500, 1, 650, 250, 50, 'background: grey;', 2)
                                        verificacao = true
                                    }
                                } else if (_torreEscolhida === 2) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite-2) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 800, 100, 1700, 1.5, 500, 70, 75, 'background: green;', 3)
                                        verificacao = true
                                    }
                                } else if (_torreEscolhida === 3) {
                                    if (quantiaUnidadeVermelho < quantiaUnidadeLimite-2) {
                                        criarUnidadeVermelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 400, 100, 1500, 2, 800, 600, 50, 'background: blue;', 3)
                                        verificacao = true
                                    }
                                }
                                if (verificacao) {
                                    recursosVermelho.ouro[0] -= matrizPrecoUnidades[_torreEscolhida][0]
                                    recursosVermelho.comida[0] -= matrizPrecoUnidades[_torreEscolhida][1]
                                    recursosVermelho.recurso[0] -= matrizPrecoUnidades[_torreEscolhida][2]
                                    recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                                    recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                                    recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                                }
                                posicionarTorres('cancelarVermelho', 0)
                            }
                        }
                    }
                }
            }
        }, 100)
    }
    return true
}