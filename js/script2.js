const tabelaColisao = []
const tabelaTamanho = 250
let fuzileiroIdCont = 0

const tabelaCaminho = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]

for (let i = 0; i < Math.floor(2000/tabelaTamanho); i++) {
    tabelaColisao.push([])
    for (let e = 0; e < Math.floor(1000/tabelaTamanho); e++) {
        tabelaColisao[i].push([])
    }
}

function criarUnidade() {
    // infoUnidades.push({_x, _y, _element, _caminhotab, _caminhoPercorrido, tabelaMomentanea, _xytab, _xytabSub, _xytabInicio, e, breackWhile, _xytabMin, _numtabMin, _numindMin, _velocidade, _unidadeAlvoXY, _a, _b})
    infoUnidades.push([0, Math.floor(Math.random()*950), document.createElement('div'), [], 0, tabelaCaminho, [], [], [], 1, true, [], 0, 0, 1, [], 0, 0])
    let _x = 0
    let _y = Math.floor(Math.random()*950)
    let _element = document.createElement('div')
    let _caminhotab = []
    _element.style.top = `${_y}px`
    _element.style.left = `${_x}px`
    _element.id = `fuzileiro${fuzileiroIdCont}`
    _element.className = 'fuzileiro'

    let _unidadeColisao = () => {
        for (let i = 0; i < tabelaColisao.length; i++) {
            for (let e = 0; e < tabelaColisao[i].length; e++) {
                for (let a = 0; a < tabelaColisao[i][e].length; a++) {
                    if (tabelaColisao[i][e][a][0] == _element.id) {
                        tabelaColisao[i][e].splice(a, 1)
                    }
                }
            }
        }
        tabelaColisao[Math.floor(_x/tabelaTamanho)][Math.floor(_y/tabelaTamanho)].push([_element.id, _x+25, _y+25])
        if (Math.floor(_x/tabelaTamanho) != Math.floor((_x+50)/tabelaTamanho)) {
            if (Math.floor(_y/tabelaTamanho) != Math.floor((_y+50)/tabelaTamanho)) {
                tabelaColisao[Math.floor((_x+50)/tabelaTamanho)][Math.floor((_y+50)/tabelaTamanho)].push([_element.id, _x+25, _y+25])
            }
            tabelaColisao[Math.floor((_x+50)/tabelaTamanho)][Math.floor(_y/tabelaTamanho)].push([_element.id, _x+25, _y+25])
        }
        if (Math.floor(_y/tabelaTamanho) != Math.floor((_y+50)/tabelaTamanho)) {
            tabelaColisao[Math.floor(_x/tabelaTamanho)][Math.floor((_y+50)/tabelaTamanho)].push([_element.id, _x+25, _y+25])
        }
    }
    _unidadeColisao()

    let _unidadeVisao = () => {
        let tabelaMomentanea = tabelaCaminho
        let _xytab = [[Math.floor((_y+25)/100), Math.floor((_x+25)/100)]]
        let e = 1
        let breackWhile = true
        tabelaMomentanea[_xytab[0][0]][_xytab[0][1]] = 0
        while (breackWhile) {
            let _xytabSub = []
            let _xytabInicio
            for (let i = 0; i < _xytab.length; i++) {
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 10 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 20 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]-1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]-1, _xytab[i][1]-1])
                    tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]-1] = e
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 10 && _xytab[i][1] >= 0 && _xytab[i][1] < 20 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]-1, _xytab[i][1]])
                    tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]] = e
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 10 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 20 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]+1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]-1, _xytab[i][1]+1])
                    tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]+1] = e
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 10 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 20 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]-1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0], _xytab[i][1]-1])
                    tabelaMomentanea[_xytab[i][0]][_xytab[i][1]-1] = e
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 10 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 20 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]+1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0], _xytab[i][1]+1])
                    tabelaMomentanea[_xytab[i][0]][_xytab[i][1]+1] = e
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 10 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 20 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]-1] == '.' : false){
                    _xytabSub.push([_xytab[i][0]+1, _xytab[i][1]-1])
                    tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]-1] = e
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 10 && _xytab[i][1] >= 0 && _xytab[i][1] < 20 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]+1, _xytab[i][1]])
                    tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]] = e
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 10 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 20 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]+1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]+1, _xytab[i][1]+1])
                    tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]+1] = e
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 10 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 20 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]-1]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 10 && _xytab[i][1] >= 0 && _xytab[i][1] < 20 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 10 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 20 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]+1]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 10 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 20 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]-1]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 10 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 20 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]+1]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 10 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 20 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]-1]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 10 && _xytab[i][1] >= 0 && _xytab[i][1] < 20 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 10 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 20 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]+1]
                    breackWhile = false
                    break
                }
            }
            _xytab = _xytabSub
            e++
        }
        let _xytabMin = []
        let _numtabMin = e+1
        let _numindMin = 0
        while (true) {
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 10 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]-1]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]-1], tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 10 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]], tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]]])
            }
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 10 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]+1], tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]+1]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 10 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]-1], tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 10 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]+1], tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]+1]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 10 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]-1]) : false){
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]-1], tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 10 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]], tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 10 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]+1], tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]+1]])
            }
            for (let i = 0; i < _xytabMin.length; i++) {
                if (_numtabMin > _xytabMin[i][1]) {
                    _numtabMin = _xytabMin[i][1]
                    _numindMin = i
                }
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 10 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 20 ? !isNaN(tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1]
                if (tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1] == _numtabMin) {
                    _xytabInicio = [_xytabInicio[0], _xytabInicio[1]-1]
                } else {
                    _xytabInicio = _xytabMin[_numindMin][0]
                }
            } else {
                _xytabInicio = _xytabMin[_numindMin][0]
            }
            _caminhotab.push(_xytabInicio)
            if (tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]] <= 1) {
                break
            }
            tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]] = '.'
        }
        console.log(tabelaMomentanea)
        console.log(_caminhotab)
    }
    _unidadeVisao()
    document.body.appendChild(_element)
    setInterval(() => {
        
    }, 100);
    fuzileiroIdCont++
}

setInterval(() => {
    for (let i = 0; i < tabelaColisao.length; i++) {
        for (let e = 0; e < tabelaColisao[i].length; e++) {
            if (tabelaColisao[i][e].length > 1) {
                for (let a = 0; a < tabelaColisao[i][e].length; a++) {
                    for (let x = a+1; x < tabelaColisao[i][e].length; x++) {
                        if ((((tabelaColisao[i][e][a][1] - tabelaColisao[i][e][x][1])**2) + ((tabelaColisao[i][e][a][2] - tabelaColisao[i][e][x][2])**2))**0.5 < 50) {
                            document.getElementById(tabelaColisao[i][e][a][0]).style.backgroundColor = 'red'
                            document.getElementById(tabelaColisao[i][e][x][0]).style.backgroundColor = 'red'
                        }
                    }
                }
            }            
        }
    }
}, 100);

criarUnidade()