class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // const div = document.createElement("div");
    // div.className = "col-12 col-md-3";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img  src="src/img/card-01.png" class="card-img-top" alt="card-01" >
      <div class="card-body">
        <h5 class="card-title">
          blablabla
        </h5>
        <h3 class="card-text">kakakaksjja</h3>
      </div>
      <a href="card-01.html" class="btn btn-success">Comprar</a>
    `;

    // div.appendChild(card);
    this.appendChild(card);
  }
}

customElements.define("card-item", Card);
