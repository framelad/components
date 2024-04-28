import PropTypes from 'prop-types';

const Color = ({ color }) => {
    return (
        <li>{color.name}</li>
    );
};

Color.propTypes = {
    color: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default Color;
