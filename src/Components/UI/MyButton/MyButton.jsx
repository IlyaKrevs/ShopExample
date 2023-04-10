import React from 'react';
import classes from './MyButton.module.css';

const MyButton = (props) => {
    return (
        <button data-testid='microButtonTest' {...props} className={classes.myButton}>
            {props.children}
            <img src={props.src} />
        </button>
    );
};

export default MyButton;