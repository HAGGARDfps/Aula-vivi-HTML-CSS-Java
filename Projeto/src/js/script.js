const botaoTrailer = document.querySelector(".botao-trailer")
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.querySelector("#video")
const modal = document.querySelector(".modal")
const linkDoVideo = video.src

function abrirModal(){
    modal.classList.toggle("aberto")
}

function modalAberto(){
    abrirModal()
    video.setAttribute("src",linkDoVideo)
}

function modalFechado(){
    abrirModal()
    video.setAttribute("src","")
}
