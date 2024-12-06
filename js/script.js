const tabelaColisao = []
const tabelaColisaoTamanho = 500
let unidadeMensagemColisao = [(_colisao, _inimigo) => {}]
let unidadeIndex = 1
let caminhoAlteracoes = 0

const tabelaCaminhoTamanho = 50
const tabelaCaminho = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]

for (let i = 0; i < Math.floor(2000/tabelaColisaoTamanho); i++) {
    tabelaColisao.push([])
    for (let e = 0; e < Math.floor(1000/tabelaColisaoTamanho); e++) {
        tabelaColisao[i].push([])
    }
}
tabelaColisao[0][0].push(['alvo', 0, 'vermelho', 'circulo', 50, 150, 425, 225])

function criarUnidade() {
    let _x = Math.floor(Math.random()*200)
    let _y = Math.floor(Math.random()*950)
    let _xposicaoTabela = Math.floor(_x/tabelaCaminhoTamanho)
    let _yposicaoTabela = Math.floor(_y/tabelaCaminhoTamanho)
    let _element = document.createElement('div')
    let _unidadeVelocidade = 1
    let _unidadeRange = 150
    let _unidadeTamanho = 50
    let _unidadeIndexCopy = unidadeIndex

    let _caminhotab = []
    let _caminhoPercorrido = Math.floor((_x+25)/tabelaCaminhoTamanho)
    let _caminhoAlteracoesCopy = caminhoAlteracoes
    let _caminhoTrue = false

    let _alvoTrue = false
    let _alvoTabela = []
    let _monerDistancia = [0, 1000]

    let _xcord1 = _x+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x+_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x+_unidadeRange+(_unidadeTamanho/2)
    let _xcord2 = _x-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x-_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x-_unidadeRange+(_unidadeTamanho/2)
    let _ycord1 = _y+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y+_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y+_unidadeRange+(_unidadeTamanho/2)
    let _ycord2 = _y-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y-_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y-_unidadeRange+(_unidadeTamanho/2)

    _element.style.top = `${_y}px`
    _element.style.left = `${_x}px`
    _element.id = `fuzileiro${unidadeIndex}`
    _element.className = 'fuzileiro'
    tabelaCaminho[_yposicaoTabela][_xposicaoTabela] = 'B'

    unidadeMensagemColisao.push((_colisao, _inimigo) => {
        let _inimigoIndex = -1
        for (let i = 0; i < _alvoTabela.length; i++) {
            if (_inimigo[0] == _alvoTabela[i][0]) {
                _inimigoIndex = i
            }
        }
        if (_colisao && _inimigoIndex == -1) {
            let _xposicaoTabelaUnid = Math.floor(_x/tabelaCaminhoTamanho)
            let _yposicaoTabelaUnid = Math.floor(_y/tabelaCaminhoTamanho)
            let _xposicaoTabelaIni = Math.floor(_inimigo[6]/tabelaCaminhoTamanho)
            let _yposicaoTabelaIni = Math.floor(_inimigo[7]/tabelaCaminhoTamanho)
            let _obstaculoCaminhoTrue = true
            while (true) {
                if (_xposicaoTabelaUnid - _xposicaoTabelaIni < 0) {
                    _xposicaoTabelaUnid++
                } else if (_xposicaoTabelaUnid - _xposicaoTabelaIni > 0) {
                    _xposicaoTabelaUnid--
                }
                if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
                    if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
                        _obstaculoCaminhoTrue = false
                        break
                    }
                } else {
                    break
                }
                if (_yposicaoTabelaUnid - _yposicaoTabelaIni < 0) {
                    _yposicaoTabelaUnid++
                } else if (_yposicaoTabelaUnid - _yposicaoTabelaIni > 0) {
                    _yposicaoTabelaUnid--
                }
                if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
                    if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
                        _obstaculoCaminhoTrue = false
                        break
                    }
                } else {
                    break
                }
            }
            if (_obstaculoCaminhoTrue) {
                document.getElementById(_element.id).style.backgroundColor = 'red'
                document.getElementById(_inimigo[0]).style.backgroundColor = 'red'
                _alvoTrue = true
                _alvoTabela.push(_inimigo)
            } else {
                _alvoTabela.splice(_inimigoIndex, 1)
                _alvoTabela.length == 0 ? _alvoTrue = false : 0
            }
        } else if (!_colisao && _inimigoIndex != -1) {
            _alvoTabela.splice(_inimigoIndex, 1)
            _alvoTabela.length == 0 ? _alvoTrue = false : 0
        }
    })

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
        _xcord1 = _x+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x+_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x+_unidadeRange+(_unidadeTamanho/2)
        _xcord2 = _x-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _x-_unidadeRange+(_unidadeTamanho/2) >= 1990 ? 1990 : _x-_unidadeRange+(_unidadeTamanho/2)
        _ycord1 = _y+_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y+_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y+_unidadeRange+(_unidadeTamanho/2)
        _ycord2 = _y-_unidadeRange+(_unidadeTamanho/2) < 0 ? 1 : _y-_unidadeRange+(_unidadeTamanho/2) >= 990 ? 990 : _y-_unidadeRange+(_unidadeTamanho/2)
        tabelaColisao[Math.floor(_xcord2/tabelaColisaoTamanho)][Math.floor(_ycord2/tabelaColisaoTamanho)].push([_element.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2)])
        if (Math.floor(_xcord2/tabelaColisaoTamanho) != Math.floor((_xcord1)/tabelaColisaoTamanho)) {
            if (Math.floor(_ycord2/tabelaColisaoTamanho) != Math.floor((_ycord1)/tabelaColisaoTamanho)) {
                tabelaColisao[Math.floor((_xcord1)/tabelaColisaoTamanho)][Math.floor((_ycord1)/tabelaColisaoTamanho)].push([_element.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2)])
            }
            tabelaColisao[Math.floor((_xcord1)/tabelaColisaoTamanho)][Math.floor(_ycord2/tabelaColisaoTamanho)].push([_element.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2)])
        }
        if (Math.floor(_ycord2/tabelaColisaoTamanho) != Math.floor((_ycord1)/tabelaColisaoTamanho)) {
            tabelaColisao[Math.floor(_xcord2/tabelaColisaoTamanho)][Math.floor((_ycord1)/tabelaColisaoTamanho)].push([_element.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRange, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2)])
        }
    }

    let _unidadeColisaoMovimento = () => {
        if (_alvoTabela.length==0) return
        for (let i = 0; i < _alvoTabela.length; i++) {
            if (_alvoTabela[i][3] == 'circulo') {
                if (_monerDistancia[1] > ((_alvoTabela[i][6] - _x) ** 2 + (_alvoTabela[i][7] - _y) ** 2) ** 0.5) {
                    _monerDistancia[1] = ((_alvoTabela[i][6] - _x) ** 2 + (_alvoTabela[i][7] - _y) ** 2) ** 0.5
                    _monerDistancia[0] = i
                }
            }
        }

        let _unidadeAlvoXY = [_alvoTabela[_monerDistancia[0]][7]-(_unidadeTamanho/2), _alvoTabela[_monerDistancia[0]][6]-(_unidadeTamanho/2)]
        let _a = (_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)
        let _b = _y - (((_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)) * _x)
        psliderDist = ((_unidadeAlvoXY[1] - _x) ** 2 + (_unidadeAlvoXY[0] - _y) ** 2) ** 0.5
        if (_x > _unidadeAlvoXY[1]) {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        else {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        _element.style.top = `${_y}px`
        _element.style.left = `${_x}px`
        if (psliderDist <= 5) {
            console.log('chegou')
        }
    }

    let _unidadeVisaoCaminho = () => {
        _caminhoAlteracoesCopy = caminhoAlteracoes
        _caminhotab = []
        let _tabelaCaminhoCopy = []
        for (let i = 0; i < tabelaCaminho.length; i++) {
            _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminho[i]))
        }
        let _xytab = [[Math.floor((_y+25)/tabelaCaminhoTamanho), Math.floor((_x+25)/tabelaCaminhoTamanho)]]
        let e = 1
        let breackWhile = true
        let _xytabInicio = []
        _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0
        while (breackWhile && e < 200) {
            let _xytabSub = []
            let _verificacao = 0
            for (let i = 0; i < _xytab.length; i++) {
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]-1] == '.' && _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == '.' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]-1, _xytab[i][1]-1])
                    _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]-1] = e
                    _verificacao++
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]-1, _xytab[i][1]])
                    _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] = e
                    _verificacao++
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]+1] == '.' && _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == '.' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]-1, _xytab[i][1]+1])
                    _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]+1] = e
                    _verificacao++
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0], _xytab[i][1]-1])
                    _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] = e
                    _verificacao++
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0], _xytab[i][1]+1])
                    _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] = e
                    _verificacao++
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]-1] == '.' && _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == '.' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == '.' : false){
                    _xytabSub.push([_xytab[i][0]+1, _xytab[i][1]-1])
                    _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]-1] = e
                    _verificacao++
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]+1, _xytab[i][1]])
                    _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] = e
                    _verificacao++
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]+1] == '.' && _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == '.' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == '.' : false) {
                    _xytabSub.push([_xytab[i][0]+1, _xytab[i][1]+1])
                    _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]+1] = e
                    _verificacao++
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]-1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]-1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]-1 >= 0 && _xytab[i][0]-1 < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]+1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]-1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]-1, _xytab[i][1]+1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]-1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0] >= 0 && _xytab[i][0] < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0], _xytab[i][1]+1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1]-1 >= 0 && _xytab[i][1]-1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]-1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]-1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]-1]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1] >= 0 && _xytab[i][1] < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]]
                    breackWhile = false
                    _verificacao++
                    break
                }
                if (_xytab[i][0]+1 >= 0 && _xytab[i][0]+1 < 20 && _xytab[i][1]+1 >= 0 && _xytab[i][1]+1 < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]+1] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]+1][_xytab[i][1]] == 'A' && _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+1] == 'A' : false) {
                    _xytabInicio = [_xytab[i][0]+1, _xytab[i][1]+1]
                    breackWhile = false
                    _verificacao++
                    break
                }
            }
            if (_verificacao == 0) {
                breackWhile = false
                _caminhoTrue = false
                return
            } else {
                _caminhoTrue = true
            }
            _xytab = _xytabSub
            e++
        }
        let _xytabMin = []
        let _numtabMin = e+1
        let _numindMin = 0
        e=0
        while (true && e < 200) {
            e++
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]-1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]-1], _tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 20 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]], _tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]])
            }
            if (_xytabInicio[0]-1 >= 0 && _xytabInicio[0]-1 < 20 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]+1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0]-1, _xytabInicio[1]+1], _tabelaCaminhoCopy[_xytabInicio[0]-1][_xytabInicio[1]+1]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]-1], _tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0], _xytabInicio[1]+1], _tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]-1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false){
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]-1], _tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]-1]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 20 && _xytabInicio[1] >= 0 && _xytabInicio[1] < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]) : false) {
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]], _tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]])
            }
            if (_xytabInicio[0]+1 >= 0 && _xytabInicio[0]+1 < 20 && _xytabInicio[1]+1 >= 0 && _xytabInicio[1]+1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]+1]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]+1]) : false) {
                _xytabMin.push([[_xytabInicio[0]+1, _xytabInicio[1]+1], _tabelaCaminhoCopy[_xytabInicio[0]+1][_xytabInicio[1]+1]])
            }
            for (let i = 0; i < _xytabMin.length; i++) {
                if (_numtabMin > _xytabMin[i][1]) {
                    _numtabMin = _xytabMin[i][1]
                    _numindMin = i
                }
            }
            if (_xytabInicio[0] >= 0 && _xytabInicio[0] < 20 && _xytabInicio[1]-1 >= 0 && _xytabInicio[1]-1 < 40 ? !isNaN(_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]) : false) {
                _tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1]
                if (_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]-1] == _numtabMin) {
                    _xytabInicio = [_xytabInicio[0], _xytabInicio[1]-1]
                } else {
                    _xytabInicio = _xytabMin[_numindMin][0]
                }
            } else {
                _xytabInicio = _xytabMin[_numindMin][0]
            }
            _caminhotab.push(_xytabInicio)
            if (_tabelaCaminhoCopy[_xytabInicio[0]][_xytabInicio[1]] <= 1) {
                _caminhotab.reverse()
                break
            }
        }
    }
    _unidadeVisaoCaminho()

    let _movimentoCaminho = () => {
        let _unidadeAlvoXY = [Math.max(_caminhotab[_caminhoPercorrido][0]*tabelaCaminhoTamanho), Math.max(1, _caminhotab[_caminhoPercorrido][1]*tabelaCaminhoTamanho)]
        let _a = (_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)
        let _b = _y - (((_unidadeAlvoXY[0] - _y) / (_unidadeAlvoXY[1] - _x)) * _x)
        psliderDist = ((_unidadeAlvoXY[1] - _x) ** 2 + (_unidadeAlvoXY[0] - _y) ** 2) ** 0.5
        if (_x > _unidadeAlvoXY[1]) {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x -= _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        else {
            if (_a < 0) {
                if (Math.abs(_a) > 1) {
                    _y -= _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
            else {
                if (Math.abs(_a) > 1) {
                    _y += _unidadeVelocidade
                    _x = (_y - _b) / _a
                }
                else {
                    _x += _unidadeVelocidade
                    _y = (_x * _a) + _b
                }
            }
        }
        _element.style.top = `${_y}px`
        _element.style.left = `${_x}px`
        if (psliderDist <= 5) {
            _caminhoPercorrido + 1 < _caminhotab.length-1 ? _caminhoPercorrido++ : console.log('erro')
        }
    }

    let _movimentoReto = () => {
        _x++
        _element.style.left = `${_x}px`
    }

    _caminhoPercorrido = 0
    let _unidadeIntervalo = setInterval(() => {
        if (Math.floor(_x/tabelaCaminhoTamanho) != _xposicaoTabela || Math.floor(_y/tabelaCaminhoTamanho) != _yposicaoTabela ) {
        }
        _unidadeColisao()
        _caminhoAlteracoesCopy != caminhoAlteracoes ? _unidadeVisaoCaminho() : 0
        if (_alvoTrue) {
            _unidadeColisaoMovimento()
        } else if (_caminhoTrue) {
            _movimentoCaminho()
        } else {
            _unidadeVisaoCaminho()
            _movimentoReto()
        }
    }, 10);
    document.body.appendChild(_element)
    unidadeIndex++
}

setInterval(() => {
    for (let i = 0; i < tabelaColisao.length; i++) {
        for (let e = 0; e < tabelaColisao[i].length; e++) {
            if (tabelaColisao[i][e].length > 1) {
                for (let a = 0; a < tabelaColisao[i][e].length; a++) {
                    for (let x = 0; x < tabelaColisao[i][e].length; x++) {
                        if (tabelaColisao[i][e][a][2] != tabelaColisao[i][e][x][2] && x != a) {
                            if (tabelaColisao[i][e][a][3] == 'circulo' && tabelaColisao[i][e][x][3] == 'circulo') {
                                if ((((tabelaColisao[i][e][a][6] - tabelaColisao[i][e][x][6])**2) + ((tabelaColisao[i][e][a][7] - tabelaColisao[i][e][x][7])**2))**0.5 < (tabelaColisao[i][e][a][5] + (tabelaColisao[i][e][x][4]/2))) {
                                    unidadeMensagemColisao[tabelaColisao[i][e][a][1]](true, tabelaColisao[i][e][x])
                                } else {
                                    unidadeMensagemColisao[tabelaColisao[i][e][a][1]](false, tabelaColisao[i][e][x])
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, 100);

// setInterval(() => {
//     for (let i = 0; i < tabelaColisao.length; i++) {
//         for (let e = 0; e < tabelaColisao[i].length; e++) {
//             if (tabelaColisao[i][e].length > 1) {
//                 for (let a = 0; a < tabelaColisao[i][e].length; a++) {
//                     for (let x = 0; x < tabelaColisao[i][e].length; x++) {
//                         if (tabelaColisao[i][e][a][2] != tabelaColisao[i][e][x][2] && x != a) {
//                             if (tabelaColisao[i][e][a][3] == 'circulo' && tabelaColisao[i][e][x][3] == 'circulo') {
//                                 if ((((tabelaColisao[i][e][a][6] - tabelaColisao[i][e][x][6])**2) + ((tabelaColisao[i][e][a][7] - tabelaColisao[i][e][x][7])**2))**0.5 < (tabelaColisao[i][e][a][5] + (tabelaColisao[i][e][x][4]/2))) {
//                                     // let _xposicaoTabelaUnid = Math.floor(tabelaColisao[i][e][a][6]/tabelaCaminhoTamanho)
//                                     // let _yposicaoTabelaUnid = Math.floor(tabelaColisao[i][e][a][7]/tabelaCaminhoTamanho)
//                                     // let _xposicaoTabelaIni = Math.floor(tabelaColisao[i][e][x][6]/tabelaCaminhoTamanho)
//                                     // let _yposicaoTabelaIni = Math.floor(tabelaColisao[i][e][x][7]/tabelaCaminhoTamanho)
//                                     // let _obstaculoCaminhoTrue = true
//                                     // // console.log('tchau');
//                                     // // console.log(_xposicaoTabelaUnid)
//                                     // // console.log(_yposicaoTabelaUnid)
//                                     // // console.log(tabelaColisao[i][e][x][6])
//                                     // // console.log(tabelaColisao[i][e][x][7])
//                                     // // console.log(tabelaColisao[i][e][x][0])
//                                     // // console.log('ola');
//                                     // while (true) {
//                                     //     if (_xposicaoTabelaUnid - _xposicaoTabelaIni < 0) {
//                                     //         _xposicaoTabelaUnid++
//                                     //     } else if (_xposicaoTabelaUnid - _xposicaoTabelaIni > 0) {
//                                     //         _xposicaoTabelaUnid--
//                                     //     }
//                                     //     if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
//                                     //         if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
//                                     //             _obstaculoCaminhoTrue = false
//                                     //             break
//                                     //         }
//                                     //     } else {
//                                     //         break
//                                     //     }
//                                     //     if (_yposicaoTabelaUnid - _yposicaoTabelaIni < 0) {
//                                     //         _yposicaoTabelaUnid++
//                                     //     } else if (_yposicaoTabelaUnid - _yposicaoTabelaIni > 0) {
//                                     //         _yposicaoTabelaUnid--
//                                     //     }
//                                     //     if (_xposicaoTabelaUnid != _xposicaoTabelaIni || _yposicaoTabelaUnid != _yposicaoTabelaIni) {
//                                     //         if (tabelaCaminho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
//                                     //             _obstaculoCaminhoTrue = false
//                                     //             break
//                                     //         }
//                                     //     } else {
//                                     //         break
//                                     //     }
//                                     // }
//                                     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](true, tabelaColisao[i][e][x])
//                                     // if (_obstaculoCaminhoTrue) {
//                                     //     document.getElementById(tabelaColisao[i][e][a][0]).style.backgroundColor = 'red'
//                                     //     document.getElementById(tabelaColisao[i][e][x][0]).style.backgroundColor = 'red'
//                                     //     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](true, tabelaColisao[i][e][x])
//                                     // } else {
//                                     //     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](false, tabelaColisao[i][e][x])
//                                     // }
//                                 } else {
//                                     unidadeMensagemColisao[tabelaColisao[i][e][a][1]](false, tabelaColisao[i][e][x])
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }, 100);

criarUnidade()
criarUnidade()


// setInterval(() => {
//     criarUnidade()
// }, 200)

// setInterval(() => {
//     let _ind1 = Math.floor(Math.random()*(tabelaCaminho.length-1))
//     let _ind2 = Math.floor(Math.random()*(tabelaCaminho[_ind1].length-1))
//     tabelaCaminho[_ind1][_ind2] = 'B'
//     tabelaCaminho[9][22] = 'B'
//     caminhoAlteracoes++
// }, 500);

setTimeout(() => {
    let _ind1 = Math.floor(Math.random()*(tabelaCaminho.length-1))
    let _ind2 = Math.floor(Math.random()*(tabelaCaminho[_ind1].length-1))
    tabelaCaminho[_ind1][_ind2] = 'B'
    tabelaCaminho[9][22] = 'B'
    caminhoAlteracoes++
}, 5000);