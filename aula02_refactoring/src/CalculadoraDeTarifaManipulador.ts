import Corrida from "./Corrida";

export default interface CalculadoraDeTarifaManipulador {
    next?: CalculadoraDeTarifaManipulador;
    calcular(corrida: Corrida): number;

  
}