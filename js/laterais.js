var lateralMatriz = [["lateral-soldados", false], ["lateral-brocas", false]]
function abrirLateral(_numLateral) {
    for (let i = 0; i < lateralMatriz.length; i++) {
        if (_numLateral === i && lateralMatriz[i][1]) {
            lateralMatriz[i][1] = false
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 0px;`
        } else if (_numLateral === i) {
            lateralMatriz[i][1] = true
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 400px;`
        } else {
            lateralMatriz[i][1] = false
            document.getElementById(lateralMatriz[i][0]).style.cssText += `width: 0px;`
        }
    }
}