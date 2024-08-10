class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${this.getAttribute(
          "src"
        )}" class="card-img-top" alt="${this.getAttribute("title")}" >
        <div class="card-body">
          <h5 class="card-title">${this.getAttribute("title")}</h5>
          <h3 class="card-text">${this.getAttribute("price")}</h3>
          <a href="carrinho.html" class="btn btn-success">Comprar</a>
        </div>
  `;
    this.appendChild(card);
  }
}

customElements.define("product-card", Card);

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((json) => console.log(json));

function renderizar(products) {
  const container = document.querySelectorAll(".product-cards-container");

  products.forEach((product) => {
    const produto = document.createElement("product-card");
    produto.setAttribute("id", product.id);
    produto.setAttribute("src", product.image);
    produto.setAttribute("title", product.title);
    produto.setAttribute("price", product.price);
    container.appendChild(produto);
  });
}
