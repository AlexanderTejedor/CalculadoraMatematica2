const btn = document.getElementById("btn-result");

// calculadora para determinar un polinomio de grado 4 por metodo de biseccion

btn.addEventListener("click", () => {
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
        document.getElementById("results").innerHTML = "Las raíces del polinomio son: " + resultados.join(", ");
    } else {
        document.getElementById("results").innerHTML = "No se encontraron raíces en el intervalo [-100, 100].";
    }
});

function evaluarPolinomio(a, b, c, d, e, x) {
    return a * Math.pow(x, 4) + b * Math.pow(x, 3) + c * Math.pow(x, 2) + d * x + e;
}

function metodoBiseccion(a, b, c, d, e, x1, x2, tolerancia, maxIteraciones) {
    let iteraciones = 0;
    let xm;

    while (iteraciones < maxIteraciones) {
        xm = (x1 + x2) / 2;
        let f_xm = evaluarPolinomio(a, b, c, d, e, xm);

        if (Math.abs(f_xm) < tolerancia) {
            return xm;
        }

        if (evaluarPolinomio(a, b, c, d, e, x1) * f_xm < 0) {
            x2 = xm;
        } else {
            x1 = xm;
        }

        iteraciones++;
    }

    return null;
}