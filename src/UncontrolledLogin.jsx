import React, { useState } from 'react';

const UncontrolledLogin = () => {
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Access the form values using the DOM API
        const usernameInput = event.target.elements.username;
        const passwordInput = event.target.elements.password;
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Perform login logic here
        if (username === 'admin' && password === 'password') {
            console.log('Login successful!');
            // Redirect to dashboard or perform other actions
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <h2>Uncontrolled Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default UncontrolledLogin;