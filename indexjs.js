function resolver(){
    let nombre = document.getElementById("valorNombre").value;
    let apellido = document.getElementById("valorApellido").value;

    let peso = parseFloat(document.getElementById("valorPeso").value);
    let altura = parseFloat(document.getElementById("valorAltura").value);

    calculoIMC(altura,peso);

    const contenedorPaciente = document.getElementById("paciente");

    contenedorPaciente.textContent = "Paciente: "+ apellido + " " + nombre +" ";
       
}

function calculoIMC(valorAltura, valorPeso){
    let valorIMC = valorPeso / (Math.pow(valorAltura,2));

    const contenedorIMC = document.getElementById("imcSpan");
    contenedorIMC.textContent = valorIMC.toFixed(2);

    const contenedorPeso = document.getElementById("nivelPeso");

    if (valorIMC<18.5){
        contenedorPeso.textContent = "Bajo peso";
    }
    if (valorIMC>18.5 && valorIMC<24.9){
        contenedorPeso.textContent = "Peso saludable";
    }
    if (valorIMC>24.9 && valorIMC<29.9){
        contenedorPeso.textContent = "Sobrepeso";
    }
    if (valorIMC>30){
        contenedorPeso.textContent = "Obesidad";
    }
}