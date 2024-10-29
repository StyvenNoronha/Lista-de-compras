const input = document.getElementById("item");
const button = document.getElementById("btn");
const msg = document.getElementById("msg");

button.addEventListener("click", (e) => {
  e.preventDefault(); // evita que o formulário atualize a página
  const pegarr = input.value;
  const icone = document.createElement("img");
  const lista = document.querySelector("ul");
  const novaLista = document.createElement("li");
  const listaNome = document.createElement("p");

  icone.src = "assets/lixo.svg";
  icone.classList.add("iconeLixo"); // Adiciona uma classe para o ícone
  novaLista.classList.add("flex", "space-between");
  listaNome.textContent = pegarr;

  // Adiciona o evento de clique no ícone de lixo para remover o item
  icone.addEventListener("click", () => {
    lista.removeChild(novaLista); // Remove o item da lista
    msg.classList.remove("sumiu"); // Exibe a mensagem temporariamente
    setTimeout(() => {
      msg.classList.add("sumiu"); // Oculta a mensagem após 2 segundos
    }, 2000);
  });

  novaLista.appendChild(listaNome);
  novaLista.appendChild(icone);
  lista.prepend(novaLista);
  input.value = ""; // Limpa o campo de entrada após adicionar o item
});