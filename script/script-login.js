function entrar() {
  let usuario = document.querySelector("#usuario");
  let usuarioLabel = document.querySelector("#usuarioLabel");

  let senha = document.querySelector("#senha");
  let senhaLabel = document.querySelector("#senhaLabel");

  const user = { usuario: "admin", senha: "admin" };

  if (usuario.value == user.usuario && senha.value == user.senha) {
    window.location.href = "./add-new-specialty.html";
  } else {
    usuarioLabel.setAttribute("style", "color: red");
    senhaLabel.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    senha.setAttribute("style", "border-color: red");
  }
}
