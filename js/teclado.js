var direitaSoldadosIds = ["soldado-direita-homem-caverna", "soldado-direita-homem-que-taca-pedra", "soldado-direita-homem-montado", "soldado-direita-homem-que-da-buff", "soldado-direita-homem-com-graveto", "soldado-direita-homem-que-taca-rocha"]
var direitaTorresIds = ["torre-direita-cercado", "torre-direita-portao", "torre-direita-mulher-na-torre", "torre-direita-homem-que-taca-bomba", "torre-direita-homem-que-taca-boleadeira", "torre-direita-minas-terrestres"]
var direitaUpgradesIds = ["upgrade-direita-base", "upgrade-direita-torres"]
var direitaBrocasEscolhasIds = ["ouro", "comida", "recurso"]
var direitaBrocasEstados = [false, false, false, false, false]
var direitaAtivos = [false, false, false, false, false, false, false]
var direitaQuadriculado = [0, 0]
var direitaUpgradesMostrar = 0
var direitaUpgrades = 0
var direitaTorres = 0
var direitaSoldados = 0
var direitaBrocas = 0
var direitaBrocasEscolhas = 0
let direitaTorreElementoComprar = document.querySelectorAll(`#lateral-mostrar-upgrade-direita .mostrar-upgrade-comprar`)

var esquerdaSoldadosIds = ["soldado-esquerda-homem-caverna", "soldado-esquerda-homem-que-taca-pedra", "soldado-esquerda-homem-montado", "soldado-esquerda-homem-que-da-buff", "soldado-esquerda-homem-com-graveto", "soldado-esquerda-homem-que-taca-rocha"]
var esquerdaTorresIds = ["torre-esquerda-cercado", "torre-esquerda-portao", "torre-esquerda-mulher-na-torre", "torre-esquerda-homem-que-taca-bomba", "torre-esquerda-homem-que-taca-boleadeira", "torre-esquerda-minas-terrestres"]
var esquerdaUpgradesIds = ["upgrade-esquerda-base", "upgrade-esquerda-torres"]
var esquerdaBrocasEscolhasIds = ["ouro", "comida", "recurso"]
var esquerdaBrocasEstados = [false, false, false, false, false]
var esquerdaAtivos = [false, false, false, false, false, false, false]
var esquerdaQuadriculado = [0, 0]
var esquerdaUpgradesMostrar = 0
var esquerdaUpgrades = 0
var esquerdaTorres = 0
var esquerdaSoldados = 0
var esquerdaBrocas = 0
var esquerdaBrocasEscolhas = 0
let esquerdaTorreElementoComprar = document.querySelectorAll(`#lateral-mostrar-upgrade .mostrar-upgrade-comprar`)

var torreVerticalHorizontal = [true, true]

document.onkeydown = () => {
    // console.log(event.keyCode)
    if (event.keyCode === 37) {
        // <
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[0] > 0) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0]--
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0] = 6
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (direitaAtivos[3]) {
            if (direitaBrocasEscolhas > 0) {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas--
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas = 2
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 38) {
        // ^
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[1] > 0) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1]--
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1] = 9
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (direitaAtivos[1]) {
            if (direitaSoldados > 0) {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                direitaSoldados--
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados-direita').scroll(0, direitaSoldados*100)
            } else {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                direitaSoldados = direitaSoldadosIds.length-1
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados-direita').scroll(0, direitaSoldados*100)
            }
        } else if (direitaAtivos[2] || direitaAtivos[3]) {
            direitaAtivos[2] = true
            direitaAtivos[3] = false
            document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
            espacoBrocaDireita(7)
            if (direitaBrocas > 0) {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                direitaBrocas--
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                direitaBrocas = 4
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            }
        } else if (direitaAtivos[4]) {
            if (direitaTorres > 0) {
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                direitaTorres--
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres-direita').scroll(0, direitaTorres*100)
            } else {
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                direitaTorres = direitaTorresIds.length-1
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres-direita').scroll(0, direitaTorres*100)
            }
        } else if (direitaAtivos[5]) {
            if (direitaUpgrades > 0) {
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaUpgrades--
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            } else {
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaUpgrades = direitaUpgradesIds.length-1
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            }
        } else if (direitaAtivos[6]) {
            if (direitaUpgradesMostrar > 0) {
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseout()
                direitaUpgradesMostrar--
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseover()
            } else {
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseout()
                direitaUpgradesMostrar = direitaTorreElementoComprar.length-1
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseover()
            }
        }
    } else if (event.keyCode === 39) {
        // >
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[0] < 6) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0]++
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[0] = 0
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (direitaAtivos[3]) {
            if (direitaBrocasEscolhas < 2) {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas++
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                direitaBrocasEscolhas = 0
                document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 40) {
        // V
        if (direitaAtivos[0]) {
            if (direitaQuadriculado[1] < 9) {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1]++
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            } else {
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                direitaQuadriculado[1] = 0
                document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            }
            let quadrado = document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`)
            quadrado.addEventListener('mouseover', e => {
                quadrado.style.cssText += 'width: 100%;height: 100%;opacity: 0.6;'
            })
            quadrado.addEventListener('mouseout', e => {
                if (document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`) !== quadrado) {
                    quadrado.style.cssText += 'width: 65%;height: 65%;opacity: 0.4;'
                }
            })
        } else if (direitaAtivos[1]) {
            if (direitaSoldados < direitaSoldadosIds.length-1) {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                direitaSoldados++
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados-direita').scroll(0, direitaSoldados*100)
            } else {
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(69, 109, 218);'
                direitaSoldados = 0
                document.getElementById(direitaSoldadosIds[direitaSoldados]).style.cssText += 'background-color: rgb(46, 78, 219);'
                document.getElementById('lateral-soldados-direita').scroll(0, direitaSoldados*100)
            }
        } else if (direitaAtivos[2] || direitaAtivos[3]) {
            direitaAtivos[2] = true
            direitaAtivos[3] = false
            document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
            espacoBrocaDireita(7)
            if (direitaBrocas < 4) {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                direitaBrocas++
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            } else {
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(190, 142, 102)'
                direitaBrocas = 0
                document.getElementById(`espaco-broca-direita-${direitaBrocas+1}`).style.cssText += 'background-color: rgb(218, 153, 97)'
            }
        } else if (direitaAtivos[4]) {
            if (direitaTorres < direitaTorresIds.length-1) {
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                direitaTorres++
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres-direita').scroll(0, direitaTorres*100)
            } else {
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(65, 141, 50);'
                direitaTorres = 0
                document.getElementById(direitaTorresIds[direitaTorres]).style.cssText += 'background-color: rgb(64, 179, 41);'
                document.getElementById('lateral-torres-direita').scroll(0, direitaTorres*100)
            }
        } else if (direitaAtivos[5]) {
            if (direitaUpgrades < direitaUpgradesIds.length-1) {
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaUpgrades++
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            } else {
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaUpgrades = 0
                document.getElementById(direitaUpgradesIds[direitaUpgrades]).style.cssText += 'background-color: rgb(77, 58, 184);'
            }
        } else if (direitaAtivos[6]) {
            if (direitaUpgradesMostrar < direitaTorreElementoComprar.length-1) {
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseout()
                direitaUpgradesMostrar++
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseover()
            } else {
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseout()
                direitaUpgradesMostrar = 0
                direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                direitaTorreElementoComprar[direitaUpgradesMostrar].onmouseover()
            }
        }
    }    
    else if (event.keyCode === 65) {
        // A
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
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas--
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas = 2
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 87) {
        // W
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
        } else if (esquerdaAtivos[6]) {
            if (esquerdaUpgradesMostrar > 0) {
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseout()
                esquerdaUpgradesMostrar--
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseover()
            } else {
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseout()
                esquerdaUpgradesMostrar = esquerdaTorreElementoComprar.length-1
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseover()
            }
        }
    } else if (event.keyCode === 68) {
        // D
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
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas++
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            } else {
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgba(90, 90, 90, 0);'
                esquerdaBrocasEscolhas = 0
                document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            }
        }
    } else if (event.keyCode === 83) {
        // S
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
        } else if (esquerdaAtivos[6]) {
            if (esquerdaUpgradesMostrar < esquerdaTorreElementoComprar.length-1) {
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseout()
                esquerdaUpgradesMostrar++
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseover()
            } else {
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(46, 26, 161);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseout()
                esquerdaUpgradesMostrar = 0
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onmouseover()
            }
        }
    }
    else if (event.keyCode === 190) {
        // .
        posicionarTorres('cancelarVermelho', direitaTorres, false)
        abrirLateralVermelho(2)
        direitaAtivos[4] = lateralMatrizVermelho[2][1]
        if (direitaAtivos[4]) {
            direitaAtivos[5] = false
            direitaAtivos[3] = false
            direitaAtivos[2] = false
            direitaAtivos[1] = false
            direitaAtivos[0] = false
        }
    } else if (event.keyCode === 193) {
        // /
        posicionarSoldados('cancelarVermelho', direitaSoldados, false)
        abrirLateralVermelho(0)
        direitaAtivos[1] = lateralMatrizVermelho[0][1]
        if (direitaAtivos[1]) {
            direitaAtivos[5] = false
            direitaAtivos[4] = false
            direitaAtivos[3] = false
            direitaAtivos[2] = false
            direitaAtivos[0] = false
        }
    } else if (event.keyCode === 191) {
        // ;
        posicionarSoldados('cancelarVermelho', direitaSoldados, false)
        abrirLateralVermelho(1)
        direitaAtivos[2] = lateralMatrizVermelho[1][1]
        if (direitaAtivos[2]) {
            direitaAtivos[5] = false
            direitaAtivos[3] = false
            direitaAtivos[1] = false
            direitaAtivos[0] = false
        }
    } else if (event.keyCode === 188) {
        // ,
        posicionarSoldados('cancelarVermelho', direitaSoldados, false)
        abrirLateralVermelho(3)
        direitaAtivos[5] = lateralMatrizVermelho[3][1]
        if (direitaAtivos[5]) {
            direitaAtivos[4] = false
            direitaAtivos[3] = false
            direitaAtivos[2] = false
            direitaAtivos[1] = false
            direitaAtivos[0] = false
        }
    }
    else if (event.keyCode === 86) {
        // V
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
    } else if (event.keyCode === 88) {
        // X
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
    } else if (event.keyCode === 67) {
        // C
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
    } else if (event.keyCode === 66) {
        // B
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
    else if (event.keyCode === 90) {
        // Z
        torreVerticalHorizontal[0] = !torreVerticalHorizontal[0]
    } else if (event.keyCode === 186) {
        // Ç
        torreVerticalHorizontal[1] = !torreVerticalHorizontal[1]
    }
    else if (event.keyCode === 13) {
        // Enter
        if (direitaAtivos[0]) {
            async function a () {
                await document.getElementById(`coluna-${direitaQuadriculado[1]+1}-${direitaQuadriculado[0]+14}`).onclick()
                if (direitaAtivos[5] && !posicionarAtivo[1]) {
                    direitaAtivos[0] = false
                    direitaAtivos[1] = false
                    direitaAtivos[2] = false
                    direitaAtivos[3] = false
                    direitaAtivos[4] = false
                    direitaAtivos[5] = false
                    direitaAtivos[6] = true
                    direitaTorreElementoComprar[direitaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                }
            }
            a()
        } else if (direitaAtivos[1]) {
            if (posicionarSoldados('vermelho', direitaSoldados)) {
                if (lateralMatrizVermelho[0][1]) {
                    abrirLateralVermelho(0)
                }
                direitaAtivos[0] = true
                direitaAtivos[1] = false
                direitaAtivos[2] = false
                direitaAtivos[3] = true
                direitaAtivos[4] = false
                direitaAtivos[5] = false
                direitaAtivos[6] = false
            }
        } else if (direitaAtivos[2] && !direitaBrocasEstados[direitaBrocas]) {
            espacoBrocaDireita(direitaBrocas)
            document.getElementById(`broca-direita-${direitaBrocasEscolhasIds[direitaBrocasEscolhas]}-${direitaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            direitaAtivos[3] = true
            direitaAtivos[0] = false
            direitaAtivos[1] = false
            direitaAtivos[2] = false
            direitaAtivos[5] = false
            direitaAtivos[6] = false
        } else if (direitaAtivos[3]) {
            if (direitaBrocasEscolhas === 0 && !(recursosVermelho.ouro[0] >= matrizUpigradesOuro[0][0][0] && recursosVermelho.comida[0] >= matrizUpigradesOuro[0][0][1] && recursosVermelho.recurso[0] >= matrizUpigradesOuro[0][0][2])) {
                
            } else if (direitaBrocasEscolhas === 1 && !(recursosVermelho.ouro[0] >= matrizUpigradesComida[0][0][0] && recursosVermelho.comida[0] >= matrizUpigradesComida[0][0][1] && recursosVermelho.recurso[0] >= matrizUpigradesComida[0][0][2])) {
                
            } else if (direitaBrocasEscolhas === 2 && !(recursosVermelho.ouro[0] >= matrizUpigradesRecurso[0][0][0] && recursosVermelho.comida[0] >= matrizUpigradesRecurso[0][0][1] && recursosVermelho.recurso[0] >= matrizUpigradesRecurso[0][0][2])) {
                
            } else {
                escolhaBrocaDireita(direitaBrocasEscolhas, direitaBrocas)
                espacoBrocaDireita(7)
                direitaBrocasEstados[direitaBrocas] = true
                direitaAtivos[2] = true
                direitaAtivos[0] = false
                direitaAtivos[1] = false
                direitaAtivos[3] = false
                direitaAtivos[4] = false
                direitaAtivos[5] = false
                direitaAtivos[6] = false
            }
        } else if (direitaAtivos[2] && direitaBrocasEstados[direitaBrocas]) {
            upigradesDireita(direitaBrocas)
        } else if (direitaAtivos[4]) {
            if (posicionarTorres('vermelho', direitaTorres)) {
                if (lateralMatrizVermelho[2][1]) {
                    abrirLateralVermelho(2)
                }
                direitaAtivos[0] = true
                direitaAtivos[1] = false
                direitaAtivos[2] = false
                direitaAtivos[3] = false
                direitaAtivos[4] = true
                direitaAtivos[5] = false
                direitaAtivos[6] = false
            }
        } else if (direitaAtivos[5]) {
            if (direitaUpgrades === 1) {
                if (upgradeTorres('vermelho')) {
                    if (lateralMatrizVermelho[3][1]) {
                        abrirLateralVermelho(3)
                    }
                    direitaAtivos[0] = true
                    direitaAtivos[1] = false
                    direitaAtivos[2] = false
                    direitaAtivos[3] = false
                    direitaAtivos[4] = false
                    direitaAtivos[5] = true
                    direitaAtivos[6] = false
                }
            }
        } else if (direitaAtivos[6]) {
            direitaTorreElementoComprar[direitaUpgradesMostrar].onclick()
        }
    }
    else if (event.keyCode === 8) {
        // Apagar
        if (direitaAtivos[2] && direitaBrocasEstados[direitaBrocas]) {
            direitaBrocasEstados[direitaBrocas] = false
            clickBrocaVermelho = direitaBrocas
            deletarBrocaDireita()
        }
    }
    else if (event.keyCode === 32) {
        // Espaço
        if (esquerdaAtivos[0]) {
            async function a () {
                await document.getElementById(`coluna-${esquerdaQuadriculado[1]+1}-${esquerdaQuadriculado[0]+1}`).onclick()
                if (esquerdaAtivos[5] && !posicionarAtivo[0]) {
                    esquerdaAtivos[0] = false
                    esquerdaAtivos[1] = false
                    esquerdaAtivos[2] = false
                    esquerdaAtivos[3] = false
                    esquerdaAtivos[4] = false
                    esquerdaAtivos[5] = false
                    esquerdaAtivos[6] = true
                    esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].style.cssText += 'background-color: rgb(77, 58, 184);'
                }
            }
            a()
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
                esquerdaAtivos[6] = false
            }
        } else if (esquerdaAtivos[2] && !esquerdaBrocasEstados[esquerdaBrocas]) {
            espacoBroca(esquerdaBrocas)
            document.getElementById(`broca-${esquerdaBrocasEscolhasIds[esquerdaBrocasEscolhas]}-${esquerdaBrocas+1}`).style.cssText += 'border: 5px solid rgb(210, 209, 219);'
            esquerdaAtivos[3] = true
            esquerdaAtivos[0] = false
            esquerdaAtivos[1] = false
            esquerdaAtivos[2] = false
            esquerdaAtivos[4] = false
            esquerdaAtivos[5] = false
            esquerdaAtivos[6] = false
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
                esquerdaAtivos[6] = false
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
                esquerdaAtivos[6] = false
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
                    esquerdaAtivos[6] = false
                }
            }
        } else if (esquerdaAtivos[6]) {
            esquerdaTorreElementoComprar[esquerdaUpgradesMostrar].onclick()
        }
    }
    else if (event.keyCode === 84) {
        // T
        if (esquerdaAtivos[2] && esquerdaBrocasEstados[esquerdaBrocas]) {
            esquerdaBrocasEstados[esquerdaBrocas] = false
            clickBrocaAzul = esquerdaBrocas
            deletarBroca()
        }
    }
}