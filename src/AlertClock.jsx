import PropTypes from "prop-types";

const AlertClock = ({ onButtonClick }) => {
    const handleClick = () => {
        const currentTime = new Date().toLocaleTimeString();
        onButtonClick(currentTime);
    };

    return (
        <button onClick={handleClick}>Show Current Time</button>
    );
};

export default AlertClock;

AlertClock.propTypes = {
};