// modificar pesquisa

const searchInput = document.querySelector("#search-input");

const slideContainer = document.querySelector("#slide-container");
// const cardsContainerTitulo = document.querySelectorAll(".cards-container h2");

const mostrarEstados = () => {
  // const input = document.getElementById('myInput');
  // const div = document.getElementById('myDiv');

  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
      slideContainer.style.display = "block";
    } else {
      slideContainer.style.display = "none";
    }
  });
};

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

  mostrarEstados(slideContainer);

  mostrarProdutos(search);
});
