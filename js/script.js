const input = document.getElementById('input')

const spanCerto = document.getElementById('span-certo')
const spanErrado = document.getElementById('span-errado')

const h1 = document.getElementById('h1')
const containerH1 = document.getElementById('container-h1')

const btnRecarregar = document.getElementById('recarregar')
const timeBtn = document.getElementById('time-btn')

const paragrafoTime = timeBtn.querySelector('p')
const card = document.querySelector('.card')

const PPMH3 = document.getElementById('h3')

let inputLength = 0
let numberSpanCerto = 0

let numberSpanErrado = 0
let watch = 59

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
    'programação',
    'mercado', 'funil', 'jogos', 'poupança',
    'Fernando', 'há', 'à', 'Twitter', 'YouTube',
    'plataforma', 'custo', 'contador',
    'estranho', 'normal', 'Brasília', 'parede', 'Brasil', 'internet',
    'JavaScript', 'descoberta', 'Whatsapp', 'garrafa',
    'barra', 'academia', 'linha', 'coluna', 'fone', 'Anitta', 'Drake',
    'coberta', 'televisor', 'aspas', 'luz', 'anos',
    'Flamengo', 'torcida', 'Formiga', 'Danilo', 'perder', 'ganhar', 'ouro',
    'perigo', 'cabeça', 'encarar', 'entendo', 'seleção',
    'mês', 'fita', 'editor', 'confiança', 'manter',
    'atividade', 'ponto', 'porrada', 'expectativa', 'realidade', 'reais',
    'galera', 'época', 'sério', 'isso', 'convidado',
    'show', 'vestiu', 'artista', 'sabia', 'culpado',
    'será', 'dia', 'hoje', 'oposto', 'porque',
    'porquê', 'barulho', 'cara', 'porta', 'casa',
    'isto', 'não', 'escola', 'idioma', 'pais', 'país',
    'continente', 'mar', 'oceano', 'botão', 'Universidade',
    'Faculdade', 'própio', 'Universo', 'Sol', 'Terra', 'galáxia',
    'buraco', 'minhoca', 'jogos', 'veloz', 'aqui', 'temos',
    'tema', 'redação', 'cama', 'quarto', 'variar', 'quarteto',
    'dueto', 'maxima', 'sentir', 'seguir', 'junto', 'termo',
    'as', 'ajuda', 'telha', 'console', 'estes', 'demasiado',
    'um', 'dois', 'três', 'novessentos', 'vinte', 'Leonardo',
    'descubra', 'foguete', 'Elon', 'Jeff', 'senhores',
    'terno', 'github', 'céu', 'azul', 'rosa', 'ponto',
    'Nike', 'Adidas', 'mato', 'grosso', 'vinda', 'idas',
    'trabalho', 'portfólio', 'Lagosta', 'Tubarão', 'seres',
    'pé', 'mosquito', 'vida', 'fio', 'coberta', 'calor',
    'frio', 'calculista', 'homem', 'mulher', 'criança',
    'deuses', 'maiores', 'ecrever', 'digitar', 'notificação',
    'chão', 'geladeira', 'móvel', 'carro', 'armario', 'Laisa',
    'Gilberto', 'apelido', 'democracia', 'quadro', 'auditório',
    'descoberta', 'uniforme', 'tapete', 'cinto', 'cinco', 'eletricidade'
]

console.log(arr.length)

function attCard(numCerto, numErrado) {
    spanCerto.textContent = numCerto
    spanErrado.textContent = numErrado
    
    const calcPPM = numCerto - numErrado
    PPMH3.textContent = `${calcPPM} PPM`
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
            watch = 59

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
    const h1Class = containerH1.classList

    if(h1Class.contains('hide')){
        input.focus()
    }

    hide(containerH1)
    sorteio()
})

timeBtn.addEventListener('click', () => hide(paragrafoTime))
input.addEventListener('keypress', enivarTecla)