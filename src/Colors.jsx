// Colors.js
import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

const Colors = ({ colors }) => {
    return (
        <ul>
            {colors.map((color) => (
                <Color key={color.id} color={color} />
            ))}
        </ul>
    );
};

Colors.propTypes = {
    colors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Colors;