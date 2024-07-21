class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const card = document.createElement("div");
    card.className = "card ativo";
    card.innerHTML = `
    <style>
      .card {
        padding: 1rem 0.3rem;
        border-radius: none;
        margin-bottom: 1rem;
        height: 450px;      
      }

      .card-title, .card-text {
        margin-bottom: 1rem;
      }

      .card-title {
        font-size: 14px;
        margin-top: 1rem;
        text-align: justify;      
      }

      .card-text {
        font-weight: bold;
      }

      .btn {
        padding: 0.5rem 1rem;
        width: 90%;
        margin: 0 auto;
      }

      .card img {
        height: 200px;
      }
    </style>

    <img src="${this.getAttribute(
      "img-src"
    )}" class="card-img-top" alt="${this.getAttribute("title")}" >
    <div class="card-body">
      <h5 class="card-title">${this.getAttribute("title")}</h5>
      <h3 class="card-text">${this.getAttribute("price")}</h3>
    </div>
    <a href="carrinho.html" class="btn btn-success">Comprar</a>
  `;
    this.appendChild(card);
  }
}

customElements.define("card-item", Card);
