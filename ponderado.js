
function calcularPromedioNotas(notas1, notas2, notas3){
    const calPromedioNotas = (notas1*(30/100)) + (notas2*(30/100)) + (notas3*(40/100))
    return calPromedioNotas
}

function clickPromedioNotas(){
    const nota1 = document.getElementById("nota1");
    const nota2 = document.getElementById("nota2");
    const nota3 = document.getElementById("nota3");
    const notas1 = parseInt(nota1.value);
    const notas2 = parseInt(nota2.value);
    const notas3 = parseInt(nota3.value);
    const pNotas = calcularPromedioNotas(notas1, notas2, notas3);
    document.getElementById("inputResultado").value = ("El promedio de tus notas es " + pNotas );

}