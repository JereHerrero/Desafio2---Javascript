// Este ejercicio fue el primero que hice pero luego leyendo la consigna no estoy del todo seguro si cumple con lo requerido, por lo tanto lo deje comentado.

// const PrecioDolar = 144.64;
// const Impuestos = 1.75;
// const PrecioTotal = PrecioDolar * Impuestos;


// let monto = parseFloat(prompt("Ingrese el monto en dolares:"))

// let montoDolar = monto * PrecioTotal;

// document.write("El valor del producto en pesos es de: $"+ montoDolar.toFixed(2));

// Este ejercicio lo hice con el fin de que el usuario pueda ingresar el monto y la cantidad de cuotas y el programa lo calcule y lo muestre en pantalla.

let monto = parseFloat(prompt("Ingrese el monto del producto:"))

let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas 1, 3, 6, 9, 12, 18"))

let promo = monto * 0.10

let montoConCuota = monto

const calculador = () => {

    if (cantidadCuotas != 1) {
        let porCuota = monto * 0.05
        let valorPorCuota = ((monto / cantidadCuotas) + (porCuota / cantidadCuotas)).toFixed(2)

        document.write( "El valor del producto es $" + monto + " la cantidad de cuotas son " + cantidadCuotas + " y el precio por cada una es de $" + valorPorCuota + " lo cual queda en un monto de $" + (porCuota + monto))

    } else {
        document.write( "El valor del producto es $" + monto + " y estas aplica descuento del 10% por ser en un pago y queda en $" + (monto - promo))

    }
}

calculador()