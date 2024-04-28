import {useEffect, useState} from 'react'
import PropTypes from "prop-types";

UseStateCounter.propTypes = {
	initialValue: PropTypes.number,
	incrementBy: PropTypes.number,
};
export function UseStateCounter({ initialValue = 0, incrementBy = 1 }) {
	const [counter, setCounter] = useState(initialValue)
	const [upBy, setScala] = useState(incrementBy)

	function handleIncrement() {
		setCounter((c) => c + upBy)
	}

	function updateUpBy(event) {
		setScala(parseInt(event.target.value))
	}

	useEffect(() => {
		console.log(`Counter is now: ${counter}`)
	}, [counter])

	return (
		<div>
			<h2>Counter: {counter}</h2>
			<button onClick={handleIncrement}>Increment</button>
			<input type="number" onClick={updateUpBy} defaultValue={incrementBy}/>
		</div>
	)
}