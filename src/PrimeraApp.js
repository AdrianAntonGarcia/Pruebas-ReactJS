import React, { Fragment } from "react";
import PropTypes from "prop-types";
// FC Functional components
// Se pueden poner valores por defecto a las prop
const PrimeraApp = ({ saludo: saludoProp, subitulo }) => {
	// const saludo = 'Hola Mundo';
	// console.log(saludoProp);
	return (
		<Fragment>
			<h1>{saludoProp}!!!</h1>

			{/* Para imprimir objetos 
			<pre>{JSON.stringify(saludo, null, 3)}</pre> */}
			<p>{subitulo}</p>
		</Fragment>
	);
};

PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired,
};

/**
 * Los valores por defecto de las propiedades también se pueden poner aquí.
 * Si los ponemos aquí si nos aparecerá el componente en la pestaña de herramientas del
 * desarrollador del navegador web.
 */

PrimeraApp.defaultProps = {
	subitulo: "Soy un subtitulo",
};

export default PrimeraApp;
