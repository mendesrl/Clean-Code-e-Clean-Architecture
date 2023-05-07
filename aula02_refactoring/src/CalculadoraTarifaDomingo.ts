import CalculadoraDeTarifa from "./CalculadoraDeTarifa";
import Corrida from "./Corrida";

export default class CalculadoraTarifaDomingo implements CalculadoraDeTarifa {
    TARIFA = 2.9
    
    calcular(corrida: Corrida): number {
        return corrida.distancia * this.TARIFA;
    }
    
}