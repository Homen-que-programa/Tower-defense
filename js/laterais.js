var lateralMatriz = [["lateral-soldados", false], ["lateral-brocas", false]]
var posicionarAtivo = [false, false]
var posicionarAtulizacao = 0

function abrirLateralAzul(_numLateral) {
    for (let i = 0; i < lateralMatriz.length; i++) {
        if (_numLateral === i && lateralMatriz[i][1]) {
            lateralMatriz[i][1] = false
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 0px;`
        } else if (_numLateral === i) {
            lateralMatriz[i][1] = true
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 1000px;`
        } else {
            lateralMatriz[i][1] = false
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 0px;`
        }
    }
}
function abrirLateralVermelho(_numLateral) {
    for (let i = 0; i < lateralMatriz.length; i++) {
        if (_numLateral === i && lateralMatriz[i][1]) {
            lateralMatriz[i][1] = false
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 0px;`
        } else if (_numLateral === i) {
            lateralMatriz[i][1] = true
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 1000px;`
        } else {
            lateralMatriz[i][1] = false
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 0px;`
        }
    }
}

function posicionarSoldados(_timeOuCansel, _unidadeEscolhida) {
    document.getElementById('quadriculado').style.opacity = '1'
    if (_timeOuCansel === 'cancelarAzul') {
        posicionarAtivo[0] = false
        if (posicionarAtivo[1]) {
            for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                for (let e = 0; e <= tabelaCaminhoAzul[i].length/2; e+=2) {
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
    } else if (_timeOuCansel === 'cancelVermelho') {
        posicionarAtivo[1] = false
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
        let posicionarAtulizacaoCopyAzul = posicionarAtulizacao
        let caminhoAlteracoesCopyAzul = -5
        setInterval(() => {
            if (posicionarAtulizacaoCopyAzul !== posicionarAtulizacao || caminhoAlteracoesCopyAzul !== caminhoAlteracoes) {
                for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
                    for (let e = 0; e < tabelaCaminhoAzul[i].length; e+=2) {
                        if (e >= tabelaCaminhoAzul[i].length/2) {
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
                                criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 200, 35, 1000, 1, 300, 70, 50)
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
        let posicionarAtulizacaoCopyVermelho = posicionarAtulizacao
        let caminhoAlteracoesCopyVermelho = -5
        setInterval(() => {
            if (posicionarAtulizacaoCopyVermelho !== posicionarAtulizacao || caminhoAlteracoesCopyVermelho !== caminhoAlteracoes) {
                for (let i = 0; i < tabelaCaminhoVermelho.length; i+=2) {
                    for (let e = 0; e < tabelaCaminhoVermelho[i].length; e+=2) {
                        if (e < tabelaCaminhoVermelho[i].length/2) {
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
                                criarUnidadeVertmelho((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho, 200, 35, 1000, 1, 300, 70, 50)
                                posicionarSoldados('cancelarVermelho', 0)
                            }
                        }
                    }
                }
            }
        }, 100)
    }
}