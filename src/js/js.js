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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function hideLoadingSkeleton() {
  var loadingOverlay = document.querySelector(".spinner");
  if (loadingOverlay) {
    loadingOverlay.style.display = "none";
  }
}

function revealElements() {
  const elements = document.querySelectorAll(".fade-in");
  const windowHeight = window.innerHeight;
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}
var quantity = 15; // Número de fireflies
var container = document.getElementById("fireflies-container"); // Contêiner para as fireflies

// Função para gerar animações aleatórias de movimento para cada firefly
function generateMovementAnimation(i) {
  return `
    @keyframes move${i} {
      0% { transform: translateX(-50vw) translateY(-50vh) scale(0.5); }
      100% { transform: translateX(50vw) translateY(50vh) scale(0.75); }
    }
  `;
}

// Adiciona animações de movimento no cabeçalho do documento
var style = document.createElement("style");
for (var i = 1; i <= quantity; i++) {
  style.innerHTML += generateMovementAnimation(i);
}
document.head.appendChild(style);

// Cria as fireflies
for (var i = 1; i <= quantity; i++) {
  // Cria o elemento firefly
  var firefly = document.createElement("div");
  firefly.classList.add("firefly"); // Adiciona a classe firefly

  // Gera um nome de animação único para cada firefly
  firefly.style.animationName = `move${i}, flash`; // Movimento e flash

  // Gera animações aleatórias de duração e delay
  var rotationSpeed = Math.random() * 8 + 8; // Aleatório entre 8s e 16s
  firefly.style.animationDuration = `${rotationSpeed}s, ${Math.random() * 6000 + 5000}ms`; // Atraso para o efeito de flash
  firefly.style.animationDelay = `${Math.random() * 8000 + 500}ms`; // Atraso na animação
  
  // Gera uma posição aleatória para a firefly
  var positionX = Math.random() * 100; // Aleatório entre 0% e 100%
  var positionY = Math.random() * 100; // Aleatório entre 0% e 100%
  firefly.style.left = `${positionX}vw`;
  firefly.style.top = `${positionY}vh`;
  
  // Adiciona o firefly ao contêiner
  container.appendChild(firefly);
}

document.addEventListener("DOMContentLoaded", () => {
  revealElements();
  window.addEventListener("scroll", revealElements);
});

revealElements();

//time
setTimeout(hideLoadingSkeleton, 3000);
window.addEventListener("DOMContentLoaded", handlCard);


