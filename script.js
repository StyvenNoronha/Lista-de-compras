const input = document.getElementById("item");
const button = document.getElementById("btn");
const msg = document.getElementById("msg");
const lixo = document.getElementById("iconeLixo");

button.addEventListener("click", (e) => {
  e.preventDefault(); //nao deixa atualizar  o botao
  const pegarr = input.value;
  const icone = document.createElement("img");
  const lista = document.querySelector("ul");
  const novaLista = document.createElement("li");
  const listaNome = document.createElement("p");

  icone.src = "assets/lixo.svg";
  icone.id = "iconeLixo";
  novaLista.classList.add("flex", "space-between"); // Adiciona múltiplas classes ao mesmo tempo
  listaNome.textContent = pegarr;

  lixo.addEventListener("click", () => {
    msg.classList.remove("sumiu");
    setTimeout(() => {
      msg.classList.add("sumiu");
    }, 2000);
  });

  novaLista.appendChild(listaNome);
  novaLista.appendChild(icone);
  lista.prepend(novaLista);
  input.value = ""; // Limpa o campo de entrada após adicionar o item
});
