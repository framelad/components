import { useState } from 'react';
import PropTypes from "prop-types";

Login.propTypes = {
    onLogin: PropTypes.func,
};

export function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [disabled, setDisabled] = useState(true);

    function handleChange(event) {
        if (event.target.name === 'username' || event.target.name === 'password') {
            setDisabled(username === '' || password === '');
        }
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    function handleCheckboxChange(event) {
        setRemember(event.target.checked);
    }

    function handleLogin(event) {
        event.preventDefault();
        onLogin({ username, password, remember });
    }

    function handleReset() {
        setUsername('');
        setPassword('');
        setRemember(false);
    }

    return (
        <form onSubmit={handleLogin}>
            <label>
                Username:
                <input type="text" name="username" value={username} onChange={handleChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <br />
            <label>
                Remember:
                <input type="checkbox" name="remember" checked={remember} onChange={handleCheckboxChange} />
            </label>
            <br />
            <button type="submit" disabled={disabled}>Login</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    );
}
