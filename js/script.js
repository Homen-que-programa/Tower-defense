var unidadeInformacao = []
var unidadeMensagemColisao = []
var unidadeIndex = 0

var quantiaUnidadeLimite = 15
var quantiaUnidadeAzul = 0
var quantiaUnidadeVermelho = 0

var torreInformacao = []
var torreMensagemColisao = []
var torreIndex = 0

var quantiaTorreLimite = 10
var quantiaTorreAzul = 0
var quantiaTorreVermelho = 0

var portoesVermelhoAzul = {
    azul: 0,
    vermelho: 0
}


function criarUnidade(x, y, vida, dano, danoV, velocidade, visao, range, tamanho, cor, espaco, vermelhoAzul, caracter, zombie) {
    let _x = x
    let _y = y
    let _unidadeElement = document.createElement('div')
    let _unidadeElementVida = document.createElement('div')
    let _unidadeElementBuff = document.createElement('div')
    let _unidadeElementDebuff = document.createElement('div')
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

    let _alvoAtacando = []

    let _obstaculoCaminhoTrue = true
    let _unidadeTimeout = true
    let _unidadeEncurralada = false
    let _unidadeEncurraladaSaida = false

    _unidadeElement.style.top = `${_y}px`
    _unidadeElement.style.left = `${_x}px`
    _unidadeElement.style.width = `${_unidadeTamanho}px`
    _unidadeElement.style.height = `${_unidadeTamanho}px`
    _unidadeElement.style.cssText += cor
    _unidadeElement.style.cssText += `border: 5px solid ${vermelhoAzul[1] === 'azul' ? 'rgba(71, 133, 204, 0.7)' : 'rgba(204, 87, 71, 0.7)'};`
    _unidadeElement.id = `fuzileiro${unidadeIndex}`
    _unidadeElement.className = 'fuzileiro'
    _unidadeElement.id = `barra-vida${unidadeIndex}`

    _unidadeElementVida.style.opacity = '0.35'
    _unidadeElementVida.style.backgroundColor = vermelhoAzul[1] === 'azul' ? 'blue' : 'red'
    _unidadeElementVida.className = 'barra-vida'

    _unidadeElementBuff.style.cssText += `height: ${_unidadeTamanho + 5}px;width: ${_unidadeTamanho + 5}px;opacity: 0;`
    _unidadeElementBuff.className = 'unidade-buff'

    _unidadeElementDebuff.style.cssText += `height: ${_unidadeTamanho + 5}px;width: ${_unidadeTamanho + 5}px;opacity: 0;`
    _unidadeElementDebuff.className = 'unidade-debuff'

    document.getElementById('corpo').appendChild(_unidadeElement)
    _unidadeElement.appendChild(_unidadeElementBuff)
    _unidadeElement.appendChild(_unidadeElementDebuff)
    _unidadeElement.appendChild(_unidadeElementVida)

    unidadeInformacao.push([_unidadeElement.id, _unidadeIndexCopy, vermelhoAzul[1], 'circulo', _unidadeTamanho, _unidadeRangeVisao, _x+(_unidadeTamanho/2), _y+(_unidadeTamanho/2), _unidadeVida, []])

    if (!zombie) {
        if (vermelhoAzul[1] === 'azul') {
            quantiaUnidadeAzul += espaco
            document.getElementById('azul-quantia-unidade').innerHTML = quantiaUnidadeAzul
        } else {
            quantiaUnidadeVermelho += espaco
            document.getElementById('vermelho-quantia-unidade').innerHTML = quantiaUnidadeVermelho
        }
    }
    unidadeIndex++

    let _unidadeCaracter = () => {}

    if (caracter === 'homenQueDaBuff') {
        let _unidadeElementRange = document.createElement('div')
        _unidadeElementRange.style.cssText += `height: ${_unidadeRangeVisao * 2}px;width: ${_unidadeRangeVisao * 2}px;`
        _unidadeElementRange.className = 'unidade-range'

        if (vermelhoAzul[1] === 'azul') {
            _unidadeElementRange.style.backgroundColor = 'rgba(34, 125, 228, 0.3)'
            _unidadeElementRange.style.borderColor = 'rgba(34, 125, 228)'
        } else {
            _unidadeElementRange.style.backgroundColor = 'rgba(228, 34, 34, 0.3)'
            _unidadeElementRange.style.borderColor = 'rgba(228, 34, 34)'
        }

        _unidadeElement.appendChild(_unidadeElementRange)

        _unidadeCaracter = () => {
            for (let i = 0; i < unidadeInformacao.length; i++) {
                if (unidadeInformacao[i][1] !== 'morto' && unidadeInformacao[i][2] === vermelhoAzul[1] && unidadeInformacao[i][1] !== _unidadeIndexCopy) {
                    let _verificacao = true
                    for (let e = 0; e < unidadeInformacao[i][9].length; e++) {
                        if (unidadeInformacao[i][9][e][0] === 'homenQueDaBuff') {
                            let _unidadeDistancia = (((unidadeInformacao[i][6] + unidadeInformacao[i][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[i][7] + unidadeInformacao[i][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - unidadeInformacao[i][4]/2 - _unidadeTamanho/2
                            if (_unidadeDistancia > _unidadeRangeVisao) {
                                unidadeInformacao[i][9].splice(e, 1)
                            }
                            _verificacao = false
                        }
                    }
                    if (_verificacao) {
                        let _unidadeDistancia = (((unidadeInformacao[i][6] + unidadeInformacao[i][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[i][7] + unidadeInformacao[i][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - unidadeInformacao[i][4]/2 - _unidadeTamanho/2
                        if (_unidadeDistancia <= _unidadeRangeVisao) {
                            unidadeInformacao[i][9].push(['homenQueDaBuff', [['dano', 'somaSimples', 10], ['velocidade', 'pocentagem', 1.2], ['rangeVisao', 'porcentagem', 1.2], ['vida', 'cura', 2]], 'buff'])
                        }
                    }
                }
            }
        }
    }

    let _unidadeVisaoCaminho = (_encurralado, _encurraladoAliado, _verificandoSaida) => {
        _caminhoAlteracoesCopy = caminhoAlteracoes
        _caminhotab = []

        let _tabelaCaminhoCopy = []
        let _xytab = [[Math.floor((_y+_unidadeTamanho/2)/tabelaCaminhoTamanho), Math.floor((_x+_unidadeTamanho/2)/tabelaCaminhoTamanho)]]
        let _xytabRetorno = []

        let _limitLoad = 300
        let _e = 1
        let breackWhile = true
        let _alvoVisao
        if (_encurralado) {
            if (_verificandoSaida) {
                _alvoVisao = vermelhoAzul[2][0]
            } else {
                if (_encurraladoAliado) {
                    _alvoVisao = vermelhoAzul[1] === 'vermelho' ? 'Y' : 'X'
                } else {
                    _alvoVisao = vermelhoAzul[1] === 'vermelho' ? 'X' : 'Y'
                }
            }
            _unidadeEncurralada = true
        } else {
            _alvoVisao = vermelhoAzul[2][0]
            _unidadeEncurralada = false
        }

        for (let i = 0; i < tabelaCaminho.length; i++) {
            _tabelaCaminhoCopy.push(Object.assign([], tabelaCaminho[i]))
        }
        _tabelaCaminhoCopy[_xytab[0][0]][_xytab[0][1]] = 0

        while (breackWhile && _e < _limitLoad) {
            let _xytabSub = []
            let _verificacao = 0
            for (let i = 0; i < _xytab.length; i++) {
                for (let e = [-1, 0]; e[0] < 2; e[0]+=2) {
                    for (let b = 0; b < 2; b++) {
                        if (
                            _xytab[i][0]+e[b] >= 0 && _xytab[i][0]+e[b] < tabelaCaminho.length && _xytab[i][1]+(b*e[0]) >= 0 && _xytab[i][1]+(b*e[0]) < tabelaCaminho[0].length &&
                            (
                            _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === '.' ||
                            _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === 'yy' ||
                            _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === 'xx' ||
                            (
                            _verificandoSaida ? _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === 'y' || _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === 'x' : false
                            )
                            )
                        ) {
                            _xytabSub.push([_xytab[i][0]+e[b], _xytab[i][1]+(b*e[0])])
                            _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] = _e
                            _verificacao++
                        } else if (
                            _xytab[i][0]+e[b] >= 0 && _xytab[i][0]+e[b] < tabelaCaminho.length && _xytab[i][1]+(b*e[0]) >= 0 && _xytab[i][1]+(b*e[0]) < tabelaCaminho[0].length &&
                            _tabelaCaminhoCopy[_xytab[i][0]+e[b]][_xytab[i][1]+(b*e[0])] === _alvoVisao
                        ) {
                            if (_encurralado) {
                                _xytabRetorno = [_xytab[i][0], _xytab[i][1]]
                                _tabelaCaminhoCopy[_xytabRetorno[0]][_xytabRetorno[1]] = _e
                            } else {
                                _xytabRetorno = [_xytab[i][0]+e[b], _xytab[i][1]+(b*e[0])]
                            }
                            
                            if (_verificandoSaida) {
                                _unidadeEncurraladaSaida = true
                            } else {
                                _unidadeEncurraladaSaida = false
                            }
                            
                            breackWhile = false
                            _verificacao++
                            break
                        }
                    }
                }
            }
            if (_verificacao === 0 || _e > _limitLoad - 10) {
                if (!_verificandoSaida && !_encurralado) {
                    _unidadeVisaoCaminho(true, false, true)
                } else if (_encurraladoAliado) {
                    _unidadeVisaoCaminho(true, false, false)
                    _unidadeEncurraladaSaida = false
                } else {
                    _unidadeVisaoCaminho(true, true, false)
                    _unidadeEncurraladaSaida = false
                }
                return
            }
            _xytab = _xytabSub
            _e++
        }

        let _xytabMin = []
        let _xyMin = [[], _limitLoad]
        e = 0

        while (e < _limitLoad) {
            e++

            for (let _forI = -1; _forI < 2; _forI++) {
                for (let _forE = -1; _forE < 2; _forE++) {
                    if (
                        _xytabRetorno[0]+_forI >= 0 && _xytabRetorno[0]+_forI < tabelaCaminho.length &&
                        _xytabRetorno[1]+_forE >= 0 && _xytabRetorno[1]+_forE < tabelaCaminho[0].length ?
                        !isNaN(_tabelaCaminhoCopy[_xytabRetorno[0]+_forI][_xytabRetorno[1]+_forE]) &&
                        !isNaN(_tabelaCaminhoCopy[_xytabRetorno[0]+_forI][_xytabRetorno[1]]) &&
                        !isNaN(_tabelaCaminhoCopy[_xytabRetorno[0]][_xytabRetorno[1]+_forE]) : false
                    ) {
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
                // console.log(_tabelaCaminhoCopy)
                // console.log(_caminhotab)
                // let ababa = []
                // for (let i = 0; i < tabelaCaminho.length; i++) {
                //     ababa.push(Object.assign([], tabelaCaminho[i]))
                // }
                // for (let i = 0; i < _caminhotab.length; i++) {
                //     ababa[_caminhotab[i][0]][_caminhotab[i][1]] = 'I'
                // }
                // console.log(ababa)
                break
            } else {
                _xytabRetorno = Object.assign([], _xyMin[0])
            }
        }
    }
    _unidadeVisaoCaminho()

    let _unidadeMovimento = (tipoDeAlvo) => {
        let _unidadeDistancia
        if (tipoDeAlvo === 'unidade' || tipoDeAlvo === 'base') {
            _unidadeDistancia = ((_alvoXY[1] - (_x + _unidadeTamanho/2)) ** 2 + (_alvoXY[0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2 - (tipoDeAlvo === 'base' ? 0 : unidadeInformacao[_alvoMaisProximo[0]][4]/2)
        } else {
            _unidadeDistancia = ((_alvoXY[1] - _x) ** 2 + (_alvoXY[0] - _y) ** 2) ** 0.5
        }
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
            _x = parseFloat((_x).toFixed(4))
            _y = parseFloat((_y).toFixed(4))
        }
        _unidadeElement.style.top = `${_y}px`
        _unidadeElement.style.left = `${_x}px`
        unidadeInformacao[_unidadeIndexCopy][6] = _x
        unidadeInformacao[_unidadeIndexCopy][7] = _y

        if (tipoDeAlvo === 'caminho') {
            if (_unidadeDistancia <= _unidadeVelocidade * 5) {
                _unidadeVisaoCaminho()
            }
        } else if (tipoDeAlvo === 'unidade' || tipoDeAlvo === 'base') {
            if (_unidadeDistancia <= _unidadeRange) {
                _alvoAtacando = _alvoMaisProximo
            }
        } else if (tipoDeAlvo === 'torre') {
            if (_unidadeDistancia <= _unidadeRange) {
                _alvoAtacando = _alvoMaisProximo
            }
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
            _forDistancia = Math.floor(Math.abs(_xposicaoTabelaUnid - _xposicaoTabelaIni)/tabelaCaminhoTamanho + 5)
        } else {
            _forDistancia = Math.floor(Math.abs(_yposicaoTabelaUnid - _yposicaoTabelaIni)/tabelaCaminhoTamanho + 5)
        }

        for (let i = 0; i < _forDistancia; i++) {
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
            // if (vermelhoAzul[1] === 'vermelho') {
            //     console.log(_unidadeTamanho)
            //     let ponto = document.createElement('div')
            //     ponto.className = 'ponto'
            //     ponto.style.top = `${_yposicaoTabelaUnid}px`
            //     ponto.style.left = `${_xposicaoTabelaUnid}px`
            //     document.getElementById('corpo').appendChild(ponto)
            // }
            if (
                (
                tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== '.' &&
                tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'y' &&
                tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'x' &&
                tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'yy' &&
                tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'xx' &&
                tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'A' &&
                tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'V'
                ) &&
                (
                tipoDeAlvo === 'torre' ? _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'J' :
                tipoDeAlvo === 'base' ? tabelaCaminho[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== vermelhoAzul[2][0] : true
                )
            ) {
                _obstaculoCaminhoTrue = false
            }
        }
    }

    let _unidadeVerificarColisaoUnidades = () => {
        let _alvosUnidadeVisiveisCopy = Object.assign([], _alvosUnidadeVisiveis)

        _alvosUnidadeNoRange = []
        _alvosUnidadeVisiveis = []
        _alvoMaisProximo = []

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
            let _verificacao = false

            for (let n = 0; n < _alvosUnidadeVisiveisCopy.length; n++) {
                if (_alvosUnidadeVisiveisCopy[n][0] === _alvosUnidadeNoRange[i][0]) {
                    _verificacao = true
                }
            }

            if (_verificacao) {
                _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, 'unidade', _alvosUnidadeNoRange[i][0], _unidadeTamanho/2)
            } else {
                _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, 'unidade', _alvosUnidadeNoRange[i][0], 0)
                _verficarObstaculoCaminhoTrue(unidadeInformacao[_alvosUnidadeNoRange[i][0]][7] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, unidadeInformacao[_alvosUnidadeNoRange[i][0]][6] + unidadeInformacao[_alvosUnidadeNoRange[i][0]][4]/2, 'unidade', _alvosUnidadeNoRange[i][0], _unidadeTamanho)
            }
            if (_obstaculoCaminhoTrue) {
                _alvosUnidadeVisiveis.push(_alvosUnidadeNoRange[i])
            }
        }

        let _unidadeDistanciaBase = (((_baseAlvoPosition[1]) - (_x + _unidadeTamanho/2)) ** 2 + ((_baseAlvoPosition[0]) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
        if (_unidadeDistanciaBase <= _unidadeRangeVisao) {
            _obstaculoCaminhoTrue = true
            let _verificacao = false

            for (let n = 0; n < _alvosUnidadeVisiveisCopy.length; n++) {
                if (_alvosUnidadeVisiveisCopy[n][0] === -1) {
                    _verificacao = true
                }
            }

            if (_verificacao) {
                _verficarObstaculoCaminhoTrue(_baseAlvoPosition[0], _baseAlvoPosition[1], 'base', -1, _unidadeTamanho/2)
            } else {
                _verficarObstaculoCaminhoTrue(_baseAlvoPosition[0], _baseAlvoPosition[1], 'base', -1, 0)
                _verficarObstaculoCaminhoTrue(_baseAlvoPosition[0], _baseAlvoPosition[1], 'base', -1, _unidadeTamanho)
            }

            if (_obstaculoCaminhoTrue) {
                _baseAlvo = [-1, _unidadeDistanciaBase, 'base']
                _alvosUnidadeVisiveis.push(_baseAlvo)
            } else {
                _baseAlvo = []
            }
        }
        
        // if (_alvosUnidadeVisiveis.length > 0) {
        //     _alvoMaisProximo = _alvosUnidadeVisiveis[0]
        //     for (let i = 1; i < _alvosUnidadeVisiveis.length; i++) {
        //         if (_alvoMaisProximo[1] > _alvosUnidadeVisiveis[i][1]) {
        //             _alvoMaisProximo = _alvosUnidadeVisiveis[i]
        //         }
        //     }
        // }

        if (_alvosUnidadeVisiveis.length > 0) {
            if (_alvoMaisProximo.length > 0) {
                let _unidadeDistanciaProximo
                if (_alvoMaisProximo[2] === 'unidade') {
                    _unidadeDistanciaProximo = (((unidadeInformacao[_alvoMaisProximo[0]][6] + unidadeInformacao[_alvoMaisProximo[0]][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[_alvoMaisProximo[0]][7] + unidadeInformacao[_alvoMaisProximo[0]][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2 - unidadeInformacao[_alvoMaisProximo[0]][4]/2
                } else if (_alvoMaisProximo[2] === 'torre') {
                    _unidadeDistanciaProximo = ((_alvoMaisProximo[3][1] - (_x + _unidadeTamanho/2)) ** 2 + (_alvoMaisProximo[3][0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                } else if (_alvoMaisProximo[2] === 'base') { 
                    _unidadeDistanciaProximo = (((_baseAlvoPosition[1]) - (_x + _unidadeTamanho/2)) ** 2 + ((_baseAlvoPosition[0]) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                }
                _alvoMaisProximo[1] = _unidadeDistanciaProximo
                for (let i = 0; i < _alvosUnidadeVisiveis.length; i++) {
                    if (_alvoMaisProximo[1] > _alvosUnidadeVisiveis[i][1] && _alvoMaisProximo[0] !== _alvosUnidadeVisiveis[i][0]) {
                        _alvoMaisProximo = _alvosUnidadeVisiveis[i]
                    }
                }
            } else {
                _alvoMaisProximo = _alvosUnidadeVisiveis[0]
                for (let i = 1; i < _alvosUnidadeVisiveis.length; i++) {
                    if (_alvoMaisProximo[1] > _alvosUnidadeVisiveis[i][1] && _alvoMaisProximo[0] !== _alvosUnidadeVisiveis[i][0]) {
                        _alvoMaisProximo = _alvosUnidadeVisiveis[i]
                    }
                }
            }
        }
    }
    

    let _unidadeVerificarColisaoTorres = () => {
        let _alvosTorreVisiveisCopy = _alvosTorreVisiveis
        _alvosTorreNoRange = []
        _alvosTorreVisiveis = []
        _alvoTorreMaisProximo = []

        for (let i = 0; i < torreInformacao.length; i++) {
            if (torreInformacao[i][1] !== 'morto' && torreInformacao[i][2] === vermelhoAzul[2][1] && (_unidadeEncurralada ? _unidadeEncurraladaSaida ? torreInformacao[i][6] : !torreInformacao[i][14] : torreInformacao[i][6] && !torreInformacao[i][14])) {
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
            let _verificacao = false

            for (let n = 0; n < _alvosTorreVisiveisCopy.length; n++) {
                if (_alvosTorreVisiveisCopy[n][0] === _alvosTorreNoRange[i][0]) {
                    _verificacao = true
                }
            }

            if (_verificacao) {
                _verficarObstaculoCaminhoTrue(torreInformacao[_alvosTorreNoRange[i][0]][0][0][1], torreInformacao[_alvosTorreNoRange[i][0]][0][0][0], 'torre', _alvosTorreNoRange[i][0], _unidadeTamanho/2)
            } else {
                _verficarObstaculoCaminhoTrue(torreInformacao[_alvosTorreNoRange[i][0]][0][0][1], torreInformacao[_alvosTorreNoRange[i][0]][0][0][0], 'torre', _alvosTorreNoRange[i][0], 0)
                _verficarObstaculoCaminhoTrue(torreInformacao[_alvosTorreNoRange[i][0]][0][0][1], torreInformacao[_alvosTorreNoRange[i][0]][0][0][0], 'torre', _alvosTorreNoRange[i][0], _unidadeTamanho)
            }
            if (_obstaculoCaminhoTrue) {
                _alvosTorreVisiveis.push(_alvosTorreNoRange[i])
            }
        }

        if (_alvosTorreVisiveis.length > 0) {
            if (_alvoMaisProximo.length > 0) {
                let _unidadeDistanciaProximo
                if (_alvoMaisProximo[2] === 'unidade') {
                    _unidadeDistanciaProximo = (((unidadeInformacao[_alvoMaisProximo[0]][6] + unidadeInformacao[_alvoMaisProximo[0]][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[_alvoMaisProximo[0]][7] + unidadeInformacao[_alvoMaisProximo[0]][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2 - unidadeInformacao[_alvoMaisProximo[0]][4]/2
                } else if (_alvoMaisProximo[2] === 'torre') {
                    _unidadeDistanciaProximo = ((_alvoMaisProximo[3][1] - (_x + _unidadeTamanho/2)) ** 2 + (_alvoMaisProximo[3][0] - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                } else if (_alvoMaisProximo[2] === 'base') { 
                    _unidadeDistanciaProximo = (((_baseAlvoPosition[1]) - (_x + _unidadeTamanho/2)) ** 2 + ((_baseAlvoPosition[0]) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2
                }
                _alvoMaisProximo[1] = _unidadeDistanciaProximo
                for (let i = 0; i < _alvosTorreVisiveis.length; i++) {
                    if (_alvoMaisProximo[1] > _alvosTorreVisiveis[i][1]) {
                        _alvoMaisProximo = _alvosTorreVisiveis[i]
                    }
                }
            } else {
                _alvoMaisProximo = _alvosTorreVisiveis[0]
                for (let i = 1; i < _alvosTorreVisiveis.length; i++) {
                    if (_alvoMaisProximo[1] > _alvosTorreVisiveis[i][1]) {
                        _alvoMaisProximo = _alvosTorreVisiveis[i]
                    }
                }
            }
        }
    }

    let _unidadeAtualizarVida = () => {
        if (_unidadeVida !== unidadeInformacao[_unidadeIndexCopy][8] || unidadeInformacao[_unidadeIndexCopy][1] === 'morto') {
            if (_unidadeVida <= 0 || unidadeInformacao[_unidadeIndexCopy][8] <= 0 || unidadeInformacao[_unidadeIndexCopy][1] === 'morto') {
                document.getElementById('corpo').removeChild(_unidadeElement)
                unidadeInformacao[_unidadeIndexCopy][1] = 'morto'
                if (!zombie) {
                    if (vermelhoAzul[1] === 'azul') {
                        quantiaUnidadeAzul -= espaco
                        document.getElementById('azul-quantia-unidade').innerHTML = quantiaUnidadeAzul
                    } else {
                        quantiaUnidadeVermelho -= espaco
                        document.getElementById('vermelho-quantia-unidade').innerHTML = quantiaUnidadeVermelho
                    }
                }
                for (let i = 0; i < _unidadeIntervaloLoad.length; i++) {
                    clearInterval(_unidadeIntervaloLoad[i])
                }
            } else {
                _unidadeVida = unidadeInformacao[_unidadeIndexCopy][8]
                _unidadeElementVida.style.width = `${_unidadeVida}px`
            }
        }
    }

    let _unidadeAtacar = () => {
        if (_alvoAtacando[2] === 'unidade') {
            if (unidadeInformacao[_alvoAtacando[0]][1] === 'morto') {
                _alvoAtacando = []
                _unidadeVisaoCaminho()
                _unidadeVerificarColisaoUnidades()
                _unidadeVerificarColisaoTorres()
            } else {
                let _unidadeDistancia = (((unidadeInformacao[_alvoAtacando[0]][6] + unidadeInformacao[_alvoAtacando[0]][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[_alvoAtacando[0]][7] + unidadeInformacao[_alvoAtacando[0]][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - unidadeInformacao[_alvoAtacando[0]][4]/2 - _unidadeTamanho/2
                if (_unidadeDistancia > _unidadeRange) {
                    _alvoAtacando = []
                    _unidadeVisaoCaminho()
                    _unidadeVerificarColisaoUnidades()
                    _unidadeVerificarColisaoTorres()
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
                        _unidadeVisaoCaminho()
                        _unidadeVerificarColisaoUnidades()
                        _unidadeVerificarColisaoTorres()
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
                            if (modoSobrevivencia && !zombie) {
                                let recursoGanho = Math.floor(_unidadeAtackDano / 30)
                                recursosAzul.ouro[0] += recursoGanho
                                recursosAzul.comida[0] += recursoGanho
                                recursosAzul.recurso[0] += recursoGanho
                                recursosAzul.ouro[1].innerHTML = recursosAzul.ouro[0]
                                recursosAzul.comida[1].innerHTML = recursosAzul.comida[0]
                                recursosAzul.recurso[1].innerHTML = recursosAzul.recurso[0]
                            } else {
                                baseVermelhoVida -= _unidadeAtackDano
                                baseVermelhoBarraId.style.width = `${(baseVermelhoVida/baseVermelhoVidaMax)*100}%`
                            }
                            _unidadeTimeout = false
                            setTimeout(() => {
                                _unidadeTimeout = true
                            }, _unidadeAtackVelocidade)
                        }
                    } else {
                        _alvoAtacando = []
                        _unidadeVisaoCaminho()
                        _unidadeVerificarColisaoUnidades()
                        _unidadeVerificarColisaoTorres()
                    }
                } else {
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
                            baseAzulBarraId.style.width = `${(baseAzulVida/baseAzulVidaMax)*100}%`
                            _unidadeTimeout = false
                            setTimeout(() => {
                                _unidadeTimeout = true
                            }, _unidadeAtackVelocidade)
                        }
                    } else {
                        _alvoAtacando = []
                        _unidadeVisaoCaminho()
                        _unidadeVerificarColisaoUnidades()
                        _unidadeVerificarColisaoTorres()
                    }
                } else {
                    _alvoAtacando = []
                    for (let i = 0; i < unidadeInformacao.length; i++) {
                        unidadeInformacao[i][1] = 'morto'
                    }
                    console.log('Vermelho venceu!!!')
                }
            }
        } else if (_alvoAtacando[2] === 'torre') {
            if (torreInformacao[_alvoAtacando[0]][1] === 'morto') {
                _alvoAtacando = []
                _unidadeVisaoCaminho()
                _unidadeVerificarColisaoUnidades()
                _unidadeVerificarColisaoTorres()
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
                    _alvoAtacando = []
                    _unidadeVisaoCaminho()
                    _unidadeVerificarColisaoUnidades()
                    _unidadeVerificarColisaoTorres()    
                }
            }
        }
    }

    let _unidadeGerenciarBuffsDebuffs = () => {
        _unidadeAtackDano = dano
        _unidadeAtackVelocidade = danoV
        _unidadeVelocidade = velocidade
        _unidadeRangeVisao = visao
        _unidadeRange = range

        let verificarBuff = false
        let verificarDebuff = false
        for (let e = 0; e < unidadeInformacao[_unidadeIndexCopy][9].length; e++) {
            for (let i = 0; i < unidadeInformacao[_unidadeIndexCopy][9][e][1].length; i++) {
                if (unidadeInformacao[_unidadeIndexCopy][9][e][2] === 'buff') {
                    verificarBuff = true
                } else if (unidadeInformacao[_unidadeIndexCopy][9][e][2] === 'debuff') {
                    verificarDebuff = true
                }

                if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][0] === 'velocidade') {
                    if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][1] === 'somaSimples') {
                        _unidadeVelocidade = velocidade + unidadeInformacao[_unidadeIndexCopy][9][e][1][i][2]
                    } else if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][1] === 'porcentagem') {
                        _unidadeVelocidade = velocidade * unidadeInformacao[_unidadeIndexCopy][9][e][1][i][2]
                    }
                } else if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][0] === 'dano') {
                    if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][1] === 'somaSimples') {
                        _unidadeAtackDano = dano + unidadeInformacao[_unidadeIndexCopy][9][e][1][i][2]
                    } else if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][1] === 'porcentagem') {
                        _unidadeAtackDano = dano * unidadeInformacao[_unidadeIndexCopy][9][e][1][i][2]
                    }
                } else if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][0] === 'rangeVisao') {
                    if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][1] === 'somaSimples') {
                        _unidadeRangeVisao = visao + unidadeInformacao[_unidadeIndexCopy][9][e][1][i][2]
                    } else if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][1] === 'porcentagem') {
                        _unidadeRangeVisao = visao * unidadeInformacao[_unidadeIndexCopy][9][e][1][i][2]
                    }
                } else if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][0] === 'vida') {
                    if (unidadeInformacao[_unidadeIndexCopy][9][e][1][i][1] === 'cura') {
                        unidadeInformacao[_unidadeIndexCopy][8] = Math.min(vida, (unidadeInformacao[_unidadeIndexCopy][8] + unidadeInformacao[_unidadeIndexCopy][9][e][1][i][2]))
                        _unidadeVida = unidadeInformacao[_unidadeIndexCopy][8]
                        _unidadeElementVida.style.width = `${_unidadeVida}px`
                    }
                }
            }
        }

        if (verificarBuff) {
            _unidadeElementBuff.style.cssText += 'opacity: 1;'
        } else {
            _unidadeElementBuff.style.cssText += 'opacity: 0;'
        }
        if (verificarDebuff) {
            if (verificarBuff) {
                _unidadeElementDebuff.style.cssText += `height: ${_unidadeTamanho + 25}px;width: ${_unidadeTamanho + 25}px;`
            } else {
                _unidadeElementDebuff.style.cssText += `height: ${_unidadeTamanho + 5}px;width: ${_unidadeTamanho + 5}px;`
            }
            _unidadeElementDebuff.style.cssText += 'opacity: 1;'
        } else {
            _unidadeElementDebuff.style.cssText += 'opacity: 0;'
        }
    }

    let _unidadeIntervaloLoad = [
        setInterval(() => {
            _unidadeAtualizarVida()

            if (caminhoAlteracoes !== _caminhoAlteracoesCopy) {
                _unidadeVisaoCaminho()
                _caminhoAlteracoesCopy = caminhoAlteracoes
            }

            if (_alvoAtacando.length <= 0) {
                if (_alvoMaisProximo.length <= 0) {
                    _alvoXY = [Math.max(1, _caminhotab[0][0]*tabelaCaminhoTamanho), Math.max(1, _caminhotab[0][1]*tabelaCaminhoTamanho)]
                    _unidadeMovimento('caminho')
                } else {
                    if (_alvoMaisProximo[2] === 'unidade') {
                        _alvoXY = [unidadeInformacao[_alvoMaisProximo[0]][7] + unidadeInformacao[_alvoMaisProximo[0]][4]/2, unidadeInformacao[_alvoMaisProximo[0]][6] + unidadeInformacao[_alvoMaisProximo[0]][4]/2]
                    } else if (_alvoMaisProximo[2] === 'torre') {
                        _alvoXY = _alvoMaisProximo[3]
                    } else if (_alvoMaisProximo[2] === 'base') {
                        _alvoXY = _baseAlvoPosition
                    }
                    _unidadeMovimento(_alvoMaisProximo[2])
                }


            } else {
                _unidadeAtacar()
            }
        }, 10),

        setInterval(() => {
            _unidadeVerificarColisaoUnidades()
            _unidadeVerificarColisaoTorres()
            _unidadeGerenciarBuffsDebuffs()
            _unidadeCaracter()
        }, 100)
    ]
}









setTimeout(() => {
    criarTorre(
        baseAzulPosition[1] - 20,
        baseAzulPosition[0] + 50,
        400,
        baseAzulVidaMax,
        12000,
        0,
        2500,
        0,
        [0, 0],
        'background-color: rgb(145, 84, 35);',
        0,
        ['A', 'azul', ['V', 'vermelho']],
        'unico',
        [],
        false,
        false,
        'base',
        'Base Azul',
        matrizPrecoTorres.length - 1,
        [0, 0, 0],
        [false]
    )

    criarTorre(
        baseVermelhoPosition[1] + 20,
        baseVermelhoPosition[0] + 50,
        400,
        baseVermelhoVidaMax,
        12000,
        0,
        2500,
        0,
        [0, 0],
        'background-color: rgb(145, 84, 35);',
        0,
        ['V', 'vermelho', ['A', 'azul']],
        'unico',
        [],
        false,
        false,
        'base',
        'Base Vermelha',
        matrizPrecoTorres.length - 1,
        [0, 0, 0],
        [false]
    )
}, 100)



function criarTorre(x, y, vidaTemporaria, vidaVerdadeira, tempoConstrucao, dano, danoV, visao, tamanho, cor, espaco, vermelhoAzul, tipoDeDano, areaDoDano, atrairAlvo, passavel, caracter, nomeDaTorre, torreEscolhida, niveis, caracteristicas) {
    let _x = x
    let _y = y
    let _torreElement = document.createElement('div')
    let _torreElementVida = document.createElement('div')
    let _torreIndexCopy = torreIndex

    let _torreVidaMaxima = vidaTemporaria
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
    let _torreNivelCopy = Object.assign([], niveis)

    let _alvosTorreNoRange = []
    let _alvosTorreVisiveis = []

    let _alvoMaisProximo = []

    let _obstaculoCaminhoTrue = true

    let _caracterVariaveis = {
        minasTerrestres: {
            detonando: false
        },
        homemQueTacaBoleadeira: {
            duracao: 3000,
            debuf: 0.8,
            alvosDebuf: []
        }
    }

    for (let i = 0; i < Math.floor(_torreTamanho[1]/tabelaCaminhoTamanho); i++) {
        for (let e = 0; e < Math.floor(_torreTamanho[0]/tabelaCaminhoTamanho); e++) {
            _torrePosicaoOcupada.push([i+Math.floor(_y/tabelaCaminhoTamanho), e+Math.floor(_x/tabelaCaminhoTamanho)])
            if (tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] !== '.') {
                return
            }
            if (vermelhoAzul[1] === 'azul') {
                tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] = passavel ? !atrairAlvo ? 'xx' : 'x' : 'X'
            } else {
                tabelaCaminho[i+Math.floor(_y/tabelaCaminhoTamanho)][e+Math.floor(_x/tabelaCaminhoTamanho)] = passavel ? !atrairAlvo ? 'yy' : 'y' : 'Y'
            }
        }
    }
    caminhoAlteracoes++
    atualizarCaminhoMetade()
    
    if (caracter !== 'base') {
        if (vermelhoAzul[1] === 'azul') {
            quantiaTorreAzul += espaco
            document.getElementById('azul-quantia-torre').innerHTML = quantiaTorreAzul
        } else {
            quantiaTorreVermelho += espaco
            document.getElementById('vermelho-quantia-torre').innerHTML = quantiaTorreVermelho
        }

        _torreElement.style.top = `${_y}px`
        _torreElement.style.left = `${_x}px`
        _torreElement.style.width = `${_torreTamanho[0]}px`
        _torreElement.style.height = `${_torreTamanho[1]}px`

        _torreElementVida.style.opacity = '0.35'
        _torreElementVida.style.backgroundColor = vermelhoAzul[1] === 'azul' ? 'blue' : 'red'
        _torreElementVida.style.width = `${_torreVidaAtual}px`

        _torreElement.id = `torre${torreIndex}`
        _torreElement.className = 'torre'
        _torreElement.id = `barra-vida${torreIndex}`
        _torreElementVida.className = 'barra-vida'
    }

    document.getElementById('corpo').appendChild(_torreElement)
    _torreElement.appendChild(_torreElementVida)

    torreInformacao.push(
        [
            [
                [_x+_torreTamanho[0]/2, _y+_torreTamanho[1]/2],
                _y,
                _y+_torreTamanho[1],
                _x,
                _x+_torreTamanho[0],
                [_y, _x],
                [_y, _x+_torreTamanho[0]],
                [_y+_torreTamanho[1], _x+_torreTamanho[0]],
                [_y+_torreTamanho[1], _x]
            ],
            _torreIndexCopy,
            vermelhoAzul[1],
            _torreTamanho,
            [_y, _x],
            _torreVidaAtual,
            atrairAlvo,
            _torrePosicaoOcupada,
            nomeDaTorre,
            torreEscolhida,
            Object.assign([], _torreNivelCopy),
            _torreRangeVisao,
            _torrePronta,
            [_torreVidaMaxima, _torreAtackDano, _torreAtackVelocidade, _torreRangeVisao, _torreTempoConstrucao],
            passavel,
            Object.assign([], caracteristicas),
            0
        ]
    )

    torreIndex++

    let _torreTimeout = 0

    let _torreTimeoutLoad
    if (caracter !== 'base') {
        _torreTimeoutLoad = setInterval(() => {
            _torreTimeout += 100
            if (_torreTimeout > _torreTempoConstrucao) {
                _torreElement.style.cssText += cor
                _torreElement.style.cssText += 'background-image: none;'
                _torrePronta = true
                torreInformacao[_torreIndexCopy][12] = _torrePronta
                torreInformacao[_torreIndexCopy][5] = _torreVidaVerdadeira * (_torreVidaAtual / _torreVidaTemporaria)
                _torreVidaMaxima = _torreVidaVerdadeira
                torreInformacao[_torreIndexCopy][13][0] = _torreVidaMaxima
                clearInterval(_torreTimeoutLoad)
            }
        }, 100)
    } else {
        _torreElement.style.cssText += cor
        _torreElement.style.cssText += 'background-image: none;'
        _torrePronta = true
        torreInformacao[_torreIndexCopy][12] = _torrePronta
        torreInformacao[_torreIndexCopy][5] = _torreVidaVerdadeira * (_torreVidaAtual / _torreVidaTemporaria)
        _torreVidaMaxima = _torreVidaVerdadeira
        torreInformacao[_torreIndexCopy][13][0] = _torreVidaMaxima
    }

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

        let _verificarTabela = vermelhoAzul[1] === 'azul' ? 'X' : 'Y'

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
            if (
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== '.' &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'x' &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'y' &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'xx' &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'yy' &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'A' &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'V' &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== _verificarTabela &&
                _tabelaCaminhoCopy[Math.floor((_yposicaoTabelaUnid)/tabelaCaminhoTamanho)][Math.floor((_xposicaoTabelaUnid)/tabelaCaminhoTamanho)] !== 'J'
            ) {
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
                if (
                    caracter === 'minasTerrestres' ?
                    _unidadeDistancia <= areaDoDano[0] :
                    _unidadeDistancia <= _torreRangeVisao
                ) {
                    _alvosTorreNoRange.push([i, _unidadeDistancia])

                    if (caracter === 'minasTerrestres') {
                        if (!_caracterVariaveis.minasTerrestres.detonando) {
                            setTimeout(() => {
                                for (let i = 0; i < unidadeInformacao.length; i++) {
                                    if (unidadeInformacao[i][1] !== 'morto' && unidadeInformacao[i][2] === vermelhoAzul[2][1]) {
                                        let _unidadeDistancia = (((unidadeInformacao[i][6] + unidadeInformacao[i][4]/2) - _meio[1]) ** 2 + ((unidadeInformacao[i][7] + unidadeInformacao[i][4]/2) - _meio[0]) ** 2) ** 0.5 - unidadeInformacao[i][4]/2
                                        if (_unidadeDistancia <= _torreRangeVisao) {
                                            unidadeInformacao[i][8] -= _torreAtackDano
                                        }
                                    }
                                }
                                torreInformacao[_torreIndexCopy][5] = 0

                                let _torreExplosaoElemento = document.createElement('div')
                                
                                _torreExplosaoElemento.id = 'mina-explosao'+_torreIndexCopy
                                _torreExplosaoElemento.style.cssText += 'background-color: rgba(165, 42, 42, 0.2);position: absolute;border-radius: 50%;transition: all 1.5s;opacity: 1;scale: 0.7;'
                                _torreExplosaoElemento.style.width = `${_torreRangeVisao*2}px`
                                _torreExplosaoElemento.style.height = `${_torreRangeVisao*2}px`
                                _torreExplosaoElemento.style.top = `${_meio[0] - _torreRangeVisao}px`
                                _torreExplosaoElemento.style.left = `${_meio[1] - _torreRangeVisao}px`

                                document.getElementById('corpo').appendChild(_torreExplosaoElemento)

                                requestAnimationFrame(() => {
                                    _torreExplosaoElemento.style.cssText += 'opacity: 0;scale: 1;'
                                })
                                setTimeout(() => {
                                    document.getElementById('corpo').removeChild(_torreExplosaoElemento)
                                }, 1000)
                            }, _torreAtackVelocidade)
                        }

                        _torreElement.style.cssText += `transition: background-color ${_torreAtackVelocidade/1000}s;`
                        requestAnimationFrame(() => {
                            _torreElement.style.cssText += 'background-color: rgba(226, 20, 20, 0.5);'
                        })
                        _caracterVariaveis.minasTerrestres.detonando = true
                    }
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
            if (caracter === 'homenQueTacaBoleadeira') {
                if (_alvosTorreVisiveis.length > 1) {
                    for (let i = 0; i < _alvosTorreVisiveis.length; i++) {
                        for (let e = 0; e < unidadeInformacao[_alvosTorreVisiveis[i][0]][9].length; e++) {
                            if (unidadeInformacao[_alvosTorreVisiveis[i][0]][9][e][0] === 'homenQueTacaBoleadeira') {
                                _alvosTorreVisiveis.splice(i, 1)
                                break
                            }
                        }
                    }
                }
            }

            if (_alvoMaisProximo.length > 0) {
                let _unidadeDistanciaProximo = (((unidadeInformacao[_alvoMaisProximo[0]][6] + unidadeInformacao[_alvoMaisProximo[0]][4]/2) - (_x + _unidadeTamanho/2)) ** 2 + ((unidadeInformacao[_alvoMaisProximo[0]][7] + unidadeInformacao[_alvoMaisProximo[0]][4]/2) - (_y + _unidadeTamanho/2)) ** 2) ** 0.5 - _unidadeTamanho/2 - unidadeInformacao[_alvoMaisProximo[0]][4]/2
                _alvoMaisProximo[1] = _unidadeDistanciaProximo
                for (let i = 0; i < _alvosTorreVisiveis.length; i++) {
                    if (_alvoMaisProximo[1] > _alvosTorreVisiveis[i][1]) {
                        _alvoMaisProximo = _alvosTorreVisiveis[i]
                    }
                }
            } else {
                _alvoMaisProximo = _alvosTorreVisiveis[0]
                for (let i = 1; i < _alvosTorreVisiveis.length; i++) {
                    if (_alvoMaisProximo[1] > _alvosTorreVisiveis[i][1]) {
                        _alvoMaisProximo = _alvosTorreVisiveis[i]
                    }
                }
            }
        }
    }

    let _torreVerificarNivel = () => {
        if (
            (
            _torreNivelCopy[0] !== torreInformacao[_torreIndexCopy][10][0] ||
            _torreNivelCopy[1] !== torreInformacao[_torreIndexCopy][10][1] ||
            _torreNivelCopy[2] !== torreInformacao[_torreIndexCopy][10][2]
            ) && _torrePronta
        ) {
            let _torreMelhorias

            if (_torreNivelCopy[0] !== torreInformacao[_torreIndexCopy][10][0]) {
                _torreMelhorias = matrizUpgradeTorresMelhorias[torreInformacao[_torreIndexCopy][9]][0][torreInformacao[_torreIndexCopy][10][0]-1]
            } else if (_torreNivelCopy[1] !== torreInformacao[_torreIndexCopy][10][1]) {
                _torreMelhorias = matrizUpgradeTorresMelhorias[torreInformacao[_torreIndexCopy][9]][1][torreInformacao[_torreIndexCopy][10][1]-1]
            } else if (_torreNivelCopy[2] !== torreInformacao[_torreIndexCopy][10][2]) {
                _torreMelhorias = matrizUpgradeTorresMelhorias[torreInformacao[_torreIndexCopy][9]][2][torreInformacao[_torreIndexCopy][10][2]-1]
            }

            _torreNivelCopy = Object.assign([], torreInformacao[_torreIndexCopy][10])

            _torrePronta = false
            torreInformacao[_torreIndexCopy][12] = _torrePronta
            _torreTimeout = 0
            _torreElement.style.cssText += 'background-color: rgb(165, 139, 105);'
            _torreElement.style.cssText += 'background-image: url("./img/construcao-quebrado.webp");'
            _torreTimeoutLoad = setInterval(() => {
                _torreTimeout += 100
                if (_torreTimeout > _torreTempoConstrucao) {
                    for (let i = 0; i < _torreMelhorias.length; i++) {
                        if (_torreMelhorias[i][0] === 'vida') {
                            if (caracter !== 'base') {
                                _torreVidaMaxima = _torreVidaMaxima + _torreMelhorias[i][1]
                                _torreVidaAtual = _torreVidaAtual + _torreMelhorias[i][1]
                                torreInformacao[_torreIndexCopy][5] = _torreVidaAtual
                                torreInformacao[_torreIndexCopy][13][0] = _torreVidaMaxima
                            } else {
                                _torreVidaMaxima = _torreVidaMaxima + _torreMelhorias[i][1]
                                _torreVidaAtual = _torreVidaAtual + _torreMelhorias[i][1]

                                if (vermelhoAzul[1] === 'azul') {
                                    baseAzulVida = _torreVidaAtual
                                    baseAzulVidaMax = _torreVidaMaxima
                                    baseAzulBarraId.style.width = `${(baseAzulVida/baseAzulVidaMax)*100}%`
                                } else {
                                    baseVermelhoVida = _torreVidaAtual
                                    baseVermelhoVidaMax = _torreVidaMaxima
                                    baseVermelhoBarraId.style.width = `${(baseVermelhoVida/baseVermelhoVidaMax)*100}%`
                                }
                                torreInformacao[_torreIndexCopy][5] = _torreVidaAtual
                                torreInformacao[_torreIndexCopy][13][0] = _torreVidaMaxima
                            }
                        } else if (_torreMelhorias[i][0] === 'dano') {
                            _torreAtackDano = _torreAtackDano + _torreMelhorias[i][1]
                            torreInformacao[_torreIndexCopy][13][1] = _torreAtackDano
                        } else if (_torreMelhorias[i][0] === 'velocidadeAtaque') {
                            _torreAtackVelocidade = _torreAtackVelocidade + _torreMelhorias[i][1]
                            torreInformacao[_torreIndexCopy][13][2] = _torreAtackVelocidade
                        } else if (_torreMelhorias[i][0] === 'range') {
                            _torreRangeVisao = _torreRangeVisao + _torreMelhorias[i][1]
                            torreInformacao[_torreIndexCopy][11] = _torreRangeVisao
                            torreInformacao[_torreIndexCopy][13][3] = _torreRangeVisao
                        } else if (_torreMelhorias[i][0] === 'tempoConstrucao') {
                            _torreTempoConstrucao = _torreTempoConstrucao + _torreMelhorias[i][1]
                            torreInformacao[_torreIndexCopy][13][4] = _torreTempoConstrucao
                        } else if (_torreMelhorias[i][0] === 'lentidao') {
                            _caracterVariaveis.homemQueTacaBoleadeira.debuf += _torreMelhorias[i][1]
                            _caracterVariaveis.homemQueTacaBoleadeira.debuf = Number(_caracterVariaveis.homemQueTacaBoleadeira.debuf).toFixed(3)
                            torreInformacao[_torreIndexCopy][15][1][1] = _caracterVariaveis.homemQueTacaBoleadeira.debuf
                        } else if (_torreMelhorias[i][0] === 'duracaoLentidao') {
                            _caracterVariaveis.homemQueTacaBoleadeira.duracao += _torreMelhorias[i][1]
                            _caracterVariaveis.homemQueTacaBoleadeira.duracao = Number(_caracterVariaveis.homemQueTacaBoleadeira.duracao).toFixed(3)
                            torreInformacao[_torreIndexCopy][15][2][1] = _caracterVariaveis.homemQueTacaBoleadeira.duracao
                        }
                    }
                    _torreElement.style.cssText += cor
                    _torreElement.style.cssText += 'background-image: none;'
                    _torrePronta = true
                    torreInformacao[_torreIndexCopy][12] = _torrePronta
                    clearInterval(_torreTimeoutLoad)
                }
            }, 100)
        }
    }

    let _torreCarregarAtaque = true

    let _torreIntervaloLoad = [
        setInterval(() => {
            if (!_caracterVariaveis.minasTerrestres.detonando) {
                _torreVerificarNivel()
            }

            if (caracter !== 'base') {
                if (_torreVidaAtual !== torreInformacao[_torreIndexCopy][5] || torreInformacao[_torreIndexCopy][1] === 'morto') {
                    if (_torreVidaAtual <= 0 || torreInformacao[_torreIndexCopy][5] <= 0 || torreInformacao[_torreIndexCopy][1] === 'morto') {
                        document.getElementById('corpo').removeChild(_torreElement)
                        for (let i = 0; i < _torrePosicaoOcupada.length; i++) {
                            tabelaCaminho[_torrePosicaoOcupada[i][0]][_torrePosicaoOcupada[i][1]] = '.'
                        }
                        caminhoAlteracoes++
                        atualizarCaminhoMetade()

                        if (vermelhoAzul[1] === 'azul') {
                            quantiaTorreAzul -= espaco
                            if (caracter === 'portao') {
                                portoesVermelhoAzul.azul--
                            }
                            document.getElementById('azul-quantia-torre').innerHTML = quantiaTorreAzul
                        } else {
                            quantiaTorreVermelho -= espaco
                            if (caracter === 'portao') {
                                portoesVermelhoAzul.vermelho--
                            }
                            document.getElementById('vermelho-quantia-torre').innerHTML = quantiaTorreVermelho
                        }
                        torreInformacao[_torreIndexCopy][1] = 'morto'
                        for (let i = 0; i < _torreIntervaloLoad.length; i++) {
                            clearInterval(_torreIntervaloLoad[i])
                        }
                    } else {
                        _torreVidaAtual = torreInformacao[_torreIndexCopy][5]
                        _torreElementVida.style.width = `${Math.floor(400 * (_torreVidaAtual / _torreVidaVerdadeira))}px`
                    }
                }
            } else {
                if (vermelhoAzul[1] === 'azul') {
                    if (_torreVidaAtual !== baseAzulVida) {
                        _torreVidaAtual = baseAzulVida
                        torreInformacao[_torreIndexCopy][5] = baseAzulVida

                        if (_torreVidaAtual <= 0 || torreInformacao[_torreIndexCopy][5] <= 0 || torreInformacao[_torreIndexCopy][1] === 'morto') {
                            torreInformacao[_torreIndexCopy][1] = 'morto'
                            for (let i = 0; i < _torreIntervaloLoad.length; i++) {
                                clearInterval(_torreIntervaloLoad[i])
                            }
                        }
                    }
                } else {
                    if (_torreVidaAtual !== baseVermelhoVida) {
                        _torreVidaAtual = baseVermelhoVida
                        torreInformacao[_torreIndexCopy][5] = baseVermelhoVida

                        if (_torreVidaAtual <= 0 || torreInformacao[_torreIndexCopy][5] <= 0 || torreInformacao[_torreIndexCopy][1] === 'morto') {
                            torreInformacao[_torreIndexCopy][1] = 'morto'
                            for (let i = 0; i < _torreIntervaloLoad.length; i++) {
                                clearInterval(_torreIntervaloLoad[i])
                            }
                        }
                    }
                }
            }
            
            if (_torrePronta && caracter !== 'minasTerrestres') {
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
                                                if (unidadeInformacao[i][8] - _torreAtackDano < 0) {
                                                    torreInformacao[_torreIndexCopy][16] += unidadeInformacao[i][8]
                                                } else {
                                                    torreInformacao[_torreIndexCopy][16] += _torreAtackDano
                                                }
                                                unidadeInformacao[i][8] -= _torreAtackDano
                                            }
                                        }
                                    }
                                } else {
                                    if (caracter === 'homenQueTacaBoleadeira') {
                                        for (let e = 0; e < unidadeInformacao[_alvoMaisProximo[0]][9].length; e++) {
                                            if (unidadeInformacao[_alvoMaisProximo[0]][9][e][0] === 'homenQueTacaBoleadeira') {
                                                unidadeInformacao[_alvoMaisProximo[0]][9].splice(e, 1)
                                                for (let i = 0; i < _caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf.length; i++) {
                                                    if (_alvoMaisProximo[0] === _caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf[i][0]) {
                                                        clearTimeout(_caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf[i][1])
                                                        _caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf.splice(i, 1)
                                                    }
                                                    break
                                                }
                                                break
                                            }
                                        }
                                        unidadeInformacao[_alvoMaisProximo[0]][9].push(['homenQueTacaBoleadeira', [['dano', 'somaSimples', -10], ['velocidade', 'porcentagem', _caracterVariaveis.homemQueTacaBoleadeira.debuf]], 'debuff'])

                                        let _caracterAlvo = _alvoMaisProximo[0]
                                        _caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf.push([
                                            _caracterAlvo,
                                            setTimeout(() => {
                                                for (let i = 0; i < unidadeInformacao[_caracterAlvo][9].length; i++) {
                                                    if (unidadeInformacao[_caracterAlvo][9][i][0] === 'homenQueTacaBoleadeira') {
                                                        unidadeInformacao[_caracterAlvo][9].splice(i, 1)
                                                        break
                                                    }
                                                }
                                                for (let i = 0; i < _caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf.length; i++) {
                                                    if (_caracterAlvo === _caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf[i]) {
                                                        clearTimeout(_caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf[i][1])
                                                        _caracterVariaveis.homemQueTacaBoleadeira.alvosDebuf.splice(i, 1)
                                                    }
                                                    break
                                                }
                                            }, _caracterVariaveis.homemQueTacaBoleadeira.duracao)
                                        ])

                                        if (unidadeInformacao[_alvoMaisProximo[0]][8] - _torreAtackDano < 0) {
                                            torreInformacao[_torreIndexCopy][16] += unidadeInformacao[_alvoMaisProximo[0]][8]
                                        } else {
                                            torreInformacao[_torreIndexCopy][16] += _torreAtackDano
                                        }
                                        unidadeInformacao[_alvoMaisProximo[0]][8] -= _torreAtackDano
                                        if (_alvosTorreVisiveis.length > 1) {
                                            _alvoMaisProximo = []
                                        }
                                    } else {
                                        if (unidadeInformacao[_alvoMaisProximo[0]][8] - _torreAtackDano < 0) {
                                            torreInformacao[_torreIndexCopy][16] += unidadeInformacao[_alvoMaisProximo[0]][8]
                                        } else {
                                            torreInformacao[_torreIndexCopy][16] += _torreAtackDano
                                        }
                                        unidadeInformacao[_alvoMaisProximo[0]][8] -= _torreAtackDano
                                    }
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
            if (!_caracterVariaveis.minasTerrestres.detonando && _torrePronta) {
                _unidadeVerificarColisaoUnidades()
            }
        }, 100)
    ]
}

function atualizarCaminhoMetade() {
    // let _copyTabelaCaminhoMetade = []
    // for (let i = 0; i < tabelaCaminho.length; i+=2) {
    //     _copyTabelaCaminhoMetade.push([])
    //     for (let e = 0; e < tabelaCaminho[i].length; e+=2) {
    //         if (tabelaCaminho[i][e] !== '.' || tabelaCaminho[i+1][e] !== '.' || tabelaCaminho[i][e+1] !== '.' || tabelaCaminho[i+1][e+1] !== '.') {
    //             if (tabelaCaminho[i][e] !== '.') {
    //                 _copyTabelaCaminhoMetade[i/2].push(tabelaCaminho[i][e])
    //             }
    //             else if (tabelaCaminho[i+1][e] !== '.') {
    //                 _copyTabelaCaminhoMetade[i/2].push(tabelaCaminho[i+1][e])
    //             }
    //             else if (tabelaCaminho[i][e+1] !== '.') {
    //                 _copyTabelaCaminhoMetade[i/2].push(tabelaCaminho[i][e+1])
    //             }
    //             else if (tabelaCaminho[i+1][e+1] !== '.') {
    //                 _copyTabelaCaminhoMetade[i/2].push(tabelaCaminho[i+1][e+1])
    //             }
    //         } else {
    //             _copyTabelaCaminhoMetade[i/2].push('.')
    //         }
    //     }
    // }
    // for (let i = 0; i < _copyTabelaCaminhoMetade.length; i++) {
    //     tabelaCaminhoMetade[i] = Object.assign([], _copyTabelaCaminhoMetade[i])
    // }
}
atualizarCaminhoMetade()

// let abababa = setInterval(() => {
//     criarUnidade(Math.floor(Math.random()*300), Math.floor(Math.random()*900), 150, 25, 1000, 2, 500, 70, 50, 'background: brown;', 1, ['A', 'azul', ['V', 'vermelho']])
//     criarUnidade(Math.floor(Math.random()*300 + 1600), Math.floor(Math.random()*900), 150, 25, 1000, 2, 500, 70, 50, 'background: brown;', 1, ['V', 'vermelho', ['A', 'azul']])
// }, 10)

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