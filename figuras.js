// Funcion Validar 
function validarVacio(value){
    if(value.trim().length ===0){
        return false
    }
    return true
}

function validarNumerico(value){
    if(!validarVacio(value)) return false
    if(parseInt(value) === NaN){
        return false
    }
    return true
}

// CODIGO DEL CUADRADO
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

// Interaccion con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    if(!validarVacio(input.value)) alert("Por favor digite el lado del cuadrado");
    const value = parseInt(input.value);
    const perimetro = perimetroCuadrado(value);
    document.getElementById("inputResultadoCuadrado").value = ("El perímetro es " + perimetro + " cm");
}

function calcularAraeCuadrado(){
    const input = document.getElementById("inputCuadrado");
    if(!validarVacio(input.value)) alert("Por favor digite el lado del cuadrado");
    const value = parseInt(input.value);
    const area = areaCuadrado(value);
    document.getElementById("inputResultadoCuadrado").value = ("El área es " + area + " cm");
}

// CODIGO DEL TRIANGULO
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

function alturaTrianguloIsosceles(ladoA, ladoB, base){
    if (ladoA != ladoB) {
        return "Los lados A y B no son iguales"
    } else {
        return "Altura del Triangulo Isosceles es " + Math.sqrt(ladoA**2 - base**2/ 4) + " cm"
    }
}

//Interaccion con HTML
function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("inputLadoA");
    if(!validarVacio(ladoA.value)) alert("Lado A esta vacio");
    const ladoB = document.getElementById("inputLadoB");
    if(!validarVacio(ladoB.value)) alert("Lado B esta vacio");
    const base1 = document.getElementById("inpuBase");
    if(!validarVacio(base1.value)) alert("La base esta vacia");
    const lado1 = parseInt(ladoA.value);
    const lado2 = parseInt(ladoB.value);
    const base = parseInt(base1.value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("inputResultadoTriangulo").value = ("El perímetro es " + perimetro + " cm");
}
function calcularAraeTriangulo(){
    const base1 =  document.getElementById("inpuBase");
    if(!validarVacio(base1.value)) alert("La base esta vacio");
    const altura = document.getElementById("inputAltura");
    if(!validarVacio(altura.value)) alert("La altura esta vacia");
    const base = parseInt(base1.value);
    const altura1 = parseInt(altura.value);
    const area = areaCuadrado(base, altura1);
    document.getElementById("inputResultadoTriangulo").value = ("El área es " + area + " cm");
}

function calcularAlturaTrianguloIsosceles(){
    const inputLadoA = document.getElementById("inputLadoA");
    if(!validarVacio(inputLadoA.value)) alert("Por favor digite el lado A");
    const inputLadoB = document.getElementById("inputLadoB");
    if(!validarVacio(inputLadoB.value)) alert("Por favor digite el lado B");
    const inpuBase = document.getElementById("inpuBase");
    if(!validarVacio(inpuBase.value)) alert("Por favor digite la base");
    const LadoA = parseInt(inputLadoA.value);
    const LadoB = parseInt(inputLadoB.value);
    const base = parseInt(inpuBase.value);
    const base1 = alturaTrianguloIsosceles(LadoA, LadoB, base);
    document.getElementById("inputResultadoTriangulo").value = (base1);
}

// CODIGO DEL CIRCULO
console.group("Circulos");

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    if(!validarVacio(input.value)) alert("Por favor digite el radio");
    console.log()
    const value = parseInt(input.value);
    const perimetro = perimetroCirculo(value);
    document.getElementById("inputResultadoCirculo").value = ("El perímetro es " + perimetro + " cm");
}

function calcularAraeCirculo(){
    const input = document.getElementById("inputCirculo");
    if(!validarVacio(input.value)) alert("Por favor digite el radio");
    const value = parseInt(input.value);
    const area = areaCirculo(value);
    document.getElementById("inputResultadoCirculo").value = ("El área es " + area + " cm");
}

console.groupEnd();