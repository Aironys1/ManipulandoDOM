let paragrafo = document.querySelector('p');

paragrafo.innerHTML = "Manipulação da DOM";
paragrafo.style = "color:white;  font-size:25px; background-color:black; text-align:center; padding:10px ";




let nome = prompt("Digite seu nome");
alert("Seja bem vindo! "+ nome);

let confirmar = confirm("Clique em OK para aprender mais");

if(confirmar){
    alert("Parabéns você preferiu em continuar no curso")
}else{
    alert("Que pena que você não quis contunuar.")
}





