
// @ts-nocheck
// calculate ride
export function calc (movArray) {
	let result = 0;
	for (const mov of movArray) {
		if (mov.distancia != null && mov.distancia != undefined && typeof mov.distancia === "number" && mov.distancia > 0) {
			if (mov.diaDaSemana != null && mov.diaDaSemana != undefined && mov.diaDaSemana instanceof Date && mov.diaDaSemana.toString() !== "Invalid Date") {

				// overnight

				if (mov.diaDaSemana.getHours() >= 22 || mov.diaDaSemana.getHours() <= 6) {

					// not sunday
					if (mov.diaDaSemana.getDay() !== 0) {

						result += mov.distancia * 3.90;
					// sunday
					} else {
						result += mov.distancia * 5;

					}
				} else {
					// sunday
					if (mov.diaDaSemana.getDay() === 0) {

						result += mov.distancia * 2.9;

					} else {
						result += mov.distancia * 2.10;
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
	if (result < 10) {
		return 10;
	} else {
		return result;
	}
}