//Ponele q esto es un enum
export const Categoria = Object.freeze({
  Hotel: "Hotel",
  Departamento: "Departamento",
  Cabania: "Cabaña",
  Apart: "Apart",
});

export class Alojamiento {
  constructor(nombre, precioPorNoche, categoria) {
    this.nombre = nombre;
    this.precioPorNoche = precioPorNoche;
    this.categoria = categoria;
  }

  //esto es un metodo
  getDescription() {
    return `${this.nombre} (${this.categoria}) - $${this.precioPorNoche} por noche`;
  }
}

export class Reserva {
  constructor(alojamiento, diaInicio, diaFin) {
    if ((!diaInicio) instanceof Date || (!diaFin) instanceof Date) {
      throw new Error("Dia inicio y fin deben ser instancia de Date");
    }

    if (diaInicio >= diaFin) {
      throw new Error("Dia inicio debe ser previa al dia de fin");
    }

    this.alojamiento = alojamiento;
    this.diaInicio = diaInicio;
    this.diaFin = diaFin;
    this.descuentos = [];
  }

  cantidadDeNoches() {
    const msPorDia = 1000 * 60 * 60 * 24;
    return Math.ceil((this.diaFin - this.diaInicio) / msPorDia); //Hago esto porq me devuelve la diferencia en milisegundos
  }

  precioBase() {
    return this.cantidadDeNoches() * this.alojamiento.precioPorNoche;
  }

  agregarDescuento(descuento) {
    this.descuentos.push(descuento);
  }

  precioFinal() {
    let base = this.precioBase();
    let totalDescontado = 0;

    for (const desc of this.descuentos) {
      totalDescontado += desc.valorDescontado(base, this.cantidadDeNoches());
    }

    return Math.max(0, base - totalDescontado);
  }
}

export class DescuentoFijo {
  constructor(valor) {
    this.valor = valor;
  }

  valorDescontado(precioBase, cantidad) {
    return this.valor;
  }
}

export class DescuentoPorcentaje {
  constructor(porcentaje) {
    this.porcentaje = porcentaje;
  }

  valorDescontado(precioBase, cantidad) {
    return precioBase * (this.porcentaje / 100);
  }
}

export class DescuentoPorNoches {
  constructor(cantidadNoches, porcentaje) {
    this.cantidadNoches = cantidadNoches;
    this.porcentaje = porcentaje;
  }

  valorDescontado(precioBase, cantidad) {
    const vecesRepetidos = Math.floor(cantidad / this.cantidadNoches);
    let valorDescontado = 0;

    if (vecesRepetidos >= 1) {
      valorDescontado += precioBase * (this.porcentaje / 100) * vecesRepetidos;
    }

    return valorDescontado;
  }
}

// module.exports = {
//     Alojamiento,
//     Reserva,
//     Categoria,
//     DescuentoFijo,
//     DescuentoPorcentaje,
//     DescuentoPorNoches
// };
