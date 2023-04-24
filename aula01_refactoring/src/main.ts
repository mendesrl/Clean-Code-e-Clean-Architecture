// @ts-nocheck

function periodoNoturno(diaDaSemana: date) {
  return diaDaSemana.getHours() >= 22 || diaDaSemana.getHours() <= 6;
}

function domingo(diaDaSemana: date) {
  return diaDaSemana.getDay() === 0;
}

export function calcularRotas(corridas) {
  let tarifa = 0;
  for (const corrida of corridas) {
    if (
      corrida.distancia != null &&
      corrida.distancia != undefined &&
      typeof corrida.distancia === "number" &&
      corrida.distancia > 0
    ) {
      if (
        corrida.diaDaSemana != null &&
        corrida.diaDaSemana != undefined &&
        corrida.diaDaSemana instanceof Date &&
        corrida.diaDaSemana.toString() !== "Invalid Date"
      ) {
        if (periodoNoturno(corrida.diaDaSemana)) {
          if (!domingo(corrida.diaDaSemana)) {
            tarifa += corrida.distancia * 3.9;
          } else {
            tarifa += corrida.distancia * 5;
          }
        } else {
          if (domingo(corrida.diaDaSemana)) {
            tarifa += corrida.distancia * 2.9;
          } else {
            tarifa += corrida.distancia * 2.1;
          }
        }
      } else {
        return -2;
      }
    } else {
      return -1;
    }
  }
  if (tarifa < 10) {
    return 10;
  } else {
    return tarifa;
  }
}
