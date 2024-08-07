/*
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap (){
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim (){
    document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff (){
    document.querySelector('#som_tecla_puff').play();
}

function tocaSomSplash (){
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim (){
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomPsh (){
    document.querySelector('#som_tecla_psh').play();
}

function tocaSomTic (){
    document.querySelector('#som_tecla_tic').play();
}

function tocaSomTom (){
    document.querySelector('#som_tecla_tom').play();
}



ListaTeclas[0].onclick= tocaSomPom
ListaTeclas[1].onclick= tocaSomClap
ListaTeclas[2].onclick= tocaSomTim
ListaTeclas[3].onclick= tocaSomPuff
ListaTeclas[4].onclick= tocaSomSplash
ListaTeclas[5].onclick= tocaSomToim
ListaTeclas[6].onclick= tocaSomPsh
ListaTeclas[7].onclick= tocaSomTic
ListaTeclas[8].onclick= tocaSomTom
*/


//agora faremos de maneira menos repetitiva//

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaTeclas = document.querySelectorAll('.tecla')

/*
let contador = 0

while(contador < ListaTeclas.length){

    const tecla = ListaTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    contador = contador + 1

    console.log(contador) //funcao que imprime no console do navegador os contadores//
}

*/ 


//mostrando as vantagens de usar for //

for( let contador = 0; contador < ListaTeclas.length; contador++){

    const tecla = ListaTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    console.log(idAudio)

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    console.log(contador) //funcao que imprime no console do navegador os contadores//
}

