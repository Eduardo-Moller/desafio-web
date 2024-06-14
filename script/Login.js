function entrar(){
    let usuario = document.querySelector('#usuario')
    let usuarioLabel = document.querySelector('#usuarioLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let MensagemError = document.querySelector('#MensagemError')

    let listaUser = [];

    let userValid = {
        usuario: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((list) => {
        if(usuario.value == list.usuarioStorage && senha.value == list.senhaStorage){
            userValid = {
                usuario: list.usuarioStorage,
                senha: list.senhaStorage
            }
        }
    })

    if(usuario.value == userValid.usuario && senha.value == userValid.senha){
        window.location.href = '../../index.html'
    }else{
        usuarioLabel.setAttribute('style', 'color: red')
        senhaLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senha.setAttribute('style', 'border-color: red')
    }
}