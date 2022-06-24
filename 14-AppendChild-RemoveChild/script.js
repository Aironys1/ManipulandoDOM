let container = document.getElementById('container');


let h2 = document.createElement('h2');
h2.innerHTML = "Vamos adcionar um logo HTML";
console.log(h2);

let imagem = document.createElement('img');
imagem.width='500';
imagem.height='500';
imagem.style='margin:auto; display:block';
imagem.src = './imagem/logo.png';

container.appendChild(h2);
container.appendChild(imagem);

let h3= document.createElement('h3');
h3.innerText = "Elemento será removido";
container.appendChild(h3);
container.removeChild(h3);

let p1 = document.createElement('p');
p1.innerText = "Tudo começa com HTML, bora estudar";
container.appendChild(p1);



