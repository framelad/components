import * as PropTypes from "prop-types";
import Age from "./Age.jsx";

export default function Welcome({name, age}) {
        return (
            <div>
                <h1>Hello, {name}</h1>
                <Age years={age}/>
                {age > 18 && <Age years={age} />} {/* Render Age if age is greater than 18 */}
                {age && <Age years={age} />} {/* Render Age if age is present */}
                {age > 18 && age < 65 && <Age years={age} />} {/* Render Age if age is between 18 and 65 */}
                {age > 18 && age < 65 && name === 'John' && <Age years={age} />} {/* Render Age if age is between 18 and 65 and name is "John" */}
            </div>
        )
}

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}