import "@testing-library/dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
	test("Prueba en el método getSauludo, debe retornar Hola Adrian!", () => {
		const nombre = "Adrian";
		const saludo = getSaludo(nombre);
		console.log(saludo);
		expect(saludo).toBe(`Hola ${nombre}!`);
	});

	test("Prueba en el método getSauludo, debe retornar Hola Carlos! si no se pasan argumentos", () => {
		const nombre = "Carlos";
		const saludo = getSaludo();
		console.log(saludo);
		expect(saludo).toBe(`Hola ${nombre}!`);
	});
});
