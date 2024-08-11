class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const div = document.createElement("div");
    div.classList.add("col-12.col-md-3");

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${this.getAttribute(
          "src"
        )}" class="card-img-top" alt="${this.getAttribute("title")}" >
        <div class="card-body">
          <h5 class="card-title">${this.getAttribute("title")}</h5>
          <h3 class="card-text">${this.getAttribute("price")}</h3>
          <a href="detalhes.html" class="btn btn-success">Comprar</a>
        </div>
  `;

    div.appendChild(card);
    this.appendChild(div);
  }
}

customElements.define("product-card", Card);

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((json) => renderizar(json));

function renderizar(products) {
  const container = document.querySelector("#product-cards-container");

  products.forEach((product) => {
    const produto = document.createElement("product-card");
    produto.setAttribute("id", product.id);
    produto.setAttribute("src", product.src);
    produto.setAttribute("title", product.title);
    produto.setAttribute("price", product.price);

    produto.addEventListener("click", () => {
      // redicionar para a página dos detalhes
      window.location.href = `detalhes.html?id=${product.id}`;
    });
    container.appendChild(produto);
  });
}
