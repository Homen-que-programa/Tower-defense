const tabelaColisao = []
const tabelaColisaoTamanho = 250
let fuzileiroIdCont = 0

const tabelaCaminho = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]

for (let i = 0; i < Math.floor(2000/tabelaColisaoTamanho); i++) {
    tabelaColisao.push([])
    for (let e = 0; e < Math.floor(1000/tabelaColisaoTamanho); e++) {
        tabelaColisao[i].push([])
    }
}

function criarUnidade() {
    let _x = 0
    let _y = Math.floor(Math.random()*950)
    let _element = document.createElement('div')
    let _caminhotab = []
    let _caminhoPercorrido = Math.floor((_x+25)/50)
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
        tabelaColisao[Math.floor(_x/tabelaColisaoTamanho)][Math.floor(_y/tabelaColisaoTamanho)].push([_element.id, _x+25, _y+25])
        if (Math.floor(_x/tabelaColisaoTamanho) != Math.floor((_x+50)/tabelaColisaoTamanho)) {
            if (Math.floor(_y/tabelaColisaoTamanho) != Math.floor((_y+50)/tabelaColisaoTamanho)) {
                tabelaColisao[Math.floor((_x+50)/tabelaColisaoTamanho)][Math.floor((_y+50)/tabelaColisaoTamanho)].push([_element.id, _x+25, _y+25])
            }
            tabelaColisao[Math.floor((_x+50)/tabelaColisaoTamanho)][Math.floor(_y/tabelaColisaoTamanho)].push([_element.id, _x+25, _y+25])
        }
        if (Math.floor(_y/tabelaColisaoTamanho) != Math.floor((_y+50)/tabelaColisaoTamanho)) {
            tabelaColisao[Math.floor(_x/tabelaColisaoTamanho)][Math.floor((_y+50)/tabelaColisaoTamanho)].push([_element.id, _x+25, _y+25])
        }
    }
    _unidadeColisao()

    let _unidadeVisao = () => {
        let tabelaMomentanea = tabelaCaminho
        let _xytab = [[Math.floor((_y+25)/50), Math.floor((_x+25)/50)]]
        let e = 1
        let breackWhile = true
        tabelaMomentanea[_xytab[0][0]][_xytab[0][1]] = 0
        while (breackWhile) {
            let _xytabSub = []
            for (let i = 0; i < _xytab.length; i++) {
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]-1, _xytab[i][1]])
                    tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]] = e
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]-1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0], _xytab[i][1]-1])
                    tabelaMomentanea[_xytab[i][0]][_xytab[i][1]-1] = e
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]+1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0], _xytab[i][1]+1])
                    tabelaMomentanea[_xytab[i][0]][_xytab[i][1]+1] = e
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]+1, _xytab[i][1]])
                    tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]] = e
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? tabelaMomentanea[_xytab[i][0]-1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]-1]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? tabelaMomentanea[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]+1]
                    breackWhile = false
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? tabelaMomentanea[_xytab[i][0]+1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]]
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
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 20 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 40 ? !isNaN(tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]], tabelaMomentanea[_xytabInicio[0]-1][_xytabInicio[1]]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]-1], tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 40 ? !isNaN(tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]+1], tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]+1]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 20 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 40 ? !isNaN(tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]], tabelaMomentanea[_xytabInicio[0]+1][_xytabInicio[1]]])
            }
            for (let i = 0; i < _xytabMin.length; i++) {
                if (_numtabMin > _xytabMin[i][1]) {
                    _numtabMin = _xytabMin[i][1]
                    _numindMin = i
                }
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(tabelaMomentanea[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
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
        }
        console.log(tabelaMomentanea)
        console.log(_caminhotab)
    }
    _unidadeVisao()

    let _unidadeMovimento = setInterval(() => {
        _caminhoPercorrido = _caminhotab.length-Math.floor((_x)/50)-1
        console.log(_caminhotab.length-Math.floor((_x)/50)-1);
        let _velocidade = 1
        let _unidadeAlvoXY = [_caminhotab[_caminhoPercorrido][0]*50, _caminhotab[_caminhoPercorrido][1]*50]
        let _a = (_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)
        let _b = _y - (((_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)) * _x)
        psliderDist = ((_unidadeAlvoXY[1] - _x) ** 2 + (_unidadeAlvoXY[0] - _y) ** 2) ** 0.5
        if (_x > _unidadeAlvoXY[1]) {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y += _velocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _velocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y -= _velocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _velocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        else {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y -= _velocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _velocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y += _velocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _velocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        _element.style.top = `${_y}px`
        _element.style.left = `${_x}px`
        if (psliderDist <= 5) {
            console.log('chegou')
        }
    }, 10);
    document.body.appendChild(_element)
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