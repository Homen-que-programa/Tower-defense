var lateralMatriz = [["lateral-soldados", false], ["lateral-brocas", false]]
function abrirLateral(_numLateral) {
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
    if (_timeOuCansel) {
        document.getElementById('quadriculado').style.opacity = '0'
        for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
            for (let e = 0; e < tabelaCaminhoAzul[i].length; e+=2) {
                document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
            }
        }
    } else {
        for (let i = 0; i < tabelaCaminhoAzul.length; i+=2) {
            for (let e = 0; e < tabelaCaminhoAzul[i].length; e+=2) {
                if (e >= tabelaCaminhoAzul[i].length/2) {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: grayscale(100%);'
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                } else if (tabelaCaminhoAzul[i][e] !== '.' || tabelaCaminhoAzul[i+1][e] !== '.' || tabelaCaminhoAzul[i][e+1] !== '.' || tabelaCaminhoAzul[i+1][e+1] !== '.') {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).style.cssText += 'filter: hue-rotate(180deg);'
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {}
                } else {
                    document.getElementById(`coluna-${i/2+1}-${e/2+1}`).onclick = () => {
                        criarUnidadeAzul((e+0.5)*tabelaCaminhoTamanho, (i+0.5)*tabelaCaminhoTamanho)
                        console.log(i+', '+e)
                        posicionarSoldados(true, 0)
                    }
                }
            }
        }
    }
}