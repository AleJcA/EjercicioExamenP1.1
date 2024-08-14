function calcularDescuento() {
    let producto1 = parseFloat(document.getElementById('pro1').value);
    let producto2 = parseFloat(document.getElementById('pro2').value);
    let producto3 = parseFloat(document.getElementById('pro3').value);
    let producto4 = parseFloat(document.getElementById('pro4').value);
    let producto5 = parseFloat(document.getElementById('pro5').value);



    if (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4) || isNaN(producto5)) {
        alerta()
    }

    let subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
    let rangoDescuento = 0;

    if (subtotal >= 13000) {
        rangoDescuento = 40;
    } else if (subtotal >= 9000) {
        rangoDescuento = 30;
    } else if (subtotal >= 5000) {
        rangoDescuento = 20;
    } else if (subtotal >= 1000) {
        rangoDescuento = 10;
    }

    let descuento = (subtotal * rangoDescuento) / 100;
    let total = subtotal - descuento;

    document.getElementById('subtotal').value = subtotal;
    document.getElementById('descuento').value = descuento;
    document.getElementById('total').value = total;
    document.getElementById('descuentoLabel').textContent = `Descuento ${rangoDescuento}%`;
}

function alerta() {
    Swal.fire({
        title: "Oppsss",
        text: "Por favor llene todos los campos de producto",
        icon: "error"
    });
}

function limpiar() {
    document.getElementById('descuentoForm').reset();
    document.getElementById('subtotal').value = '';
    document.getElementById('descuento').value = '';
    document.getElementById('total').value = '';
    document.getElementById('descuentoLabel').textContent = 'Descuento 0%';
}