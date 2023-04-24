// @ts-nocheck

function periodoNoturno(diaDaSemana: date) {
  return diaDaSemana.getHours() >= 22 || diaDaSemana.getHours() <= 6;
}

function domingo(diaDaSemana: date) {
  return diaDaSemana.getDay() === 0;
}

function corridaValida(distancia: number) {
  return distancia != null && distancia != undefined && distancia > 0;
}

function dataValida(diaDaSemana: date) {
  return (
    diaDaSemana != null &&
    diaDaSemana != undefined &&
    diaDaSemana.toString() !== "Invalid Date"
  );
}

export function calcularRotas(corridas) {
  let tarifa = 0;
  for (const corrida of corridas) {
    if (!corridaValida(corrida.distancia)) return -1;
    if (!dataValida(corrida.diaDaSemana)) return -2;
    if (periodoNoturno(corrida.diaDaSemana) && !domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * 3.9;
    }
    if (periodoNoturno(corrida.diaDaSemana) && domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * 5;
    }
    if (!periodoNoturno(corrida.diaDaSemana) && domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * 2.9;
    }
    if (!periodoNoturno(corrida.diaDaSemana) && !domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * 2.1;
    }
  }
  return tarifa < 10 ? 10 : tarifa;
}
