// Card create
const formdados = [
  {
    id: 1,
    src: "./src/assets/forms/foto.png",
  },
  {
    id: 2,
    src: "./src/assets/forms/foto.png",
  },
  {
    id: 3,
    src: "./src/assets/forms/foto.png",
  },
];
//Fotos
const formPhoto = [
  {
    id: 1,
    src: "./src/assets/retratos/2.png",
  },
  {
    id: 2,
    src: "./src/assets/retratos/22.png",
  },
  {
    id: 3,
    src: "./src/assets/retratos/23.png",
  },
  {
    id: 4,
    src: "./src/assets/retratos/55.png",
  },
  {
    id: 5,
    src: "./src/assets/retratos/4.png",
  },
  {
    id: 6,
    src: "./src/assets/retratos/ee.png",
  },
];
const formParceiros = [
  {
    id: 1,
    src: "./src/assets/logos/1.jpeg",
  },
  {
    id: 2,
    src: "./src/assets/logos/2.jpeg",
  },
  {
    id: 3,
    src: "./src/assets/logos/3.jpeg",
  },
  {
    id: 4,
    src: "./src/assets/logos/4.jpeg",
  },
  {
    id: 5,
    src: "./src/assets/logos/5.jpeg",
  },
  {
    id: 6,
    src: "./src/assets/logos/6.jpeg",
  },
  {
    id: 7,
    src: "./src/assets/logos/7.jpeg",
  },
  {
    id: 8,
    src: "./src/assets/logos/8.jpeg",
  },
  {
    id: 9,
    src: "./src/assets/logos/9.jpeg",
  },
  {
    id: 10,
    src: "./src/assets/logos/10.jpeg",
  },
  {
    id: 11,
    src: "./src/assets/logos/11.jpeg",
  },
  {
    id: 12,
    src: "./src/assets/logos/12.jpeg",
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
  handlCardPhoto();
  const containercards = document.querySelector(".hero-container-card");
  containercards.innerHTML = "";
  const array = formdados || [];
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

function criarCardPhoto(card) {
  const cards = document.createElement("div");
  cards.classList.add("card");
  const image = document.createElement("img");
  image.src = card.src;
  cards.appendChild(image);
  return cards;
}

function handlCardPhoto() {
  handlCardParceiros();
  const containercardsphoto = document.querySelector(
    ".hero-container-card-photo"
  );
  containercardsphoto.innerHTML = "";
  const array = formPhoto || [];
  array.forEach((cards) => {
    // Certifique-se de que os dados estão sendo acessados corretamente
    const id = cards.id;
    const src = cards.src;

    // Verifique se os dados não estão vazios antes de criar o card
    if (id && src) {
      const card = criarCardPhoto(cards);
      containercardsphoto.appendChild(card);
    } else {
      console.error("Dados incompletos ou inválidos:", cards);
    }
  });
}

function criarCardParceiros(card) {
  const cards = document.createElement("div");
  cards.classList.add("card");
  const image = document.createElement("img");
  image.src = card.src;
  cards.appendChild(image);
  return cards;
}

function handlCardParceiros() {
  const containercardsParceiros = document.querySelector(
    ".hero-container-card-parceiro"
  );
  containercardsParceiros.innerHTML = "";
  const array = formParceiros || [];
  array.forEach((cards) => {
    // Certifique-se de que os dados estão sendo acessados corretamente
    const id = cards.id;
    const src = cards.src;

    // Verifique se os dados não estão vazios antes de criar o card
    if (id && src) {
      const card = criarCardParceiros(cards);
      containercardsParceiros.appendChild(card);
    } else {
      console.error("Dados incompletos ou inválidos:", cards);
    }
  });
}
function toggleMenu() {
  const nav = document.querySelector("nav");
  const menuHamburger = document.querySelector(".menu-hamburger");

  nav.classList.toggle("active");
  menuHamburger.classList.toggle("active");
}
// Exibir o botão ao descer a página
window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("back-to-top");
  if (window.scrollY > 200) {
    // Exibe o botão quando rolar mais de 200px
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Função para rolar suavemente até o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Rolagem suave
  });
}

window.addEventListener("DOMContentLoaded", handlCard);
