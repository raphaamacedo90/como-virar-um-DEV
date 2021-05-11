
var nome = prompt("Olá visitante, qual o seu nome?");

alert("Olá " + nome + ", Nesta página eu conto um pouco da minha trajetória até o momento.");

let menuIsOpened = false;
const button = document.querySelector('nav ul.button');
const menu = document.querySelector('nav ul.menu');

button.addEventListener("click", () => {
    if (!menuIsOpened) {
        menu.style.display = 'flex';
        menuIsOpened = true;
    } else {
        menu.style.display = 'none';
        menuIsOpened = false;
    }
})

button.removeEventListener('click', this.onClick);