import { createContext, useState } from 'react';
import PropTypes from "prop-types";

// App contextLanguage
export const contextLanguage = createContext('en');

export const LanguageProvider = ({ children }) => {
    const [contextLanguage, setLanguage] = useState('en');

    return (
        <contextLanguage.Provider value={{ contextLanguage, setLanguage }}>
            <h1>Lingua {contextLanguage.language}</h1>
            <select name="lang" id="lang" onChange={event => setLanguage(event.target.value)}>
                <option value="en">English</option>
                <option value="it">Italiano</option>
                <option value="fr">Français</option>
            </select>
            {children}
        </contextLanguage.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node
}
