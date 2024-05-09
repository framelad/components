import { useState } from 'react';
import PropTypes from "prop-types";

const Container = ({title, children}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <h2 onClick={toggleCollapse} style={{cursor: 'pointer'}}>{title}</h2>
            <div style={{backgroundColor: 'white', border: '2px solid red', padding: '10px', margin: '10px', display: collapsed ? 'none' : 'block' }}>
                {children}
            </div>
        </>
    );
};
Container.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node   
}
export default Container;
