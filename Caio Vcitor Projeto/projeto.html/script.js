document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});
