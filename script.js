const input = document.getElementById('input')
const btn = document.getElementById('btn')

const spanCerto = document.getElementById('span-certo')
const spanErrado = document.getElementById('span-errado')

const h1 = document.getElementById('h1')
const btnRecarregar = document.getElementById('recarregar')

const timeBtn = document.getElementById('time-btn')
const paragrafoTime = timeBtn.querySelector('p')

const iniciar = document.getElementById('iniciar')
const econderCard = document.getElementById('esconder')

const card = document.querySelector('.card')

const numerosCertos = []
const numerosErrados = []

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
    'JavaScript','descoberta', 'Whatsapp', 'Visual Studio Code', 'garrafa',
    'barra', 'academia', 'linha', 'coluna', 'fone', 'Anitta', 'Drake', 
    'coberta','televisor', 'aspas', 'luz', 'anos', 
    'Flamengo', 'torcida', 'Formiga', 'DaNiLo','perder', 'ganhar', 'ouro', 
    'perigo', 'cabeça', 'encarar', 'entendo', 'seleção',
    'mês', 'fita', 'editor', 'confiança', 'manter', 
    'atividade', 'ponto', 'porrada','expectativa', 'realidade', 'reais', 
    'galera', 'época', 'sério', 'isso', 'convidado',
    'show', 'vestiu', 'artista', 'sabia', 'culpado', 
    'será', 'dia', 'hoje', 'oposto', 'porque',
    'por quê', 'porquê', 'por que', 'barulho', 'cara'
]

function sorteio(){
    const sorteioVar = Math.floor(Math.random() * arr.length)
    h1.textContent = arr[sorteioVar]
    iniciar.style.display = 'block'
}
sorteio()

function validWord(){
    const valorDoInput = input.value

    if(valorDoInput === h1.textContent){
        
        numerosCertos.push(1)
        spanCerto.textContent = numerosCertos.length
        input.value=''
        
    } else{
        
        numerosErrados.push(1)
        spanErrado.textContent = numerosErrados.length
        input.value=''
    }
    input.focus()
    sorteio()
}

function enivarTecla(e){
    if(e.keyCode === 13){
        validWord()
    }
}

function hide(paragrafo){

    if(paragrafo.classList.contains('hide')){
        paragrafo.classList.remove('hide')
    } else {
        paragrafo.classList.add('hide')
    }
} 

function init(){
    iniciar.style.display = 'none'
    input.value=''
    input.focus()
}

btnRecarregar.addEventListener('click', sorteio)
btn.addEventListener('click', validWord)
input.addEventListener('keydown', enivarTecla)
timeBtn.addEventListener('click', () => hide(paragrafoTime))
iniciar.addEventListener('click', init)
econderCard.addEventListener('click', () => hide(card))