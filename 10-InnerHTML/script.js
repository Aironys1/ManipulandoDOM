let texto = document.querySelector('#text');

let conteudo = text.innerHTML;
console.log(conteudo);
console.log(texto);

conteudo=texto.innerHTML="Estou atualizando com o innerHTML";
console.log(conteudo);