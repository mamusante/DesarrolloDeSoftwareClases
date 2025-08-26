// const { Alojamiento, Reserva, Categoria, DescuentoFijo, DescuentoPorcentaje, DescuentoPorNoches} = require("./domain.js");
// const {aumentarPrecioDiario, alojamientoMasCaro, filtrarPorPrecio, obtenerTotalReservas} = require("./funciones.js")

import { 
    aumentarPrecioDiario, 
    alojamientoMasCaro, 
    filtrarPorPrecio, 
    obtenerTotalReservas
}from "./funciones.js"

import { 
    Alojamiento, 
    Reserva, 
    Categoria, 
    DescuentoFijo, 
    DescuentoPorcentaje, 
    DescuentoPorNoches
}from "./domain.js"


const alojamiento1 = new Alojamiento(
    "Hotel en Bs As", 
    100, 
    Categoria.Hotel
);



//console.log(alojamiento1.getDescription());

const reserva1 = new Reserva(
    alojamiento1, 
    new Date("2025-05-10"), 
    new Date("2025-05-20")
);


reserva1.agregarDescuento(new DescuentoFijo(100));
reserva1.agregarDescuento(new DescuentoFijo(50));
reserva1.agregarDescuento(new DescuentoPorcentaje(10));
reserva1.agregarDescuento(new DescuentoPorNoches(2 , 5));

console.log(`El precio base de la reserva es ${reserva1.precioBase()}`);
console.log(`El precio final de la reserva con otro descuento mas es ${reserva1.precioFinal()}`);

const catalogo = [
    new Alojamiento("Apart Hotel maria linda" , 2000 , Categoria.Apart),
    new Alojamiento("Hotel barato" , 10 , Categoria.Hotel),
    new Alojamiento("Apart Luca" , 100 , Categoria.Apart)
]

//Implementacion de funciones

// console.log("Alojamientos antes del aumento: ");
// console.log(catalogo);
aumentarPrecioDiario(catalogo, 1000);
// console.log("Alojamientos post aumento:");
// console.log(catalogo);

const alojamientoMasCaroDelCatalogo = alojamientoMasCaro(catalogo);
console.log(alojamientoMasCaroDelCatalogo)
console.log("El alojamiento mas caro es: " , alojamientoMasCaroDelCatalogo);

console.log("los apartamentos filtrados por precio 2000:" , filtrarPorPrecio(catalogo, 2000));

const misReservas = [
    new Reserva(alojamiento1 , new Date("2025-05-10"), new Date("2025-05-20")),
    new Reserva(alojamiento1 , new Date("2025-06-10"), new Date("2025-06-12")),
    new Reserva(alojamiento1 , new Date("2025-07-10"), new Date("2025-07-15"))
];

console.log("El total de las reservas es: ", obtenerTotalReservas(misReservas));


// para ejecutar hago node nombrerarchivo.js


