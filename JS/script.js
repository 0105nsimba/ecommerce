'use strict';

let openModal = document.querySelector('.abrir');
let overlay = document.querySelector('.overlay');
let hardwork = document.querySelector('.hardwork');
let close = document.querySelector('.close');
let pequeno = document.querySelector('.pequeno');
let primeiro = document.querySelector('.primeiro');
let terceiro = document.querySelector('.terceiro');
let quarto = document.querySelector('.quarto');
let resultado = document.querySelector('.resultado');
let grandeImagem = document.querySelector('.grandeimagem');
let undone = document.querySelector('.undo');
let carrinho = document.querySelector('.carrinho');
let esconder = document.querySelector('.escondido');
let palavras = document.querySelector('.palavras');
let information = document.querySelector('.information');
let guardar = document.querySelector('.bomba');
let bomba = document.querySelector('.bomba1')
let botao = document.querySelector('.botao');
let conteudo = document.querySelector('.conteudo');
let plus = document.querySelector('.plus');
let score = document.querySelector('.score');
let tudo = document.querySelector('.tudo');

let aumentar = 0;

let operacao = 125;

plus.addEventListener('click', function(){
    conteudo.textContent = aumentar++;
})

let fechar = function(){
    overlay.classList.add('hidden');
    hardwork.classList.add('hidden');
}

openModal.addEventListener('click', function(){
    overlay.classList.remove('hidden');
    hardwork.classList.remove('hidden');
    esconder.classList.add('escondido');
})

close.addEventListener('click',fechar )

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        fechar();
    }
})

pequeno.addEventListener('click', function(){
    grandeImagem.src = 'images/image-product-2.jpg';
})
primeiro.addEventListener('click', function(){
    grandeImagem.src = 'images/image-product-1.jpg';
})
terceiro.addEventListener('click', function(){
    grandeImagem.src = 'images/image-product-3.jpg';
})
quarto.addEventListener('click', function(){
    grandeImagem.src = 'images/image-product-4.jpg';
})

carrinho.addEventListener('click', function(){
    esconder.classList.remove('escondido');
})

botao.addEventListener('click', function(){
    resultado.innerHTML = operacao*aumentar;
    score.innerHTML = aumentar;
    guardar.classList.remove('bomba');
    bomba.classList.remove('bomba1');
    palavras.style.visibility = 'hidden';
})

undone.addEventListener('click', function(){
    bomba.classList.add('bomba');
    palavras.style.visibility = 'visible';
    score.classList.add('bomba');
    conteudo.innerHTML = 0;
})

tudo.addEventListener('click', function(){
    esconder.classList.add('escondido');
})