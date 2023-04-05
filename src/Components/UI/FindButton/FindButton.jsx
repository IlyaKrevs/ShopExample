import React from 'react';
import classes from './FindButton.module.css';

import findPic from '../../../img/Findimg.svg';

const FindButton = (props) => {
    return (
        <button className={classes.FindButton}>
            <img src={findPic} />
        </button>
    );
};

export default FindButton;