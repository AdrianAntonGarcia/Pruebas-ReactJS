// import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";
import React from "react";
import { shallow } from "enzyme";
import "@testing-library/dom";
describe("Pruebas en <PrimeraApp />", () => {
	/**
	 * Para que funciones esto hay que poner el import
	 * import '@testing-library/jest-dom/extend-expect';
	 * en el archivo setupTests.js en src
	 */
	// test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
	// 	const saludo = 'Hola, soy Goku';

	// 	const wrapper = render(<PrimeraApp saludo={'Hola, soy Goku'}/>);

	// 	expect(wrapper.getByText(saludo)).toBeInTheDocument();
	// })

	test("Debe de mostrar <PrimeraApp /> correctamente", () => {
		/**
		 * enzyme: Librería que extiende el render para pruebas por defecto de react
		 */
		const saludo = "Hola, soy Goku";

		/**
		 * Necesitamos una fotografía de como es mi componente renderizado, el snapshot,
		 * para eso usamos la librería: enzyme-to-json
		 * https://www.npmjs.com/package/enzyme-to-json
		 */
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar el subtitilo enviado por props", () => {
		const saludo = "Hola, soy Goku";
		const subitulo = "Soy un subtitulo";
		const wrapper = shallow(<PrimeraApp saludo={saludo} subitulo={subitulo} />);
		const textoParrafo = wrapper.find("p").text();
		expect(textoParrafo).toBe(subitulo);
	});
});
