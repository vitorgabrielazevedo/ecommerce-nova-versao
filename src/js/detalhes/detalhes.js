function obterIdProduto() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function detalharProduto() {
  const idProduto = obterIdProduto();
  console.log(idProduto);

  const res = await fetch(`http://localhost:3000/products/${idProduto}`);
  const produto = await res.json();
  const container = document.getElementById("card-detalhado");

  container.innerHTML = `
        <div id="produto">
            <div class="img">
                <img src="${produto.src}" alt="${produto.title}" />
            </div>
            <h3>Avaliações</h3>
            <div class="star">
                <ul>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                </ul>
            </div>
            <div class="avaliacao">
                <h5>5 avaliações</h5>
                <p>5 estrelas ---------- (5)</p>
                <p>4 estrelas ---------- (3)</p>
                <p>3 estrelas ---------- (1)</p>
                <p>2 estrelas ---------- (0)</p>
                <p>1 estrelas ---------- (0)</p>
            </div>
        </div>
        <div id="detalhes">
            <h3>${produto.title}</h3>
            <div class="preco">
                <p>${produto.price} no Pix ou R$ 2.199,00 em 10x de R$ 219,90 sem juros</p>
            </div>
            <h6>Cores</h6>
            <div class="cores">
                <div class="preto"></div>
                <div class="prata"></div>
            </div>
            <div class="gotocar">
                <a href="carrinho.html" class="btn btn-success">Comprar</a>
                <div class="quant">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
            <div class="avaliacao">
                <div class="avaliacao-header">
                    <div class="star">
                        <ul>
                            <li>
                                <i class="bi bi-star-fill"></i>
                            </li>
                            <li>
                                <i class="bi bi-star-fill"></i>
                            </li>
                            <li>
                                <i class="bi bi-star-fill"></i>
                            </li>
                            <li>
                                <i class="bi bi-star-fill"></i>
                            </li>
                            <li>
                            <i class="bi bi-star-fill"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="data">01 de julho de 2024</div>
                </div>
                <div class="avaliacao-nome">
                    <h3>Smart TV grande e incrível</h3>
                    <div class="nome">Vitor</div>
                </div>
                <div class="avaliacao-comentario">
                    <p>
                        Comprei esta Smart TV para um amigo meu e simplesmente ficou
                        fantástica na sala dele, combinando com a cor da estante. Achei o
                        preço acessível para um Smart TV como essa. Ele a amou!
                    </p>
                </div>
            </div>
        </div>
          `;
}

detalharProduto();
