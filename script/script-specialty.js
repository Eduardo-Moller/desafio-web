document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('btn-specialty');

    botao.addEventListener('click', function(event) {
        event.preventDefault(); 
            localStorage.clear();
            const specialty = document.getElementById('specialty').value;
            const description = document.getElementById('description').value;
            let image = document.getElementById('image');

            if(!specialty || !description || !image) {
                window.alert('Preencha todos os campos!');
                return;
            }


            let file = document.getElementById('image').files[0];

            if(file.size > 1000000) {
                window.alert('Imagem muito grande! Tamanho máximo: 1MB');
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                image = reader.result;
                
                let specialties = localStorage.getItem('specialties');
                if(specialties) specialties = JSON.parse(specialties);

                if(!specialties) specialties = [];

                specialties.push({specialty, description, image});

                localStorage.setItem('specialties', JSON.stringify(specialties));

                window.alert('Especialidade '+specialty+' cadastrada com sucesso!');
                document.getElementById('specialty').value = '';
                document.getElementById('description').value = '';
                document.getElementById('image').value = '';
            }
    });
});