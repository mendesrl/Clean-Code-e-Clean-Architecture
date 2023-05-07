import CalculadoraDeTarifaFabrica from "./CalculadoraDeTarifaFabrica";
import CalculadoraDeTarifaManipulador from "./CalculadoraDeTarifaManipulador";
import Corrida from "./Corrida";

export default class Rota {
  private corridas: Corrida[];
  TARIFA_MINIMA = 10;
  
  constructor(readonly calculadoraDeTarifaManipulador: CalculadoraDeTarifaManipulador) {
    this.corridas = [];
    
  }

  addCorrida(distancia: number, diaDaSemana: Date) {
    this.corridas.push(new Corrida(distancia, diaDaSemana));
  }

  calcularRotas() {
    let tarifa = 0;
    for (const corrida of this.corridas) {
      tarifa += this.calculadoraDeTarifaManipulador.calcular(corrida)
    
    }
    return tarifa < this.TARIFA_MINIMA ? this.TARIFA_MINIMA : tarifa;
  }
}
