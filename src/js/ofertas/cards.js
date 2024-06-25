const mostrarMaisBtn = document.querySelector("#mostrar-mais-btn");
const cards = document.querySelectorAll(".card");

const mostrarMaisProjetos = () => {
  cards.forEach((card) => {
    if (!card.classList.contains("ativo")) {
      card.classList.add("ativo");
    }
  });
};

const escondarBtn = () => {
  mostrarMaisBtn.classList.add("remover");
};

mostrarMaisBtn.addEventListener("click", () => {
  mostrarMaisProjetos();
  escondarBtn();
});
