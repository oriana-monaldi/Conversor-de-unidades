function conversor() {
    let seguir = "si";

    while (seguir === "si") {
       let actual = prompt("Ingrese la unidad actual (Metros, Centimetros, Kilometros)").toLowerCase();
        while (actual !== "metros" && actual !== "centimetros" && actual !== "kilometros") {
            alert("¡Error! Escriba nuevamente la unidad actual");
            actual = prompt("Ingrese la unidad actual (Metros, Centimetros, Kilometros)").toLowerCase();
        }

        let deseada = prompt("Ingrese la unidad deseada (Metros, Centimetros, Kilometros)").toLowerCase();
        while (deseada !== "metros" && deseada !== "centimetros" && deseada !== "kilometros") {
            alert("¡Error! Escriba nuevamente la unidad deseada");
            deseada = prompt("Ingrese la unidad deseada (Metros, Centimetros, Kilometros)").toLowerCase();
        }

        let numeroIngresado = parseFloat(prompt("Ingrese el número que desea convertir"));
        while (isNaN(numeroIngresado)) {
            alert("No se ha ingresado un número válido. Intente nuevamente.");
            numeroIngresado = parseFloat(prompt("Ingrese el número que desea convertir"));
        }

        let resultado;

        if (isNaN(numeroIngresado)) {
            console.log("No se ha ingresado un número válido.");
        } else {
            if (actual === "centimetros" && deseada === "metros") {
                resultado = numeroIngresado / 100;
            } else if (actual === "centimetros" && deseada === "kilometros") {
                resultado = numeroIngresado / 100000;
            } else if (actual === "metros" && deseada === "centimetros") {
                resultado = numeroIngresado * 100;
            } else if (actual === "metros" && deseada === "kilometros") {
                resultado = numeroIngresado / 1000;
            } else if (actual === "kilometros" && deseada === "metros") {
                resultado = numeroIngresado * 1000;
            } else if (actual === "kilometros" && deseada === "centimetros") {
                resultado = numeroIngresado * 100000;
            } else {
                console.log("La unidad deseada no es válida.");
                continue; 
            }
            
            console.log("El resultado de la conversión es:", resultado.toFixed(2));

            seguir = prompt("¿Desea realizar otra conversión? (si / no)").toLowerCase();
        }
    }
}

conversor();