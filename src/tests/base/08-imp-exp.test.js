import "@testing-library/dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
describe("Pruebas en funciones de herores", () => {
	test("Debe de retornar un heroe por id", () => {
		const id = 1;
		const heroe = getHeroeById(id);
		const heroeData = heroes.find((heroe) => heroe.id === id);
		expect(heroeData).toEqual(heroe);
		console.log(heroeData);
	});

	test("Debe de retornar undefined si el heroe no existe", () => {
		const id = 10;
		const heroe = getHeroeById(id);
		// const heroeData = heroes.find((heroe) => heroe.id === id);
		expect(heroe).toBe(undefined);
	});

	test("Debe retornar un arreglo con los heroes de DC", () => {
		const ownerTest = [
			{
				id: 1,
				name: "Batman",
				owner: "DC",
			},
			{
				id: 3,
				name: "Superman",
				owner: "DC",
			},
			{
				id: 4,
				name: "Flash",
				owner: "DC",
			},
		];

		const owner = getHeroesByOwner("DC");
		expect(owner).toEqual(ownerTest);
	});

	test("Debe retornar un arreglo con los héroes de marvel", () => {
		const owner = getHeroesByOwner("Marvel");
		expect(owner.length).toBe(2);
	});
});
