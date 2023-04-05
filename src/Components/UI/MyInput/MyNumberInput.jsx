import React from 'react';
import classes from './MyNumberInput.module.css';

const MyNumberInput = (props) => {
    return (
        <input className={classes.myInput} {...props} />
    );
};

export default MyNumberInput;
