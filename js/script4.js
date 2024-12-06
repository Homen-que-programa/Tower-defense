const tabelaColisao = []
const tabelaColisaoTamanho = 250
const infoUnidades = []
let unidadeIndex = 0

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

function criarUnidade() {
    infoUnidades.push([1, Math.floor(Math.random()*950), document.createElement('div'), [], 0, tabelaCaminho, [], [], [], 1, true, [], 0, 0, 1, [], 0, 0])
    let _unidadeIndexAtual = unidadeIndex
    unidadeIndex++
    console.log(_unidadeIndexAtual)
    console.log(unidadeIndex)
    infoUnidades[_unidadeIndexAtual][0] = 1
    infoUnidades[_unidadeIndexAtual][1] = Math.floor(Math.random()*950)
    infoUnidades[_unidadeIndexAtual][2] = document.createElement('div')
    infoUnidades[_unidadeIndexAtual][3] = []
    infoUnidades[_unidadeIndexAtual][4] = 0
    infoUnidades[_unidadeIndexAtual][2].style.top = `${infoUnidades[_unidadeIndexAtual][1]}px`
    infoUnidades[_unidadeIndexAtual][2].style.left = `${infoUnidades[_unidadeIndexAtual][0]}px`
    infoUnidades[_unidadeIndexAtual][2].id = `fuzileiro${unidadeIndex}`
    infoUnidades[_unidadeIndexAtual][2].className = 'fuzileiro'

    infoUnidades[_unidadeIndexAtual].push(() => {
        for (let i = 0; i < tabelaColisao.length; i++) {
            for (let e = 0; e < tabelaColisao[i].length; e++) {
                for (let a = 0; a < tabelaColisao[i][e].length; a++) {
                    if (tabelaColisao[i][e][a][0] == infoUnidades[_unidadeIndexAtual][2].id) {
                        tabelaColisao[i][e].splice(a, 1)
                    }
                }
            }
        }
        tabelaColisao[Math.floor(infoUnidades[_unidadeIndexAtual][0]/tabelaColisaoTamanho)][Math.floor(infoUnidades[_unidadeIndexAtual][1]/tabelaColisaoTamanho)].push([infoUnidades[_unidadeIndexAtual][2].id, infoUnidades[_unidadeIndexAtual][0]+25, infoUnidades[_unidadeIndexAtual][1]+25])
        if (Math.floor(infoUnidades[_unidadeIndexAtual][0]/tabelaColisaoTamanho) != Math.floor((infoUnidades[_unidadeIndexAtual][0]+50)/tabelaColisaoTamanho)) {
            if (Math.floor(infoUnidades[_unidadeIndexAtual][1]/tabelaColisaoTamanho) != Math.floor((infoUnidades[_unidadeIndexAtual][1]+50)/tabelaColisaoTamanho)) {
                tabelaColisao[Math.floor((infoUnidades[_unidadeIndexAtual][0]+50)/tabelaColisaoTamanho)][Math.floor((infoUnidades[_unidadeIndexAtual][1]+50)/tabelaColisaoTamanho)].push([infoUnidades[_unidadeIndexAtual][2].id, infoUnidades[_unidadeIndexAtual][0]+25, infoUnidades[_unidadeIndexAtual][1]+25])
            }
            tabelaColisao[Math.floor((infoUnidades[_unidadeIndexAtual][0]+50)/tabelaColisaoTamanho)][Math.floor(infoUnidades[_unidadeIndexAtual][1]/tabelaColisaoTamanho)].push([infoUnidades[_unidadeIndexAtual][2].id, infoUnidades[_unidadeIndexAtual][0]+25, infoUnidades[_unidadeIndexAtual][1]+25])
        }
        if (Math.floor(infoUnidades[_unidadeIndexAtual][1]/tabelaColisaoTamanho) != Math.floor((infoUnidades[_unidadeIndexAtual][1]+50)/tabelaColisaoTamanho)) {
            tabelaColisao[Math.floor(infoUnidades[_unidadeIndexAtual][0]/tabelaColisaoTamanho)][Math.floor((infoUnidades[_unidadeIndexAtual][1]+50)/tabelaColisaoTamanho)].push([infoUnidades[_unidadeIndexAtual][2].id, infoUnidades[_unidadeIndexAtual][0]+25, infoUnidades[_unidadeIndexAtual][1]+25])
        }
    })
    infoUnidades[_unidadeIndexAtual][18]()

    infoUnidades[_unidadeIndexAtual].push(() => {
        infoUnidades[_unidadeIndexAtual][5] = tabelaCaminho
        infoUnidades[_unidadeIndexAtual][6] = [[Math.floor((infoUnidades[_unidadeIndexAtual][1]+25)/50), Math.floor((infoUnidades[_unidadeIndexAtual][0]+25)/50)]]
        infoUnidades[_unidadeIndexAtual][9] = 1
        infoUnidades[_unidadeIndexAtual][10] = true
        infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][0][0]][infoUnidades[_unidadeIndexAtual][6][0][1]] = 0
        while (infoUnidades[_unidadeIndexAtual][10] && infoUnidades[_unidadeIndexAtual][9] < 180) {
            infoUnidades[_unidadeIndexAtual][7] = []
            for (let i = 0; i < infoUnidades[_unidadeIndexAtual][6].length; i++) {
                if (infoUnidades[_unidadeIndexAtual][6][i][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == '.' : false) {
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0]-1, infoUnidades[_unidadeIndexAtual][6][i][1]-1])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]-1] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1] < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]] == '.' : false) {
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0]-1, infoUnidades[_unidadeIndexAtual][6][i][1]])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == '.' : false) {
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0]-1, infoUnidades[_unidadeIndexAtual][6][i][1]+1])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]+1] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0] < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == '.' : false) {
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0], infoUnidades[_unidadeIndexAtual][6][i][1]-1])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]-1] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0] < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == '.' : false) {
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0], infoUnidades[_unidadeIndexAtual][6][i][1]+1])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]+1] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == '.' : false){
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0]+1, infoUnidades[_unidadeIndexAtual][6][i][1]-1])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]-1] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1] < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]] == '.' : false) {
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0]+1, infoUnidades[_unidadeIndexAtual][6][i][1]])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]] == '.' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == '.' : false) {
                    infoUnidades[_unidadeIndexAtual][7].push([infoUnidades[_unidadeIndexAtual][6][i][0]+1, infoUnidades[_unidadeIndexAtual][6][i][1]+1])
                    infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]+1] = infoUnidades[_unidadeIndexAtual][9]
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0]-1, infoUnidades[_unidadeIndexAtual][6][i][1]-1]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1] < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0]-1, infoUnidades[_unidadeIndexAtual][6][i][1]]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]-1][infoUnidades[_unidadeIndexAtual][6][i][1]] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0]-1, infoUnidades[_unidadeIndexAtual][6][i][1]+1]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0] < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0], infoUnidades[_unidadeIndexAtual][6][i][1]-1]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0] < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0], infoUnidades[_unidadeIndexAtual][6][i][1]+1]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]-1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]-1] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0]+1, infoUnidades[_unidadeIndexAtual][6][i][1]-1]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1] >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1] < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0]+1, infoUnidades[_unidadeIndexAtual][6][i][1]]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
                if (infoUnidades[_unidadeIndexAtual][6][i][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][6][i][1]+1 < 40 ? infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]+1][infoUnidades[_unidadeIndexAtual][6][i][1]] == 'A' && infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][6][i][0]][infoUnidades[_unidadeIndexAtual][6][i][1]+1] == 'A' : false) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][6][i][0]+1, infoUnidades[_unidadeIndexAtual][6][i][1]+1]
                    infoUnidades[_unidadeIndexAtual][10] = false
                    break
                }
            }
            infoUnidades[_unidadeIndexAtual][6] = infoUnidades[_unidadeIndexAtual][7]
            infoUnidades[_unidadeIndexAtual][9]++
        }
        infoUnidades[_unidadeIndexAtual][11] = []
        infoUnidades[_unidadeIndexAtual][12] = infoUnidades[_unidadeIndexAtual][9]+1
        infoUnidades[_unidadeIndexAtual][13] = 0
        infoUnidades[_unidadeIndexAtual][9] = 0
        while (true && infoUnidades[_unidadeIndexAtual][9] < 180) {
            infoUnidades[_unidadeIndexAtual][9]++
            if (infoUnidades[_unidadeIndexAtual][8][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][8][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][8][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][8][1]-1 < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]-1]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]-1]) : false) {
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0]-1, infoUnidades[_unidadeIndexAtual][8][1]-1], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]-1]])
            }
            if (infoUnidades[_unidadeIndexAtual][8][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][8][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][8][1] >= 0 && infoUnidades[_unidadeIndexAtual][8][1] < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]]) : false) {
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0]-1, infoUnidades[_unidadeIndexAtual][8][1]], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]]])
            }
            if (infoUnidades[_unidadeIndexAtual][8][0]-1 >= 0 && infoUnidades[_unidadeIndexAtual][8][0]-1 < 20 && infoUnidades[_unidadeIndexAtual][8][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][8][1]+1 < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]+1]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]+1]) : false) {
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0]-1, infoUnidades[_unidadeIndexAtual][8][1]+1], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]-1][infoUnidades[_unidadeIndexAtual][8][1]+1]])
            }
            if (infoUnidades[_unidadeIndexAtual][8][0] >= 0 && infoUnidades[_unidadeIndexAtual][8][0] < 20 && infoUnidades[_unidadeIndexAtual][8][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][8][1]-1 < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]-1]) : false) {
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0], infoUnidades[_unidadeIndexAtual][8][1]-1], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]-1]])
            }
            if (infoUnidades[_unidadeIndexAtual][8][0] >= 0 && infoUnidades[_unidadeIndexAtual][8][0] < 20 && infoUnidades[_unidadeIndexAtual][8][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][8][1]+1 < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]+1]) : false) {
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0], infoUnidades[_unidadeIndexAtual][8][1]+1], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]+1]])
            }
            if (infoUnidades[_unidadeIndexAtual][8][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][8][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][8][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][8][1]-1 < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]-1]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]-1]) : false){
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0]+1, infoUnidades[_unidadeIndexAtual][8][1]-1], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]-1]])
            }
            if (infoUnidades[_unidadeIndexAtual][8][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][8][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][8][1] >= 0 && infoUnidades[_unidadeIndexAtual][8][1] < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]]) : false) {
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0]+1, infoUnidades[_unidadeIndexAtual][8][1]], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]]])
            }
            if (infoUnidades[_unidadeIndexAtual][8][0]+1 >= 0 && infoUnidades[_unidadeIndexAtual][8][0]+1 < 20 && infoUnidades[_unidadeIndexAtual][8][1]+1 >= 0 && infoUnidades[_unidadeIndexAtual][8][1]+1 < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]+1]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]]) && !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]+1]) : false) {
                infoUnidades[_unidadeIndexAtual][11].push([[infoUnidades[_unidadeIndexAtual][8][0]+1, infoUnidades[_unidadeIndexAtual][8][1]+1], infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]+1][infoUnidades[_unidadeIndexAtual][8][1]+1]])
            }
            for (let i = 0; i < infoUnidades[_unidadeIndexAtual][11].length; i++) {
                if (infoUnidades[_unidadeIndexAtual][12] > infoUnidades[_unidadeIndexAtual][11][i][1]) {
                    infoUnidades[_unidadeIndexAtual][12] = infoUnidades[_unidadeIndexAtual][11][i][1]
                    infoUnidades[_unidadeIndexAtual][13] = i
                }
            }
            if (infoUnidades[_unidadeIndexAtual][8][0] >= 0 && infoUnidades[_unidadeIndexAtual][8][0] < 20 && infoUnidades[_unidadeIndexAtual][8][1]-1 >= 0 && infoUnidades[_unidadeIndexAtual][8][1]-1 < 40 ? !isNaN(infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]-1]) : false) {
                infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]-1]
                if (infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]-1] == infoUnidades[_unidadeIndexAtual][12]) {
                    infoUnidades[_unidadeIndexAtual][8] = [infoUnidades[_unidadeIndexAtual][8][0], infoUnidades[_unidadeIndexAtual][8][1]-1]
                } else {
                    infoUnidades[_unidadeIndexAtual][8] = infoUnidades[_unidadeIndexAtual][11][infoUnidades[_unidadeIndexAtual][13]][0]
                }
            } else {
                infoUnidades[_unidadeIndexAtual][8] = infoUnidades[_unidadeIndexAtual][11][infoUnidades[_unidadeIndexAtual][13]][0]
            }
            infoUnidades[_unidadeIndexAtual][3].push(infoUnidades[_unidadeIndexAtual][8])
            if (infoUnidades[_unidadeIndexAtual][5][infoUnidades[_unidadeIndexAtual][8][0]][infoUnidades[_unidadeIndexAtual][8][1]] <= 1) {
                break
            }
        }
        console.log(infoUnidades[_unidadeIndexAtual][5])
        console.log(infoUnidades[_unidadeIndexAtual][3])
    })
    infoUnidades[_unidadeIndexAtual][19]()

    infoUnidades[_unidadeIndexAtual][4] = infoUnidades[_unidadeIndexAtual][3].length-1
    infoUnidades[_unidadeIndexAtual].push(setInterval(() => {
        infoUnidades[_unidadeIndexAtual][14] = 1
        infoUnidades[_unidadeIndexAtual][15] = [Math.max(infoUnidades[_unidadeIndexAtual][3][infoUnidades[_unidadeIndexAtual][4]][0]*50), Math.max(1, infoUnidades[_unidadeIndexAtual][3][infoUnidades[_unidadeIndexAtual][4]][1]*50)]
        infoUnidades[_unidadeIndexAtual][16] = (infoUnidades[_unidadeIndexAtual][15][0] - infoUnidades[_unidadeIndexAtual][1]) / (infoUnidades[_unidadeIndexAtual][15][1] - infoUnidades[_unidadeIndexAtual][0])
        infoUnidades[_unidadeIndexAtual][17] = infoUnidades[_unidadeIndexAtual][1] - (((infoUnidades[_unidadeIndexAtual][15][0] - infoUnidades[_unidadeIndexAtual][1]) / (infoUnidades[_unidadeIndexAtual][15][1] - infoUnidades[_unidadeIndexAtual][0])) * infoUnidades[_unidadeIndexAtual][0])
        psliderDist = ((infoUnidades[_unidadeIndexAtual][15][1] - infoUnidades[_unidadeIndexAtual][0]) ** 2 + (infoUnidades[_unidadeIndexAtual][15][0] - infoUnidades[_unidadeIndexAtual][1]) ** 2) ** 0.5
        if (infoUnidades[_unidadeIndexAtual][0] > infoUnidades[_unidadeIndexAtual][15][1]) {
            if (infoUnidades[_unidadeIndexAtual][16] < 0) {
                if (Math.abs(infoUnidades[_unidadeIndexAtual][16]) > 1) {
                    infoUnidades[_unidadeIndexAtual][1] += infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][0] = (infoUnidades[_unidadeIndexAtual][1] - infoUnidades[_unidadeIndexAtual][17]) / infoUnidades[_unidadeIndexAtual][16]
                }
                else {
                    infoUnidades[_unidadeIndexAtual][0] -= infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][1] = (infoUnidades[_unidadeIndexAtual][0] * infoUnidades[_unidadeIndexAtual][16]) + infoUnidades[_unidadeIndexAtual][17]
                }
            }
            else {
                if (Math.abs(infoUnidades[_unidadeIndexAtual][16]) > 1) {
                    infoUnidades[_unidadeIndexAtual][1] -= infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][0] = (infoUnidades[_unidadeIndexAtual][1] - infoUnidades[_unidadeIndexAtual][17]) / infoUnidades[_unidadeIndexAtual][16]
                }
                else {
                    infoUnidades[_unidadeIndexAtual][0] -= infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][1] = (infoUnidades[_unidadeIndexAtual][0] * infoUnidades[_unidadeIndexAtual][16]) + infoUnidades[_unidadeIndexAtual][17]
                }
            }
        }
        else {
            if (infoUnidades[_unidadeIndexAtual][16] < 0) {
                if (Math.abs(infoUnidades[_unidadeIndexAtual][16]) > 1) {
                    infoUnidades[_unidadeIndexAtual][1] -= infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][0] = (infoUnidades[_unidadeIndexAtual][1] - infoUnidades[_unidadeIndexAtual][17]) / infoUnidades[_unidadeIndexAtual][16]
                }
                else {
                    infoUnidades[_unidadeIndexAtual][0] += infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][1] = (infoUnidades[_unidadeIndexAtual][0] * infoUnidades[_unidadeIndexAtual][16]) + infoUnidades[_unidadeIndexAtual][17]
                }
            }
            else {
                if (Math.abs(infoUnidades[_unidadeIndexAtual][16]) > 1) {
                    infoUnidades[_unidadeIndexAtual][1] += infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][0] = (infoUnidades[_unidadeIndexAtual][1] - infoUnidades[_unidadeIndexAtual][17]) / infoUnidades[_unidadeIndexAtual][16]
                }
                else {
                    infoUnidades[_unidadeIndexAtual][0] += infoUnidades[_unidadeIndexAtual][14]
                    infoUnidades[_unidadeIndexAtual][1] = (infoUnidades[_unidadeIndexAtual][0] * infoUnidades[_unidadeIndexAtual][16]) + infoUnidades[_unidadeIndexAtual][17]
                }
            }
        }
        infoUnidades[_unidadeIndexAtual][2].style.top = `${infoUnidades[_unidadeIndexAtual][1]}px`
        infoUnidades[_unidadeIndexAtual][2].style.left = `${infoUnidades[_unidadeIndexAtual][0]}px`
        if (psliderDist <= 5) {
            console.log('chegou')
            infoUnidades[_unidadeIndexAtual][4] - 1 >= 0 ? infoUnidades[_unidadeIndexAtual][4]-- : 0
        }
    }, 10))
    document.body.appendChild(infoUnidades[_unidadeIndexAtual][2])
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

setInterval(() => {
    criarUnidade()
}, 2000);