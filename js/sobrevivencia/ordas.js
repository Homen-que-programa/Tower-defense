var ordaVariaveis = {
    orda: 1,
    duracao: 20000,
    dificuldade: {
        facil: {
            modZombies: 0.5
        },
        medio: {
            modZombies: 1
        },
        dificil: {
            modZombies: 2
        },
        impossivel: {
            modZombies: 4
        }
    }
}

var zombiesNomes = ['padrao', 'musculoso']
var zombies = {
    padrao: {
        nome: 'padrao',
        entrada: 1,
        saida: 25,
        incidencia: 100,
        tamanho: 30,
        criar: (x, y) => {
            criarUnidade(x, y, 50, 15, 1000, 1, 500, 70, 30, 'background-color: brown;', 0, ['V', 'vermelho', ['A', 'azul']], 'nenhum', true)
        }
    },
    musculoso: {
        nome: 'musculoso',
        entrada: 5,
        saida: 50,
        incidencia: 75,
        tamanho: 40,
        criar: (x, y) => {
            criarUnidade(x, y, 100, 25, 1000, 1, 500, 70, 40, 'background-color: blue;', 0, ['V', 'vermelho', ['A', 'azul']], 'nenhum', true)
        }
    }
}


document.getElementById('rodada-atual').innerHTML = `Rodada: ${ordaVariaveis.orda}`

function iniciarOrda(dfEsco) {
    setTimeout(() => {
        ordaVariaveis.orda++
        document.getElementById('rodada-atual').innerHTML = `Rodada: ${ordaVariaveis.orda}`
        ordaVariaveis.duracao += 1000
        iniciarOrda(dfEsco)
    }, ordaVariaveis.duracao)

    let quantiaZombies = 5 + ordaVariaveis.orda * ordaVariaveis.dificuldade[dfEsco].modZombies

    for (let i = 0; i < quantiaZombies; i++) {
        let zombieEscolhido
        let possibilidades = []
        let possibilidadesTotal = 0

        for (let e = 0; e < zombiesNomes.length; e++) {
            let forZombie = zombies[zombiesNomes[e]]

            if (forZombie.entrada <= ordaVariaveis.orda && ordaVariaveis.orda <= forZombie.saida) {
                possibilidades.push([forZombie.nome, Math.min(100, forZombie.incidencia + ((ordaVariaveis.orda - forZombie.entrada) - ((forZombie.saida - forZombie.entrada) / 2)) * 2)])
                possibilidadesTotal += Math.min(100, forZombie.incidencia + ((ordaVariaveis.orda - forZombie.entrada) - ((forZombie.saida - forZombie.entrada) / 2)) * 2)
            }
        }

        let possibilidadesRandom = Number((Math.random() * possibilidadesTotal).toFixed(4))

        for (let e = 0; e < possibilidades.length; e++) {
            possibilidadesRandom -= possibilidades[e][1]

            if (possibilidadesRandom <= 0) {
                zombieEscolhido = possibilidades[e][0]
                break
            }
        }

        setTimeout(() => {
            let locaisDisponiveis = []

            for (let i = 0; i < tabelaCaminhoMetade.length; i++) {
                for (let e = 0; e < tabelaCaminhoMetade[i].length; e++) {
                    if (e < tabelaCaminhoMetade[i].length / 2 + 3) {
                    } else if (tabelaCaminhoMetade[i][e] !== '.') {
                    } else {
                        locaisDisponiveis.push([e, i])
                    }
                }
            }

            let localEscolhido = locaisDisponiveis[Math.floor(Math.random() * locaisDisponiveis.length)]

            localEscolhido = [
                (localEscolhido[0] * tabelaCaminhoMetadeTamanho) + Math.min(tabelaCaminhoMetadeTamanho - zombies[zombieEscolhido].tamanho, Number((Math.random() * 0.5).toFixed(3)) * tabelaCaminhoMetadeTamanho),
                (localEscolhido[1] * tabelaCaminhoMetadeTamanho) + Math.min(tabelaCaminhoMetadeTamanho - zombies[zombieEscolhido].tamanho, Number((Math.random() * 0.5).toFixed(3)) * tabelaCaminhoMetadeTamanho)
            ]

            zombies[zombieEscolhido].criar(localEscolhido[0], localEscolhido[1])

        }, Math.floor(Math.random() * ordaVariaveis.duracao))
    }
}

iniciarOrda('medio')