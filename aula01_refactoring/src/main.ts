// @ts-nocheck
// calcular rotas
export function calcularRotas(segmentos) {
  let tarifa = 0;
  for (const segmento of segmentos) {
    if (
      segmento.distancia != null &&
      segmento.distancia != undefined &&
      typeof segmento.distancia === "number" &&
      segmento.distancia > 0
    ) {
      if (
        segmento.diaDaSemana != null &&
        segmento.diaDaSemana != undefined &&
        segmento.diaDaSemana instanceof Date &&
        segmento.diaDaSemana.toString() !== "Invalid Date"
      ) {
        // overnight

        if (
          segmento.diaDaSemana.getHours() >= 22 ||
          segmento.diaDaSemana.getHours() <= 6
        ) {
          // not sunday
          if (segmento.diaDaSemana.getDay() !== 0) {
            tarifa += segmento.distancia * 3.9;
            // sunday
          } else {
            tarifa += segmento.distancia * 5;
          }
        } else {
          // sunday
          if (segmento.diaDaSemana.getDay() === 0) {
            tarifa += segmento.distancia * 2.9;
          } else {
            tarifa += segmento.distancia * 2.1;
          }
        }
      } else {
        // console.log(d);
        return -2;
      }
    } else {
      // console.log(distancia);

      return -1;
    }
  }
  if (tarifa < 10) {
    return 10;
  } else {
    return tarifa;
  }
}
