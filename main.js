const form = document.getElementById('form-maior');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA  = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    if (campoA.value  < campoB.value ) {
        alert("Formulario valido");
        campoA.value  = '';
        campoB.value = '';
    } else {
        alert("Formulario invalido");
        campoA.value  = '';
        campoB.value = '';
    }

})

console.log(form);