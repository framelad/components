import './App.css'
import './index.scss'
import PropTypes from 'prop-types';
import {UseStateCounter} from "./UseStateCounter.jsx";
import {Clock} from "./Clock.jsx";
import {Login} from "./Login.jsx";
import UncontrolledLogin from "./UncontrolledLogin.jsx";
import FocusableInput from "./FocusableInput.jsx";
import {CounterDef} from "./CounterDef.jsx";
import TodoList from "./TodoList.jsx";
import Container from "./Container.jsx";
import {contextLanguage} from "./ContextLanguage.jsx";

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
        <div className='bg-blue-50'>
            <p>prova</p>
        <button name={name} onClick={handleButtonClick}>
            bot
            <img src="src/image.png" width="94" height="124" alt="image" />
            tone
        </button>
        </div>

    );
}

function App() {
    return (
        <div>
            <MouseClicker />
            <UseStateCounter/>
            {/*<ShowApi/>*/}
            <Clock/>
            <Login />
            <UncontrolledLogin/>
            <FocusableInput/>
            <CounterDef/>
            <TodoList/>
            <Container title={'container'}>
                <p>prova</p>
            </Container>
            <h1>{contextLanguage.language}</h1>
        </div>)
}

export default App