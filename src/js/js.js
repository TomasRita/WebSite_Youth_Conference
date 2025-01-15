// Card create
const formdados = [
  {
    id: 1,
    src: "./assets/forms/foto.png",
  },
  {
    id: 2,
    src: "./assets/forms/foto.png",
  },
  {
    id: 3,
    src: "./assets/forms/foto.png",
  },
];

 function criarCard(card) {
  const cards = document.createElement("div");
  cards.classList.add("card");
  const image = document.createElement("img");
  image.src = card.src;
  cards.appendChild(image);
  return cards;
}

 function handlCard() {
  const containercards = document.querySelector(".hero-container-card");
  containercards.innerHTML = "";
  const array = formdados;
  array.forEach((cards) => {
    // Certifique-se de que os dados estão sendo acessados corretamente
    const id = cards.id;
    const src = cards.src;

    // Verifique se os dados não estão vazios antes de criar o card
    if (id && src) {
      const card = criarCard(cards);
      containercards.appendChild(card);
    } else {
      console.error("Dados incompletos ou inválidos:", cards);
    }
  });
}
function toggleMenu() {
  const nav = document.querySelector('nav');
  const menuHamburger = document.querySelector('.menu-hamburger');
  
  nav.classList.toggle('active');
  menuHamburger.classList.toggle('active');
}


window.addEventListener("DOMContentLoaded", handlCard);
