let simbolo = document.querySelector('#area');
const botao = document.querySelector('#botao');
let palavra = '';

const aleatorio = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*'];

botao.addEventListener('click', function () {
    
    for (let i = 0; i < 20; i++) {
        palavra += aleatorio[Math.floor(Math.random() * aleatorio.length)];
        document.querySelector('#area').textContent = palavra;
    }
    palavra = '';
    
});
