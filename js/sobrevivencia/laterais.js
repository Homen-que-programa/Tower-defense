var lateralMatrizAzul = [["lateral-soldados", false], ["lateral-brocas", false], ["lateral-torres", false], ["lateral-upgrades", false], ["lateral-mostrar-upgrade", false]]
var lateralMatrizVermelho = [["lateral-soldados-direita", false], ["lateral-brocas-direita", false], ["lateral-torres-direita", false], ["lateral-upgrades-direita", false], ["lateral-mostrar-upgrade-direita", false]]
var posicionarAtivo = [false, false]
var posicionarAtulizacao = 0

var matrizPrecoUnidades = [[0, 20, 5], [0, 30, 15], [10, 70, 25], [15, 100, 35], [40, 250, 70], [55, 350, 120]]

var matrizPrecoTorres = [
    [120, 50, 80],
    [120, 50, 80],
    [220, 70, 140],
    [450, 120, 310],
    [330, 90, 230],
    [120, 50, 80],
    [120, 50, 80]
]
var matrizUpgradeTorresPreco = [
    [[50, 10, 25], [100, 30, 50], [150, 50, 75]],
    [[50, 10, 25], [100, 30, 50], [150, 50, 75]],
    [[100, 30, 50], [200, 60, 100], [300, 100, 150], [300, 100, 150], [300, 100, 150]],
    [[250, 100, 150], [350, 125, 200], [500, 250, 350], [500, 250, 350], [500, 250, 350]],
    [[150, 50, 75], [250, 100, 150], [400, 150, 250], [400, 150, 250], [400, 150, 250]],
    [[120, 50, 80], [220, 70, 140], [450, 120, 310]],
    [[150, 50, 75], [250, 100, 150], [400, 150, 250], [400, 150, 250], [400, 150, 250]]
]
var matrizUpgradeTorresMelhorias = [
    [ // cercado
        [
            [['vida', 2000], ['tempoConstrucao', 3000]],
            [['vida', 3000], ['tempoConstrucao', 4500]],
            [['vida', 5000]]
        ]
    ],
    [ // portâo
        [
            [['vida', 1000], ['tempoConstrucao', 3000]],
            [['vida', 1500], ['tempoConstrucao', 4500]],
            [['vida', 2500]]
        ]
    ],
    [ // mulher na torre
        [
            [['vida', 700], ['range', 50], ['tempoConstrucao', 1500]],
            [['vida', 700], ['range', 50], ['tempoConstrucao', 2500]],
            [['vida', 700], ['dano', 10], ['range', 50]]
        ],
        [
            [['vida', 100], ['velocidadeAtaque', -100], ['tempoConstrucao', 1500]],
            [['vida', 100], ['velocidadeAtaque', -100], ['tempoConstrucao', 2500]],
            [['vida', 100], ['velocidadeAtaque', -200]]
        ],
        [
            [['dano', 5], ['range', 50], ['tempoConstrucao', 1500]],
            [['dano', 10], ['range', 50], ['tempoConstrucao', 2500]],
            [['dano', 15], ['range', 50]]
        ]

    ],
    [ // homem que taca bomba
        [
            [['vida', 200], ['range', 50], ['tempoConstrucao', 1500]],
            [['vida', 200], ['range', 50], ['tempoConstrucao', 2500]],
            [['vida', 200], ['range', 50]]
        ],
        [
            [['vida', 100], ['dano', 5], ['tempoConstrucao', 1500]],
            [['vida', 100], ['dano', 5], ['tempoConstrucao', 2500]],
            [['vida', 100], ['dano', 10]]
        ],
        [
            [['vida', 700], ['tempoConstrucao', 1500]],
            [['vida', 700], ['tempoConstrucao', 2500]],
            [['vida', 700]]
        ]
    ],
    [ // homem que taca boleadeira
        [
            [['vida', 100], ['velocidadeAtaque', -150], ['tempoConstrucao', 1500]],
            [['vida', 100], ['velocidadeAtaque', -150], ['tempoConstrucao', 2500]],
            [['vida', 100], ['velocidadeAtaque', -200]]
        ],
        [
            [['vida', 200], ['dano', 5], ['range', 50], ['tempoConstrucao', 1500]],
            [['vida', 200], ['dano', 10], ['range', 50], ['duracaoLentidao', 500, 'extra2', '+ 0.5s'], ['tempoConstrucao', 2500]],
            [['vida', 200], ['dano', 10], ['range', 50], ['duracaoLentidao', 500, 'extra2', '+ 0.5s']]
        ],
        [
            [['lentidao', -0.1, 'extra', '- 10%'], ['tempoConstrucao', 1500]],
            [['lentidao', -0.1, 'extra', '- 10%'], ['tempoConstrucao', 2500]],
            [['lentidao', -0.2, 'extra', '- 20%']]
        ]
    ],
    [ // minas terrestres
        [
            [['vida', 50], ['dano', 100], ['range', 50], ['velocidadeAtaque', -400], ['tempoConstrucao', 1500]],
            [['vida', 50], ['dano', 100], ['range', 50], ['velocidadeAtaque', -500], ['tempoConstrucao', 2500]],
            [['vida', 100], ['dano', 150], ['range', 150], ['velocidadeAtaque', -600]]
        ]
    ],
    [ // base
        [
            [['vida', 2000], ['velocidadeAtaque', 300, 'debuf'], ['tempoConstrucao', 3000]],
            [['vida', 2000], ['velocidadeAtaque', 300, 'debuf'], ['tempoConstrucao', 4500]],
            [['vida', 4000], ['velocidadeAtaque', 400, 'debuf']]
        ],
        [
            [['vida', 200], ['dano', 25], ['range', 150], ['tempoConstrucao', 3000]],
            [['vida', 200], ['dano', 10], ['range', 50], ['tempoConstrucao', 4500]],
            [['vida', 300], ['dano', 20], ['range', 50]]
        ],
        [
            [['vida', 300], ['velocidadeAtaque', -200], ['dano', 10], ['range', 150], ['tempoConstrucao', 3000]],
            [['vida', 300], ['velocidadeAtaque', -200], ['tempoConstrucao', 4500]],
            [['vida', 400], ['velocidadeAtaque', -300]]
        ]
    ]
]
var matrizTamanhoTorres = [
    [100, 200],
    [100, 100],
    [100, 100],
    [100, 100],
    [100, 100],
    [100, 100]
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
            document.getElementById(lateralMatrizAzul[i][0]).style.cssText += `width: 400px;`
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
            document.getElementById(lateralMatrizVermelho[i][0]).style.cssText += `width: 400px;`
        } else {
            lateralMatrizVermelho[i][1] = false
            document.getElementById(lateralMatrizVermelho[i][0]).style.cssText += `width: 0px;`
        }
    }
}

function posicionarSoldados(_timeOuCansel, _unidadeEscolhida, _unidadeRetorno) {
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
        if (!_unidadeRetorno) {
            posicionarTorres('cancelarAzul', 0, true)
            upgradeTorres('cancelarAzul', true)
        }
        if (posicionarAtivo[1]) {
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length / 2 - 1; e++) {
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                }
            }
        }
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarAtivo[1])) {
        posicionarAtivo[1] = false
        clearInterval(posicionarIntervaloVermelho)
        if (!_unidadeRetorno) {
            posicionarTorres('cancelarVermelho', 0, true)
            upgradeTorres('cancelarVermelho', true)
        }
        if (posicionarAtivo[0]) {
            for (let i = 0; i < tabelaCaminho.length; i += 2) {
                for (let e = tabelaCaminho[i].length / 2; e < tabelaCaminho[i].length; e += 2) {
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).onclick = () => { }
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminho.length; i += 2) {
                for (let e = 0; e < tabelaCaminho[i].length; e += 2) {
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).onclick = () => { }
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
                        if (e >= tabelaCaminhoMetade[i].length / 2 - 3) {
                            if (!posicionarAtivo[1]) {
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                            }
                        } else if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                        } else {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                if (!(matrizPrecoUnidades[_unidadeEscolhida][0] > recursosAzul.ouro[0] || matrizPrecoUnidades[_unidadeEscolhida][1] > recursosAzul.comida[0] || matrizPrecoUnidades[_unidadeEscolhida][2] > recursosAzul.recurso[0])) {
                                    let verificacao = false
                                    let _espacoOcupado
                                    if (_unidadeEscolhida === 0) {
                                        _espacoOcupado = 1
                                        if (quantiaUnidadeAzul <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 200, 25, 1000, 1, 500, 70, 40, 'background-color: brown;', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 1) {
                                        _espacoOcupado = 2
                                        if (quantiaUnidadeAzul <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 75, 45, 1000, 1, 500, 200, 40, 'background-color: grey;', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 2) {
                                        _espacoOcupado = 3
                                        if (quantiaUnidadeAzul <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 500, 100, 1700, 1, 500, 70, 50, 'background-color: green;', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 3) {
                                        _espacoOcupado = 2
                                        if (quantiaUnidadeAzul <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 350, 15, 1000, 1, 500, 150, 40, 'background-color: blue;', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'homenQueDaBuff')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 4) {
                                        _espacoOcupado = 1
                                        if (quantiaUnidadeAzul <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 450, 55, 1000, 1, 500, 70, 40, 'background-color: purple;', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 5) {
                                        _espacoOcupado = 2
                                        if (quantiaUnidadeAzul <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 150, 155, 1300, 1, 650, 300, 40, 'background-color: yellow;', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum')
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
                                posicionarSoldados('cancelarAzul', 0, false)
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
                        if (e < tabelaCaminhoMetade[i].length / 2 + 3) {
                            if (!posicionarAtivo[0]) {
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                            }
                        } else if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                        } else {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                if (!(matrizPrecoUnidades[_unidadeEscolhida][0] > recursosVermelho.ouro[0] || matrizPrecoUnidades[_unidadeEscolhida][1] > recursosVermelho.comida[0] || matrizPrecoUnidades[_unidadeEscolhida][2] > recursosVermelho.recurso[0])) {
                                    let verificacao = false
                                    let _espacoOcupado
                                    if (_unidadeEscolhida === 0) {
                                        _espacoOcupado = 1
                                        if (quantiaUnidadeVermelho <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 200, 25, 1000, 1, 500, 70, 40, 'background-color: brown;', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 1) {
                                        _espacoOcupado = 2
                                        if (quantiaUnidadeVermelho <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 75, 45, 1000, 1, 500, 200, 40, 'background-color: grey;', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 2) {
                                        _espacoOcupado = 3
                                        if (quantiaUnidadeVermelho <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 500, 100, 1700, 1, 500, 70, 50, 'background-color: green;', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 3) {
                                        _espacoOcupado = 2
                                        if (quantiaUnidadeVermelho <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 350, 15, 1000, 1, 500, 150, 40, 'background-color: blue;', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'homenQueDaBuff')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 4) {
                                        _espacoOcupado = 1
                                        if (quantiaUnidadeVermelho <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 450, 55, 1000, 1, 500, 70, 40, 'background-color: purple;', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
                                            verificacao = true
                                        }
                                    } else if (_unidadeEscolhida === 5) {
                                        _espacoOcupado = 2
                                        if (quantiaUnidadeVermelho <= quantiaUnidadeLimite - _espacoOcupado) {
                                            criarUnidade((e + 0.25) * tabelaCaminhoMetadeTamanho, (i + 0.25) * tabelaCaminhoMetadeTamanho, 150, 155, 1300, 1, 650, 300, 40, 'background-color: yellow;', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum')
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
                                posicionarSoldados('cancelarVermelho', 0, false)
                            }
                        }
                    }
                }
            }
        }, 100)
    }
    return true
}




function posicionarTorres(_timeOuCansel, _torreEscolhida, _torreRetorno) {
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
        if (!_torreRetorno) {
            posicionarSoldados('cancelarAzul', 0, true)
            upgradeTorres('cancelarAzul', true)
        }
        if (posicionarAtivo[1]) {
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length / 2 - 1; e++) {
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                }
            }
        }
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarAtivo[1])) {
        posicionarAtivo[1] = false
        clearInterval(posicionarTorreIntervaloVermelho)
        if (!_torreRetorno) {
            posicionarSoldados('cancelarVermelho', 0, true)
            upgradeTorres('cancelarVermelho', true)
        }
        if (posicionarAtivo[0]) {
            for (let i = 0; i < tabelaCaminho.length; i += 2) {
                for (let e = tabelaCaminho[i].length / 2; e < tabelaCaminho[i].length; e += 2) {
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).onclick = () => { }
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminho.length; i += 2) {
                for (let e = 0; e < tabelaCaminho[i].length; e += 2) {
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).onclick = () => { }
                }
            }
        }
    } else if (_timeOuCansel === 'azul') {
        posicionarTorreAtulizacaoCopyAzul = posicionarAtulizacao
        caminhoAlteracoesCopyAzul = -5
        posicionarAtivo[0] = true
        let _torreVerticalHorizontalCopy = torreVerticalHorizontal[0]
        let _verificarQuntiaClicks = 0

        posicionarTorreIntervaloAzul = setInterval(() => {
            if (posicionarTorreAtulizacaoCopyAzul !== posicionarAtulizacao || caminhoAlteracoesCopyAzul !== caminhoAlteracoes || _torreVerticalHorizontalCopy !== torreVerticalHorizontal[0] || _verificarQuntiaClicks > 1) {
                posicionarTorreAtulizacaoCopyAzul = posicionarAtulizacao
                caminhoAlteracoesCopyAzul = caminhoAlteracoes
                _torreVerticalHorizontalCopy = torreVerticalHorizontal[0]
                _verificarQuntiaClicks = 0
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e >= tabelaCaminhoMetade[i].length / 2 - 3) {
                            if (!posicionarAtivo[1]) {
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                            }
                        } else if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                        } else {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                let _torreTamanho
                                if (torreVerticalHorizontal[0]) {
                                    _torreTamanho = Object.assign([], matrizTamanhoTorres[_torreEscolhida].reverse())
                                    matrizTamanhoTorres[_torreEscolhida].reverse()
                                } else {
                                    _torreTamanho = Object.assign([], matrizTamanhoTorres[_torreEscolhida])
                                }
                                _verificarQuntiaClicks++

                                for (let n = 0; n < Math.floor(_torreTamanho[1] / tabelaCaminhoMetadeTamanho); n++) {
                                    for (let m = 0; m < Math.floor(_torreTamanho[0] / tabelaCaminhoMetadeTamanho); m++) {
                                        document.getElementById(`coluna-${i + 1 + n}-${e + 1 + m}`).style.cssText += 'filter: hue-rotate(240deg);'
                                        document.getElementById(`coluna-${i + 1 + n}-${e + 1 + m}`).onclick = () => { }
                                    }
                                }
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(280deg);'

                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                    if (!(matrizPrecoTorres[_torreEscolhida][0] > recursosAzul.ouro[0] || matrizPrecoTorres[_torreEscolhida][1] > recursosAzul.comida[0] || matrizPrecoTorres[_torreEscolhida][2] > recursosAzul.recurso[0])) {
                                        let verificacao = true
                                        let _espacoOcupado
                                        if (_torreEscolhida === 0) {
                                            _espacoOcupado = 1
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 12000, 0, 0, 0, _torreTamanho, 'background-color: rgb(145, 84, 35);', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum', [], false, false, 'nenhum', 'Cercado', _torreEscolhida, [0, 'n', 'n'], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 1) {
                                            _espacoOcupado = 1
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado && portoesVermelhoAzul.azul < 1) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    portoesVermelhoAzul.azul++
                                                    criarTorre(_x, _y, 300, 750, 12000, 0, 0, 0, _torreTamanho, 'background-color: rgba(145, 85, 35, 0.75);', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum', [], true, true, 'portao', 'Portão', _torreEscolhida, [0, 'n', 'n'], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 2) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 6000, 30, 1000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'unico', [], true, false, 'nenhum', 'Mulher na torre', _torreEscolhida, [0, 0, 0], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 3) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 6000, 15, 3000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'area', [100], true, false, 'nenhum', 'Homen que taca bomba', _torreEscolhida, [0, 0, 0], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 4) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 6000, 20, 2000, 600, _torreTamanho, 'background-color: rgb(150, 140, 127);', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'unico', [], true, false, 'homenQueTacaBoleadeira', 'Homen que taca boleadeira', _torreEscolhida, [0, 0, 0], [true, ['debuf', 0.8, ['Lentidão: ', '%', 0.01]], ['duracao', 3000, ['Duração do efeito: ', 's', 1000]]])
                                                }
                                            }
                                        } else if (_torreEscolhida === 5) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 50, 150, 6000, 150, 4000, 200, _torreTamanho, 'background-color: rgba(150, 140, 127, 0.5);', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'nenhum', [50], false, true, 'minasTerrestres', 'Minas terrestres', _torreEscolhida, [0, 'n', 'n'], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 33) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 6000, 4, 100, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', _espacoOcupado, ['A', 'azul', ['V', 'vermelho']], 'unico', [100], true, false, 'nenhum', 'Torre em desenvolvimento', _torreEscolhida, [0, 0, 0], [false])
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
                                    posicionarTorres('cancelarAzul', 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }, 100)
    } else if (_timeOuCansel === 'vermelho') {
        posicionarTorreAtulizacaoCopyVermelho = posicionarAtulizacao
        caminhoAlteracoesCopyVermelho = -5
        posicionarAtivo[1] = true
        let _torreVerticalHorizontalCopy = torreVerticalHorizontal[1]
        let _verificarQuntiaClicks = 0

        posicionarTorreIntervaloVermelho = setInterval(() => {
            if (posicionarTorreAtulizacaoCopyVermelho !== posicionarAtulizacao || caminhoAlteracoesCopyVermelho !== caminhoAlteracoes || _torreVerticalHorizontalCopy !== torreVerticalHorizontal[1] || _verificarQuntiaClicks > 1) {
                posicionarTorreAtulizacaoCopyVermelho = posicionarAtulizacao
                caminhoAlteracoesCopyVermelho = caminhoAlteracoes
                _torreVerticalHorizontalCopy = torreVerticalHorizontal[1]
                _verificarQuntiaClicks = 0
                for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                    for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                        if (e < tabelaCaminhoMetade[i].length / 2 + 3) {
                            if (!posicionarAtivo[0]) {
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                            }
                        } else if (tabelaCaminhoMetade[i][e] !== '.') {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                        } else {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                let _torreTamanho
                                if (torreVerticalHorizontal[1]) {
                                    _torreTamanho = Object.assign([], matrizTamanhoTorres[_torreEscolhida].reverse())
                                    matrizTamanhoTorres[_torreEscolhida].reverse()
                                } else {
                                    _torreTamanho = Object.assign([], matrizTamanhoTorres[_torreEscolhida])
                                }
                                _verificarQuntiaClicks++

                                for (let n = 0; n < Math.floor(_torreTamanho[1] / tabelaCaminhoMetadeTamanho); n++) {
                                    for (let m = 0; m < Math.floor(_torreTamanho[0] / tabelaCaminhoMetadeTamanho); m++) {
                                        document.getElementById(`coluna-${i + 1 + n}-${e + 1 + m}`).style.cssText += 'filter: hue-rotate(240deg);'
                                        document.getElementById(`coluna-${i + 1 + n}-${e + 1 + m}`).onclick = () => { }
                                    }
                                }
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(280deg);'

                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                    if (!(matrizPrecoTorres[_torreEscolhida][0] > recursosVermelho.ouro[0] || matrizPrecoTorres[_torreEscolhida][1] > recursosVermelho.comida[0] || matrizPrecoTorres[_torreEscolhida][2] > recursosVermelho.recurso[0])) {
                                        let verificacao = true
                                        let _espacoOcupado
                                        if (_torreEscolhida === 0) {
                                            _espacoOcupado = 1
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 12000, 0, 0, 0, _torreTamanho, 'background-color: rgb(145, 84, 35);', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum', [], false, false, 'nenhum', 'Cercado', _torreEscolhida, [0, 'n', 'n'], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 1) {
                                            _espacoOcupado = 1
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado && portoesVermelhoAzul.vermelho < 1) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    portoesVermelhoAzul.vermelho++
                                                    criarTorre(_x, _y, 300, 1000, 12000, 0, 0, 0, _torreTamanho, 'background-color: rgb(145, 84, 35, 0.75);', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum', [], true, true, 'portao', 'Portão', _torreEscolhida, [0, 'n', 'n'], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 2) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 6000, 40, 1000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'unico', [], true, false, 'nenhum', 'Mulher na torre', _torreEscolhida, [0, 0, 0], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 3) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 6000, 40, 3000, 500, _torreTamanho, 'background-color: rgb(106, 151, 48);', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'area', [100], true, false, 'nenhum', 'Homen que taca bomba', _torreEscolhida, [0, 0, 0], [false])
                                                }
                                            }
                                        } else if (_torreEscolhida === 4) {
                                            _espacoOcupado = 3
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 400, 1500, 6000, 20, 2000, 600, _torreTamanho, 'background-color: rgb(150, 140, 127);', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'unico', [], true, false, 'homenQueTacaBoleadeira', 'Homen que taca boleadeira', _torreEscolhida, [0, 0, 0], [true, ['debuf', 0.8, ['Lentidão: ', '%', 0.01]], ['duracao', 3000, ['Duração do efeito: ', 's', 1000]]])
                                                }
                                            }
                                        } else if (_torreEscolhida === 5) {
                                            _espacoOcupado = 2
                                            if (quantiaTorreAzul <= quantiaTorreLimite - _espacoOcupado) {
                                                let _x = e * tabelaCaminhoMetadeTamanho
                                                let _y = i * tabelaCaminhoMetadeTamanho
                                                for (let i = 0; i < Math.floor(_torreTamanho[1] / tabelaCaminhoTamanho); i++) {
                                                    for (let e = 0; e < Math.floor(_torreTamanho[0] / tabelaCaminhoTamanho); e++) {
                                                        if (tabelaCaminho[i + Math.floor(_y / tabelaCaminhoTamanho)][e + Math.floor(_x / tabelaCaminhoTamanho)] !== '.') {
                                                            verificacao = false
                                                        }
                                                    }
                                                }
                                                if (verificacao) {
                                                    criarTorre(_x, _y, 50, 150, 6000, 150, 4000, 200, _torreTamanho, 'background-color: rgba(150, 140, 127, 0.5);', _espacoOcupado, ['V', 'vermelho', ['A', 'azul']], 'nenhum', [50], false, true, 'minasTerrestres', 'Minas terrestres', _torreEscolhida, [0, 'n', 'n'], [false])
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
                                    posicionarTorres('cancelarVermelho', 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }, 100)
    }
    return true
}
























function upgradeTorres(_timeOuCansel, _upgradeRetorno) {
    document.getElementById('quadriculado').style.opacity = '1'
    if (_timeOuCansel === 'cancelarAzul' || (_timeOuCansel === 'azul' && posicionarAtivo[0])) {
        posicionarAtivo[0] = false
        clearInterval(upgradeTorreIntervaloAzul)
        if (!_upgradeRetorno) {
            posicionarSoldados('cancelarAzul', 0, true)
            posicionarTorres('cancelarAzul', 0, true)
        }
        if (posicionarAtivo[1]) {
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length / 2 - 1; e++) {
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                }
            }
        }
    } else if (_timeOuCansel === 'cancelarVermelho' || (_timeOuCansel === 'vermelho' && posicionarAtivo[1])) {
        posicionarAtivo[1] = false
        clearInterval(upgradeTorreIntervaloVermelho)
        if (!_upgradeRetorno) {
            posicionarSoldados('cancelarVermelho', 0, true)
            posicionarTorres('cancelarVermelho', 0, true)
        }
        if (posicionarAtivo[0]) {
            for (let i = 0; i < tabelaCaminho.length; i += 2) {
                for (let e = tabelaCaminho[i].length / 2; e < tabelaCaminho[i].length; e += 2) {
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).onclick = () => { }
                }
            }
        } else {
            document.getElementById('quadriculado').style.opacity = '0'
            for (let i = 0; i < tabelaCaminho.length; i += 2) {
                for (let e = 0; e < tabelaCaminho[i].length; e += 2) {
                    document.getElementById(`coluna-${i / 2 + 1}-${e / 2 + 1}`).onclick = () => { }
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
                        if (e >= tabelaCaminhoMetade[i].length / 2 - 3) {
                            if (!posicionarAtivo[1]) {
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                            }
                        } else if (tabelaCaminhoMetade[i][e] === 'X' || tabelaCaminhoMetade[i][e] === 'x' || tabelaCaminhoMetade[i][e] === 'xx') {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                for (let n = 0; n < torreInformacao.length; n++) {
                                    for (let m = 0; m < torreInformacao[n][7].length; m++) {
                                        if ((i * 2) === torreInformacao[n][7][m][0] && (e * 2) === torreInformacao[n][7][m][1] && torreInformacao[n][1] !== 'morto') {
                                            upgradeTorreLateral('azul', n, true)
                                            break
                                        }
                                    }
                                }
                                upgradeTorres('cancelarAzul')
                            }
                        } else {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
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
                        if (e < tabelaCaminhoMetade[i].length / 2 + 3) {
                            if (!posicionarAtivo[0]) {
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: grayscale(100%);'
                                document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
                            }
                        } else if (tabelaCaminhoMetade[i][e] === 'Y' || tabelaCaminhoMetade[i][e] === 'y' || tabelaCaminhoMetade[i][e] === 'yy') {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: none;'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => {
                                for (let n = 0; n < torreInformacao.length; n++) {
                                    for (let m = 0; m < torreInformacao[n][7].length; m++) {
                                        if ((i * 2) === torreInformacao[n][7][m][0] && (e * 2) === torreInformacao[n][7][m][1] && torreInformacao[n][1] !== 'morto') {
                                            upgradeTorreLateral('vermelho', n, true)
                                            break
                                        }
                                    }
                                }
                                upgradeTorres('cancelarVermelho')
                            }
                        } else {
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).style.cssText += 'filter: hue-rotate(180deg);'
                            document.getElementById(`coluna-${i + 1}-${e + 1}`).onclick = () => { }
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
    let _torreElementoExtra
    let _torreElementoComprar
    let _torreElementoDanoCausado
    let _torreEscolhida = torreInformacao[torreEscolhidaIndex][9]
    let _nivelDaTorre = 0
    let _niveisCancelados = [torreInformacao[torreEscolhidaIndex][10][0] === 'n', torreInformacao[torreEscolhidaIndex][10][1] === 'n', torreInformacao[torreEscolhidaIndex][10][2] === 'n']
    let _niveisComprados = 0
    let _niveisCompradosSegundo = 0
    let _torreRengeElemento = document.createElement('div')
    let _intervaloVerficarLateral
    let _intervaloVerficarTorrePronta
    let _melhoriasElemento
    let _debufsElemento
    let _torreRangeCopy = torreInformacao[torreEscolhidaIndex][11]

    for (let i = 0; i < 3; i++) {
        if (!_niveisCancelados[i]) {
            _nivelDaTorre += torreInformacao[torreEscolhidaIndex][10][i]
        }
    }
    for (let i = 0; i < 3; i++) {
        if (!_niveisCancelados[i]) {
            _niveisComprados += Math.min(1, torreInformacao[torreEscolhidaIndex][10][i])
        }
    }
    for (let i = 0; i < 3; i++) {
        if (!_niveisCancelados[i]) {
            _niveisCompradosSegundo += (torreInformacao[torreEscolhidaIndex][10][i] >= 3 ? 1 : 0)
        }
    }

    _torreRengeElemento.className = 'torre-range'
    _torreRengeElemento.id = 'torre-range' + torreEscolhidaIndex
    _torreRengeElemento.style.width = `${_torreRangeCopy * 2}px`
    _torreRengeElemento.style.height = `${_torreRangeCopy * 2}px`
    _torreRengeElemento.style.top = `${torreInformacao[torreEscolhidaIndex][0][0][1] - _torreRangeCopy}px`
    _torreRengeElemento.style.left = `${torreInformacao[torreEscolhidaIndex][0][0][0] - _torreRangeCopy}px`

    if (_torreRangeCopy <= 0) {
        _torreRengeElemento.style.border = 'none'
    }

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
        _torreElementoExtra = document.querySelectorAll(`#lateral-mostrar-upgrade .mostrar-upgrade-extra`)
        _torreElementoComprar = document.querySelectorAll(`#lateral-mostrar-upgrade .mostrar-upgrade-comprar`)
        _torreElementoDanoCausado = document.querySelector(`#lateral-mostrar-upgrade .mostrar-dano-causado`)
        _melhoriasElemento = document.querySelectorAll(`#lateral-mostrar-upgrade .mostrar-upgrade-melhoria`)
        _debufsElemento = document.querySelectorAll('#lateral-mostrar-upgrade .mostrar-upgrade-debuf')

        _intervaloVerficarLateral = setInterval(() => {
            _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
            _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]

            if (torreInformacao[torreEscolhidaIndex][11] > 0 && _torreRangeCopy <= 0) {
                _torreRengeElemento.style.border = '30px dashed rgba(165, 42, 42, 0.6)'
            }

            _torreRangeCopy = torreInformacao[torreEscolhidaIndex][11]
            _torreRengeElemento.style.width = `${_torreRangeCopy * 2}px`
            _torreRengeElemento.style.height = `${_torreRangeCopy * 2}px`
            _torreRengeElemento.style.top = `${torreInformacao[torreEscolhidaIndex][0][0][1] - _torreRangeCopy}px`
            _torreRengeElemento.style.left = `${torreInformacao[torreEscolhidaIndex][0][0][0] - _torreRangeCopy}px`

            _torreElementoDanoCausado.innerHTML = `Dano Causado: ${torreInformacao[torreEscolhidaIndex][16]}`
            _torreElementoNome.innerHTML = torreInformacao[torreEscolhidaIndex][8]
            _torreElementoNivel.innerHTML = `Nivel: ${!_niveisCancelados[0] ? torreInformacao[torreEscolhidaIndex][10][0] : ''}${!_niveisCancelados[1] ? ' - ' + torreInformacao[torreEscolhidaIndex][10][1] : ''}${!_niveisCancelados[2] ? ' - ' + torreInformacao[torreEscolhidaIndex][10][2] : ''}`
            _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
            _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
            _torreElementoDano.innerHTML = `Dano: ${torreInformacao[torreEscolhidaIndex][13][1]}`
            _torreElementoVelocidadeAtaque.innerHTML = `Velocidade de ataque: ${torreInformacao[torreEscolhidaIndex][13][2] / 1000}s`
            _torreElementoRange.innerHTML = `Range: ${torreInformacao[torreEscolhidaIndex][13][3]}`
            torreInformacao[torreEscolhidaIndex][15].length >= 2 ? _torreElementoExtra[0].innerHTML = torreInformacao[torreEscolhidaIndex][15][1][2][0] + (torreInformacao[torreEscolhidaIndex][15][1][1] / torreInformacao[torreEscolhidaIndex][15][1][2][2]) + torreInformacao[torreEscolhidaIndex][15][1][2][1] : 0
            torreInformacao[torreEscolhidaIndex][15].length >= 3 ? _torreElementoExtra[1].innerHTML = torreInformacao[torreEscolhidaIndex][15][2][2][0] + (torreInformacao[torreEscolhidaIndex][15][2][1] / torreInformacao[torreEscolhidaIndex][15][2][2][2]) + torreInformacao[torreEscolhidaIndex][15][2][2][1] : 0
            _nivelDaTorre < matrizUpgradeTorresPreco[_torreEscolhida].length ? _torreElementoTempoConstrucao.innerHTML = `Tempo de construção: ${torreInformacao[torreEscolhidaIndex][13][4] / 1000}s` : 0

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
        _torreElementoExtra = document.querySelectorAll(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-extra`)
        _torreElementoComprar = document.querySelectorAll(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-comprar`)
        _torreElementoDanoCausado = document.querySelector(`#lateral-mostrar-upgrade-direita .mostrar-dano-causado`)
        _melhoriasElemento = document.querySelectorAll(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-melhoria`)
        _debufsElemento = document.querySelectorAll('#lateral-mostrar-upgrade-direita .mostrar-upgrade-debuf')

        _intervaloVerficarLateral = setInterval(() => {
            _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
            _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]

            if (torreInformacao[torreEscolhidaIndex][11] > 0 && _torreRangeCopy <= 0) {
                _torreRengeElemento.style.border = '30px dashed rgba(165, 42, 42, 0.6)'
            }

            _torreRangeCopy = torreInformacao[torreEscolhidaIndex][11]
            _torreRengeElemento.style.width = `${_torreRangeCopy * 2}px`
            _torreRengeElemento.style.height = `${_torreRangeCopy * 2}px`
            _torreRengeElemento.style.top = `${torreInformacao[torreEscolhidaIndex][0][0][1] - _torreRangeCopy}px`
            _torreRengeElemento.style.left = `${torreInformacao[torreEscolhidaIndex][0][0][0] - _torreRangeCopy}px`
        
            _torreElementoDanoCausado.innerHTML = `Dano Causado: ${torreInformacao[torreEscolhidaIndex][16]}`
            _torreElementoNome.innerHTML = torreInformacao[torreEscolhidaIndex][8]
            _torreElementoNivel.innerHTML = `Nivel: ${!_niveisCancelados[0] ? torreInformacao[torreEscolhidaIndex][10][0] : ''}${!_niveisCancelados[1] ? ' - ' + torreInformacao[torreEscolhidaIndex][10][1] : ''}${!_niveisCancelados[2] ? ' - ' + torreInformacao[torreEscolhidaIndex][10][2] : ''}`
            _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
            _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
            _torreElementoDano.innerHTML = `Dano: ${torreInformacao[torreEscolhidaIndex][13][1]}`
            _torreElementoVelocidadeAtaque.innerHTML = `Velocidade de ataque: ${torreInformacao[torreEscolhidaIndex][13][2] / 1000}s`
            _torreElementoRange.innerHTML = `Range: ${torreInformacao[torreEscolhidaIndex][13][3]}`
            torreInformacao[torreEscolhidaIndex][15].length >= 2 ? _torreElementoExtra[0].innerHTML = torreInformacao[torreEscolhidaIndex][15][1][2][0] + (torreInformacao[torreEscolhidaIndex][15][1][1] / torreInformacao[torreEscolhidaIndex][15][1][2][2]) + torreInformacao[torreEscolhidaIndex][15][1][2][1] : 0
            torreInformacao[torreEscolhidaIndex][15].length >= 3 ? _torreElementoExtra[1].innerHTML = torreInformacao[torreEscolhidaIndex][15][2][2][0] + (torreInformacao[torreEscolhidaIndex][15][2][1] / torreInformacao[torreEscolhidaIndex][15][2][2][2]) + torreInformacao[torreEscolhidaIndex][15][2][2][1] : 0
            _nivelDaTorre < matrizUpgradeTorresPreco[_torreEscolhida].length ? _torreElementoTempoConstrucao.innerHTML = `Tempo de construção: ${torreInformacao[torreEscolhidaIndex][13][4] / 1000}s` : 0

            if (!lateralMatrizVermelho[4][1]) {
                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                clearInterval(_intervaloVerficarLateral)
            } else if (torreInformacao[torreEscolhidaIndex][1] === 'morto') {
                document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                clearInterval(_intervaloVerficarLateral)
                abrirLateralVermelho(4)
            }
        }, 100)
        if (abriAtualisacao) {
            abrirLateralVermelho(4)
        }
    }

    _torreElementoExtra[0].innerHTML = ''
    _torreElementoExtra[1].innerHTML = ''

    _torreElementoDanoCausado.innerHTML = `Dano Causado: ${torreInformacao[torreEscolhidaIndex][16]}`
    _torreElementoNome.innerHTML = torreInformacao[torreEscolhidaIndex][8]
    _torreElementoNivel.innerHTML = `Nivel: ${!_niveisCancelados[0] ? torreInformacao[torreEscolhidaIndex][10][0] : ''}${!_niveisCancelados[1] ? ' - ' + torreInformacao[torreEscolhidaIndex][10][1] : ''}${!_niveisCancelados[2] ? ' - ' + torreInformacao[torreEscolhidaIndex][10][2] : ''}`
    _torreElementoVidaAtual.innerHTML = torreInformacao[torreEscolhidaIndex][5]
    _torreElementoVidaMaxima.innerHTML = torreInformacao[torreEscolhidaIndex][13][0]
    _torreElementoDano.innerHTML = `Dano: ${torreInformacao[torreEscolhidaIndex][13][1]}`
    _torreElementoVelocidadeAtaque.innerHTML = `Velocidade de ataque: ${torreInformacao[torreEscolhidaIndex][13][2] / 1000}s`
    _torreElementoRange.innerHTML = `Range: ${torreInformacao[torreEscolhidaIndex][13][3]}`
    torreInformacao[torreEscolhidaIndex][15].length >= 2 ? _torreElementoExtra[0].innerHTML = torreInformacao[torreEscolhidaIndex][15][1][2][0] + (torreInformacao[torreEscolhidaIndex][15][1][1] / torreInformacao[torreEscolhidaIndex][15][1][2][2]) + torreInformacao[torreEscolhidaIndex][15][1][2][1] : 0
    torreInformacao[torreEscolhidaIndex][15].length >= 3 ? _torreElementoExtra[1].innerHTML = torreInformacao[torreEscolhidaIndex][15][2][2][0] + (torreInformacao[torreEscolhidaIndex][15][2][1] / torreInformacao[torreEscolhidaIndex][15][2][2][2]) + torreInformacao[torreEscolhidaIndex][15][2][2][1] : 0
    _nivelDaTorre < matrizUpgradeTorresPreco[_torreEscolhida].length ? _torreElementoTempoConstrucao.innerHTML = `Tempo de construção: ${torreInformacao[torreEscolhidaIndex][13][4] / 1000}s` : 0


    for (let i = 0; i < _torreElementoComprar.length; i++) {
        _torreElementoComprar[i].onclick = () => { }
    }
    if (_nivelDaTorre < matrizUpgradeTorresPreco[_torreEscolhida].length) {
        _torreElementoPrecoOuro.innerHTML = `Ouro: ${matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]}`
        _torreElementoPrecoComida.innerHTML = `Comida: ${matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]}`
        _torreElementoPrecoRecurso.innerHTML = `Recurso: ${matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]}`
        if (torreInformacao[torreEscolhidaIndex][12]) {
            for (let i = 0; i < _torreElementoComprar.length; i++) {
                if (
                    (_niveisCancelados[i]) ||
                    (_niveisComprados >= 2 && torreInformacao[torreEscolhidaIndex][10][i] == 0) ||
                    (torreInformacao[torreEscolhidaIndex][10][i] >= matrizUpgradeTorresMelhorias[_torreEscolhida][i].length) ||
                    (_niveisCompradosSegundo >= 1 && torreInformacao[torreEscolhidaIndex][10][i] >= 2)
                ) {
                    _torreElementoComprar[i].onclick = () => { }
                    _torreElementoComprar[i].onmouseover = () => { }
                    _torreElementoComprar[i].onmouseout = () => { }
                    _torreElementoComprar[i].style.cssText += 'filter: brightness(50%);'
                    continue
                }
                _torreElementoComprar[i].style.cssText += 'filter: brightness(100%);'

                _torreElementoComprar[i].onmouseover = () => {
                    let _melhoriasArray = Object.assign([], matrizUpgradeTorresMelhorias[_torreEscolhida][i][torreInformacao[torreEscolhidaIndex][10][i]])

                    for (let e = 0; e < _melhoriasElemento.length; e++) {
                        for (let a = 0; a < _melhoriasArray.length; a++) {
                            if (_melhoriasArray[a][0] === 'vida' && e === 0) {
                                _melhoriasElemento[e].innerHTML = `+ ${_melhoriasArray[a][1]}`
                            } else if (_melhoriasArray[a][0] === 'dano' && e === 1) {
                                _melhoriasElemento[e].innerHTML = `+ ${_melhoriasArray[a][1]}`
                            } else if (_melhoriasArray[a][0] === 'velocidadeAtaque' && e === 2) {
                                if (_melhoriasArray[a][2] === 'debuf') {
                                    _debufsElemento[0].innerHTML = `+ ${Math.abs(_melhoriasArray[a][1]) / 1000}s`
                                } else {
                                    _melhoriasElemento[e].innerHTML = `- ${Math.abs(_melhoriasArray[a][1]) / 1000}s`
                                }
                            } else if (_melhoriasArray[a][0] === 'range' && e === 3) {
                                _melhoriasElemento[e].innerHTML = `+ ${_melhoriasArray[a][1]}`
                            } else if (_melhoriasArray[a][2] === 'extra' && e === 4) {
                                _melhoriasElemento[e].innerHTML = `${_melhoriasArray[a][3]}`
                            } else if (_melhoriasArray[a][2] === 'extra2' && e === 5) {
                                _melhoriasElemento[e].innerHTML = `${_melhoriasArray[a][3]}`
                            } else if (_melhoriasArray[a][0] === 'tempoConstrucao') {
                                _debufsElemento[1].innerHTML = `+ ${_melhoriasArray[a][1] / 1000}s`
                            }
                        }
                    }
                }
                _torreElementoComprar[i].onmouseout = () => {
                    for (let e = 0; e < _melhoriasElemento.length; e++) {
                        _melhoriasElemento[e].innerHTML = ''
                    }
                    _debufsElemento[0].innerHTML = ''
                    _debufsElemento[1].innerHTML = ''
                }

                _torreElementoComprar[i].onclick = () => {
                    _torreElementoComprar[i].onmouseout()

                    torreInformacao[torreEscolhidaIndex][12] = false
                    _torreElementoComprar[i].onclick = () => { }
                    if (vermelhoAzul === 'azul') {
                        if (!(matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0] > recursosAzul.ouro[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1] > recursosAzul.comida[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2] > recursosAzul.recurso[0])) {
                            recursosAzul.ouro[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]
                            recursosAzul.comida[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]
                            recursosAzul.recurso[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]
                            recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                            recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                            recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                            torreInformacao[torreEscolhidaIndex][10][i]++
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
                            torreInformacao[torreEscolhidaIndex][10][i]++
                            document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                            clearInterval(_intervaloVerficarLateral)
                            upgradeTorreLateral(vermelhoAzul, torreEscolhidaIndex, false)
                        }
                    }
                }
            }
        } else {

            for (let i = 0; i < _torreElementoComprar.length; i++) {
                _torreElementoComprar[i].onclick = () => { }
                _torreElementoComprar[i].onmouseover = () => { }
                _torreElementoComprar[i].onmouseout = () => { }
                _torreElementoComprar[i].style.cssText += 'filter: brightness(50%);'
            }
            _intervaloVerficarTorrePronta = setInterval(() => {
                if (vermelhoAzul === 'azul') {
                    if (!lateralMatrizAzul[4][1]) {
                        for (let i = 0; i < _torreElementoComprar.length; i++) {
                            _torreElementoComprar[i].onclick = () => { }
                        }
                        clearInterval(_intervaloVerficarTorrePronta)
                    }
                } else {
                    if (!lateralMatrizVermelho[4][1]) {
                        for (let i = 0; i < _torreElementoComprar.length; i++) {
                            _torreElementoComprar[i].onclick = () => { }
                        }
                        clearInterval(_intervaloVerficarTorrePronta)
                    }
                }
                if (torreInformacao[torreEscolhidaIndex][12]) {
                    for (let i = 0; i < _torreElementoComprar.length; i++) {
                        if (
                            (_niveisCancelados[i]) ||
                            (_niveisComprados >= 2 && torreInformacao[torreEscolhidaIndex][10][i] == 0) ||
                            (torreInformacao[torreEscolhidaIndex][10][i] >= matrizUpgradeTorresMelhorias[_torreEscolhida][i].length) ||
                            (_niveisCompradosSegundo >= 1 && torreInformacao[torreEscolhidaIndex][10][i] >= 2)
                        ) {
                            _torreElementoComprar[i].onclick = () => { }
                            _torreElementoComprar[i].onmouseover = () => { }
                            _torreElementoComprar[i].onmouseout = () => { }
                            _torreElementoComprar[i].style.cssText += 'filter: brightness(50%);'
                            continue
                        }
                        _torreElementoComprar[i].style.cssText += 'filter: brightness(100%);'

                        _torreElementoComprar[i].onmouseover = () => {
                            let _melhoriasArray = Object.assign([], matrizUpgradeTorresMelhorias[_torreEscolhida][i][torreInformacao[torreEscolhidaIndex][10][i]])

                            for (let e = 0; e < _melhoriasElemento.length; e++) {
                                for (let a = 0; a < _melhoriasArray.length; a++) {
                                    if (_melhoriasArray[a][0] === 'vida' && e === 0) {
                                        _melhoriasElemento[e].innerHTML = `+ ${_melhoriasArray[a][1]}`
                                    } else if (_melhoriasArray[a][0] === 'dano' && e === 1) {
                                        _melhoriasElemento[e].innerHTML = `+ ${_melhoriasArray[a][1]}`
                                    } else if (_melhoriasArray[a][0] === 'velocidadeAtaque' && e === 2) {
                                        if (_melhoriasArray[a][2] === 'debuf') {
                                            _debufsElemento[0].innerHTML = `+ ${Math.abs(_melhoriasArray[a][1]) / 1000}s`
                                        } else {
                                            _melhoriasElemento[e].innerHTML = `- ${Math.abs(_melhoriasArray[a][1]) / 1000}s`
                                        }
                                    } else if (_melhoriasArray[a][0] === 'range' && e === 3) {
                                        _melhoriasElemento[e].innerHTML = `+ ${_melhoriasArray[a][1]}`
                                    } else if (_melhoriasArray[a][2] === 'extra' && e === 4) {
                                        _melhoriasElemento[e].innerHTML = `${_melhoriasArray[a][3]}`
                                    } else if (_melhoriasArray[a][2] === 'extra2' && e === 5) {
                                        _melhoriasElemento[e].innerHTML = `${_melhoriasArray[a][3]}`
                                    } else if (_melhoriasArray[a][0] === 'tempoConstrucao') {
                                        _debufsElemento[1].innerHTML = `+ ${_melhoriasArray[a][1] / 1000}s`
                                    }
                                }
                            }
                        }
                        _torreElementoComprar[i].onmouseout = () => {
                            for (let e = 0; e < _melhoriasElemento.length; e++) {
                                _melhoriasElemento[e].innerHTML = ''
                            }
                            _debufsElemento[0].innerHTML = ''
                            _debufsElemento[1].innerHTML = ''
                        }

                        _torreElementoComprar[i].onclick = () => {
                            _torreElementoComprar[i].onmouseout()

                            torreInformacao[torreEscolhidaIndex][12] = false
                            _torreElementoComprar[i].onclick = () => { }
                            if (vermelhoAzul === 'azul') {
                                if (!(matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0] > recursosAzul.ouro[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1] > recursosAzul.comida[0] || matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2] > recursosAzul.recurso[0])) {
                                    recursosAzul.ouro[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][0]
                                    recursosAzul.comida[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][1]
                                    recursosAzul.recurso[0] -= matrizUpgradeTorresPreco[_torreEscolhida][_nivelDaTorre][2]
                                    recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                                    recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                                    recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                                    torreInformacao[torreEscolhidaIndex][10][i]++
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
                                    torreInformacao[torreEscolhidaIndex][10][i]++
                                    document.getElementById('corpo').removeChild(document.getElementById(_torreRengeElemento.id))
                                    clearInterval(_intervaloVerficarLateral)
                                    upgradeTorreLateral(vermelhoAzul, torreEscolhidaIndex, false)
                                }
                            }
                        }
                    }
                    clearInterval(_intervaloVerficarTorrePronta)
                }
            }, 100)
        }
    } else {
        _torreElementoTempoConstrucao.innerHTML = `Tempo de construção: ---`
        _torreElementoPrecoOuro.innerHTML = `Ouro: ---`
        _torreElementoPrecoComida.innerHTML = `Comida: ---`
        _torreElementoPrecoRecurso.innerHTML = `Recurso: ---`
        for (let i = 0; i < _torreElementoComprar.length; i++) {
            _torreElementoComprar[i].onclick = () => { }
            _torreElementoComprar[i].onmouseover = () => { }
            _torreElementoComprar[i].onmouseout = () => { }
            _torreElementoComprar[i].style.cssText += 'filter: brightness(50%);'
        }
        clearInterval(_intervaloVerficarTorrePronta)
    }
}