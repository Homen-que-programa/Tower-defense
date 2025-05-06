var lateralMatrizAzul = [["lateral-soldados", false], ["lateral-brocas", false], ["lateral-torres", false], ["lateral-upgrades", false], ["lateral-mostrar-upgrade", false]]
var lateralMatrizVermelho = [["lateral-soldados-direita", false], ["lateral-brocas-direita", false], ["lateral-torres-direita", false], ["lateral-upgrades-direita", false], ["lateral-mostrar-upgrade-direita", false]]
var posicionarAtivo = [false, false]
var posicionarAtulizacao = 0

var matrizPrecoUnidades = [[0, 20, 10], [0, 30, 20], [10, 70, 35], [10, 100, 15]]

var matrizPrecoTorres = [
    [50, 30, 70],
    [50, 30, 70],
    [50, 30, 70],
    [50, 30, 70]
]
var matrizUpgradeTorresPreco = [
    [[0, 20, 10], [0, 30, 20], [10, 70, 35]],
    [[0, 20, 10], [0, 30, 20], [10, 70, 35]],
    [[0, 20, 10], [0, 30, 20], [10, 70, 35]],
    [[0, 20, 10], [0, 30, 20], [10, 70, 35]]
]
var matrizUpgradeTorresMelhorias = [
    [[['vida', 2000]], [['vida', 3000]], [['vida', 5000]]],
    [[['vida', 500], ['dano', 10], ['range', 50]], [['vida', 500], ['dano', 10], ['range', 50]], [['vida', 500], ['dano', 10], ['range', 50]]],
    [[['vida', 500], ['dano', 10], ['range', 50]], [['vida', 500], ['dano', 10], ['range', 50]], [['vida', 500], ['dano', 10], ['range', 50]]],
    [[['vida', 500], ['velocidadeAtaque', 200], ['range', 50]], [['vida', 500], ['velocidadeAtaque', 200], ['range', 50]], [['vida', 500], ['velocidadeAtaque', 200], ['range', 50]]]
]

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

var upgradeTorreIntervaloAzul
var upgradeTorreIntervaloVermelho
var upgradeTorreAtulizacaoCopyAzul
var upgradeTorreAtulizacaoCopyVermelho
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
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length/2-1; e++) {
                    document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                    document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarAtivo[1])) {
        posicionarAtivo[1] = false
        clearInterval(posicionarIntervaloVermelho)
        if (posicionarAtivo[0]) {
            for (let i = 0; i < tabelaCaminho.length; i+=2) {
                for (let e = tabelaCaminho[i].length/2; e < tabelaCaminho[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminho.length; i+=2) {
                for (let e = 0; e < tabelaCaminho[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'azul') {
        posicionarAtivo[0] = true
        posicionarAtulizacaoCopyAzul = posicionarAtulizacao
        posicionarAtulizacao++
        caminhoAlteracoesCopyAzul = -5

        posicionarIntervaloAzul = setInterval(() => {
            if (posicionarAtulizacaoCopyAzul !== posicionarAtulizacao || caminhoAlteracoesCopyAzul !== caminhoAlteracoes) {
                posicionarAtulizacaoCopyAzul = posicionarAtulizacao
                caminhoAlteracoesCopyAzul = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e >= tabelaCaminhoMetade[i].length/2-3) {
                            if (!posicionarAtivo[1]) {
                                document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {
                                if (!(matrizPrecoUnidades[_unidadeEscolhida][0] > recursosAzul.ouro[0] || matrizPrecoUnidades[_unidadeEscolhida][1] > recursosAzul.comida[0] || matrizPrecoUnidades[_unidadeEscolhida][2] > recursosAzul.recurso[0])) {
                                    let verificacao = false
                                    if (_unidadeEscolhida === 0) {
                                        if (quantiaUnidadeAzul < quantiaUnidadeLimite) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 150, 25, 1000, 1, 500, 70, 50, 'background-color: brown;', 1, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 1) {
                                        if (quantiaUnidadeAzul < quantiaUnidadeLimite-1) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 200, 30, 500, 1, 650, 250, 50, 'background-color: grey;', 2, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 2) {
                                        if (quantiaUnidadeAzul < quantiaUnidadeLimite-2) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 800, 100, 1700, 1, 500, 70, 75, 'background-color: green;', 3, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 33) {
                                        if (quantiaUnidadeAzul < quantiaUnidadeLimite-2) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 400, 100, 1500, 1.5, 800, 600, 50, 'background-color: blue;', 3, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 3) {
                                        if (quantiaUnidadeAzul < quantiaUnidadeLimite-2) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 250, 5, 1000, 1, 500, 200, 50, 'background-color: blue;', 1, ['A', 'azul', ['V', 'vermelho']], 'homenQueDaBuff')
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
                                }
                                posicionarSoldados('cancelarAzul', 0)
                            }
                        }
                    }
                }
            }
        }, 100)
    } else if (_timeOuCansel === 'vermelho') {
        posicionarAtivo[1] = true
        posicionarAtulizacaoCopyVermelho = posicionarAtulizacao
        posicionarAtulizacao++
        caminhoAlteracoesCopyVermelho = -5

        posicionarIntervaloVermelho = setInterval(() => {
            if (posicionarAtulizacaoCopyVermelho !== posicionarAtulizacao || caminhoAlteracoesCopyVermelho !== caminhoAlteracoes) {
                posicionarAtulizacaoCopyVermelho = posicionarAtulizacao
                caminhoAlteracoesCopyVermelho = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e < tabelaCaminhoMetade[i].length/2+3) {
                            if (!posicionarAtivo[0]) {
                                document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                            }
                        } else  if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {
                                if (!(matrizPrecoUnidades[_unidadeEscolhida][0] > recursosVermelho.ouro[0] || matrizPrecoUnidades[_unidadeEscolhida][1] > recursosVermelho.comida[0] || matrizPrecoUnidades[_unidadeEscolhida][2] > recursosVermelho.recurso[0])) {
                                    let verificacao = false
                                    if (_unidadeEscolhida === 0) {
                                        if (quantiaUnidadeVermelho < quantiaUnidadeLimite) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 150, 25, 1000, 1, 500, 70, 50, 'background-color: brown;', 1, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 1) {
                                        if (quantiaUnidadeVermelho < quantiaUnidadeLimite-1) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 200, 30, 500, 1, 650, 250, 50, 'background-color: grey;', 2, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 2) {
                                        if (quantiaUnidadeVermelho < quantiaUnidadeLimite-2) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 800, 100, 1700, 1.5, 500, 70, 75, 'background-color: green;', 3, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 33) {
                                        if (quantiaUnidadeVermelho < quantiaUnidadeLimite-2) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 400, 100, 1500, 2, 800, 600, 50, 'background-color: blue;', 3, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 3) {
                                        if (quantiaUnidadeVermelho < quantiaUnidadeLimite-2) {
                                            criarUnidade((e+0.25)*tabelaCaminhoMetadeTamanho, (i+0.25)*tabelaCaminhoMetadeTamanho, 250, 5, 1000, 1, 500, 200, 50, 'background-color: blue;', 1, ['V', 'vermelho', ['A', 'azul']], 'homenQueDaBuff')
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
    if (_timeOuCansel === 'cancelarAzul' || (_timeOuCansel === 'azul' && posicionarAtivo[0])) {
        posicionarAtivo[0] = false
        clearInterval(posicionarTorreIntervaloAzul)
        if (posicionarAtivo[1]) {
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length/2-1; e++) {
                    document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                    document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarAtivo[1])) {
        posicionarAtivo[1] = false
        clearInterval(posicionarTorreIntervaloVermelho)
        if (posicionarAtivo[0]) {
            for (let i = 0; i < tabelaCaminho.length; i+=2) {
                for (let e = tabelaCaminho[i].length/2; e < tabelaCaminho[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminho.length; i+=2) {
                for (let e = 0; e < tabelaCaminho[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'azul') {
        posicionarTorreAtulizacaoCopyAzul = posicionarAtulizacao
        posicionarAtulizacao++
        caminhoAlteracoesCopyAzul = -5
        posicionarAtivo[0] = true

        posicionarTorreIntervaloAzul = setInterval(() => {
            if (posicionarTorreAtulizacaoCopyAzul !== posicionarAtulizacao || caminhoAlteracoesCopyAzul !== caminhoAlteracoes) {
                posicionarTorreAtulizacaoCopyAzul = posicionarAtulizacao
                caminhoAlteracoesCopyAzul = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e >= tabelaCaminhoMetade[i].length/2-3) {
                            if (!posicionarAtivo[1]) {
                                document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {
                                if (!(matrizPrecoTorres[_torreEscolhida][0] > recursosAzul.ouro[0] || matrizPrecoTorres[_torreEscolhida][1] > recursosAzul.comida[0] || matrizPrecoTorres[_torreEscolhida][2] > recursosAzul.recurso[0])) {
                                    let verificacao = true
                                    if (_torreEscolhida === 0) {
                                        if (quantiaTorreAzul < quantiaTorreLimite) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 200]
                                            if (torreVerticalHorizontal[0]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 0, 0, 0, _torreTamanho, 'background-color: rgb(150, 140, 127);', 1, ['A', 'azul', ['V', 'vermelho']], 'horizontal', 'nenhum', [], false, 'nenhum', 'Cercado', _torreEscolhida)
                                            }
                                        }
                                    } else if (_torreEscolhida === 1) { 
                                        if (quantiaTorreAzul < quantiaTorreLimite-2-2) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 100]
                                            if (torreVerticalHorizontal[0]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 30, 1000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', 3, ['A', 'azul', ['V', 'vermelho']], 'horizontal', 'unico', [], true, 'nenhum', 'Mulher na torre', _torreEscolhida)
                                            }
                                        }
                                    } else if (_torreEscolhida === 2) {
                                        if (quantiaTorreAzul < quantiaTorreLimite-2) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 100]
                                            if (torreVerticalHorizontal[0]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 30, 2000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', 3, ['A', 'azul', ['V', 'vermelho']], 'horizontal', 'area', [100], true, 'nenhum', 'Homen que taca bomba', _torreEscolhida)
                                            }
                                        }
                                    } else if (_torreEscolhida === 33) {
                                        if (quantiaTorreAzul < quantiaTorreLimite-2) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 100]
                                            if (torreVerticalHorizontal[0]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 4, 100, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', 3, ['A', 'azul', ['V', 'vermelho']], 'horizontal', 'unico', [100], true, 'nenhum', 'Torre em desenvolvimento', _torreEscolhida)
                                            }
                                        }
                                    } else if (_torreEscolhida === 3) {
                                        if (quantiaTorreAzul < quantiaTorreLimite-2) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 100]
                                            if (torreVerticalHorizontal[0]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 20, 2000, 600, _torreTamanho, 'background-color: rgb(150, 140, 127);', 3, ['A', 'azul', ['V', 'vermelho']], 'horizontal', 'unico', [], true, 'homenQueTacaBoleadeira', 'Homen que taca boleadeira', _torreEscolhida)
                                            }
                                        }
                                    }
                                    if (verificacao) {
                                        recursosAzul.ouro[0] -= matrizPrecoTorres[_torreEscolhida][0]
                                        recursosAzul.comida[0] -= matrizPrecoTorres[_torreEscolhida][1]
                                        recursosAzul.recurso[0] -= matrizPrecoTorres[_torreEscolhida][2]
                                        recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                                        recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                                        recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                                    }
                                }
                                posicionarTorres('cancelarAzul', 0)
                            }
                        }
                    }
                }
            }
        }, 100)
    } else if (_timeOuCansel === 'vermelho') {
        posicionarTorreAtulizacaoCopyVermelho = posicionarAtulizacao
        posicionarAtulizacao++
        caminhoAlteracoesCopyVermelho = -5
        posicionarAtivo[1] = true

        posicionarTorreIntervaloVermelho = setInterval(() => {
            if (posicionarTorreAtulizacaoCopyVermelho !== posicionarAtulizacao || caminhoAlteracoesCopyVermelho !== caminhoAlteracoes) {
                posicionarTorreAtulizacaoCopyVermelho = posicionarAtulizacao
                caminhoAlteracoesCopyVermelho = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e < tabelaCaminhoMetade[i].length/2+3) {
                            if (!posicionarAtivo[0]) {
                                document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                        } else {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {
                                if (!(matrizPrecoTorres[_torreEscolhida][0] > recursosVermelho.ouro[0] || matrizPrecoTorres[_torreEscolhida][1] > recursosVermelho.comida[0] || matrizPrecoTorres[_torreEscolhida][2] > recursosVermelho.recurso[0])) {
                                    let verificacao = true
                                    if (_torreEscolhida === 0) {
                                        if (quantiaTorreVermelho < quantiaTorreLimite) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 200]
                                            if (torreVerticalHorizontal[1]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 0, 0, 0, _torreTamanho, 'background-color: rgb(150, 140, 127);', 1, ['V', 'vermelho', ['A', 'azul']], 'horizontal', 'nenhum', [], false, 'nenhum', 'Cercado', _torreEscolhida)
                                            }
                                        }
                                    } else if (_torreEscolhida === 1) {
                                        if (quantiaTorreVermelho < quantiaTorreLimite-2) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 100]
                                            if (torreVerticalHorizontal[1]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 40, 1000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', 3, ['V', 'vermelho', ['A', 'azul']], 'horizontal', 'unico', [], true, 'nenhum', 'Mulher na torre', _torreEscolhida)
                                            }
                                        }
                                    } else if (_torreEscolhida === 2) {    
                                        if (quantiaTorreVermelho < quantiaTorreLimite-2) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 100]
                                            if (torreVerticalHorizontal[1]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 40, 1000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', 3, ['V', 'vermelho', ['A', 'azul']], 'horizontal', 'area', [100], true, 'nenhum', 'Homen que taca bomba', _torreEscolhida)
                                            }
                                        }
                                    } else if (_torreEscolhida === 3) {
                                        if (quantiaTorreVermelho < quantiaTorreLimite-2) {
                                            let _x = e*tabelaCaminhoMetadeTamanho
                                            let _y = i*tabelaCaminhoMetadeTamanho
                                            let _torreTamanho = [100, 100]
                                            if (torreVerticalHorizontal[1]) {
                                                _torreTamanho.reverse()
                                            }
                                            for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
                                                for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                                                    if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                                                        verificacao = false
                                                    }
                                                }
                                            }
                                            if (verificacao) {
                                                criarTorre(_x, _y, 400, 1500, 6000, 20, 2000, 600, _torreTamanho, 'background-color: rgb(150, 140, 127);', 3, ['V', 'vermelho', ['A', 'azul']], 'horizontal', 'unico', [], true, 'homenQueTacaBoleadeira', 'Homen que taca boleadeira', _torreEscolhida)
                                            }
                                        }
                                    }
                                    if (verificacao) {
                                        recursosVermelho.ouro[0] -= matrizPrecoTorres[_torreEscolhida][0]
                                        recursosVermelho.comida[0] -= matrizPrecoTorres[_torreEscolhida][1]
                                        recursosVermelho.recurso[0] -= matrizPrecoTorres[_torreEscolhida][2]
                                        recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                                        recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                                        recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                                    }
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

function upgradeBase(vermelhoAzul) {

}

























function upgradeTorres(_timeOuCansel) {
    document.getElementById('quadriculado').style.opacity = '1'
    if (_timeOuCansel === 'cancelarAzul' || (_timeOuCansel === 'azul' && posicionarAtivo[0])) {
        posicionarAtivo[0] = false
        clearInterval(upgradeTorreIntervaloAzul)
        if (posicionarAtivo[1]) {
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length/2-1; e++) {
                    document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                    document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarAtivo[1])) {
        posicionarAtivo[1] = false
        clearInterval(upgradeTorreIntervaloVermelho)
        if (posicionarAtivo[0]) {
            for (let i = 0; i < tabelaCaminho.length; i+=2) {
                for (let e = tabelaCaminho[i].length/2; e < tabelaCaminho[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminho.length; i+=2) {
                for (let e = 0; e < tabelaCaminho[i].length; e+=2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                }
            }
        }
    } else if (_timeOuCansel === 'azul') {
        upgradeTorreAtulizacaoCopyAzul = posicionarAtulizacao
        posicionarAtulizacao++
        caminhoAlteracoesCopyAzul = -5
        posicionarAtivo[0] = true

        upgradeTorreIntervaloAzul = setInterval(() => {
            if (upgradeTorreAtulizacaoCopyAzul !== posicionarAtulizacao || caminhoAlteracoesCopyAzul !== caminhoAlteracoes) {
                upgradeTorreAtulizacaoCopyAzul = posicionarAtulizacao
                caminhoAlteracoesCopyAzul = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e >= tabelaCaminhoMetade[i].length/2-3) {
                            if (!posicionarAtivo[1]) {
                                document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminho[(i*2)][(e*2)] === 'X' || tabelaCaminho[(i*2)+1][(e*2)] === 'X' || tabelaCaminho[(i*2)][(e*2)+1] === 'X' || tabelaCaminho[(i*2)+1][(e*2)+1] === 'X') {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {
                                for (let n = 0; n < torreInformacao.length; n++) {
                                    for (let m = 0; m < torreInformacao[n][7].length; m++) {
                                        if ((i*2) === torreInformacao[n][7][m][0] && (e*2) === torreInformacao[n][7][m][1]) {
                                            upgradeTorreLateral('azul', n, true)
                                            break
                                        }
                                    }
                                }
                                upgradeTorres('cancelarAzul', 0)
                            }
                        } else {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                        }
                    }
                }
            }
        }, 100)
    } else if (_timeOuCansel === 'vermelho') {
        upgradeTorreAtulizacaoCopyVermelho = posicionarAtulizacao
        posicionarAtulizacao++
        caminhoAlteracoesCopyVermelho = -5
        posicionarAtivo[1] = true

        upgradeTorreIntervaloVermelho = setInterval(() => {
            if (upgradeTorreAtulizacaoCopyVermelho !== posicionarAtulizacao || caminhoAlteracoesCopyVermelho !== caminhoAlteracoes) {
                upgradeTorreAtulizacaoCopyVermelho = posicionarAtulizacao
                caminhoAlteracoesCopyVermelho = caminhoAlteracoes
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e < tabelaCaminhoMetade[i].length/2+3) {
                            if (!posicionarAtivo[0]) {
                                document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                            }
                        } else if (tabelaCaminho[(i*2)][(e*2)] === 'Y' || tabelaCaminho[(i*2)+1][(e*2)] === 'Y' || tabelaCaminho[(i*2)][(e*2)+1] === 'Y' || tabelaCaminho[(i*2)+1][(e*2)+1] === 'Y') {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {
                                for (let n = 0; n < torreInformacao.length; n++) {
                                    for (let m = 0; m < torreInformacao[n][7].length; m++) {
                                        if ((i*2) === torreInformacao[n][7][m][0] && (e*2) === torreInformacao[n][7][m][1]) {
                                            upgradeTorreLateral('vermelho', n, true)
                                            break
                                        }
                                    }
                                }
                                upgradeTorres('cancelarVermelho', 0)
                            }
                        } else {
                            document.getElementById(`coluna-${i+1}-${e+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i+1}-${e+1}`).onclick = () => {}
                        }
                    }
                }
            }
        }, 100)
    }
    return true
}

function upgradeTorreLateral(vermelhoAzul, torreEscolhidaIndex, abriAtualisacao) {
    let _torreElementoNome
    let _torreElementoNivel
    let _torreElementoVidaAtual
    let _torreElementoVidaMaxima
    let _torreElementoDano
    let _torreElementoVelocidadeAtaque
    let _torreElementoRange
    let _torreElementoTempoConstrucao
    let _torreElementoPrecoOuro
    let _torreElementoPrecoComida
    let _torreElementoPrecoRecurso
    let _torreElementoComprar
    let _torreEscolhida = torreInformacao[torreEscolhidaIndex][9]
    let _nivelDaTorre = torreInformacao[torreEscolhidaIndex][10]
    let _torreRengeElemento = document.createElement('div')
    let _torreRangeCopy = torreInformacao[torreEscolhidaIndex][11]
    let _intervaloVerficarLateral
    let _intervaloVerficarTorrePronta

    
    _torreRengeElemento.className = 'torre-range'
    _torreRengeElemento.id = 'torre-range'+torreEscolhidaIndex
    _torreRengeElemento.style.width = `${_torreRangeCopy*2}px`
    _torreRengeElemento.style.height = `${_torreRangeCopy*2}px`
    _torreRengeElemento.style.top = `${torreInformacao[torreEscolhidaIndex][0][0][1] - _torreRangeCopy}px`
    _torreRengeElemento.style.left = `${torreInformacao[torreEscolhidaIndex][0][0][0] - _torreRangeCopy}px`

    document.getElementById('corpo').appendChild(_torreRengeElemento)
    if (vermelhoAzul === 'azul') {
        _torreElementoNome = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-nome`)
        _torreElementoNivel = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-nivel`)
        _torreElementoVidaAtual = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-vida-atual`)
        _torreElementoVidaMaxima = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-vida-maxima`)
        _torreElementoDano = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-dano`)
        _torreElementoVelocidadeAtaque = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-velocidade-ataque`)
        _torreElementoRange = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-range`)
        _torreElementoTempoConstrucao = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-tempo-construcao`)
        _torreElementoPrecoOuro = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-preco-ouro`)
        _torreElementoPrecoComida = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-preco-comida`)
        _torreElementoPrecoRecurso = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-preco-recurso`)
        _torreElementoComprar = document.querySelector(`#lateral-mostrar-upgrade .mostrar-upgrade-comprar`)

        _intervaloVerficarLateral = setInterval(() => {
            _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
            _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
            if (_torreRangeCopy !== torreInformacao[torreEscolhidaIndex][11]) {
                _torreRangeCopy = torreInformacao[torreEscolhidaIndex][11]
                _torreRengeElemento.style.width = `${_torreRangeCopy*2}px`
                _torreRengeElemento.style.height = `${_torreRangeCopy*2}px`
                _torreRengeElemento.style.top = `${torreInformacao[torreEscolhidaIndex][0][0][1] - _torreRangeCopy}px`
                _torreRengeElemento.style.left = `${torreInformacao[torreEscolhidaIndex][0][0][0] - _torreRangeCopy}px`
                
                _torreElementoNome.innerHTML = torreInformacao[torreEscolhidaIndex][8]
                _torreElementoNivel.innerHTML = `Nivel: ${torreInformacao[torreEscolhidaIndex][10]}`
                _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
                _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
                _torreElementoDano.innerHTML = `Dano: ${torreInformacao[torreEscolhidaIndex][13][1]}`
                _torreElementoVelocidadeAtaque.innerHTML = `Velocidade de ataque: ${torreInformacao[torreEscolhidaIndex][13][2]}`
                _torreElementoRange.innerHTML = `Range ${torreInformacao[torreEscolhidaIndex][13][3]}`
                _torreElementoTempoConstrucao.innerHTML = `Tempo de construção: ${torreInformacao[torreEscolhidaIndex][13][4]/1000}s`
            }
            if (!lateralMatrizAzul[4][1]) {
                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                clearInterval(_intervaloVerficarLateral)
            } else if (torreInformacao[torreEscolhidaIndex][1] === 'morto') {
                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                clearInterval(_intervaloVerficarLateral)
                abrirLateralAzul(4)
            }
        }, 100)
        if (abriAtualisacao) {
            abrirLateralAzul(4)
        }
    } else if (vermelhoAzul === 'vermelho') {
        _torreElementoNome = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-nome`)
        _torreElementoNivel = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-nivel`)
        _torreElementoVidaAtual = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-vida-atual`)
        _torreElementoVidaMaxima = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-vida-maxima`)
        _torreElementoDano = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-dano`)
        _torreElementoVelocidadeAtaque = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-velocidade-ataque`)
        _torreElementoRange = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-range`)
        _torreElementoTempoConstrucao = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-tempo-construcao`)
        _torreElementoPrecoOuro = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-preco-ouro`)
        _torreElementoPrecoComida = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-preco-comida`)
        _torreElementoPrecoRecurso = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-preco-recurso`)
        _torreElementoComprar = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-comprar`)

        _intervaloVerficarLateral = setInterval(() => {
            _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
            _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
            if (_torreRangeCopy !== torreInformacao[torreEscolhidaIndex][11]) {
                _torreRangeCopy = torreInformacao[torreEscolhidaIndex][11]
                _torreRengeElemento.style.width = `${_torreRangeCopy*2}px`
                _torreRengeElemento.style.height = `${_torreRangeCopy*2}px`
                _torreRengeElemento.style.top = `${torreInformacao[torreEscolhidaIndex][0][0][1] - _torreRangeCopy}px`
                _torreRengeElemento.style.left = `${torreInformacao[torreEscolhidaIndex][0][0][0] - _torreRangeCopy}px`

                _torreElementoNome.innerHTML = torreInformacao[torreEscolhidaIndex][8]
                _torreElementoNivel.innerHTML = `Nivel: ${torreInformacao[torreEscolhidaIndex][10]}`
                _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
                _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
                _torreElementoDano.innerHTML = `Dano: ${torreInformacao[torreEscolhidaIndex][13][1]}`
                _torreElementoVelocidadeAtaque.innerHTML = `Velocidade de ataque: ${torreInformacao[torreEscolhidaIndex][13][2]}`
                _torreElementoRange.innerHTML = `Range ${torreInformacao[torreEscolhidaIndex][13][3]}`
                _torreElementoTempoConstrucao.innerHTML = `Tempo de construção: ${torreInformacao[torreEscolhidaIndex][13][4]/1000}s`
            }
            if (!lateralMatrizVermelho[4][1]) {
                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                clearInterval(_intervaloVerficarTorrePronta)
                clearInterval(_intervaloVerficarLateral)
            } else if (torreInformacao[torreEscolhidaIndex][1] === 'morto') {
                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                clearInterval(_intervaloVerficarTorrePronta)
                clearInterval(_intervaloVerficarLateral)
                abrirLateralAzul(4)
            }
        }, 100)
        if (abriAtualisacao) {
            abrirLateralVermelho(4)
        }
    }
    
    _torreElementoNome.innerHTML = torreInformacao[torreEscolhidaIndex][8]
    _torreElementoNivel.innerHTML = `Nivel: ${torreInformacao[torreEscolhidaIndex][10]}`
    _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
    _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
    _torreElementoDano.innerHTML = `Dano: ${torreInformacao[torreEscolhidaIndex][13][1]}`
    _torreElementoVelocidadeAtaque.innerHTML = `Velocidade de ataque: ${torreInformacao[torreEscolhidaIndex][13][2]}`
    _torreElementoRange.innerHTML = `Range ${torreInformacao[torreEscolhidaIndex][13][3]}`
    _torreElementoTempoConstrucao.innerHTML = `Tempo de construção: ${torreInformacao[torreEscolhidaIndex][13][4]/1000}s`
    

    _torreElementoComprar.onclick = () => {}
    if (_nivelDaTorre < matrizUpgradeTorresPreco[_torreEscolhida].length) {
        _torreElementoPrecoOuro.innerHTML = `Ouro: ${matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]}`
        _torreElementoPrecoComida.innerHTML = `Comida: ${matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]}`
        _torreElementoPrecoRecurso.innerHTML = `Recurso ${matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]}`
        if (torreInformacao[torreEscolhidaIndex][12]) {
            _torreElementoComprar.onclick = () => {
                torreInformacao[torreEscolhidaIndex][12] = false
                _torreElementoComprar.onclick = () => {}
                if (vermelhoAzul === 'azul') {
                    if (!(matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0] > recursosAzul.ouro[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1] > recursosAzul.comida[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2] > recursosAzul.recurso[0])) {
                        recursosAzul.ouro[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]
                        recursosAzul.comida[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]
                        recursosAzul.recurso[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]
                        recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                        recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                        recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                        torreInformacao[torreEscolhidaIndex][10]++
                        document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                        clearInterval(_intervaloVerficarLateral)
                        upgradeTorreLateral(vermelhoAzul, torreEscolhidaIndex, false)
                    }
                } else if (vermelhoAzul === 'vermelho') {
                    if (!(matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0] > recursosVermelho.ouro[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1] > recursosVermelho.comida[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2] > recursosVermelho.recurso[0])) {
                        recursosVermelho.ouro[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]
                        recursosVermelho.comida[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]
                        recursosVermelho.recurso[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]
                        recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                        recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                        recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                        torreInformacao[torreEscolhidaIndex][10]++
                        document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                        clearInterval(_intervaloVerficarLateral)
                        upgradeTorreLateral(vermelhoAzul, torreEscolhidaIndex, false)
                    }
                }
            }
        } else {
            _torreElementoComprar.onclick = () => {}
            _intervaloVerficarTorrePronta = setInterval(() => {
                if (!lateralMatrizAzul[4][1]) {
                    _torreElementoComprar.onclick = () => {}
                    clearInterval(_intervaloVerficarTorrePronta)
                }
                if (torreInformacao[torreEscolhidaIndex][12]) {
                    _torreElementoComprar.onclick = () => {
                        torreInformacao[torreEscolhidaIndex][12] = false
                        _torreElementoComprar.onclick = () => {}
                        if (vermelhoAzul === 'azul') {
                            if (!(matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0] > recursosAzul.ouro[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1] > recursosAzul.comida[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2] > recursosAzul.recurso[0])) {
                                recursosAzul.ouro[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]
                                recursosAzul.comida[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]
                                recursosAzul.recurso[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]
                                recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                                recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                                recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                                torreInformacao[torreEscolhidaIndex][10]++
                                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                                clearInterval(_intervaloVerficarLateral)
                                upgradeTorreLateral(vermelhoAzul, torreEscolhidaIndex, false)
                            }
                        } else if (vermelhoAzul === 'vermelho') {
                            if (!(matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0] > recursosVermelho.ouro[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1] > recursosVermelho.comida[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2] > recursosVermelho.recurso[0])) {
                                recursosVermelho.ouro[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]
                                recursosVermelho.comida[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]
                                recursosVermelho.recurso[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]
                                recursosVermelho.ouro[1].innerHTML = recursosVermelho.ouro[0]
                                recursosVermelho.comida[1].innerHTML = recursosVermelho.comida[0]
                                recursosVermelho.recurso[1].innerHTML = recursosVermelho.recurso[0]
                                torreInformacao[torreEscolhidaIndex][10]++
                                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                                clearInterval(_intervaloVerficarLateral)
                                upgradeTorreLateral(vermelhoAzul, torreEscolhidaIndex, false)
                            }
                        }
                    }
                    clearInterval(_intervaloVerficarTorrePronta)
                }
            }, 100)
        }
    } else {
        _torreElementoPrecoOuro.innerHTML = `Ouro: 000`
        _torreElementoPrecoComida.innerHTML = `Comida: 000`
        _torreElementoPrecoRecurso.innerHTML = `Recurso 000`
        _torreElementoComprar.onclick = () => {}
        clearInterval(_intervaloVerficarTorrePronta)
    }
}