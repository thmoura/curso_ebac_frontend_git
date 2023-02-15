const form = document.getElementById('form-maior');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA  = parseInt(document.getElementById("campo-a").value,10);
    const campoB = parseInt(document.getElementById("campo-b").value,10);

    if (campoA  < campoB ) {
        alert("Formulario valido");
    } else {
        alert("Formulario invalido");
    }

})

console.log(form);