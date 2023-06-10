function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;

    }, 50 * i);
  });
}

const titulo = document.getElementById("msgWelcome")
typeWriter(titulo);

//-------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var loadingBar = document.getElementById("loading-bar");

  var progress = 0;
  var interval = setInterval(function () {
    progress += 30;
    loadingBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      setTimeout(function () {
        var loadingContainer = document.querySelector(".loading-container");
        loadingContainer.style.display = "none";
        window.location.href = "insira_cartão_deb.html";
      }, 260);
    }
  }, 1000);
});

//-------------------------------------------------------------
var senhaLabel = document.getElementById("senha-label");
var senha = "";

function adicionarNumero(numero) {
  senha += "*";
  senhaLabel.textContent = senha;
}

function limparSenha() {
  senha = "";
  senhaLabel.textContent = senha;
}

function confirma_senha() {
  window.location.href = "loading_tela_deb_aceito.html";

}

//-------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var loadingBar = document.getElementById("loading-bara");

  var progress = 0;
  var interval = setInterval(function () {
    progress += 30;
    loadingBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      setTimeout(function () {
        var loadingContainer = document.querySelector(".loading-containe");
        loadingContainer.style.display = "none";
        window.location.href = "tipo_recarga.html";
      }, 260);
    }
  }, 1000);
});