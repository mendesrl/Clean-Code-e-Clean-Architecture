import Corrida from "./Corrida";

export default class Rota {
  private corridas: Corrida[];
  TARIFA_MINIMA = 10;
  TARIFA_NORMAL = 2.1;
  TARIFA_DOMINGO = 2.9;
  TARIFA_NOTURNA = 3.9;
  TARIFA_NOTURNA_DOMINGO = 5;

  constructor() {
    this.corridas = [];
    
  }

  addCorrida(distancia: number, diaDaSemana: Date) {
    this.corridas.push(new Corrida(distancia, diaDaSemana));
  }

  calcularRotas() {
    let tarifa = 0;
    for (const corrida of this.corridas) {
      
      if (
        corrida.periodoNoturno() &&
        !corrida.domingo()
      ) {
        tarifa += corrida.distancia * this.TARIFA_NOTURNA;
      }
      if (corrida.periodoNoturno() && corrida.domingo()) {
        tarifa += corrida.distancia * this.TARIFA_NOTURNA_DOMINGO;
      }
      if (
        !corrida.periodoNoturno() &&
        corrida.domingo()
      ) {
        tarifa += corrida.distancia * this.TARIFA_DOMINGO;
      }
      if (
        !corrida.periodoNoturno() &&
        !corrida.domingo()
      ) {
        tarifa += corrida.distancia * this.TARIFA_NORMAL;
      }
    }
    return tarifa < this.TARIFA_MINIMA ? this.TARIFA_MINIMA : tarifa;
  }
}
