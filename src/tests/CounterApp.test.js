import "@testing-library/dom";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import React from "react";

describe("Pruebas del componente CounterApp", () => {
	let wrapper = shallow(<CounterApp />);

	/**
	 * Función que se ejecuta antes de cada test,
	 * Reinicializamos el componente antes de cada test.
	 */
	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test("Debe de mostrar <CounterApp/> correctamente en sus valores por defecto", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar el valor 100 cuando se pasa ese prop", () => {
		const value = 100;
		const wrapper = shallow(<CounterApp value={value} />);

		const valueText = wrapper.find("h2").text().trim();
		expect(valueText).toBe("100");
	});

	test("Debe de incrementar con el botón +1", () => {
		/**
		 * Con el simulate, podemos lanzar un evento sobre el botón,
		 * el segundo parámetro es el objeto con los valores que podemos
		 * pasar al evento
		 */
		wrapper.find("button").at(0).simulate("click", {});

		const counterText = wrapper.find("h2").text().trim();

		expect(counterText).toBe("11");
	});

	test("Debe de decrementar con el botón -1", () => {
		/**
		 * Con el simulate, podemos lanzar un evento sobre el botón,
		 * el segundo parámetro es el objeto con los valores que podemos
		 * pasar al evento
		 */
		wrapper.find("button").at(2).simulate("click", {});
		const counterText = wrapper.find("h2").text().trim();
		expect(counterText).toBe("9");
	});

	test("Debe de colocar el valor por defecto con el botón de reset", () => {
		const wrapper = shallow(<CounterApp value={105} />);
		wrapper.find("button").at(0).simulate("click", {});
		wrapper.find("button").at(1).simulate("click", {});
		const counterText = wrapper.find("h2").text().trim();
		expect(counterText).toBe("105");
	});
});
