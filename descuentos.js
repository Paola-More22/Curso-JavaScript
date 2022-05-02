const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    return  precio - ( precio * ( descuento / 100 ) );
}

//Interaccion con HTML

// Funcion Validar
function validarVacio(value){
    if(value.trim().length ===0){
        return false
    }
    return true
}

const cupon = [
    {
        nombre: "JuanDC_es_Batman",
        descuento: 15,
    },
    {
        nombre: "pero_no_le_digas_a_nadie",
        descuento: 30,
    },
    {
        nombre: "es_un_secreto",
        descuento: 25,
    },
];

function clickPrecioConDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValue = parseInt(inputPrecio.value);

    const InputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;

    const isCuponValueValid = function (cupon) {
        return cupon.nombre === cuponValue;
    };

    const userCupon = cupon.find(isCuponValueValid);

    if (!userCupon) {
        document.getElementById("inputResultado").value = ("El cupon: " + cuponValue + " No es valido");
    } else {
        const descuento = userCupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(precioValue, descuento, cuponValue);
        document.getElementById("inputResultado").value = ("El precio con cupon es: " + precioConDescuento);
    }
}