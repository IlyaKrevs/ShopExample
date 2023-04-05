import React from 'react';
import classes from './FindButton.module.css';

const FindButton = (props) => {
    return (
        <button className={classes.FindButton}>
            <img src="./img/Findimg.svg" />
        </button>
    );
};

export default FindButton;