const btnPagePoint = document.getElementById("card-container__distance");
const btnPolinomio = document.getElementById("card-container__polinomio");

btnPagePoint.addEventListener("click", () => {
    window.location.href = "./pages/puntos.html";
});

btnPolinomio.addEventListener("click", () => {
    window.location.href = "./pages/polinomio.html";
});







/* function calcularDistancia() {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);

    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        document.getElementById("resultadoDistancia").innerHTML = "La distancia entre los dos puntos es: " + distancia.toFixed(2);
    } else {
        document.getElementById("resultadoDistancia").innerHTML = "Por favor ingrese valores válidos.";
    }
}


function evaluarPolinomio(a, b, c, d, e, x) {
    return a * Math.pow(x, 4) + b * Math.pow(x, 3) + c * Math.pow(x, 2) + d * x + e;
}

function encontrarRaices() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const d = parseFloat(document.getElementById("d").value);
    const e = parseFloat(document.getElementById("e").value);
    
    const tolerancia = 0.0001;
    const maxIteraciones = 1000;
    let resultados = [];

    // Búsqueda en el intervalo [-100, 100]
    for (let i = -100; i < 100; i++) {
        let x1 = i;
        let x2 = i + 1;

        if (evaluarPolinomio(a, b, c, d, e, x1) * evaluarPolinomio(a, b, c, d, e, x2) < 0) {
            let raiz = metodoBiseccion(a, b, c, d, e, x1, x2, tolerancia, maxIteraciones);
            if (raiz !== null) {
                resultados.push(raiz);
            }
        }
    }

    if (resultados.length > 0) {
        document.getElementById("resultadoRaices").innerHTML = "Raíces encontradas: " + resultados.join(", ");
    } else {
        document.getElementById("resultadoRaices").innerHTML = "No se encontraron raíces en el intervalo.";
    }
}

function metodoBiseccion(a, b, c, d, e, x1, x2, tolerancia, maxIteraciones) {
    let iteraciones = 0;
    let xm;

    while (iteraciones < maxIteraciones) {
        xm = (x1 + x2) / 2;
        let f1 = evaluarPolinomio(a, b, c, d, e, x1);
        let fm = evaluarPolinomio(a, b, c, d, e, xm);

        if (Math.abs(fm) < tolerancia) {
            return xm.toFixed(4);
        }

        if (f1 * fm < 0) {
            x2 = xm;
        } else {
            x1 = xm;
        }

        iteraciones++;
    }

    return null; // Si no converge
}
 */