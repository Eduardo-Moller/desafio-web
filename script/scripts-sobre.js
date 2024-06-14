var btn = document.querySelector("#somos");
var quem_somos = document.querySelector(".quem_somos");

btn.addEventListener("click", function () {
  if (quem_somos.style.display === "block") {
    quem_somos.style.display = "none";
  } else {
    quem_somos.style.display = "block";
  }
});

var btn = document.querySelector("#estamos");
var onde_estamos = document.querySelector(".onde_estamos");

btn.addEventListener("click", function () {
  if (onde_estamos.style.display === "block") {
    onde_estamos.style.display = "none";
  } else {
    onde_estamos.style.display = "block";
  }
});

var btn = document.querySelector("#contatos");
var contato = document.querySelector(".contato");

btn.addEventListener("click", function () {
  if (contato.style.display === "block") {
    contato.style.display = "none";
  } else {
    contato.style.display = "block";
  }
});
