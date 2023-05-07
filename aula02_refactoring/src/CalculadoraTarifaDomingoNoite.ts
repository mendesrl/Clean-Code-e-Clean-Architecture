import CalculadoraDeTarifa from "./CalculadoraDeTarifa";
import Corrida from "./Corrida";

export default class CalculadoraTarifaDomingoNoite implements CalculadoraDeTarifa {
    TARIFA = 5
    
    calcular(corrida: Corrida): number {
        return corrida.distancia * this.TARIFA;
    }
    
}