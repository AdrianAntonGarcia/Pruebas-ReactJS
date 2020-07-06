import "@testing-library/dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
	/**
	 * En pruebas asíncronas, si pasamos el argumento done a la función, el test
	 * se quedará esperando a que le retornemos esa variable.
	 */
	test("Debe de retornar un héroe async", (done) => {
		const id = 1;
		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toBe(heroes[id -1]);
			done();
		});
	});

	test("Debe de obtener un error si el heroe por id no existe", (done) => {
		const id = 10;
		getHeroeByIdAsync(id).catch((err) => {
			expect(err).toBe('No se pudo encontrar el héroe');
			done();
		});
	});
});
