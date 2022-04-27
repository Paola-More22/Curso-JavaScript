// Codigo del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
*/
console.groupEnd();

// Codigo del Cuadrado
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
        "Los lado del Triangulo miden: "
        + ladoTriangulo1 + "cm, "
        + ladoTriangulo2 + "cm, "
        + baseTriangulo + "cm"
    );

const alturaTriangulo = 5.5
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = ( baseTriangulo * alturaTriangulo ) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
*/
console.groupEnd();

// Código del Círculo
console.group("Circulos");

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}
/*
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo= PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es: " + areaCirculo + "cm^2");
*/
console.groupEnd();
////////////////////////////////////////////////////////////////////////////////
// Interaccion con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAraeCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}