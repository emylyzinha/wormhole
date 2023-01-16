var altura = 0
var largura = 0
var vidas = 1
var tempo = 60
var criaAsteroideTempo = 1500
let criaEtTempo = 2000
let quantAsteroide = 0
let quantEt = 0

var nivel = window.location.search  // serach nos dá o ? e o que estiver a direita do '?'
//para tirar o ponto de ?
nivel = nivel.replace('?', '')
if (nivel === 'normal'){
    criaAsteroideTempo = 1500
    criaEtTempo = 2000
}
else if (nivel === 'dificil'){
    criaAsteroideTempo = 1000
    criaEtTempo = 1500
}
else if (nivel === 'chuck'){
    criaAsteroideTempo = 750
    criaEtTempo = 1000
}

// encontrar altura e largura da pagina
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -=1

    if (tempo<0){
        clearInterval(cronometro)
        clearInterval(criaAsteroide)
        window.location.href='vitoria.html'
    }
    else {
        //innerHTML: interir algo entre as tags
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){

    // criar elemento html > img
    function criaAsteroid(){

        //criando posições randômicas
        var posicaox = Math.floor(Math.random()* largura) - 90
        var posicaoy = Math.floor(Math.random()* altura) - 90

        // para garantir que a imagem não irá sumir, sendo menor que 0
        posicaox = posicaox < 0 ? 0 : posicaox
        posicaoy = posicaoy < 0 ? 0 : posicaoy

        console.log('posicao: '+posicaox, posicaoy)

        var asteroide = document.createElement('img')
        quantAsteroide = quantAsteroide + 1
        console.log('quantAsteroide: '+ quantAsteroide)
        asteroide.src = 'img/asteroide3.png'
        console.log('o asteroide foi criado')
        asteroide.className = tamanhoAleatorio() +' '+ ladoAleatorio()
        asteroide.style.left = posicaox + 'px' // px para trazer informação de pexel
        asteroide.style.top = posicaoy + 'px' // px para trazer informação de pexel
        asteroide.style.position = 'absolute'
        asteroide.id = 'asteroide'
        asteroide.onmouseover = function(){

            asteroide.src = 'img/fumaca.png'
            
            //remover elemento html (asteroide) com perda de vida
            //this.remove()
            document.getElementById('v'+vidas).src = 'img/coracao_vazio.png'
            vidas ++

            if (vidas > 3){
                window.location.href = 'fimDeJogo.html'
            }
        }
        
       //remover o asteroide anterior caso exista 
        if (quantAsteroide > 3){
            document.getElementById('asteroide').remove()
        }
    
        document.body.appendChild(asteroide)
    }
    criaAsteroid()

    function criaEt(){

        //criando posições randômicas
        var posicaoX = Math.floor(Math.random()* largura) - 90
        var posicaoY = Math.floor(Math.random()* altura) - 90

        // para garantir que a imagem não irá sumir, sendo menor que 0
        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY
        posicaoX = posicaoX + 200
        posicaoY = posicaoY + 100

        console.log('posicao et: '+posicaoX, posicaoY)

        var et = document.createElement('img')
        quantEt = quantEt + 1
        console.log('quantEt: '+ quantEt)
        et.src = 'img/et.png'
        console.log('o et foi criado')
        et.className = tamanhoAleatorio() +' '+ ladoAleatorio()
        et.style.left = posicaoX + 'px' // px para trazer informação de pexel
        et.style.top = posicaoY + 'px' // px para trazer informação de pexel
        et.style.position = 'absolute'
        et.id = 'et'
        et.onmouseover = function(){
            

            et.src = 'img/fumaca.png'
            //remover elemento html (asteroide) com perda de vida
            //this.remove()
            document.getElementById('v'+vidas).src = 'img/coracao_vazio.png'
            document.getElementById('v'+vidas).src = 'img/coracao_vazio.png'
            vidas +2

            if (vidas > 3){
                window.location.href = 'fimDeJogo.html'
            }
        }
        
       //remover o asteroide anterior caso exista 
        if (quantEt > 2){
            document.getElementById('et').remove()
        }
    
        document.body.appendChild(et)
    }
    criaEt()
    
}

// definir tamanho aleatório do asteroide
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*5)
    console.log(classe)

    switch(classe){
        case 0:
            return 'asteroide1'

        case 1:
            return 'asteroide2'

        case 2:
            return 'asteroide3'

        case 3: 
            return 'asteroide4'

        case 4: 
            return 'asteroide5'
    }
}

// mudar o lado que o asteroide esta olhando
function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)
    console.log(classe)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}
