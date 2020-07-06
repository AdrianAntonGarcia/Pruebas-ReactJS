import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
	const [counter, setCounter] = useState(value);

	// handleAdd
	const handleAdd = (e) => {
		// No debemos mutar el state directamente
		// setCounter(counter + 1);
		/**
		 * Si no tuvieramos acceso a la variable counter, se puede recuperar así
		 * con el parámetro de entrada
		 */
		setCounter((c) => c + 1);
	};

	// handleSubstract
	const handleSubstract = () => {
		setCounter(counter - 1);
	};

	// handleReset
	const handleReset = () => {
		setCounter(value);
	};

	return (
		<Fragment>
			<h1>CounterApp</h1>
			<h2> {counter} </h2>
			{/* <button onClick={(e) => {handleAdd(e)}}>+1</button> 
			Es lo mismo que poner esto, el argumento que viene del onclick
			se pasa automáticamente como primer parámetro de la función. Igual
			que lo que haciamos con el console.log a secas.
			Al quitar los parentesis se ejecuta cuando damos el click, si pusieramos
			los parentesis se ejecutaría al cargar.
			Así pasamos como referencia la función para cuándo se haga click se ejecute
			*/}
			<button onClick={handleAdd}>+1</button>
			<button onClick={handleReset}>Reset</button>
			<button onClick={handleSubstract}>-1</button>
		</Fragment>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number,
};

// CounterApp.defaultProps = {
// 	value: 10,
// };
export default CounterApp;
