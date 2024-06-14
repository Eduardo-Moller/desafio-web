function redirecionar() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.specialty-form');

    const specialty = localStorage.getItem('specialty');
    const description = localStorage.getItem('description');
    const image = localStorage.getItem('image');
    
    if (specialty) {
        document.getElementById('specialty').value = specialty;
    }
    if (description) {
        document.getElementById('description').value = description;
    }
    if (image) {
        document.getElementById('image').value = image;
    }
    const botao = document.getElementById('btn-specialty');
    botao.addEventListener('click', function(event) {
        event.preventDefault(); 
         const specialty = document.getElementById('specialty').value;
         const description = document.getElementById('description').value;
         const image = document.getElementById('image').value;
 
         localStorage.setItem('specialty', specialty);
         localStorage.setItem('description', description);
         localStorage.setItem('image', image);
         window.alert('Especialidade cadastrada com sucesso!' + specialty + ' ' + description + ' ' + image);
        redirecionar();
    });
});