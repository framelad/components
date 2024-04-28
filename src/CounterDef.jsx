import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

CounterDef.propTypes = {
    initialValue: PropTypes.number,
    incrementBy: PropTypes.number,
};

export function CounterDef({ initialValue = 0, incrementBy = 1 }) {
    const [counter, setCounter] = useState(initialValue);
    const [upBy, setScala] = useState(incrementBy);
    const counterDirectionRef = useRef('');

    function handleIncrement() {
        setCounter((c) => {
            const newValue = c + upBy;
            updateCounterDirection(newValue, c);
            return newValue;
        });
    }

    function updateUpBy(event) {
        setScala(parseInt(event.target.value));
    }

    function updateCounterDirection(newValue, prevValue) {
        const direction = newValue > prevValue ? 'up' : 'down';
        if (counterDirectionRef.current !== direction) {
            counterDirectionRef.current = direction;
            console.log(`Counter direction changed to: ${direction}`);
        }
    }

    useEffect(() => {
        console.log(`Counter is now: ${counter}`);
    }, [counter]);

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <input type="number" onClick={updateUpBy} defaultValue={incrementBy} />
        </div>
    );
}
