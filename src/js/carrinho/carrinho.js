// função para converter o valor
function converterValor(valor) {
  return parseFloat(
    valor.textContent
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".")
      .trim()
  );
}

// função para formatar o valor como moeda brasileira
function formatarComoMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// função para aumentar a quantidade
function aumentarQuantidade(quantidadeSpan, preco, total, index) {
  let quantidadeAtual = +quantidadeSpan.textContent + 1;
  quantidadeSpan.textContent = quantidadeAtual;

  atualizarPrecoTotal(quantidadeSpan, preco, total);
  atualizarCarrinho(index, quantidadeAtual);

  calcularValorTotalCarrinho();
}

// função para diminuir a quantidade
function diminuirQuantidade(quantidadeSpan, preco, total, index) {
  let quantidadeAtual = +quantidadeSpan.textContent - 1;

  if (quantidadeAtual > 0) {
    quantidadeSpan.textContent = quantidadeAtual;
    atualizarPrecoTotal(quantidadeSpan, preco, total);
    atualizarCarrinho(index, quantidadeAtual);
  }

  calcularValorTotalCarrinho();
}

// função para atualizar o preço com base na quantidade
function atualizarPrecoTotal(quantidadeSpan, preco, total) {
  let valorConvertido = converterValor(preco);
  let quantidadeAtual = +quantidadeSpan.textContent;
  let resultado = valorConvertido * quantidadeAtual;
  total.textContent = formatarComoMoeda(resultado);

  // atualiza o localStorage com o novo valor total
  const index = [...document.querySelectorAll(".total")].indexOf(total);
  atualizarCarrinho(index, quantidadeAtual);
}

// função para atualizar o carrinho
function atualizarCarrinho(index, quantidadeAtual) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho[index]) {
    const precoUnitario = converterValor(
      document.querySelectorAll(".preco")[index]
    );

    const precoTotal = precoUnitario * quantidadeAtual;

    carrinho[index].quantidade = quantidadeAtual; // atualiza a quantidade do produto
    carrinho[index].totalPrice = formatarComoMoeda(precoTotal); // atualiza o valor do produto com base na quantidade

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }
}

// função para remover um produto
function removerProduto(i) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.splice(i, 1);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  exibirCarrinho();

  calcularValorTotalCarrinho();
}

// função para calcular o valor total das compras
function calcularValorTotalCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let totalCarrinho = 0;

  if (carrinho.length === 0) return;

  carrinho.forEach((produto) => {
    totalCarrinho += produto.totalPrice
      ? converterValor({ textContent: produto.totalPrice })
      : 0;
  });

  const comprasContainer = document.querySelector("#compras-container");
  comprasContainer.innerHTML = `
    <div class="box">
      <header>
        <h4>Resultado da compra</h4>
      </header>
      <div class="info-compra">
        <div>
          <span>Sub-total</span>
          <span>${formatarComoMoeda(totalCarrinho)}</span>
        </div>
        <div>
          <span>Frete</span>
          <span>Gratuito</span>
        </div>
        <div>
          <button id="cupom-desconto">Adicionar cupom de desconto</button>
          <i class="bi bi-arrow-right"></i>
        </div>
      </div>
      <footer id="resultado-compras">
        <span>Total</span>
        <span id="valor-final">${formatarComoMoeda(totalCarrinho)}</span>
      </footer>
    </div>
    <button type="submit">Finalizar</button>
  `;

  const finalizarBtn = document.querySelector("#compras-container");

  finalizarBtn.addEventListener("click", () => {
    alert("Compra realizada!");

    window.location.href = "index.html";
  });
}

// função para exibir o carrinho
function exibirCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const container = document.querySelector("#table-carrinho tbody");
  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" class="mensagem-vazia">
          <p>Seu carrinho está vazio.</p>
        </td>
      </tr>
    `;
  } else {
    carrinho.forEach((produto) => {
      container.innerHTML += `
        <tr data-index="${produto.id}">
          <td>
            <div class="produto">
              <img src="${produto.src}" alt="${produto.title}" />
                <div class="info-produto">
                  <h5 class="titulo-produto">
                    ${produto.title}
                  </h5>
                  <p class="descricao-produto">${produto.descricao}</p>
                </div>
            </div>
          </td>
          <td>
            <span class="preco">${produto.price}</span>
          </td>
          <td>
              <div class="quantidade">
              <button class="diminuir-btn">-</button>
              <span class="quantidade-span">${produto.quantidade}</span>
              <button class="aumentar-btn">+</button>
            </div>
          </td>
          <td>
            <span class="total">${produto.totalPrice}</span>
          </td>
          <td>
            <button class="remover-produto">
              <i class="bi bi-x"></i>
            </button>
          </td>
        </tr>
      `;
    });

    // selecionando os dados

    const diminuirBtn = document.querySelectorAll(".diminuir-btn");
    const aumentarBtn = document.querySelectorAll(".aumentar-btn");
    const quantidadeSpan = document.querySelectorAll(".quantidade-span");
    const preco = document.querySelectorAll(".preco");
    const total = document.querySelectorAll(".total");
    const removerBtn = document.querySelectorAll(".remover-produto");

    // eventos

    aumentarBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        aumentarQuantidade(
          quantidadeSpan[index],
          preco[index],
          total[index],
          index
        );
      });
    });

    diminuirBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        diminuirQuantidade(
          quantidadeSpan[index],
          preco[index],
          total[index],
          index
        );
      });
    });

    removerBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        removerProduto(index);
      });
    });
  }
}

// chamando função

exibirCarrinho();

calcularValorTotalCarrinho();
