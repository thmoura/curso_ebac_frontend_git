const form = document.getElementById("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA  = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    if (campoA.value  < campoB.value ) {
        alert("Formulario valido")
    } else {
        alert("Formulario invalido");
    }

})

console.log(form);