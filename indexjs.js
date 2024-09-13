function resolver() {
   
    let nombre = document.getElementById("valorNombre").value.trim();
    let apellido = document.getElementById("valorApellido").value.trim();
    let peso = parseFloat(document.getElementById("valorPeso").value);
    let altura = parseFloat(document.getElementById("valorAltura").value);

    
    if (!nombre || !apellido) {
        alert("Por favor, ingresa tu nombre y apellido.");
        return;
    }
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }


    const contenedorPaciente = document.getElementById("paciente");
    contenedorPaciente.textContent = `Paciente: ${apellido} ${nombre}`;

    
    calculoIMC(altura, peso);
}

function calculoIMC(altura, peso) {
   
    let imc = peso / (Math.pow(altura, 2));

    
    const contenedorIMC = document.getElementById("imcSpan");
    contenedorIMC.textContent = imc.toFixed(2);

  
    const contenedorPeso = document.getElementById("nivelPeso");
    let nivelPeso;

    if (imc < 18.5) {
        nivelPeso = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        nivelPeso = "Peso saludable";
    } else if (imc >= 24.9 && imc < 29.9) {
        nivelPeso = "Sobrepeso";
    } else {
        nivelPeso = "Obesidad";
    }

    contenedorPeso.textContent = nivelPeso;
}
