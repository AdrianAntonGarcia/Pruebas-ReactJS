import "@testing-library/dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas del fichero 07-deses-arr-js", () => {
	test("Debe de retornar un arreglo de un string y un numero", () => {
		const arrTest = ["ABC", 123];
		const [letras, numeros] = retornaArreglo();
		expect(letras).toEqual(arrTest[0]);
		expect(typeof letras).toEqual("string");
		expect(numeros).toEqual(arrTest[1]);
		expect(typeof numeros).toEqual("number");
	});
});
