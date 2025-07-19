var esquerdaSoldadosIds = ["soldado-esquerda-homem-caverna", "soldado-esquerda-homem-que-taca-pedra", "soldado-esquerda-homem-montado", "soldado-esquerda-homem-que-da-buff", "soldado-esquerda-homem-com-graveto", "soldado-esquerda-homem-que-taca-rocha"]
var esquerdaTorresIds = ["torre-esquerda-cercado", "torre-esquerda-portao", "torre-esquerda-mulher-na-torre", "torre-esquerda-homem-que-taca-bomba", "torre-esquerda-homem-que-taca-boleadeira", "torre-esquerda-minas-terrestres"]
var esquerdaUpgradesIds = ["upgrade-esquerda-base", "upgrade-esquerda-torres"]
var esquerdaBrocasEscolhasIds = ["ouro", "comida", "recurso"]
var esquerdaBrocasEstados = [false, false, false, false, false]
var esquerdaAtivos = [false, false, false, false, false, false]
var esquerdaQuadriculado = [0, 0]
var esquerdaUpgrades = 0
var esquerdaTorres = 0
var esquerdaSoldados = 0
var esquerdaBrocas = 0
var esquerdaBrocasEscolhas = 0

var torreVerticalHorizontal = [true, true]

document.onkeydown = () => {
    // console.log(event.keyCode)
    if (event.keyCode === 65 || event.keyCode === 37) {
        // A // <
        if (esquerdaAtivos[0]) {
            if (esquerdaQuadriculado[0] > 0) {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0]--
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0] = 6
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (esquerdaAtivos[3]) {
            if (esquerdaBrocasEscolhas > 0) {
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas--
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas = 2
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 87 || event.keyCode === 38) {
        // W // ^
        if (esquerdaAtivos[0]) {
            if (esquerdaQuadriculado[1] > 0) {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[1]--
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[1] = 9
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (esquerdaAtivos[1]) {
            if (esquerdaSoldados > 0) {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados--
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados').scroll(0, esquerdaSoldados*100)
            } else {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados = esquerdaSoldadosIds.length-1
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados').scroll(0, esquerdaSoldados*100)
            }
        } else if (esquerdaAtivos[2] || esquerdaAtivos[3]) {
            esquerdaAtivos[2] = true
            esquerdaAtivos[3] = false
            document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
            espacoBroca(7)
            if (esquerdaBrocas > 0) {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas--
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas = 4
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            }
        } else if (esquerdaAtivos[4]) {
            if (esquerdaTorres > 0) {
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                esquerdaTorres--
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres').scroll(0, esquerdaTorres*100)
            } else {
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                esquerdaTorres = esquerdaTorresIds.length-1
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres').scroll(0, esquerdaTorres*100)
            }
        } else if (esquerdaAtivos[5]) {
            if (esquerdaUpgrades > 0) {
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaUpgrades--
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            } else {
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaUpgrades = esquerdaUpgradesIds.length-1
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            }
        }
    } else if (event.keyCode === 68 || event.keyCode === 39) {
        // D // >
        if (esquerdaAtivos[0]) {
            if (esquerdaQuadriculado[0] < 6) {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0]++
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0] = 0
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (esquerdaAtivos[3]) {
            if (esquerdaBrocasEscolhas < 2) {
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas++
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas = 0
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 83 || event.keyCode === 40) {
        // S // V
        if (esquerdaAtivos[0]) {
            if (esquerdaQuadriculado[1] < 9) {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[1]++
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[1] = 0
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (esquerdaAtivos[1]) {
            if (esquerdaSoldados < esquerdaSoldadosIds.length-1) {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados++
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados').scroll(0, esquerdaSoldados*100)
            } else {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados = 0
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados').scroll(0, esquerdaSoldados*100)
            }
        } else if (esquerdaAtivos[2] || esquerdaAtivos[3]) {
            esquerdaAtivos[2] = true
            esquerdaAtivos[3] = false
            document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
            espacoBroca(7)
            if (esquerdaBrocas < 4) {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas++
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas = 0
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            }
        } else if (esquerdaAtivos[4]) {
            if (esquerdaTorres < esquerdaTorresIds.length-1) {
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                esquerdaTorres++
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres').scroll(0, esquerdaTorres*100)
            } else {
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                esquerdaTorres = 0
                document.getElementById(esquerdaTorresIds[esquerdaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres').scroll(0, esquerdaTorres*100)
            }
        } else if (esquerdaAtivos[5]) {
            if (esquerdaUpgrades < esquerdaUpgradesIds.length-1) {
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaUpgrades++
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            } else {
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaUpgrades = 0
                document.getElementById(esquerdaUpgradesIds[esquerdaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            }
        }
    }
    else if (event.keyCode === 86 || event.keyCode === 190) {
        // V // .
        posicionarTorres('cancelarAzul', esquerdaTorres, false)
        abrirLateralAzul(2)
        esquerdaAtivos[4] = lateralMatrizAzul[2][1]
        if (esquerdaAtivos[4]) {
            esquerdaAtivos[5] = false
            esquerdaAtivos[3] = false
            esquerdaAtivos[2] = false
            esquerdaAtivos[1] = false
            esquerdaAtivos[0] = false
        }
    } else if (event.keyCode === 88 || event.keyCode === 193) {
        // X // /
        posicionarSoldados('cancelarAzul', esquerdaSoldados, false)
        abrirLateralAzul(0)
        esquerdaAtivos[1] = lateralMatrizAzul[0][1]
        if (esquerdaAtivos[1]) {
            esquerdaAtivos[5] = false
            esquerdaAtivos[4] = false
            esquerdaAtivos[3] = false
            esquerdaAtivos[2] = false
            esquerdaAtivos[0] = false
        }
    } else if (event.keyCode === 67 || event.keyCode === 191) {
        // C // ;
        posicionarSoldados('cancelarAzul', esquerdaSoldados, false)
        abrirLateralAzul(1)
        esquerdaAtivos[2] = lateralMatrizAzul[1][1]
        if (esquerdaAtivos[2]) {
            esquerdaAtivos[5] = false
            esquerdaAtivos[4] = false
            esquerdaAtivos[3] = false
            esquerdaAtivos[1] = false
            esquerdaAtivos[0] = false
        }
    } else if (event.keyCode === 66 || event.keyCode === 188) {
        // B // ,
        posicionarSoldados('cancelarAzul', esquerdaSoldados, false)
        abrirLateralAzul(3)
        esquerdaAtivos[5] = lateralMatrizAzul[3][1]
        if (esquerdaAtivos[5]) {
            esquerdaAtivos[4] = false
            esquerdaAtivos[3] = false
            esquerdaAtivos[2] = false
            esquerdaAtivos[1] = false
            esquerdaAtivos[0] = false
        }
    }
    else if (event.keyCode === 90 || event.keyCode === 186) {
        // Z // ç
        torreVerticalHorizontal[0] = !torreVerticalHorizontal[0]
    } else if (event.keyCode === 32 || event.keyCode === 13) {
        // Espaço // Enter
        if (esquerdaAtivos[0]) {
            document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).onclick()
        } else if (esquerdaAtivos[1]) {
            if (posicionarSoldados('azul', esquerdaSoldados)) {
                if (lateralMatrizAzul[0][1]) {
                    abrirLateralAzul(0)
                }
                esquerdaAtivos[0] = true
                esquerdaAtivos[1] = false
                esquerdaAtivos[2] = false
                esquerdaAtivos[3] = true
                esquerdaAtivos[4] = false
                esquerdaAtivos[5] = false
            }
        } else if (esquerdaAtivos[2] && !esquerdaBrocasEstados[esquerdaBrocas]) {
            espacoBroca(esquerdaBrocas)
            document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            esquerdaAtivos[3] = true
            esquerdaAtivos[0] = false
            esquerdaAtivos[1] = false
            esquerdaAtivos[2] = false
            esquerdaAtivos[4] = false
            esquerdaAtivos[5] = false
        } else if (esquerdaAtivos[3]) {
            if (esquerdaBrocasEscolhas === 0 && !(recursosAzul.ouro[0] >= matrizUpigradesOuro[0][0][0] && recursosAzul.comida[0] >= matrizUpigradesOuro[0][0][1] && recursosAzul.recurso[0] >= matrizUpigradesOuro[0][0][2])) {
                
            } else if (esquerdaBrocasEscolhas === 1 && !(recursosAzul.ouro[0] >= matrizUpigradesComida[0][0][0] && recursosAzul.comida[0] >= matrizUpigradesComida[0][0][1] && recursosAzul.recurso[0] >= matrizUpigradesComida[0][0][2])) {
                
            } else if (esquerdaBrocasEscolhas === 2 && !(recursosAzul.ouro[0] >= matrizUpigradesRecurso[0][0][0] && recursosAzul.comida[0] >= matrizUpigradesRecurso[0][0][1] && recursosAzul.recurso[0] >= matrizUpigradesRecurso[0][0][2])) {
                
            } else {
                escolhaBroca(esquerdaBrocasEscolhas, esquerdaBrocas)
                espacoBroca(7)
                esquerdaBrocasEstados[esquerdaBrocas] = true
                esquerdaAtivos[2] = true
                esquerdaAtivos[0] = false
                esquerdaAtivos[1] = false
                esquerdaAtivos[3] = false
                esquerdaAtivos[4] = false
                esquerdaAtivos[5] = false
            }
        } else if (esquerdaAtivos[2] && esquerdaBrocasEstados[esquerdaBrocas]) {
            upigrades(esquerdaBrocas)
        } else if (esquerdaAtivos[4]) {
            if (posicionarTorres('azul', esquerdaTorres)) {
                if (lateralMatrizAzul[2][1]) {
                    abrirLateralAzul(2)
                }
                esquerdaAtivos[0] = true
                esquerdaAtivos[1] = false
                esquerdaAtivos[2] = false
                esquerdaAtivos[3] = false
                esquerdaAtivos[4] = true
                esquerdaAtivos[5] = false
            }
        } else if (esquerdaAtivos[5]) {
            if (esquerdaUpgrades === 1) {
                if (upgradeTorres('azul')) {
                    if (lateralMatrizAzul[3][1]) {
                        abrirLateralAzul(3)
                    }
                    esquerdaAtivos[0] = true
                    esquerdaAtivos[1] = false
                    esquerdaAtivos[2] = false
                    esquerdaAtivos[3] = false
                    esquerdaAtivos[4] = false
                    esquerdaAtivos[5] = true
                }
            }
        }
    } else if (event.keyCode === 84 || event.keyCode === 8) {
        // T // Apagar
        if (esquerdaAtivos[2] && esquerdaBrocasEstados[esquerdaBrocas]) {
            esquerdaBrocasEstados[esquerdaBrocas] = false
            clickBrocaAzul = esquerdaBrocas
            deletarBroca()
        }
    }
}