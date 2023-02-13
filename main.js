const form = document.getElementById("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    if (campoA < campoB) {
        alert("Formulario valido")
    } else {
        alert("Formulario invalido");
    }

})

console.log(form);