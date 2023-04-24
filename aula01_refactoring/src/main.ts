// @ts-nocheck

const TARIFA_MINIMA = 10
const TARIFA_NORMAL = 2.1
const TARIFA_DOMINGO = 2.9
const TARIFA_NOTURNA = 3.9
const TARIFA_NOTURNA_DOMINGO = 5

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
    if (!corridaValida(corrida.distancia)) throw new Error('A distancia da corrida é invalida');
    if (!dataValida(corrida.diaDaSemana)) return -2;
    if (periodoNoturno(corrida.diaDaSemana) && !domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * TARIFA_NOTURNA;
    }
    if (periodoNoturno(corrida.diaDaSemana) && domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * TARIFA_NOTURNA_DOMINGO;
    }
    if (!periodoNoturno(corrida.diaDaSemana) && domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * TARIFA_DOMINGO;
    }
    if (!periodoNoturno(corrida.diaDaSemana) && !domingo(corrida.diaDaSemana)) {
      tarifa += corrida.distancia * TARIFA_NORMAL;
    }
  }
  return tarifa < TARIFA_MINIMA ? TARIFA_MINIMA : tarifa;
}
