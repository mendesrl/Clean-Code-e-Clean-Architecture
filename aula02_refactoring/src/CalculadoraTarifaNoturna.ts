import CalculadoraDeTarifa from "./CalculadoraDeTarifa";
import Corrida from "./Corrida";

export default class CalculadoraTarifaNoturna implements CalculadoraDeTarifa {
    TARIFA = 3.9
    
    calcular(corrida: Corrida): number {
        return corrida.distancia * this.TARIFA;
    }
    
}