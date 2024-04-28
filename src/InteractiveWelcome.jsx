import { useState } from 'react';
import Welcome from './Welcome';

export function InteractiveWelcome() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <Welcome name={inputValue} />
        </div>
    );
}
