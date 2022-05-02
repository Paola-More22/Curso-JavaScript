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

function clickPrecioConDescuento(){
    const precio = document.getElementById("inputPrecio");
    if(!validarVacio(precio.value)) alert("Por favor digite precio");
    const descuento = document.getElementById("inputDescuento");
    if(!validarVacio(descuento.value)) alert("Por favor digite descuento");
    const precioP = parseInt(precio.value);
    const descuentoD = parseInt(descuento.value);
    const precioConDescuento = calcularPrecioConDescuento(precioP, descuentoD);
    document.getElementById("inputResultado").value = ("El precio con descuento " + precioConDescuento);
}
