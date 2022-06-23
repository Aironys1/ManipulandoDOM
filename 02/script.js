let paragrafo = document.querySelector('p');

paragrafo.innerHTML = "Vamos para o console";
paragrafo.style = "color:white;  font-size:25px; background-color:black; text-align:center; padding:10px ";

var nome = "Aironys";
var sobrenome = "Garrido";

var nomeCompleto  = (nome + " " + sobrenome);

var idade = 31;
var profissao = "Desenvolvedor Web";

console.log(nome);
console.log(sobrenome);
console.log(nomeCompleto);

var mensagem;

console.log(
    mensagem = ("Meu nome é: "+nome+" Eu tenho "+ idade+"anos,"+" e trabalho com: "+profissao)

)


alert("Vamos falor de console.log")

prompt("Clique em 'OK' para continuar!")
