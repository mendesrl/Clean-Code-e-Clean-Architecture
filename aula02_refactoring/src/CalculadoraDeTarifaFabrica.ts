import CalculadoraDeTarifa from "./CalculadoraDeTarifa";
import CalculadoraTarifaDomingo from "./CalculadoraTarifaDomingo";
import CalculadoraTarifaDomingoNoite from "./CalculadoraTarifaDomingoNoite";
import CalculadoraTarifaNormal from "./CalculadoraTarifaNormal";
import CalculadoraTarifaNoturna from "./CalculadoraTarifaNoturna";
import Corrida from "./Corrida";

export default class CalculadoraDeTarifaFabrica {
  static create(corrida: Corrida): CalculadoraDeTarifa {
    if (corrida.periodoNoturno() && !corrida.domingo())
      return new CalculadoraTarifaNoturna();

    if (corrida.periodoNoturno() && corrida.domingo())
      return new CalculadoraTarifaDomingoNoite();

    if (!corrida.periodoNoturno() && corrida.domingo())
      return new CalculadoraTarifaDomingo();

    if (!corrida.periodoNoturno() && !corrida.domingo())
      return new CalculadoraTarifaNormal();

    throw new Error("Corrida invalida");
  }
}
