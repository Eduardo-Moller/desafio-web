function entrar(){
    let user = document.querySelector('#user')
    let userLabel = document.querySelector('#userLabel')

    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')

    let listaUser = [];

    let userValid = {
        user: '',
        password: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((list) => {
        if(user.value == list.userStorage && password.value == list.passwordStorage){
            userValid = {
                user: list.userStorage,
                password: list.passwordStorage
            }
        }
    })

    if(user.value == userValid.user && password.value == userValid.password){
        window.location.href = '../../add-new-specialty.html'
    }else{
        userLabel.setAttribute('style', 'color: red')
        passwordLabel.setAttribute('style', 'color: red')
        user.setAttribute('style', 'border-color: red')
        password.setAttribute('style', 'border-color: red')
    }
}
