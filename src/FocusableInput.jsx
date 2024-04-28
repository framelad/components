// FocusableInput.js
import { useEffect, useRef } from 'react';

const FocusableInput = (props) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input ref={inputRef} {...props} />
    );
};

export default FocusableInput;
