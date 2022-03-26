const input = document.getElementById('input')

const spanCerto = document.getElementById('span-certo')
const spanErrado = document.getElementById('span-errado')

const h1 = document.getElementById('h1')
const containerH1 = document.getElementById('container-h1')

const btnRecarregar = document.getElementById('recarregar')
const timeBtn = document.getElementById('time-btn')

const paragrafoTime = timeBtn.querySelector('p')
const card = document.querySelector('.card')

let inputLength = 0
let numberSpanCerto = 0

let numberSpanErrado = 0
let watch = 15

const arr = [
    'Lucas', 'Televisão',
    'Tomada', 'Histórico',
    'Toalha', 'Mouse',
    'Mousepad', 'Presidente',
    'senhores', 'estrófe',
    'cor', 'Mateus',
    'monitor', 'Thalyta',
    'Artur', 'torcida', 'dinheiro',
    'acabar', 'celular', 'Espanha',
    'Estados Unidos', 'programação',
    'mercado', 'funil', 'jogos', 'poupança',
    'Fernando', 'há', 'à', 'Twitter', 'YouTube',
    'plataforma', 'custo', 'contador',
    'estranho', 'normal', 'Brasília', 'parede', 'Brasil', 'internet',
    'JavaScript', 'descoberta', 'Whatsapp', 'Visual Studio Code', 'garrafa',
    'barra', 'academia', 'linha', 'coluna', 'fone', 'Anitta', 'Drake',
    'coberta', 'televisor', 'aspas', 'luz', 'anos',
    'Flamengo', 'torcida', 'Formiga', 'DaNiLo', 'perder', 'ganhar', 'ouro',
    'perigo', 'cabeça', 'encarar', 'entendo', 'seleção',
    'mês', 'fita', 'editor', 'confiança', 'manter',
    'atividade', 'ponto', 'porrada', 'expectativa', 'realidade', 'reais',
    'galera', 'época', 'sério', 'isso', 'convidado',
    'show', 'vestiu', 'artista', 'sabia', 'culpado',
    'será', 'dia', 'hoje', 'oposto', 'porque',
    'por quê', 'porquê', 'por que', 'barulho', 'cara'
]

function attCard(numCerto, numErrado) {
    spanCerto.textContent = numCerto
    spanErrado.textContent = numErrado
}

function sorteio() {
    const sorteioVar = Math.floor(Math.random() * arr.length)
    h1.textContent = arr[sorteioVar]
}
sorteio()

function validWord() {

    if (input.value.trim() === h1.textContent) {
        numberSpanCerto++
        input.value = ''
    } else {
        numberSpanErrado++
        input.value = ''
    }
    input.focus()
    sorteio()

}

function hide(item) {
    const itemClassList = item.classList

    if (itemClassList.contains('hide')) {
        itemClassList.remove('hide')
    } else {
        itemClassList.add('hide')
    }

}

function intervalo() {
    const interval = setInterval(function () {
        paragrafoTime.textContent = watch

        if (paragrafoTime != '1:00') {
            paragrafoTime.textContent = `0:${watch--}`
        }

        if (paragrafoTime.textContent == '0:0') {

            inputLength = 0
            paragrafoTime.textContent = '1:00'
            input.value = ''

            clearInterval(interval)
        }

        if (watch == -1) {
            watch = 15

            attCard(numberSpanCerto, numberSpanErrado)
            hide(containerH1)
            input.blur()

            clearInterval(interval)
        }
    }, 1000)
}

function init() {

    numberSpanCerto = 0
    numberSpanErrado = 0
    input.value = ''

    input.focus()
    intervalo()
}

function enivarTecla(e) {
    inputLength++
    if (inputLength === 1) {
        init()
    }
    if (e.keyCode === 32) {
        validWord()
    }
}

btnRecarregar.addEventListener('click', () => {
    hide(containerH1)
    sorteio()
})

timeBtn.addEventListener('click', () => hide(paragrafoTime))
input.addEventListener('keypress', enivarTecla)