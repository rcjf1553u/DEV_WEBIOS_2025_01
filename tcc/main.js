// Abrir/fechar menu em telas pequenas
function toggleMenu() {
  const menu = document.getElementById("menu-items");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Preencher obras com dados fictícios
const dadosObras = [
  {
    titulo: "Casa sustentável de médio porte",
    preco: "R$ 600.000,00",
    status: "lancamentos",
    imagem: "img/casa1.jpg"
  },
  {
    titulo: "Casa ecológica moderna",
    preco: "R$ 750.000,00",
    status: "em-construcao",
    imagem: "img/casa2.jpg"
  },
  {
    titulo: "Residência com painel solar",
    preco: "R$ 580.000,00",
    status: "futuras",
    imagem: "img/casa3.jpg"
  }
];

function gerarCardHTML(obra) {
  return `
    <div class="card">
      <img src="${obra.imagem}" alt="${obra.titulo}">
      <h4>${obra.titulo}</h4>
      <p>Preço estimado: ${obra.preco}</p>
    </div>
  `;
}

function preencherObras() {
  dadosObras.forEach(obra => {
    const container = document.getElementById(`cards-${obra.status}`);
    if (container) {
      container.innerHTML += gerarCardHTML(obra);
    }
  });
}

// Formulário
const form = document.getElementById("form-contato");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}

// Chamar preenchimento ao carregar
window.addEventListener("DOMContentLoaded", preencherObras);
