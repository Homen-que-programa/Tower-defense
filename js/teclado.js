var direitaSoldadosIds = ["soldado-direita-homem-caverna", "soldado-direita-homem-que-taca-pedra", "soldado-direita-homem-montado"]
var direitaAtivos = [false, false, false]
var direitaQuadriculado = [0, 0]
var direitaSoldados = 0
var direitaBrocas = 0

document.onkeydown = () => {
    if (event.keyCode === 37) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[0] > 0) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0]--
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0] = 9
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        }
    } else if (event.keyCode === 38) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[1] > 0) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1]--
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1] = 9
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        } else if (direitaAtivos[1]) {
            if (direitaSoldados > 0) {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgba(117, 68, 28, 0.5)'
                direitaSoldados--
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(117, 68, 28);'
            } else {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgba(117, 68, 28, 0.5)'
                direitaSoldados = direitaSoldadosIds.length-1
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(117, 68, 28);'
            }
        } else if (direitaAtivos[2]) {
            
        }
    } else if (event.keyCode === 39) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[0] < 9) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0]++
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0] = 0
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        }
    } else if (event.keyCode === 40) {
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[1] < 9) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1]++
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1] = 0
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
        } else if (direitaAtivos[1]) {
            if (direitaSoldados < direitaSoldadosIds.length-1) {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgba(117, 68, 28, 0.5)'
                direitaSoldados++
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(117, 68, 28);'
            } else {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgba(117, 68, 28, 0.5)'
                direitaSoldados = 0
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText = 'background-color: rgb(117, 68, 28);'
            }
        } else if (direitaAtivos[2]) {
            
        }
    }
    else if (event.keyCode === 65) {
        
    } else if (event.keyCode === 87) {
        
    } else if (event.keyCode === 68) {
        
    } else if (event.keyCode === 83) {
        
    }
    else if (event.keyCode === 193) {
        posicionarSoldados('cancelarVermelho', direitaSoldados)
        abrirLateralVermelho(0)
        direitaAtivos[1] = lateralMatrizVermelho[0][1]
        if (direitaAtivos[1]) {
            direitaAtivos[2] = false
            direitaAtivos[0] = false
        }
    } else if (event.keyCode === 191) {
        posicionarSoldados('cancelarVermelho', direitaSoldados)
        abrirLateralVermelho(1)
        direitaAtivos[2] = lateralMatrizVermelho[1][1]
        if (direitaAtivos[2]) {
            direitaAtivos[1] = false
            direitaAtivos[0] = false
        }
    }
    else if (event.keyCode === 13) {
        if (direitaAtivos[0]) {
            document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+11}`).onclick()
            posicionarSoldados('cancelarVermelho', direitaSoldados)
        } else if (direitaAtivos[1]) {
            if (lateralMatrizVermelho[0][1]) {
                abrirLateralVermelho(0)
            }
            direitaAtivos[0] = true
            direitaAtivos[1] = false
            direitaAtivos[2] = false
            posicionarSoldados('vermelho', direitaSoldados)
        } else if (direitaAtivos[2]) {
            
        }
    }
}