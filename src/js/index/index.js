class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const imgSrc = this.getAttribute("img-src");
    const title = this.getAttribute("title");
    const text = this.getAttribute("text");

    this.shadowRoot.innerHTML = `
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

        .card .btn {
          padding: 0.5rem 1rem;
        }

        .card img {
          height: 200px;
        }
      </style>

      <div class="card">
        <img src="${imgSrc}" class="card-img-top" alt="${title}"/>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <div class="card-text">${text}</div>
        </div>
        <a href="carrinho.html" class="btn btn-success">Comprar</a>
      </div>
    `;
  }
}

customElements.define("card", Card);

// class CardList extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     const cardDados = [
//       {
//         src: "src/img/card-01.png",
//         alt: "card-01",
//         title:
//           "Smart TV 50” 4K LED TCL 50P635 VA Wi-Fi - Bluetooth HDR Google Assistente 3 HDMI 1 USB",
//         text: "R$ 2.089,05",
//         link: "carrinho.html",
//       },
//       {
//         src: "src/img/card-02.png",
//         alt: "card-02",
//         title:
//           "Smart TV 50” 4K LED TCL 50P635 VA Wi-Fi - Bluetooth HDR Google Assistente 3 HDMI 1 USB",
//         text: "R$ 2.089,05",
//         link: "carrinho.html",
//       },
//       {
//         src: "src/img/card-03.png",
//         alt: "card-03",
//         title:
//           "Smart TV 50” 4K LED TCL 50P635 VA Wi-Fi - Bluetooth HDR Google Assistente 3 HDMI 1 USB",
//         text: "R$ 2.089,05",
//         link: "carrinho.html",
//       },
//     ];

//     cardDados.forEach((cardDados) => {
//       const cardItem = document.createElement("card-item");
//       cardItem.setAttribute("src", cardDados.src);
//       cardItem.setAttribute("alt", cardDados.alt);
//       cardItem.setAttribute("title", cardDados.title);
//       cardItem.setAttribute("text", cardDados.text);
//       cardItem.setAttribute("link", cardDados.link);
//       this.appendChild(cardItem)
//     });
//   }
// }

// customElements.define("card-list", CardList);
