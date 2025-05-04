var unidadeInformacao = []
var unidadeMensagemColisao = []
var unidadeIndex = 0

var quantiaUnidadeLimite = 15
var quantiaUnidadeAzul = 0
var quantiaUnidadeVermelho = 0

// var torreInformacao = [[meio, menorY, maiorY, menorX, maiorX, lateral1, lateral2, lateral3, lateral4], resto....]
var torreInformacao = []
var torreMensagemColisao = []
var torreIndex = 0

const baseAzulPosition = [450, 25]
var baseAzulVida = 2500
const baseAzulBarraId = document.getElementById('base-azul-barra')

const baseVermelhoPosition = [450, 1975]
var baseVermelhoVida = 2500
const baseVermelhoBarraId = document.getElementById('base-vermelho-barra')

var caminhoAlteracoes = 0
const tabelaCaminhoMetadeTamanho = 100
const tabelaCaminhoMetade = []
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
    ['A', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'V'],
    ['A', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', '.', '.', '.', 'B', 'B', '.', '.', '.', '.', '.', 'V'],
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


function criarUnidade(x, y, vida, dano, danoV, velocidade, visao, range, tamanho, cor, espaco, vermelhoAzul) {
    let _x = x
    let _y = y
    let _unidadeElement = document.createElement('div')
    let _unidadeElementVida = document.createElement('div')
    let _unidadeIndexCopy = unidadeIndex

    let _unidadeVida = vida
    let _unidadeAtackDano = dano
    let _unidadeAtackVelocidade = danoV
    let _unidadeVelocidade = velocidade
    let _unidadeRangeVisao = visao
    let _unidadeRange = range
    let _unidadeTamanho = tamanho

    let _caminhotab = []
    let _caminhoAlteracoesCopy = caminhoAlteracoes

    let _alvoXY = []

    let _alvosUnidadeNoRange = []
    let _alvosUnidadeVisiveis = []

    let _alvosTorreNoRange = []
    let _alvosTorreVisiveis = []

    let _baseAlvoPosition = vermelhoAzul[1] === 'azul' ? baseVermelhoPosition : baseAzulPosition
    let _baseAlvo = []

    let _alvoMaisProximo = []
    let _alvoPerseguindo = []
    let _alvoAtacando = []

    let _obstaculoCaminhoTrue = true
    let _unidadeTimeout = true

    _unidadeElement.style.top = `${_y}px`
    _unidadeElement.style.left = `${_x}px`
    _unidadeElement.style.width = `${_unidadeTamanho}px`
    _unidadeElement.style.height = `${_unidadeTamanho}px`
    _unidadeElement.style.cssText += cor
    _unidadeElementVida.style.opacity = '0.35'
    _unidadeElementVida.style.backgroundColor = vermelhoAzul[1] === 'azul' ? 'blue' : 'red'

    _unidadeTamanho = 50

    _unidadeElement.id = `fuzileiro${unidadeIndex}`
    _unidadeElement.className = 'fuzileiro'
    _unidadeElement.id = `barra-vida${unidadeIndex}`
    _unidadeElementVida.className = 'barra-vida'

    document.getElementById('corpo').appendChild(_unidadeElement)
    _unidadeElement.appendChild(_unidadeElementVida)

    unidadeInformacao.push([_unidadeElement.id, _unidadeIndexCopy, vermelhoAzul[1], 'circulo', _unidadeTamanho, _unidadeRangeVisao, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida])

    if (vermelhoAzul[1] === 'azul') {
        quantiaUnidadeAzul += espaco
        document.getElementById('azul-quantia-unidade').innerHTML = quantiaUnidadeAzul
    } else {
        quantiaUnidadeVermelho += espaco
        document.getElementById('vermelho-quantia-unidade').innerHTML = quantiaUnidadeVermelho
    }
    unidadeIndex++

    const _unidadeVisaoCaminho = (destino, posicaoDestino, tipoDeAlvo) => {
        _caminhoAlteracoesCopy = caminhoAlteracoes
        _caminhotab = []

        let _tabelaCaminhoCopy = []
        let _xytab = [[Math.floor((_y+25)/tabelaCaminhoTamanho), Math.floor((_x+25)/tabelaCaminhoTamanho)]]
        let _xytabRetorno = []

        let _e = 1
        let breackWhile = true
        let _alvoVisao = destino

        for (let i = 0; i < tabelaCaminho.length; i++) {
            _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminho[i]))
        }
        _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0

        if (destino === 'U') {
            _tabelaCaminhoCopy[Math.floor(posicaoDestino[0]/tabelaCaminhoTamanho)][Math.floor(posicaoDestino[1]/tabelaCaminhoTamanho)] = 'U'
        }

        while (breackWhile && _e < 200) {
            let _xytabSub = []
            let _verificacao = 0
            for (let i = 0; i < _xytab.length; i++) {
                for (let e = [-1, 0]; e[0] < 2; e[0]+=2) {
                    for (let b = 0; b < 2; b++) {
                        if (_xytab[i][0]+e[b] >= 0 && _xytab[i][0]+e[b] < 20 && _xytab[i][1]+(b*e[0]) >= 0 && _xytab[i][1]+(b*e[0]) < 40 && _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === '.') {
                            _xytabSub.push([_xytab[i][0]+e[b], _xytab[i][1]+(b*e[0])])
                            _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] = _e
                            _verificacao++
                        } else if (_xytab[i][0]+e[b] >= 0 && _xytab[i][0]+e[b] < 20 && _xytab[i][1]+(b*e[0]) >= 0 && _xytab[i][1]+(b*e[0]) < 40 && _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === _alvoVisao) {
                            if (destino === 'X') {
                                _xytabRetorno = [_xytab[i][0], _xytab[i][1]]
                                _tabelaCaminhoCopy[_xytabRetorno[0]][_xytabRetorno[1]] = _e
                            } else {
                                _xytabRetorno = [_xytab[i][0]+e[b], _xytab[i][1]+(b*e[0])]
                            }
                            breackWhile = false
                            _verificacao++
                            break
                        }
                    }
                }
            }
            if (_verificacao === 0 || _e > 190) {
                _unidadeVisaoCaminho('X', [], 'nenhum')
                return
            }
            _xytab = _xytabSub
            _e++
        }

        let _xytabMin = []
        let _xyMin = [[], 100]
        e = 0

        while (e < 100) {
            e++

            for (let _forI = -1; _forI < 2; _forI++) {
                for (let _forE = -1; _forE < 2; _forE++) {
                    if (_xytabRetorno[0]+_forI >= 0 && _xytabRetorno[0]+_forI < 20 && _xytabRetorno[1]+_forE >= 0 && _xytabRetorno[1]+_forE< 40 ? !isNaN(_tabelaCaminhoCopy[_xytabRetorno[0]+_forI][_xytabRetorno[1]+_forE]) && !isNaN(_tabelaCaminhoCopy[_xytabRetorno[0]+_forI][_xytabRetorno[1]]) && !isNaN(_tabelaCaminhoCopy[_xytabRetorno[0]][_xytabRetorno[1]+_forE]) : false) {
                        _xytabMin.push([[_xytabRetorno[0]+_forI, _xytabRetorno[1]+_forE], _tabelaCaminhoCopy[_xytabRetorno[0]+_forI][_xytabRetorno[1]+_forE]])
                    }
                }
            }

            for (let i = 0; i < _xytabMin.length; i++) {
                if (_xyMin[1] > _xytabMin[i][1]) {
                    _xyMin[1] = _xytabMin[i][1]
                    _xyMin[0] = _xytabMin[i][0]
                }
            }

            _caminhotab.push(_xytabRetorno)
            if (_xyMin[1] <= 0) {
                _caminhotab.reverse()
                // if (destino === 'U') {
                //     console.log(_tabelaCaminhoCopy)
                //     console.log(_caminhotab)
                //     let ababa = []
                //     for (let i = 0; i < tabelaCaminho.length; i++) {
                //         ababa.push(Object.assign([], tabelaCaminho[i]))
                //     }
                //     for (let i = 0; i < _caminhotab.length; i++) {
                //         ababa[_caminhotab[i][0]][_caminhotab[i][1]] = 'I'
                //     }
                //     console.log(ababa)
                // }
                break
            } else {
                _xytabRetorno = Object.assign([], _xyMin[0])
            }
        }
    }
    _unidadeVisaoCaminho(vermelhoAzul[2][0])

    let _unidadeMovimento = (tipoDeAlvo) => {
        _alvoXY = [Math.max(1, (_caminhotab[0][0])*tabelaCaminhoTamanho), Math.max(1, (_caminhotab[0][1])*tabelaCaminhoTamanho)]
        let _unidadeDistancia = ((_alvoXY[1] - (_x)) ** 2 + (_alvoXY[0] - (_y)) ** 2) ** 0.5

        let _xCopy = _x
        let _yCopy = _y

        if (_x === _alvoXY[1]) {
            if (_y < _alvoXY[0]) {
                _y += _unidadeVelocidade
            } else {
                _y -= _unidadeVelocidade
            }
        } else if (_y === _alvoXY[0]) {
            if (_x < _alvoXY[1]) {
                _x += _unidadeVelocidade
            } else {
                _x -= _unidadeVelocidade
            }
        } else {
            let _a = (_alvoXY[0] - _y) / (_alvoXY[1] - _x)
            let _b = _y - (((_alvoXY[0] - _y) / (_alvoXY[1] - _x)) * _x)


            if (_x > _alvoXY[1]) {
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
            _x = Math.floor(_x)
            _y = Math.floor(_y)
        }

        let _verificacao = true

        // for (let i = 0; i < unidadeInformacao.length; i++) {
        //     if (unidadeInformacao[i][1] !== 'morto' && unidadeInformacao[i][1] !== _unidadeIndexCopy) {
        //         let _unidadeDistancia2 = (((unidadeInformacao[i][6] + unidadeInformacao[i][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[i][7] + unidadeInformacao[i][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - unidadeInformacao[i][4]/2 - _unidadeTamanho/2
        //         console.log(_unidadeDistancia2)
        //         if (_unidadeDistancia2 <= 0) {
        //             _verificacao = false
        //         }
        //     }
        // }

        if (_verificacao) {
            _unidadeElement.style.top = `${_y}px`
            _unidadeElement.style.left = `${_x}px`
            unidadeInformacao[_unidadeIndexCopy][6] = _x
            unidadeInformacao[_unidadeIndexCopy][7] = _y
    
            if (tipoDeAlvo === 'caminho') {
                if (_unidadeDistancia <= _unidadeVelocidade * 5) {
                    _unidadeVisaoCaminho(vermelhoAzul[2][0], [0, 0], 'caminho')
                }
            } else if (tipoDeAlvo === 'unidade') {
                if (_unidadeDistancia <= _unidadeVelocidade * 5) {
                    _unidadeVisaoCaminho('U', [unidadeInformacao[_alvoPerseguindo[0]][7], unidadeInformacao[_alvoPerseguindo[0]][6]], 'unidade')
                }
            } else if (tipoDeAlvo === 'torre') {
                if (_unidadeDistancia <= _unidadeVelocidade * 5) {
                    _unidadeVisaoCaminho('U', _alvoPerseguindo[3], 'torre')
                }
            }
        } else {
            _x = _xCopy
            _y = _yCopy
        }
    }

    let _verficarObstaculoCaminhoTrue = (_yIni, _xIni, tipoDeAlvo, idAlvo, _tamanho) => {
        let _xposicaoTabelaUnid = _x + _tamanho
        let _yposicaoTabelaUnid = _y + _tamanho
        let _xposicaoTabelaIni = _xIni
        let _yposicaoTabelaIni = _yIni
        let _xposicaoTabelaUnidCopy = _x + _tamanho
        let _yposicaoTabelaUnidCopy = _y + _tamanho
        let _forDistancia
        let _tabelaCaminhoCopy = []

        if (tipoDeAlvo === 'torre') {
            for (let i = 0; i < tabelaCaminho.length; i++) {
                _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminho[i]))
            }
            for (let n = 0; n < Math.floor(torreInformacao[idAlvo][3][1]/tabelaCaminhoTamanho); n++) {
                for (let e = 0; e < Math.floor(torreInformacao[idAlvo][3][0]/tabelaCaminhoTamanho); e++) {
                    _tabelaCaminhoCopy[n+Math.floor(torreInformacao[idAlvo][4][0]/tabelaCaminhoTamanho)][e+Math.floor(torreInformacao[idAlvo][4][1]/tabelaCaminhoTamanho)] = 'J'
                }
            }
        }

        let _a = (_yposicaoTabelaIni - _yposicaoTabelaUnid) / (_xposicaoTabelaIni - _xposicaoTabelaUnid)
        let _b = _yposicaoTabelaUnid - (((_yposicaoTabelaIni - _yposicaoTabelaUnid) / (_xposicaoTabelaIni - _xposicaoTabelaUnid)) * _xposicaoTabelaUnid)

        if (Math.abs(_xposicaoTabelaUnid - _xposicaoTabelaIni)/tabelaCaminhoTamanho > Math.abs(_yposicaoTabelaUnid - _yposicaoTabelaIni)/tabelaCaminhoTamanho) {
            _forDistancia = Math.floor(Math.abs(_xposicaoTabelaUnid - _xposicaoTabelaIni)/tabelaCaminhoTamanho + 50)
        } else {
            _forDistancia = Math.floor(Math.abs(_yposicaoTabelaUnid - _yposicaoTabelaIni)/tabelaCaminhoTamanho + 50)
        }

        for (let i = 0; i < _forDistancia; i++) {
            // if (vermelhoAzul[1] === 'vermelho' || true) {
            //     let ponto = document.createElement('div')
            //     ponto.className = 'ponto'
            //     ponto.style.top = `${_yposicaoTabelaUnid}px`
            //     ponto.style.left = `${_xposicaoTabelaUnid}px`
            //     document.getElementById('corpo').appendChild(ponto)
            // }
            if (Math.abs(_xposicaoTabelaUnid - _xposicaoTabelaIni) > Math.abs(_yposicaoTabelaUnid - _yposicaoTabelaIni)) {
                if (_xposicaoTabelaUnid > _xposicaoTabelaIni) {
                    _xposicaoTabelaUnid -= Math.abs(_xposicaoTabelaUnidCopy - _xposicaoTabelaIni)/_forDistancia
                } else {
                    _xposicaoTabelaUnid += Math.abs(_xposicaoTabelaUnidCopy - _xposicaoTabelaIni)/_forDistancia
                }
                _yposicaoTabelaUnid = (_xposicaoTabelaUnid * _a) + _b
            } else {
                if (_yposicaoTabelaUnid > _yposicaoTabelaIni) {
                    _yposicaoTabelaUnid -= Math.abs(_yposicaoTabelaUnidCopy - _yposicaoTabelaIni)/_forDistancia
                } else {
                    _yposicaoTabelaUnid += Math.abs(_yposicaoTabelaUnidCopy - _yposicaoTabelaIni)/_forDistancia
                }
                _xposicaoTabelaUnid = (_yposicaoTabelaUnid - _b) / _a
            }
            if (tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== '.' && (tipoDeAlvo === 'torre' ? _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'J' : tipoDeAlvo === 'base' ? tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== vermelhoAzul[2][0] : true)) {
                _obstaculoCaminhoTrue = false
            }
        }
    }

    let _unidadeVerificarColisaoUnidades = () => {
        _alvosUnidadeNoRange = []
        _alvosUnidadeVisiveis = []

        for (let i = 0; i < unidadeInformacao.length; i++) {
            if (unidadeInformacao[i][1] !== 'morto' && unidadeInformacao[i][2] === vermelhoAzul[2][1]) {
                let _unidadeDistancia = (((unidadeInformacao[i][6] + unidadeInformacao[i][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[i][7] + unidadeInformacao[i][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - unidadeInformacao[i][4]/2 - _unidadeTamanho/2
                if (_unidadeDistancia <= _unidadeRangeVisao) {
                    _alvosUnidadeNoRange.push([i, _unidadeDistancia, 'unidade'])
                }
            }
        }


        for (let i = 0; i < _alvosUnidadeNoRange.length; i++) {
            _obstaculoCaminhoTrue = true
            
            if (vermelhoAzul[1] === 'vermelho') {
                _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, 'unidade', _alvosUnidadeNoRange[i][0], _unidadeTamanho/2)
            } else {
                _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, 'unidade', _alvosUnidadeNoRange[i][0], _unidadeTamanho/2)
            }

            // if (vermelhoAzul[1] === 'vermelho') {
            //     _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] +10, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] - unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2 +10, 'unidade', _alvosUnidadeNoRange[i][0], 10)
            // } else {
            //     _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] +10, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] +10, 'unidade', _alvosUnidadeNoRange[i][0], 10)
            // }
            
            // if (vermelhoAzul[1] === 'vermelho') {
            //     _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4] -10, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4] -10, 'unidade', _alvosUnidadeNoRange[i][0], _unidadeTamanho-10)
            // } else {
            //     _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4] -10, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]*1.5 -10, 'unidade', _alvosUnidadeNoRange[i][0], _unidadeTamanho-10)
            // }

            if (_obstaculoCaminhoTrue) {
                _alvosUnidadeVisiveis.push(_alvosUnidadeNoRange[i])
            }
        }

        let _unidadeDistanciaBase = (((_baseAlvoPosition[1]) - (_x + _unidadeTamanho/2)) ** 2 + ((_baseAlvoPosition[0]) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5
        if (_unidadeDistanciaBase <= _unidadeRangeVisao) {
            _obstaculoCaminhoTrue = true
            _verficarObstaculoCaminhoTrue(_baseAlvoPosition[0], _baseAlvoPosition[1], 'base', -1, 0)
            _verficarObstaculoCaminhoTrue(_baseAlvoPosition[0], _baseAlvoPosition[1], 'base', -1, _unidadeTamanho)

            if (_obstaculoCaminhoTrue) {
                _baseAlvo = [-1, _unidadeDistanciaBase, 'base']
                _alvosUnidadeVisiveis.push(_baseAlvo)
            } else {
                _baseAlvo = []
            }
        }

        if (_alvosUnidadeVisiveis.length > 0) {
            _alvoMaisProximo = _alvosUnidadeVisiveis[0][2]  !== 'base' ? _alvosUnidadeVisiveis[0] : _alvosUnidadeVisiveis > 1 ? _alvosUnidadeVisiveis[1] : []
            for (let i = 1; i < _alvosUnidadeVisiveis.length; i++) {
                if (_alvoMaisProximo[1] > _alvosUnidadeVisiveis[i][1] && _alvosUnidadeVisiveis[i][2] !== 'base') {
                    _alvoMaisProximo = _alvosUnidadeVisiveis[i]
                }
            }
            if (_alvoMaisProximo.length > 0) {
                if (_alvoPerseguindo.length > 0) {
                    if (_alvoPerseguindo[1] > _alvoMaisProximo[1]) {
                        _alvoPerseguindo = _alvoMaisProximo
                        _unidadeVisaoCaminho('U', [unidadeInformacao[_alvoPerseguindo[0]][7], unidadeInformacao[_alvoPerseguindo[0]][6]], 'unidade')
                    }
                } else {
                    _alvoPerseguindo = _alvoMaisProximo
                    _unidadeVisaoCaminho('U', [unidadeInformacao[_alvoPerseguindo[0]][7], unidadeInformacao[_alvoPerseguindo[0]][6]], 'unidade')
                }
            }
        }
    }

    let _unidadeVerificarColisaoTorres = () => {
        _alvosTorreNoRange = []
        _alvosTorreVisiveis = []

        for (let i = 0; i < torreInformacao.length; i++) {
            if (torreInformacao[i][1] !== 'morto' && torreInformacao[i][2] === vermelhoAzul[2][1]) {
                let _torreDistancia
                let _torrePosicaoPerto = []
                if (torreInformacao[i][0][1] < _y) {
                    if (torreInformacao[i][0][2] > _y) {
                        if (torreInformacao[i][0][0][0] > _x) {
                            _torrePosicaoPerto = [_y, torreInformacao[i][0][3]]
                            _torreDistancia = torreInformacao[i][0][3] - _x - _unidadeTamanho
                        } else {
                            _torrePosicaoPerto = [_y, torreInformacao[i][0][4]]
                            _torreDistancia = _x - torreInformacao[i][0][4]
                        }
                    } else {
                        if (torreInformacao[i][0][3] < _x) {
                            if (torreInformacao[i][0][4] > _x) {
                                _torrePosicaoPerto = [torreInformacao[i][0][2], _x]
                                _torreDistancia = _y - torreInformacao[i][0][2]
                            } else {
                                _torrePosicaoPerto = torreInformacao[i][0][7]
                                _torreDistancia = ((torreInformacao[i][0][7][1] - (_x + _unidadeTamanho/2)) ** 2 + (torreInformacao[i][0][7][0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                            }
                        } else {
                            _torrePosicaoPerto = torreInformacao[i][0][8]
                            _torreDistancia = ((torreInformacao[i][0][8][1] - (_x + _unidadeTamanho/2)) ** 2 + (torreInformacao[i][0][8][0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                        }
                    }
                } else {
                    if (torreInformacao[i][0][3] < _x) {
                        if (torreInformacao[i][0][4] > _x) {
                            _torrePosicaoPerto = [torreInformacao[i][0][1], _x]
                            _torreDistancia = torreInformacao[i][0][1] - _y - _unidadeTamanho
                        } else {
                            _torrePosicaoPerto = torreInformacao[i][0][6]
                            _torreDistancia = ((torreInformacao[i][0][6][1] - (_x + _unidadeTamanho/2)) ** 2 + (torreInformacao[i][0][6][0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                        }
                    } else {
                        _torrePosicaoPerto = torreInformacao[i][0][5]
                        _torreDistancia = ((torreInformacao[i][0][5][1] - (_x + _unidadeTamanho/2)) ** 2 + (torreInformacao[i][0][5][0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                    }
                }
                if (_torreDistancia <= _unidadeRangeVisao) {
                    _alvosTorreNoRange.push([i, _torreDistancia, 'torre', _torrePosicaoPerto])
                }
            }
        }

        for (let i = 0; i < _alvosTorreNoRange.length; i++) {
            _obstaculoCaminhoTrue = true

            _verficarObstaculoCaminhoTrue(torreInformacao[_alvosTorreNoRange[i][0]][0][0][1], torreInformacao[_alvosTorreNoRange[i][0]][0][0][0], 'torre', _alvosTorreNoRange[i][0], 0)
            _verficarObstaculoCaminhoTrue(torreInformacao[_alvosTorreNoRange[i][0]][0][0][1], torreInformacao[_alvosTorreNoRange[i][0]][0][0][0], 'torre', _alvosTorreNoRange[i][0], _unidadeTamanho)

            if (_obstaculoCaminhoTrue) {
                _alvosTorreVisiveis.push(_alvosTorreNoRange[i])
            }
        }

        if (_alvosTorreVisiveis.length > 0) {
            if (_alvoMaisProximo.length > 0) {
                for (let i = 1; i < _alvosTorreVisiveis.length; i++) {
                    if (_alvoMaisProximo[1] > _alvosTorreVisiveis[i][1]) {
                        _alvoMaisProximo = _alvosTorreVisiveis[i]
                    }
                }
            } else {
                _alvoMaisProximo = _alvosTorreVisiveis[0]
            }
            if (_alvoPerseguindo.length > 0) {
                if (_alvoPerseguindo[1] > _alvoMaisProximo[1]) {
                    _alvoPerseguindo = _alvoMaisProximo
                    _unidadeVisaoCaminho('U', _alvoPerseguindo[3], 'torre')
                }
            } else {
                _alvoPerseguindo = _alvoMaisProximo
                _unidadeVisaoCaminho('U', _alvoPerseguindo[3], 'torre')
            }
        }
    }

    let _unidadeIntervaloLoad = [
        setInterval(() => {
            if (_unidadeVida !== unidadeInformacao[_unidadeIndexCopy][8] || unidadeInformacao[_unidadeIndexCopy][1] === 'morto') {
                if (_unidadeVida <= 0 || unidadeInformacao[_unidadeIndexCopy][1] === 'morto') {
                    document.getElementById('corpo').removeChild(_unidadeElement)
                    unidadeInformacao[_unidadeIndexCopy][1] = 'morto'
                    if (vermelhoAzul[1] === 'azul') {
                        quantiaUnidadeAzul -= espaco
                        document.getElementById('azul-quantia-unidade').innerHTML = quantiaUnidadeAzul
                    } else {
                        quantiaUnidadeVermelho -= espaco
                        document.getElementById('vermelho-quantia-unidade').innerHTML = quantiaUnidadeVermelho
                    }
                    for (let i = 0; i < _unidadeIntervaloLoad.length; i++) {
                        clearInterval(_unidadeIntervaloLoad[i])
                    }
                } else {
                    _unidadeVida = unidadeInformacao[_unidadeIndexCopy][8]
                    _unidadeElementVida.style.width = `${_unidadeVida}px`
                }
            }

            if (_alvoAtacando.length <= 0) {
                if (_alvoPerseguindo.length <= 0) {
                    let _unidadeDistancia = (((_baseAlvoPosition[1]) - (_x + _unidadeTamanho/2)) ** 2 + ((_baseAlvoPosition[0]) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5
                    if (_unidadeDistancia <= _unidadeRange) {
                        _alvoAtacando = [-1, _unidadeDistancia, 'base']
                    } else {
                        _unidadeMovimento('caminho')
                    }
                } else {
                    if (_alvoPerseguindo[2] === 'unidade') {
                        let _unidadeDistancia = (((unidadeInformacao[_alvoPerseguindo[0]][6] + unidadeInformacao[_alvoPerseguindo[0]][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[_alvoPerseguindo[0]][7] + unidadeInformacao[_alvoPerseguindo[0]][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - unidadeInformacao[_alvoPerseguindo[0]][4]/2 - _unidadeTamanho/2
                        if (_unidadeDistancia <= _unidadeRange) {
                            _alvoAtacando = _alvoPerseguindo
                        } else {
                            if (_unidadeDistancia <= _unidadeRangeVisao && unidadeInformacao[_alvoPerseguindo[0]][1] !== 'morto') {
                                _unidadeMovimento('unidade')
                            } else {
                                _alvoPerseguindo = []
                            }
                        }
                    } else if (_alvoPerseguindo[2] === 'torre') {
                        let _unidadeDistancia = ((_alvoPerseguindo[3][1] - (_x + _unidadeTamanho/2)) ** 2 + (_alvoPerseguindo[3][0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                        if (_unidadeDistancia <= _unidadeRange) {
                            _alvoAtacando = _alvoPerseguindo
                        } else {
                            _unidadeMovimento('torre')
                        }
                    }
                }


            } else {
                if (_alvoAtacando[2] === 'unidade') {
                    if (unidadeInformacao[_alvoAtacando[0]][1] === 'morto') {
                        _alvoPerseguindo = []
                        _alvoAtacando = []
                        _unidadeVisaoCaminho(vermelhoAzul[2][0])
                    } else {
                        let _unidadeDistancia = (((unidadeInformacao[_alvoAtacando[0]][6] + unidadeInformacao[_alvoAtacando[0]][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[_alvoAtacando[0]][7] + unidadeInformacao[_alvoAtacando[0]][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - unidadeInformacao[_alvoAtacando[0]][4]/2 - _unidadeTamanho/2
                        if (_unidadeDistancia > _unidadeRange) {
                            _alvoAtacando = []
                            _unidadeVisaoCaminho(vermelhoAzul[2][0])
                        } else {
                            let _verificacao = false
                            for (let i = 0; i < _alvosUnidadeVisiveis.length; i++) {
                                if (_alvosUnidadeVisiveis[i][0] === _alvoAtacando[0]) {
                                    _verificacao = true
                                }
                            }
                            if (_verificacao) {
                                if (_unidadeTimeout) {
                                    unidadeInformacao[_alvoAtacando[0]][8] -= _unidadeAtackDano
                                    _unidadeTimeout = false
                                    setTimeout(() => {
                                        _unidadeTimeout = true
                                    }, _unidadeAtackVelocidade)
                                }
                            } else {
                                _alvoAtacando = []
                                _unidadeVisaoCaminho(vermelhoAzul[2][0])
                            }
                        }
                    }
                } else if (_alvoAtacando[2] === 'base') {
                    if (vermelhoAzul[1] === 'azul') {
                        if (baseVermelhoVida > 0) {
                            let _verificacao = false
                            for (let i = 0; i < _alvosUnidadeVisiveis.length; i++) {
                                if (_alvosUnidadeVisiveis[i][0] === _alvoAtacando[0]) {
                                    _verificacao = true
                                }
                            }
                            if (_verificacao) {
                                if (_unidadeTimeout) {
                                    baseVermelhoVida -= _unidadeAtackDano
                                    baseVermelhoBarraId.style.width = `${baseVermelhoVida/5}px`
                                    _unidadeTimeout = false
                                    setTimeout(() => {
                                        _unidadeTimeout = true
                                    }, _unidadeAtackVelocidade)
                                }
                            } else {
                                _alvoAtacando = []
                                _unidadeVisaoCaminho(vermelhoAzul[2][0])
                            }
                        } else {
                            _alvoPerseguindo = []
                            _alvoAtacando = []
                            for (let i = 0; i < unidadeInformacao.length; i++) {
                                unidadeInformacao[i][1] = 'morto'
                            }
                            console.log('Azul venceu!!!')
                        }
                    } else {
                        if (baseAzulVida > 0) {
                            let _verificacao = false
                            for (let i = 0; i < _alvosUnidadeVisiveis.length; i++) {
                                if (_alvosUnidadeVisiveis[i][0] === _alvoAtacando[0]) {
                                    _verificacao = true
                                }
                            }
                            if (_verificacao) {
                                if (_unidadeTimeout) {
                                    baseAzulVida -= _unidadeAtackDano
                                    baseAzulBarraId.style.width = `${baseAzulVida/5}px`
                                    _unidadeTimeout = false
                                    setTimeout(() => {
                                        _unidadeTimeout = true
                                    }, _unidadeAtackVelocidade)
                                }
                            } else {
                                _alvoPerseguindo = []
                                _alvoAtacando = []
                                _unidadeVisaoCaminho(vermelhoAzul[2][0])
                            }
                        } else {
                            _alvoPerseguindo = []
                            _alvoAtacando = []
                            for (let i = 0; i < unidadeInformacao.length; i++) {
                                unidadeInformacao[i][1] = 'morto'
                            }
                            console.log('Vermelho venceu!!!')
                        }
                    }
                } else if (_alvoAtacando[2] === 'torre') {
                    if (torreInformacao[_alvoAtacando[0]][1] === 'morto') {
                        _alvoPerseguindo = []
                        _alvoAtacando = []
                        _unidadeVisaoCaminho(vermelhoAzul[2][0])
                    } else {
                        let _verificacao = false
                        for (let i = 0; i < _alvosTorreVisiveis.length; i++) {
                            if (_alvosTorreVisiveis[i][0] === _alvoAtacando[0]) {
                                _verificacao = true
                            }
                        }
                        if (_verificacao) {
                            if (_unidadeTimeout) {
                                torreInformacao[_alvoAtacando[0]][5] -= _unidadeAtackDano
                                _unidadeTimeout = false
                                setTimeout(() => {
                                    _unidadeTimeout = true
                                }, _unidadeAtackVelocidade)
                            }
                        } else {
                            _alvoPerseguindo = []
                            _alvoAtacando = []
                            _unidadeVisaoCaminho(vermelhoAzul[2][0])
                        }
                    }
                }
            }
        }, 10),

        setInterval(() => {
            _unidadeVerificarColisaoUnidades()
            _unidadeVerificarColisaoTorres()
        }, 100)
    ]
}













function criarTorre(x, y, vidaTemporaria, vidaVerdadeira, tempoConstrucao, dano, danoV, visao, tamanho, cor, espaco, vermelhoAzul, verticalHorizontal, tipoDeDano, areaDoDano) {
    let _x = x
    let _y = y
    let _torreElement = document.createElement('div')
    let _torreElementVida = document.createElement('div')
    let _torreIndexCopy = torreIndex

    let _torreVidaTemporaria = vidaTemporaria
    let _torreVidaVerdadeira = vidaVerdadeira
    let _torreVidaAtual = _torreVidaTemporaria
    let _torreTempoConstrucao = tempoConstrucao
    let _torreAtackDano = dano
    let _torreAtackVelocidade = danoV
    let _torreRangeVisao = visao
    let _torreTamanho = tamanho
    let _torrePosicaoOcupada = []
    let _meio = [_y+_torreTamanho[1]/2, _x+_torreTamanho[0]/2]
    let _torrePronta = false

    let _alvosTorreNoRange = []
    let _alvosTorreVisiveis = []

    let _alvoMaisProximo = []

    let _obstaculoCaminhoTrue = true

    for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
        for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
            _torrePosicaoOcupada.push([i+Math.floor(_y/tabelaCaminhoTamanho), e+Math.floor(_x/tabelaCaminhoTamanho)])
            if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                return
            }
            tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] = 'X'
        }
    }

    _torreElement.style.top = `${_y}px`
    _torreElement.style.left = `${_x}px`
    _torreElement.style.width = `${_torreTamanho[0]}px`
    _torreElement.style.height = `${_torreTamanho[1]}px`
    _torreElement.style.cssText += 'background: rgb(168, 148, 57);'
    _torreElementVida.style.opacity = '0.35'
    _torreElementVida.style.backgroundColor = vermelhoAzul[1] === 'azul' ? 'blue' : 'red'
    _torreElementVida.style.width = `${_torreVidaAtual}px`

    _torreElement.id = `torre${torreIndex}`
    _torreElement.className = 'torre'
    _torreElement.id = `barra-vida${torreIndex}`
    _torreElementVida.className = 'barra-vida'

    document.getElementById('corpo').appendChild(_torreElement)
    _torreElement.appendChild(_torreElementVida)

    torreInformacao.push([[[_x+_torreTamanho[0]/2, _y+_torreTamanho[1]/2], _y, _y+_torreTamanho[1], _x, _x+_torreTamanho[0], [_y, _x], [_y, _x+_torreTamanho[0]], [_y+_torreTamanho[1], _x+_torreTamanho[0]], [_y+_torreTamanho[1], _x]], _torreIndexCopy, vermelhoAzul[1], _torreTamanho, [_y, _x], _torreVidaAtual])

    torreIndex++

    let _torreTimeout = 0

    let _torreTimeoutLoad = setInterval(() => {
        _torreTimeout += 10
        if (_torreTimeout > _torreTempoConstrucao) {
            _torreElement.style.cssText += cor
            _torrePronta = true
            torreInformacao[_torreIndexCopy][5] = _torreVidaVerdadeira*(_torreVidaAtual/_torreVidaTemporaria)
            clearInterval(_torreTimeoutLoad)
        }
    }, 10)

    let _verficarObstaculoCaminhoTrue = (_yIni, _xIni) => {
        let _xposicaoTabelaUnid = _meio[1]
        let _yposicaoTabelaUnid = _meio[0]
        let _xposicaoTabelaIni = _xIni
        let _yposicaoTabelaIni = _yIni
        let _xposicaoTabelaUnidCopy = _meio[1]
        let _yposicaoTabelaUnidCopy = _meio[0]
        let _forDistancia
        let _tabelaCaminhoCopy = []

        for (let i = 0; i < tabelaCaminho.length; i++) {
            _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminho[i]))
        }

        for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
            for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
                _tabelaCaminhoCopy[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] = 'J'
            }
        }

        // let ponto2 = document.createElement('div')
        // ponto2.className = 'ponto2'
        // ponto2.style.top = `${_yposicaoTabelaIni}px`
        // ponto2.style.left = `${_xposicaoTabelaIni}px`
        // document.getElementById('corpo').appendChild(ponto2)

        let _a = (_yposicaoTabelaIni - _yposicaoTabelaUnid) / (_xposicaoTabelaIni - _xposicaoTabelaUnid)
        let _b = _yposicaoTabelaUnid - (((_yposicaoTabelaIni - _yposicaoTabelaUnid) / (_xposicaoTabelaIni - _xposicaoTabelaUnid)) * _xposicaoTabelaUnid)

        if (Math.abs(_xposicaoTabelaUnid - _xposicaoTabelaIni)/tabelaCaminhoTamanho > Math.abs(_yposicaoTabelaUnid - _yposicaoTabelaIni)/tabelaCaminhoTamanho) {
            _forDistancia = Math.floor(Math.abs(_xposicaoTabelaUnid - _xposicaoTabelaIni)/tabelaCaminhoTamanho + 5)
        } else {
            _forDistancia = Math.floor(Math.abs(_yposicaoTabelaUnid - _yposicaoTabelaIni)/tabelaCaminhoTamanho + 5)
        }

        for (let i = 0; i < _forDistancia; i++) {
            // if (vermelhoAzul[1] === 'vermelho' || true) {
            //     let ponto = document.createElement('div')
            //     ponto.className = 'ponto'
            //     ponto.style.top = `${_yposicaoTabelaUnid}px`
            //     ponto.style.left = `${_xposicaoTabelaUnid}px`
            //     document.getElementById('corpo').appendChild(ponto)
            // }
            if (Math.abs(_xposicaoTabelaUnid - _xposicaoTabelaIni) > Math.abs(_yposicaoTabelaUnid - _yposicaoTabelaIni)) {
                if (_xposicaoTabelaUnid > _xposicaoTabelaIni) {
                    _xposicaoTabelaUnid -= Math.abs(_xposicaoTabelaUnidCopy - _xposicaoTabelaIni)/_forDistancia
                } else {
                    _xposicaoTabelaUnid += Math.abs(_xposicaoTabelaUnidCopy - _xposicaoTabelaIni)/_forDistancia
                }
                _yposicaoTabelaUnid = (_xposicaoTabelaUnid * _a) + _b
            } else {
                if (_yposicaoTabelaUnid > _yposicaoTabelaIni) {
                    _yposicaoTabelaUnid -= Math.abs(_yposicaoTabelaUnidCopy - _yposicaoTabelaIni)/_forDistancia
                } else {
                    _yposicaoTabelaUnid += Math.abs(_yposicaoTabelaUnidCopy - _yposicaoTabelaIni)/_forDistancia
                }
                _xposicaoTabelaUnid = (_yposicaoTabelaUnid - _b) / _a
            }
            if (_tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== '.' && _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'J') {
                _obstaculoCaminhoTrue = false
            }
        }
    }

    let _unidadeVerificarColisaoUnidades = () => {
        _alvosTorreNoRange = []
        _alvosTorreVisiveis = []
        _alvoMaisProximo = []

        for (let i = 0; i < unidadeInformacao.length; i++) {
            if (unidadeInformacao[i][1] !== 'morto' && unidadeInformacao[i][2] === vermelhoAzul[2][1]) {
                let _unidadeDistancia = (((unidadeInformacao[i][6] + unidadeInformacao[i][4]/2) - _meio[1]) ** 2 + ((unidadeInformacao[i][7] + unidadeInformacao[i][4]/2) - _meio[0]) ** 2) ** 0.5 - unidadeInformacao[i][4]/2
                if (_unidadeDistancia <= _torreRangeVisao) {
                    _alvosTorreNoRange.push([i, _unidadeDistancia])
                }
            }
        }


        for (let i = 0; i < _alvosTorreNoRange.length; i++) {
            _obstaculoCaminhoTrue = true
            _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosTorreNoRange[i][0]][7] + unidadeInformacao[_alvosTorreNoRange[i][0]][4]/2, unidadeInformacao[_alvosTorreNoRange[i][0]][6] + unidadeInformacao[_alvosTorreNoRange[i][0]][4]/2)

            if (_obstaculoCaminhoTrue) {
                _alvosTorreVisiveis.push(_alvosTorreNoRange[i])
            }
        }

        if (_alvosTorreVisiveis.length > 0) {
            _alvoMaisProximo = _alvosTorreVisiveis[0]
            for (let i = 1; i < _alvosTorreVisiveis.length; i++) {
                if (_alvoMaisProximo[1] > _alvosTorreVisiveis[i][1]) {
                    _alvoMaisProximo = _alvosTorreVisiveis[i]
                }
            }
        }
    }

    let _torreCarregarAtaque = true

    let _torreIntervaloLoad = [
        setInterval(() => {
            if (_torreVidaAtual !== torreInformacao[_torreIndexCopy][5] || torreInformacao[_torreIndexCopy][1] === 'morto') {
                if (_torreVidaAtual <= 0 || torreInformacao[_torreIndexCopy][1] === 'morto') {
                    document.getElementById('corpo').removeChild(_torreElement)
                    for (let i = 0; i < _torrePosicaoOcupada.length; i++) {
                        tabelaCaminho[_torrePosicaoOcupada[i][0]][_torrePosicaoOcupada[i][1]] = '.'
                    }
                    torreInformacao[_torreIndexCopy][1] = 'morto'
                    for (let i = 0; i < _torreIntervaloLoad.length; i++) {
                        clearInterval(_torreIntervaloLoad[i])
                    }
                } else {
                    _torreVidaAtual = torreInformacao[_torreIndexCopy][5]
                    _torreElementVida.style.width = `${_torreVidaAtual}px`
                }
            }

            if (_torrePronta) {
                if (tipoDeDano !== 'nenhum' && _alvoMaisProximo.length > 0) {
                    if (unidadeInformacao[_alvoMaisProximo[0]][1] === 'morto') {
                        _alvoMaisProximo = []
                    } else {
                        let _verificacao = false
                        for (let i = 0; i < _alvosTorreVisiveis.length; i++) {
                            if (_alvosTorreVisiveis[i][0] === _alvoMaisProximo[0]) {
                                _verificacao = true
                            }
                        }
                        if (_verificacao) {
                            if (_torreCarregarAtaque) {
                                if (tipoDeDano === 'area') {
                                    for (let i = 0; i < unidadeInformacao.length; i++) {
                                        if (unidadeInformacao[i][1] !== 'morto' && unidadeInformacao[i][2] === vermelhoAzul[2][1]) {
                                            let _unidadeDistancia = (((unidadeInformacao[i][6] + unidadeInformacao[i][4]/2) - (unidadeInformacao[_alvoMaisProximo[0]][6] + unidadeInformacao[_alvoMaisProximo[0]][4]/2)) ** 2 + ((unidadeInformacao[i][7] + unidadeInformacao[i][4]/2) - (unidadeInformacao[_alvoMaisProximo[0]][7] + unidadeInformacao[_alvoMaisProximo[0]][4]/2)) ** 2) ** 0.5
                                            if (_unidadeDistancia <= areaDoDano[0]) {
                                                unidadeInformacao[i][8] -= _torreAtackDano
                                            }
                                        }
                                    }
                                } else {
                                    unidadeInformacao[_alvoMaisProximo[0]][8] -= _torreAtackDano
                                }
                                _torreCarregarAtaque = false
                                setTimeout(() => {
                                    _torreCarregarAtaque = true
                                }, _torreAtackVelocidade)
                            }
                        } else {
                            _alvoMaisProximo = []
                        }
                    }
                }
            }
        }, 10),

        setInterval(() => {
            _unidadeVerificarColisaoUnidades()
        }, 100)
    ]
}

function atualizarCaminhoMetade() {
    let _copyTabelaCaminhoMetade = []
    for (let i = 0; i < tabelaCaminho.length; i+=2) {
        _copyTabelaCaminhoMetade.push([])
        for (let e = 0; e < tabelaCaminho[i].length; e+=2) {
            if (tabelaCaminho[i][e] !== '.' || tabelaCaminho[i+1][e] !== '.' || tabelaCaminho[i][e+1] !== '.' || tabelaCaminho[i+1][e+1] !== '.') {
                _copyTabelaCaminhoMetade[i/2].push('B')
            } else {
                _copyTabelaCaminhoMetade[i/2].push('.')
            }
        }
    }
    for (let i = 0; i < _copyTabelaCaminhoMetade.length; i++) {
        tabelaCaminhoMetade[i] = Object.assign([], _copyTabelaCaminhoMetade[i])
    }
}
atualizarCaminhoMetade()

// let abababa = setInterval(() => {
//     criarUnidade(Math.floor(Math.random()*300), Math.floor(Math.random()*900), 150, 25, 1000, 2, 500, 70, 50, 'background: brown;', 1, ['A', 'azul', ['V', 'vermelho']])
//     criarUnidade(Math.floor(Math.random()*300 + 1600), Math.floor(Math.random()*900), 150, 25, 1000, 2, 500, 70, 50, 'background: brown;', 1, ['V', 'vermelho', ['A', 'azul']])
// }, 50)

// setTimeout(() => {
//     clearInterval(abababa)
// }, 1000)

// setInterval(() => {
//     let _numero1 = Math.floor(Math.random() * 20)
//     let _numero2 = Math.floor(Math.random() * 40)
//     if (tabelaCaminho[_numero1][_numero2] === '.') {
//         tabelaCaminho[_numero1][_numero2] = 'X'
//         caminhoAlteracoes++
//         for (let i = 0; i < tabelaCaminho.length; i++) {
//             console.log(tabelaCaminho[i]+'')
//         }
//         console.log('')
//         console.log('')
//         console.log('')
//     }
// }, 300)