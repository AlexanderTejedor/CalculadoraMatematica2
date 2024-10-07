const btn = document.getElementById("btn-result");

btn.addEventListener("click", () => {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        document.getElementById("results").innerHTML = "La distancia entre los dos puntos es: " + distancia.toFixed(0);
    } else {
        document.getElementById("results").innerHTML = "Por favor ingrese valores válidos.";
    }
});