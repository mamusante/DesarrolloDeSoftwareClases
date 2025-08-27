export function aumentarPrecioDiario(alojamientos, aumento) {
  alojamientos.forEach((a) => {
    a.precioPorNoche = a.precioPorNoche + aumento;
  });
}

export function alojamientoMasCaro(alojamientos) {
  const listaDePrecios = alojamientos.map((a) => {
    return a.precioPorNoche;
  });
  const precioMaximo = Math.max(...listaDePrecios); //... pasa todos los elementos de la lista

  const alojamiento = alojamientos.find((a) => {
    return a.precioPorNoche == precioMaximo;
  });

  return alojamiento;
}

export function filtrarPorPrecio(alojamientos, precioMaximo) {
  return alojamientos.filter((a) => {
    return a.precioPorNoche <= precioMaximo;
  });
}

export function obtenerTotalReservas(reservas) {
  //el reduce es como un fold
  return reservas.reduce((total, reserva) => {
    return total + reserva.precioFinal();
  }, 0);
}

// module.exports = {
//     aumentarPrecioDiario,
//     alojamientoMasCaro,
//     filtrarPorPrecio,
//     obtenerTotalReservas
// }
