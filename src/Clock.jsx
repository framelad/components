import {useContext} from 'react';
import {contextLanguage} from "./ContextLanguage.jsx";

export function Clock() {
    const { language } = useContext(language);
    // const [time, setTime] =  useState(new Date());

    const getCurrentTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        return `${contextLanguage === 'EN' ? 'Current time' : 'Hora atual'}: ${currentTime}`;
    };

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(new Date());
    //     }, 1000);
    //
    //     return () => clearInterval(timer);
    // }, []);

    return (
        <div>
            <h2>Current Time: {getCurrentTime()}</h2>
        </div>
    );
}