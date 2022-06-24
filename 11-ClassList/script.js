let titulo = document.querySelector('.titulo');
titulo.style="color:white; text-align:center"
let fundo = document.querySelector('body');

fundo.style="background-color:black";

let paragrafo1 = document.getElementById('p-Azul')
paragrafo1.classList.add('blue');
paragrafo1.style="font-size:25px; text-align:center";




let paragrafo2 = document.getElementById('p-Vermelha');
paragrafo2.classList.add('red');
paragrafo2.style="font-size:25px; text-align:center";

let paragrafo3 = document.getElementById('p-Verde');

paragrafo3.innerHTML = "Eu sou verde";
paragrafo3.classList.add('green');

let paragrafo4 = document.getElementById('p-Amarela');
paragrafo4.classList.add('amarelo');

let paragrafo5 = document.querySelector('.alterando');
paragrafo5.classList.add('red');
paragrafo5.classList.remove('red');
paragrafo5.classList.add('blue');

if(paragrafo4.classList.contains('amarelo')){
    alert("Contem a classe amarela")
    alert(paragrafo4.innerText)
}
