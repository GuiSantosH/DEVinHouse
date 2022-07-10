const btnAumentar = document.querySelector("#aumentar");
const btnDiminuir = document.querySelector("#diminuir");
const p = document.querySelector("#contagem");

let contador = 0;

p.innerHTML = contador;

btnAumentar.addEventListener("click", () =>{
    contador++;
    p.innerHTML = contador;
});

btnDiminuir.addEventListener('click', () =>{
    contador--;
    p.innerHTML = contador;
    
});




