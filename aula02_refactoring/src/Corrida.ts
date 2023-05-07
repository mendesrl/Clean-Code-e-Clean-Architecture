export default class Corrida {
  constructor(readonly distancia: number, readonly diaDaSemana: Date) {
    if (!this.corridaValida(distancia))
      throw new Error("A distancia da corrida é invalida");
    if (!this.dataValida(diaDaSemana))
      throw new Error("A data da corrida é invalida");
  }

  corridaValida(distancia: number) {
    return distancia != null && distancia != undefined && distancia > 0;
  }

  dataValida(diaDaSemana: Date) {
    return (
      diaDaSemana != null &&
      diaDaSemana != undefined &&
      diaDaSemana.toString() !== "Invalid Date"
    );
  }
  periodoNoturno() {
    return this.diaDaSemana.getHours() >= 22 || this.diaDaSemana.getHours() <= 6;
  }

  domingo() {
    return this.diaDaSemana.getDay() === 0;
  }
}
