import './App.css'
import PropTypes from 'prop-types';
import {UseStateCounter} from "./UseStateCounter.jsx";
import {Clock} from "./Clock.jsx";
import {Login} from "./Login.jsx";
import UncontrolledLogin from "./UncontrolledLogin.jsx";
import FocusableInput from "./FocusableInput.jsx";
import {CounterDef} from "./CounterDef.jsx";
import TodoList from "./TodoList.jsx";

MouseClicker.propTypes = {
    name: PropTypes.string,
};

function MouseClicker ({ name = "one" }) {
    const handleButtonClick = event => {
        if(event.target.name) {
            console.log(name);
        } else {
            console.log("schiacciasti l'immagine");
        }
    };

    return (
        <button name={name} onClick={handleButtonClick}>
            bot
            <img src="src/image.png" width="94" height="124" alt="image" />
            tone
        </button>
    );
}

function App() {
    return (
        <div>
            <MouseClicker/>
            <UseStateCounter/>
            {/*<ShowApi/>*/}
            <Clock/>
            <Login/>
            <UncontrolledLogin/>
            <FocusableInput/>
            <CounterDef/>
            <TodoList/>
        </div>)
}

export default App