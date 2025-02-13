let unidadeInformacao = []
let unidadeMensagemColisao = []
let unidadeIndex = 0
let caminhoAlteracoes = 0

const baseAzulPosition = [450, 1975]
let baseAzulVida = 1500
const baseAzulBarraId = document.getElementById('base-azul-barra')

const baseVermelhoPosition = [450, 25]
let baseVermelhoVida = 1500

const baseVermelhoBarraId = document.getElementById('base-vermelho-barra')

const tabelaCaminhoTamanho = 50
const tabelaCaminho = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['C', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'A'],
    ['C', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]
const tabelaCaminhoAzul = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['C', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'A'],
    ['C', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'A'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]
const tabelaCaminhoVermelho = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['A', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'C'],
    ['A', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'C'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.']
]

function criarUnidadeAzul(x, y, vida, dano, danoV, velocidade, visao, range, tamanho, cor) {
    let _x = x
    let _y = y
    let _xposicaoTabela = Math.floor(_x/tabelaCaminhoTamanho)
    let _yposicaoTabela = Math.floor(_y/tabelaCaminhoTamanho)
    let _unidadeElement = document.createElement('div')
    let _unidadeElementVida = document.createElement('div')

    let _unidadeVida = vida
    let _unidadeAtackDano = dano
    let _unidadeAtackVelocidade = danoV
    let _unidadeVelocidade = velocidade
    let _unidadeRangeVisao = visao
    let _unidadeRange = range
    let _unidadeTamanho = tamanho
    let _unidadeIndexCopy = unidadeIndex

    let _caminhotab = []
    let _caminhoAlteracoesCopy = caminhoAlteracoes

    let _alvoTrue = false
    let _alvoTabela = []
    let _monerDistancia = [0, 1000]

    let _atackTrue = false
    let _atackLoad
    let _atackAlvo
    
    let _chegadaTrue = false

    _unidadeElement.style.top = `${_y}px`
    _unidadeElement.style.left = `${_x}px`
    _unidadeElement.style.width = `${_unidadeTamanho}px`
    _unidadeElement.style.height = `${_unidadeTamanho}px`
    _unidadeElement.style.cssText += cor
    _unidadeElement.id = `fuzileiro${unidadeIndex}`
    _unidadeElement.className = 'fuzileiro'

    _unidadeElement.id = `barra-vida${unidadeIndex}`
    _unidadeElementVida.className = 'barra-vida'

    document.getElementById('corpo').appendChild(_unidadeElement)
    _unidadeElement.appendChild(_unidadeElementVida)

    // tabelaCaminhoAzul[_yposicaoTabela][_xposicaoTabela] = 'B'
    unidadeInformacao.push([_unidadeElement.id, _unidadeIndexCopy, 'azul', 'circulo', _unidadeTamanho, _unidadeRangeVisao, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])

    let _unidadeColisao = () => {
        unidadeInformacao[_unidadeIndexCopy][6] = _x+(_unidadeTamanho/2)
        unidadeInformacao[_unidadeIndexCopy][7] = _y+(_unidadeTamanho/2)
    }

    unidadeMensagemColisao.push((_colisao, _inimigo) => {
        let _inimigoIndex = -1
        for (let i = 0; i < _alvoTabela.length; i++) {
            if (_inimigo[0] == _alvoTabela[i][0]) {
                _inimigoIndex = i
            }
        }
        if (_colisao && _inimigoIndex === -1) {
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
                    if (tabelaCaminhoAzul[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
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
                    if (tabelaCaminhoAzul[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
                        _obstaculoCaminhoTrue = false
                        break
                    }
                } else {
                    break
                }
            }
            if (_obstaculoCaminhoTrue) {
                _alvoTrue = true
                _alvoTabela.push(_inimigo)
            } else {
                _alvoTabela.splice(_inimigoIndex, 1)
                _alvoTabela.length === 0 ? _alvoTrue = false : 0
            }
        } else if (_colisao && _inimigoIndex !== -1) {
            _alvoTabela[_inimigoIndex][6] = _inimigo[6]
            _alvoTabela[_inimigoIndex][7] = _inimigo[7]
            _alvoTabela[_inimigoIndex][1] = _inimigo[1]
        } else if (!_colisao && _inimigoIndex !== -1) {
            _alvoTabela.splice(_inimigoIndex, 1)
            _alvoTabela.length === 0 ? _alvoTrue = false : 0
        }
    })

    
    let _unidadeChegadaMovimento = () => {
        let _unidadeAlvoXY = [baseAzulPosition[0]-(_unidadeTamanho/2), baseAzulPosition[1]-(_unidadeTamanho/2)]
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
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= _unidadeRange) {
            _chegadaTrue = true
            _atackLoad = setInterval(() => {
                if (baseVermelhoVida - _unidadeAtackDano < 0) {
                    baseVermelhoVida = 0
                    baseVermelhoBarraId.style.width = `${baseVermelhoVida}px`
                } else {
                    baseVermelhoVida -= _unidadeAtackDano
                    baseVermelhoBarraId.style.width = `${Math.floor(baseVermelhoVida/3)}px`
                }
            }, _unidadeAtackVelocidade)
        }
    }

    let _unidadeColisaoMovimento = () => {
        if (_alvoTabela.length==0) return
        for (let i = 0; i < _alvoTabela.length; i++) {
            if (_alvoTabela[i][1] == 'morto') {
                _alvoTabela.splice(i, 1)
                if (_alvoTabela.length==0) {
                    _monerDistancia = [0, 1000]
                    return
                }
            }
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
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= _unidadeRange) {
            _atackAlvo = _alvoTabela[_monerDistancia[0]]
            _atackTrue = true
            _atackLoad = setInterval(() => {
                psliderDist = ((_unidadeAlvoXY[1] - _x) ** 2 + (_unidadeAlvoXY[0] - _y) ** 2) ** 0.5
                if (psliderDist > _unidadeRange || unidadeInformacao[_atackAlvo[1]][1] === 'morto') {
                    _atackTrue = false
                    if (_alvoTabela.length > 0) {
                        _alvoTrue = true
                    } else {
                        _alvoTrue = false
                    }
                    clearInterval(_atackLoad)
                } else if (unidadeInformacao[_atackAlvo[1]][8] - _unidadeAtackDano < 0) {
                    _atackTrue = false
                    unidadeInformacao[_atackAlvo[1]][8] = 0
                    unidadeInformacao[_atackAlvo[1]][1] = 'morto'
                    _alvoTabela.splice(_monerDistancia[0], 1)
                    _atackAlvo = []
                    if (_alvoTabela.length > 0) {
                        _alvoTrue = true
                    } else {
                        _alvoTrue = false
                    }
                    clearInterval(_atackLoad)
                } else {
                    unidadeInformacao[_atackAlvo[1]][8] -= _unidadeAtackDano
                }
            }, _unidadeAtackVelocidade)
        }
        _monerDistancia = [0, 1000]
    }

    let _unidadeVisaoCaminho = () => {
        _caminhoAlteracoesCopy = caminhoAlteracoes
        _caminhotab = []
        let _tabelaCaminhoCopy = []
        for (let i = 0; i < tabelaCaminhoAzul.length; i++) {
            _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminhoAzul[i]))
        }
        let _xytab = [[Math.floor((_y+25)/tabelaCaminhoTamanho), Math.floor((_x+25)/tabelaCaminhoTamanho)]]
        let _e = 1
        let breackWhile = true
        let _xytabInicio = []
        _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0
        while (breackWhile && _e < 200) {
            let _xytabSub = []
            let _verificacao = 0
            for (let i = 0; i < _xytab.length; i++) {
                for (let _forI = -1; _forI < 2; _forI++) {
                    for (let _forE = -1; _forE < 2; _forE++) {
                        if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == '.' && (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]])) && (_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE])) : false) {
                            _xytabSub.push([_xytab[i][0]+_forI, _xytab[i][1]+_forE])
                            _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] = _e
                            _verificacao++
                        }
                    }
                }
                for (let _forI = -1; _forI < 2; _forI++) {
                    for (let _forE = -1; _forE < 2; _forE++) {
                        if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'A' || _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'V') : false) {
                            _xytabInicio = [_xytab[i][0]+_forI, _xytab[i][1]+_forE]
                            breackWhile = false
                            _verificacao++
                            break
                        }
                    }
                }
            }
            if (_verificacao == 0) {
                breackWhile = false
                for (let e = 0; e < _tabelaCaminhoCopy.length; e++) {
                    for (let a = 0; a < _tabelaCaminhoCopy[e].length; a++) {
                        if (_tabelaCaminhoCopy[e][a] === 'N') {
                            tabelaCaminhoVermelho[e][a] = 'V'
                            tabelaCaminhoAzul[e][a] = 'V'
                        }
                    }
                }
                _unidadeVisaoCaminho()
                caminhoAlteracoes++
                return
            }
            _xytab = _xytabSub
            _e++
        }
        let _xytabMin = []
        let _numtabMin = _e+1
        let _numindMin = 0
        _e=0
        while (true && _e < 200) {
            _e++
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
        let _unidadeAlvoXY = [Math.max(1, _caminhotab[0][0]*tabelaCaminhoTamanho), Math.max(1, _caminhotab[0][1]*tabelaCaminhoTamanho)]
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
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= _unidadeVelocidade * 5) {
            _unidadeVisaoCaminho()
        }
    }

    let _unidadeIntervalo = setInterval(() => {
        if (unidadeInformacao[_unidadeIndexCopy][8] <= 0) {
            clearInterval(_atackLoad)
            clearInterval(_unidadeIntervalo)
            document.getElementById('corpo').removeChild(_unidadeElement)
            console.log('morreu')
        }
        _unidadeVida = unidadeInformacao[_unidadeIndexCopy][8]
        _unidadeElementVida.style.width = `${_unidadeVida}px`
        _unidadeColisao()
        if (!_chegadaTrue) {
            if ((((baseAzulPosition[1] - _x) ** 2 + ((baseAzulPosition[0]+25) - _y) ** 2) ** 0.5 <  _unidadeRangeVisao - _unidadeTamanho + 50) || (((baseAzulPosition[1] - _x) ** 2 + ((baseAzulPosition[0]-25) - _y) ** 2) ** 0.5 <  _unidadeRangeVisao - _unidadeTamanho + 50)) {
                _unidadeChegadaMovimento()
            } else {
                _caminhoAlteracoesCopy != caminhoAlteracoes ? _unidadeVisaoCaminho() : 0
                if (_atackTrue) {
                    
                } else if (_alvoTrue) {
                    _unidadeColisaoMovimento()
                } else {
                    _movimentoCaminho()
                }
            }
            if (Math.floor(_x/tabelaCaminhoTamanho) != _xposicaoTabela || Math.floor(_y/tabelaCaminhoTamanho) != _yposicaoTabela) {
            }
        }
    }, 10)
    unidadeIndex++
}




































function criarUnidadeVermelho(x, y, vida, dano, danoV, velocidade, visao, range, tamanho, cor, XPmorte) {
    let _x = x
    let _y = y
    let _xposicaoTabela = Math.floor(_x/tabelaCaminhoTamanho)
    let _yposicaoTabela = Math.floor(_y/tabelaCaminhoTamanho)
    let _unidadeElement = document.createElement('div')
    let _unidadeElementVida = document.createElement('div')

    let _unidadeVida = vida
    let _unidadeAtackDano = dano
    let _unidadeAtackVelocidade = danoV
    let _unidadeVelocidade = velocidade
    let _unidadeRangeVisao = visao
    let _unidadeRange = range
    let _unidadeTamanho = tamanho
    let _unidadeIndexCopy = unidadeIndex

    let _caminhotab = []
    let _caminhoAlteracoesCopy = caminhoAlteracoes

    let _alvoTrue = false
    let _alvoTabela = []
    let _monerDistancia = [0, 1000]

    let _atackTrue = false
    let _atackLoad
    let _atackAlvo
    
    let _chegadaTrue = false

    _unidadeElement.style.top = `${_y}px`
    _unidadeElement.style.left = `${_x}px`
    _unidadeElement.style.width = `${_unidadeTamanho}px`
    _unidadeElement.style.height = `${_unidadeTamanho}px`
    _unidadeElement.style.cssText += cor
    _unidadeElement.id = `fuzileiro${unidadeIndex}`
    _unidadeElement.className = 'fuzileiro'

    _unidadeElement.id = `barra-vida${unidadeIndex}`
    _unidadeElementVida.className = 'barra-vida'

    document.getElementById('corpo').appendChild(_unidadeElement)
    _unidadeElement.appendChild(_unidadeElementVida)

    unidadeInformacao.push([_unidadeElement.id, _unidadeIndexCopy, 'vermelho', 'circulo', _unidadeTamanho, _unidadeRangeVisao, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])

    let _unidadeColisao = () => {
        unidadeInformacao[_unidadeIndexCopy][6] = _x+(_unidadeTamanho/2)
        unidadeInformacao[_unidadeIndexCopy][7] = _y+(_unidadeTamanho/2)
    }

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
                    if (tabelaCaminhoVermelho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
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
                    if (tabelaCaminhoVermelho[_yposicaoTabelaUnid][_xposicaoTabelaUnid] != '.') {
                        _obstaculoCaminhoTrue = false
                        break
                    }
                } else {
                    break
                }
            }
            if (_obstaculoCaminhoTrue) {
                _alvoTrue = true
                _alvoTabela.push(_inimigo)
            } else {
                _alvoTabela.splice(_inimigoIndex, 1)
                _alvoTabela.length == 0 ? _alvoTrue = false : 0
            }
        } else if (_colisao && _inimigoIndex != -1) {
            _alvoTabela[_inimigoIndex][6] = _inimigo[6]
            _alvoTabela[_inimigoIndex][7] = _inimigo[7]
            _alvoTabela[_inimigoIndex][1] = _inimigo[1]
        } else if (!_colisao && _inimigoIndex != -1) {
            _alvoTabela.splice(_inimigoIndex, 1)
            _alvoTabela.length == 0 ? _alvoTrue = false : 0
        }
    })

    
    let _unidadeChegadaMovimento = () => {
        let _unidadeAlvoXY = [baseVermelhoPosition[0]-(_unidadeTamanho/2), baseVermelhoPosition[1]-(_unidadeTamanho/2)]
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
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= _unidadeRange) {
            _chegadaTrue = true
            _atackLoad = setInterval(() => {
                if (baseAzulVida - _unidadeAtackDano < 0) {
                    baseAzulVida = 0
                    baseAzulBarraId.style.width = `${baseAzulVida}px`
                } else {
                    baseAzulVida -= _unidadeAtackDano
                    baseAzulBarraId.style.width = `${Math.floor(baseAzulVida/3)}px`
                }
            }, _unidadeAtackVelocidade)
        }
    }

    let _unidadeColisaoMovimento = () => {
        if (_alvoTabela.length==0) return
        for (let i = 0; i < _alvoTabela.length; i++) {
            if (_alvoTabela[i][1] == 'morto') {
                _alvoTabela.splice(i, 1)
                if (_alvoTabela.length==0) {
                    _monerDistancia = [0, 1000]
                    _alvoTrue = false
                    return
                }
            }
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
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= _unidadeRange) {
            _atackAlvo = _alvoTabela[_monerDistancia[0]]
            _atackTrue = true
            _atackLoad = setInterval(() => {
                psliderDist = ((_unidadeAlvoXY[1] - _x) ** 2 + (_unidadeAlvoXY[0] - _y) ** 2) ** 0.5
                if (psliderDist > _unidadeRange || unidadeInformacao[_atackAlvo[1]][1] === 'morto') {
                    _atackTrue = false
                    if (_alvoTabela.length > 0) {
                        _alvoTrue = true
                    } else {
                        _alvoTrue = false
                    }
                    clearInterval(_atackLoad)
                } else if (unidadeInformacao[_atackAlvo[1]][8] - _unidadeAtackDano < 0) {
                    _atackTrue = false
                    unidadeInformacao[_atackAlvo[1]][8] = 0
                    unidadeInformacao[_atackAlvo[1]][1] = 'morto'
                    _alvoTabela.splice(_monerDistancia[0], 1)
                    _atackAlvo = []
                    if (_alvoTabela.length > 0) {
                        _alvoTrue = true
                    } else {
                        _alvoTrue = false
                    }
                    clearInterval(_atackLoad)
                } else {
                    unidadeInformacao[_atackAlvo[1]][8] -= _unidadeAtackDano
                }
            }, _unidadeAtackVelocidade)
        }
        _monerDistancia = [0, 1000]
    }

    let _unidadeVisaoCaminho = () => {
        _caminhoAlteracoesCopy = caminhoAlteracoes
        _caminhotab = []
        let _tabelaCaminhoCopy = []
        for (let i = 0; i < tabelaCaminhoVermelho.length; i++) {
            _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminhoVermelho[i]))
        }
        let _xytab = [[Math.floor((_y+25)/tabelaCaminhoTamanho), Math.floor((_x+25)/tabelaCaminhoTamanho)]]
        let _e = 1
        let breackWhile = true
        let _xytabInicio = []
        _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0
        while (breackWhile && _e < 200) {
            let _xytabSub = []
            let _verificacao = 0
            for (let i = 0; i < _xytab.length; i++) {
                for (let _forI = -1; _forI < 2; _forI++) {
                    for (let _forE = -1; _forE < 2; _forE++) {
                        if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == '.' && (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]])) && (_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE])) : false) {
                            _xytabSub.push([_xytab[i][0]+_forI, _xytab[i][1]+_forE])
                            _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] = _e
                            _verificacao++
                        }
                    }
                }
                for (let _forI = -1; _forI < 2; _forI++) {
                    for (let _forE = -1; _forE < 2; _forE++) {
                        if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'A' || _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'V') : false) {
                            _xytabInicio = [_xytab[i][0]+_forI, _xytab[i][1]+_forE]
                            breackWhile = false
                            _verificacao++
                            break
                        }
                    }
                }
            }
            if (_verificacao == 0) {
                breackWhile = false
                for (let e = 0; e < _tabelaCaminhoCopy.length; e++) {
                    for (let a = 0; a < _tabelaCaminhoCopy[e].length; a++) {
                        if (_tabelaCaminhoCopy[e][a] === 'N') {
                            tabelaCaminhoVermelho[e][a] = 'V'
                            tabelaCaminhoAzul[e][a] = 'V'
                        }
                    }
                }
                _unidadeVisaoCaminho()
                caminhoAlteracoes++
                return
            }
            _xytab = _xytabSub
            _e++
        }
        let _xytabMin = []
        let _numtabMin = _e+1
        let _numindMin = 0
        _e=0
        while (true && _e < 200) {
            _e++
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
        let _unidadeAlvoXY = [Math.max(1, _caminhotab[0][0]*tabelaCaminhoTamanho), Math.max(1, _caminhotab[0][1]*tabelaCaminhoTamanho)]
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
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        if (psliderDist <= 5) {
            _unidadeVisaoCaminho()
        }
    }

    let _unidadeIntervalo = setInterval(() => {
        if (unidadeInformacao[_unidadeIndexCopy][8] <= 0) {
            clearInterval(_atackLoad)
            clearInterval(_unidadeIntervalo)
            document.getElementById('corpo').removeChild(_unidadeElement)
            console.log('morreu')
        }
        _unidadeVida = unidadeInformacao[_unidadeIndexCopy][8]
        _unidadeElementVida.style.width = `${_unidadeVida}px`
        _unidadeColisao()
        if (!_chegadaTrue) {
            if ((((baseVermelhoPosition[1] - _x) ** 2 + ((baseVermelhoPosition[0]+25) - _y) ** 2) ** 0.5 < _unidadeRangeVisao - _unidadeTamanho + 50) || (((baseVermelhoPosition[1] - _x) ** 2 + ((baseVermelhoPosition[0]-25) - _y) ** 2) ** 0.5 < _unidadeRangeVisao - _unidadeTamanho + 50)) {
                _unidadeChegadaMovimento()
            } else {
                _caminhoAlteracoesCopy != caminhoAlteracoes ? _unidadeVisaoCaminho() : 0
                if (_atackTrue) {
                    
                } else if (_alvoTrue) {
                    _unidadeColisaoMovimento()
                } else {
                    _movimentoCaminho()
                }
            }
            if (Math.floor(_x/tabelaCaminhoTamanho) != _xposicaoTabela || Math.floor(_y/tabelaCaminhoTamanho) != _yposicaoTabela) {
            }
        }
    }, 10)
    unidadeIndex++
}

function atualizarCaminho() {
    for (let e = 0; e < tabelaCaminhoVermelho.length; e++) {
        for (let a = 0; a < tabelaCaminhoVermelho[e].length; a++) {
            if (tabelaCaminhoVermelho[e][a] === 'N') {
                tabelaCaminhoVermelho[e][a] = 'B'
                tabelaCaminhoAzul[e][a] = 'B'
            }
        }
    }
    caminhoAlteracoes++
}

// unidadeInformacao.push([_unidadeElement.id, _unidadeIndexCopy, 'vermelho', 'circulo', _unidadeTamanho, _unidadeRangeVisao, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])

setInterval(() => {
    if (baseAzulVida <= 0 && baseVermelhoVida > 0) {
        alert("Time VERMELHO venceu!")
    } else if (baseVermelhoVida <= 0 && baseAzulVida > 0) {
        alert("Time AZUL venceu!")
    }
    for (let i = 0; i < unidadeInformacao.length; i++) {
        if (unidadeInformacao[i][1] !== "morto") {
            for (let e = 0; e < unidadeInformacao.length; e++) {
                console.log(unidadeInformacao[e][1])
                if (i !== e && unidadeInformacao[e][2] !== unidadeInformacao[i][2] && unidadeInformacao[e][1] != "morto" && ( (unidadeInformacao[e][7] - unidadeInformacao[i][7])**2 + (unidadeInformacao[e][6] - unidadeInformacao[i][6])**2 )** 0.5 < unidadeInformacao[i][5]) {
                    console.log('ola')
                    unidadeMensagemColisao[e](true, unidadeInformacao[i])
                } else {
                    unidadeMensagemColisao[e](false, unidadeInformacao[i])
                }
            }
        }
    }
}, 100)




// function atualizarCaminhoAzul() {
//     _caminhoAlteracoesCopy = caminhoAlteracoes
//     let _x = 0
//     let _y = 500
//     let _tabelaCaminhoCopy = []
//     let _xytab = [[Math.floor((_y+25)/tabelaCaminhoTamanho), Math.floor((_x+25)/tabelaCaminhoTamanho)]]
//     let _e = 1
//     let breackWhile = true
//     let _xyVtrue = true
//     for (let i = 0; i < tabelaCaminhoAzul.length; i++) {
//         _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminhoAzul[i]))
//     }
//     _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0
//     while (breackWhile && _e < 200) {
//         let _xytabSub = []
//         let _verificacao = 0
//         for (let i = 0; i < _xytab.length; i++) {
//             for (let _forI = -1; _forI < 2; _forI++) {
//                 for (let _forE = -1; _forE < 2; _forE++) {
//                     if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == '.' && (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]])) && (_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE])) : false) {
//                         _xytabSub.push([_xytab[i][0]+_forI, _xytab[i][1]+_forE])
//                         _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] = _e
//                         _verificacao++
//                     }
//                 }
//             }
//             for (let _forI = -1; _forI < 2; _forI++) {
//                 for (let _forE = -1; _forE < 2; _forE++) {
//                     if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'A' || _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'V') && (!isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]]) || _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]] == '.') && (!isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forE][_xytab[i][1]]) || _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE] == '.') : false) {
//                         _verificacao++
//                         break
//                     }
//                 }
//             }
//         }
//         if (_verificacao == 0) {
//             breackWhile = false
//             _xyVtrue
//             break
//         }
//         _xytab = _xytabSub
//         _e++
//     }
//     let _xyVSub = []
//     if (_xyVtrue) {
//         for (let i = 0; i < 10; i++) {
//             for (let e = 38; e > -1; e--) {
//                 if (_tabelaCaminhoCopy[9-i][e] == 'V') {
//                     _xyVtrue = false
//                     i = 100
//                     break
//                 }
//                 if (!isNaN(_tabelaCaminhoCopy[9-i][e])) {
//                     _xyVSub = [9-i, e+1, _tabelaCaminhoCopy[9-i][e+1]]
//                     i = 100
//                     break
//                 }
//             }
//             if (i < 10) {
//                 for (let e = 38; e > -1; e--) {
//                     if (_tabelaCaminhoCopy[10+i][e] == 'V') {
//                         _xyVtrue = false
//                         i = 100
//                         break
//                     }
//                     if (!isNaN(_tabelaCaminhoCopy[10+i][e])) {
//                         _xyVSub = [10+i, e+1, _tabelaCaminhoCopy[10+i][e+1]]
//                         i = 100
//                         break
//                     }
//                 }
//             }
//         }
//     }
//     if (_xyVtrue) {
//         tabelaCaminhoAzul[_xyVSub[0]][_xyVSub[1]] = 'V'
//         tabelaVPositions.length > 0 ? tabelaCaminhoAzul[tabelaVPositions[0]][tabelaVPositions[1]] = tabelaVPositions[2] : 0
//         tabelaVPositions = _xyVSub
//     }
//     console.log(tabelaCaminhoAzul)
// }
// function atualizarCaminhoVermelho() {
//     _caminhoAlteracoesCopy = caminhoAlteracoes
//     let _x = 2000
//     let _y = 500
//     let _tabelaCaminhoCopy = []
//     let _xytab = [[Math.floor((_y+25)/tabelaCaminhoTamanho), Math.floor((_x+25)/tabelaCaminhoTamanho)]]
//     let _e = 1
//     let breackWhile = true
//     let _xyVtrue = true
//     for (let i = 0; i < tabelaCaminhoVermelho.length; i++) {
//         _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminhoVermelho[i]))
//     }
//     _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0
//     while (breackWhile && _e < 200) {
//         let _xytabSub = []
//         let _verificacao = 0
//         for (let i = 0; i < _xytab.length; i++) {
//             for (let _forI = -1; _forI < 2; _forI++) {
//                 for (let _forE = -1; _forE < 2; _forE++) {
//                     if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == '.' && (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]])) && (_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE] == '.' || !isNaN(_tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE])) : false) {
//                         _xytabSub.push([_xytab[i][0]+_forI, _xytab[i][1]+_forE])
//                         _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] = _e
//                         _verificacao++
//                     }
//                 }
//             }
//             for (let _forI = -1; _forI < 2; _forI++) {
//                 for (let _forE = -1; _forE < 2; _forE++) {
//                     if ((_forI != 0 || _forE != 0) && _xytab[i][0]+_forI >= 0 && _xytab[i][0]+_forI < 20 && _xytab[i][1]+_forE >= 0 && _xytab[i][1]+_forE < 40 ? (_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'A' || _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]+_forE] == 'V') && (!isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]]) || _tabelaCaminhoCopy[_xytab[i][0]+_forI][_xytab[i][1]] == '.') && (!isNaN(_tabelaCaminhoCopy[_xytab[i][0]+_forE][_xytab[i][1]]) || _tabelaCaminhoCopy[_xytab[i][0]][_xytab[i][1]+_forE] == '.') : false) {
//                         _verificacao++
//                         break
//                     }
//                 }
//             }
//         }
//         if (_verificacao == 0) {
//             breackWhile = false
//             _xyVtrue
//             break
//         }
//         _xytab = _xytabSub
//         _e++
//     }
//     let _xyVSub = []
//     if (_xyVtrue) {
//         for (let i = 0; i < 10; i++) {
//             for (let e = 0; e < 39; e++) {
//                 if (_tabelaCaminhoCopy[9-i][e] == 'V') {
//                     _xyVtrue = false
//                     i = 100
//                     break
//                 }
//                 if (!isNaN(_tabelaCaminhoCopy[9-i][e])) {
//                     _xyVSub = [9-i, e-1, _tabelaCaminhoCopy[9-i][e-1]]
//                     i = 100
//                     break
//                 }
//             }
//             if (i < 10) {
//                 for (let e = 0; e < 39; e++) {
//                     if (_tabelaCaminhoCopy[10+i][e] == 'V') {
//                         _xyVtrue = false
//                         i = 100
//                         break
//                     }
//                     if (!isNaN(_tabelaCaminhoCopy[10+i][e])) {
//                         _xyVSub = [10+i, e-1, _tabelaCaminhoCopy[10+i][e-1]]
//                         i = 100
//                         break
//                     }
//                 }
//             }
//         }
//     }
//     if (_xyVtrue) {
//         tabelaCaminhoVermelho[_xyVSub[0]][_xyVSub[1]] = 'V'
//         tabelaVPositions.length > 0 ? tabelaCaminhoVermelho[tabelaVPositions[0]][tabelaVPositions[1]] = tabelaVPositions[2] : 0
//         tabelaVPositions = _xyVSub
//     }
//     console.log(tabelaCaminhoVermelho)
//     console.log(_tabelaCaminhoCopy)
// }

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
// }, 100)

// setTimeout(() => {
//     let _ind1 = Math.floor(Math.random()*(tabelaCaminho.length-1))
//     let _ind2 = Math.floor(Math.random()*(tabelaCaminho[_ind1].length-1))
//     atualizarCaminho()
//     tabelaCaminhoAzul[_ind1][_ind2] = 'N'
//     tabelaCaminhoVermelho[_ind1][_ind2] = 'N'
//     tabelaCaminhoAzul[9][22] = 'N'
//     tabelaCaminhoVermelho[9][22] = 'N'
//     caminhoAlteracoes++
// }, 500)

// setTimeout(() => {
//     atualizarCaminho()
//     tabelaCaminhoAzul[9][22] = 'N'
//     tabelaCaminhoVermelho[9][22] = 'N'
//     caminhoAlteracoes++
// }, 2000)