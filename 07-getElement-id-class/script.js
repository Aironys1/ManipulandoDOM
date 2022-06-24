let titulo = document.getElementById('titulo');
titulo.innerHTML = "Eu sou um (id), estou sendo alterado com o - document.getElementById('titulo'); "

let subtitulo = document.querySelector('.subtitulo');

subtitulo.innerHTML = "Eu sou uma (Classe)";
subtitulo.style.border = "1px solid red";
subtitulo.style =' text-align: center; margin-top:50px; color:red; font-size:30px; background-color: black; font-weight:bold; padding:10px;';


let span = document.querySelector('span').innerHTML = "Eu sou um tag, estou sendo manipulado com - document.querySelector('span')"

span.style="color:white; font-size:20px; background-color:blue; padding:10px;"