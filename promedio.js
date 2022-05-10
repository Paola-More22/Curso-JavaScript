// PROMEDIO
function calcularMediaAritmetica(lista){
    //let sumalista = 0;
    //for (let i = 0; i < lista.length; i++){
    //   sumalista = sumalista + lista[i];
    //}

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function clikCalcularpromedio(){
    const inputDatos = document.getElementById("inputDatos");
    const datos = inputDatos.value;
    const valueArray = Array.from(datos.split(','),Number)
    const promedio = calcularMediaAritmetica(valueArray);
    document.getElementById("inputResultado").value = ("La Mediana es " + promedio);
}

// MEDIA
function calcularMedia(list){

    let listOrder = list;
    listOrder.sort((a, b) => a - b);
    //console.log("God is alive"+listOrder);

    let lista = listOrder;

    const mitadLista = parseInt( lista.length / 2 );

    let mediana;

    function esPar(numero){
        if(numero % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }

    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    }else{
        mediana = lista[mitadLista]
    }

    return mediana

    function clikCalcularMedia(){
        const inputDatos = document.getElementById("inputDatos");
        const datos = inputDatos.value;
        const valueArray = Array.from(datos.split(','),Number)
        const media = calcularMedia(valueArray);
        document.getElementById("inputResultado").value = ("La Media es " + media);
    }

}

// MODA
function calcularModa(lista){
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;

            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (primerElemento, secundoElemento){
        return primerElemento[1] - secundoElemento[1];
    });

    const moda = listaArray[listaArray.length - 1];
    return moda[0]
}

function clickCalcularModa(){
    const inputDatos = document.getElementById("inputDatos");
    const datos = inputDatos.value;
    const valueArray = Array.from(datos.split(','),Number)
    const moda = calcularModa(valueArray);
    document.getElementById("inputResultado").value = ("La Moda es " + moda);

}
