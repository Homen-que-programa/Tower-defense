var direitaSoldadosIds = ["soldado-direita-homem-caverna", "soldado-direita-homem-que-taca-pedra", "soldado-direita-homem-montado"]
var direitaBrocasEscolhasIds = ["ouro", "comida", "recurso"]
var direitaBrocasEstados = [false, false, false, false, false]
var direitaAtivos = [false, false, false, false]
var direitaQuadriculado = [0, 0]
var direitaSoldados = 0
var direitaBrocas = 0
var direitaBrocasEscolhas = 0

var esquerdaSoldadosIds = ["soldado-esquerda-homem-caverna", "soldado-esquerda-homem-que-taca-pedra", "soldado-esquerda-homem-montado"]
var esquerdaBrocasEscolhasIds = ["ouro", "comida", "recurso"]
var esquerdaBrocasEstados = [false, false, false, false, false]
var esquerdaAtivos = [false, false, false, false]
var esquerdaQuadriculado = [0, 0]
var esquerdaSoldados = 0
var esquerdaBrocas = 0
var esquerdaBrocasEscolhas = 0


document.onkeydown = () => {
    if (event.keyCode === 37) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[0] > 0) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0]--
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0] = 7
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        } else if (direitaAtivos[3]) {
            if (direitaBrocasEscolhas > 0) {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas--
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas = 2
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 38) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[1] > 0) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1]--
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1] = 9
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        } else if (direitaAtivos[1]) {
            if (direitaSoldados > 0) {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                direitaSoldados--
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            } else {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                direitaSoldados = direitaSoldadosIds.length-1
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            }
        } else if (direitaAtivos[2] || direitaAtivos[3] || direitaAtivos[4]) {
            direitaAtivos[2] = true
            direitaAtivos[3] = false
            direitaBrocasEscolhas = 0
            espacoBrocaDireita(7)
            if (direitaBrocas > 0) {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                direitaBrocas--
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                direitaBrocas = 4
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            }
        }
    } else if (event.keyCode === 39) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[0] < 7) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0]++
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0] = 0
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        } else if (direitaAtivos[3]) {
            if (direitaBrocasEscolhas < 2) {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas++
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas = 0
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 20px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 40) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[1] < 9) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1]++
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1] = 0
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        } else if (direitaAtivos[1]) {
            if (direitaSoldados < direitaSoldadosIds.length-1) {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                direitaSoldados++
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            } else {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                direitaSoldados = 0
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            }
        } else if (direitaAtivos[2] || direitaAtivos[3] || direitaAtivos[4]) {
            direitaAtivos[2] = true
            direitaAtivos[3] = false
            direitaBrocasEscolhas = 0
            espacoBrocaDireita(7)
            if (direitaBrocas < 4) {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                direitaBrocas++
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                direitaBrocas = 0
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            }
        }
    }
    else if (event.keyCode === 65) {
        if (esquerdaAtivos[0]) {
            if (esquerdaQuadriculado[0] > 0) {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0]--
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0] = 7
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
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
    } else if (event.keyCode === 87) {
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
        } else if (esquerdaAtivos[1]) {
            if (esquerdaSoldados > 0) {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados--
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            } else {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados = esquerdaSoldadosIds.length-1
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            }
        } else if (esquerdaAtivos[2] || esquerdaAtivos[3] || esquerdaAtivos[4]) {
            esquerdaAtivos[2] = true
            esquerdaAtivos[3] = false
            esquerdaBrocasEscolhas = 0
            espacoBroca(7)
            if (esquerdaBrocas > 0) {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas--
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas = 4
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            }
        }
    } else if (event.keyCode === 68) {
        if (esquerdaAtivos[0]) {
            if (esquerdaQuadriculado[0] < 7) {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0]++
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                esquerdaQuadriculado[0] = 0
                document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
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
    } else if (event.keyCode === 83) {
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
        } else if (esquerdaAtivos[1]) {
            if (esquerdaSoldados < esquerdaSoldadosIds.length-1) {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados++
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            } else {
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(69, 109, 218);'
                esquerdaSoldados = 0
                document.getElementById(esquerdaSoldadosIds[esquerdaSoldados]).style.cssText = 'background-color: rgb(46, 78, 219);'
            }
        } else if (esquerdaAtivos[2] || esquerdaAtivos[3] || esquerdaAtivos[4]) {
            esquerdaAtivos[2] = true
            esquerdaAtivos[3] = false
            esquerdaBrocasEscolhas = 0
            espacoBroca(7)
            if (esquerdaBrocas < 4) {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas++
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(190, 142, 102)'
                esquerdaBrocas = 0
                document.getElementById(`espaco-broca-${esquerdaBrocas+1}`).style.cssText = 'background-color: rgb(218, 153, 97)'
            }
        }
    }
    else if (event.keyCode === 193) {
        posicionarSoldados('cancelarVermelho', direitaSoldados)
        abrirLateralVermelho(0)
        direitaAtivos[1] = lateralMatrizVermelho[0][1]
        if (direitaAtivos[1]) {
            direitaAtivos[3] = false
            direitaAtivos[2] = false
            direitaAtivos[0] = false
        }
    } else if (event.keyCode === 191) {
        posicionarSoldados('cancelarVermelho', direitaSoldados)
        abrirLateralVermelho(1)
        direitaAtivos[2] = lateralMatrizVermelho[1][1]
        if (direitaAtivos[2]) {
            direitaAtivos[3] = false
            direitaAtivos[1] = false
            direitaAtivos[0] = false
        }
    }
    else if (event.keyCode === 90) {
        posicionarSoldados('cancelarAzul', esquerdaSoldados)
        abrirLateralAzul(0)
        esquerdaAtivos[1] = lateralMatrizAzul[0][1]
        if (esquerdaAtivos[1]) {
            esquerdaAtivos[3] = false
            esquerdaAtivos[2] = false
            esquerdaAtivos[0] = false
        }
    } else if (event.keyCode === 86) {
        posicionarSoldados('cancelarAzul', esquerdaSoldados)
        abrirLateralAzul(1)
        esquerdaAtivos[2] = lateralMatrizAzul[1][1]
        if (esquerdaAtivos[2]) {
            esquerdaAtivos[3] = false
            esquerdaAtivos[1] = false
            esquerdaAtivos[0] = false
        }
    }
    else if (event.keyCode === 13) {
        if (direitaAtivos[0]) {
            document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+13}`).onclick()
            posicionarSoldados('cancelarVermelho', direitaSoldados)
        } else if (direitaAtivos[1]) {
            if (posicionarSoldados('vermelho', direitaSoldados)) {
                if (lateralMatrizVermelho[0][1]) {
                    abrirLateralVermelho(0)
                }
                direitaAtivos[0] = true
                direitaAtivos[1] = false
                direitaAtivos[2] = false
                direitaAtivos[3] = false
            }
        } else if (direitaAtivos[2] && !direitaBrocasEstados[direitaBrocas]) {
            espacoBrocaDireita(direitaBrocas)
            direitaAtivos[3] = true
            direitaAtivos[0] = false
            direitaAtivos[1] = false
            direitaAtivos[2] = false
        } else if (direitaAtivos[3]) {
            if (recursosVermelho.ouro[0] >= 20 && recursosVermelho.comida[0] >= 0 && recursosVermelho.recurso[0] >= 10) {
                escolhaBrocaDireita(direitaBrocasEscolhas, direitaBrocas)
                espacoBrocaDireita(7)
                direitaBrocasEstados[direitaBrocas] = true
                direitaAtivos[2] = true
                direitaAtivos[0] = false
                direitaAtivos[1] = false
                direitaAtivos[3] = false
            }
        } else if (direitaAtivos[2] && direitaBrocasEstados[direitaBrocas]) {
            upigradesDireita(direitaBrocas)
        }
    }
    else if (event.keyCode === 8) {
        if (direitaAtivos[2] && direitaBrocasEstados[direitaBrocas]) {
            direitaBrocasEstados[direitaBrocas] = false
            clickBrocaVermelho = direitaBrocas
            deletarBrocaDireita()
        }
    }
    else if (event.keyCode === 32) {
        if (esquerdaAtivos[0]) {
            document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).onclick()
            posicionarSoldados('cancelarAzul', esquerdaSoldados)
        } else if (esquerdaAtivos[1]) {
            if (posicionarSoldados('azul', esquerdaSoldados)) {
                if (lateralMatrizAzul[0][1]) {
                    abrirLateralAzul(0)
                }
                esquerdaAtivos[0] = true
                esquerdaAtivos[1] = false
                esquerdaAtivos[2] = false
                esquerdaAtivos[3] = false
            }
        } else if (esquerdaAtivos[2] && !esquerdaBrocasEstados[esquerdaBrocas]) {
            espacoBroca(esquerdaBrocas)
            esquerdaAtivos[3] = true
            esquerdaAtivos[0] = false
            esquerdaAtivos[1] = false
            esquerdaAtivos[2] = false
        } else if (esquerdaAtivos[3]) {
            if (recursosAzul.ouro[0] >= 20 && recursosAzul.comida[0] >= 0 && recursosAzul.recurso[0] >= 10) {
                escolhaBroca(esquerdaBrocasEscolhas, esquerdaBrocas)
                espacoBroca(7)
                esquerdaBrocasEstados[esquerdaBrocas] = true
                esquerdaAtivos[2] = true
                esquerdaAtivos[0] = false
                esquerdaAtivos[1] = false
                esquerdaAtivos[3] = false
            }
        } else if (esquerdaAtivos[2] && esquerdaBrocasEstados[esquerdaBrocas]) {
            upigrades(esquerdaBrocas)
        }
    }
    else if (event.keyCode === 84) {
        if (esquerdaAtivos[2] && esquerdaBrocasEstados[esquerdaBrocas]) {
            esquerdaBrocasEstados[esquerdaBrocas] = false
            clickBrocaAzul = esquerdaBrocas
            deletarBroca()
        }
    }
}