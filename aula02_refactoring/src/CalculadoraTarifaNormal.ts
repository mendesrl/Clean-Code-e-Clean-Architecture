import CalculadoraDeTarifa from "./CalculadoraDeTarifa";
import Corrida from "./Corrida";

export default class CalculadoraTarifaNormal implements CalculadoraDeTarifa {
    TARIFA = 2.1

    calcular(corrida: Corrida): number {
       return corrida.distancia * this.TARIFA;
    }
}
