// modificar pesquisa

const searchInput = document.querySelector("#search-input");

const slideContainer = document.querySelector("#slide-container");
const cardsContainerTitulo = document.querySelectorAll(".cards-container h2");

const mostrarProdutos = (search) => {
  const produtos = document.querySelectorAll(".card");

  produtos.forEach((produto) => {
    let tituloProduto = produto.querySelector("h5").innerText.toLowerCase();

    const searchNormalizada = search.toLowerCase();

    produto.style.display = "flex";

    if (!tituloProduto.includes(searchNormalizada)) {
      produto.style.display = "none";
    }
  });
};

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;

  mostrarProdutos(search);
});
