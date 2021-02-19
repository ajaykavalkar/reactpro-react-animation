import React from 'react';
import './Backdrop.css';


function Backdrop(props) {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')}></div>;
};

export default Backdrop;