class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    

    <img src="${this.getAttribute(
      "img-src"
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

customElements.define("card-item", Card);
