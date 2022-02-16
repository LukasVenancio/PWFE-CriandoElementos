'use strict'

const container = document.querySelector('main')
const quintaDiv = document.querySelector('div:nth-child(5)')

function criarElementoInnerHTML (){
    container.innerHTML += '<div><button>ok</button></div>'
}

//appendChild() cria o novo elemento sempre no final do DOM
function criarElementoAppendChild(numero){
    
    //1- Criar
    const novaDiv = document.createElement('div')

    //2-Configurar
    novaDiv.textContent = numero

    //3-Inserir
    container.appendChild(novaDiv)
}

//permite escolher a posição em que se quer criar o novo elemento
function criarElementoInsertBefore(){
    
    //1- Criar
    const novaDiv = document.createElement('div')

    //2-Configurar
    novaDiv.id = 'sete'
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = '7'

    //3-Inserir
    container.insertBefore(novaDiv, quintaDiv)
}
//permite substituir um elemento específico
function criarElementoReplaceChild(){
    
    //1- Criar
    const novaDiv = document.createElement('div')

    //2-Configurar
    novaDiv.id = 'sete'
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = '7'

    //3-Inserir
    container.replaceChild(quintaDiv, novaDiv)
}
//substitui todos os elementos
function criarElementoReplaceChildren(){
    
    //1- Criar
    const novaDiv = document.createElement('div')

    //2-Configurar
    novaDiv.textContent = '7'

    //3-Inserir
    container.replaceChild(novaDiv)
}