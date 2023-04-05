import React from 'react';
import classes from './MyInput.module.css';
import FindButton from '../FindButton/FindButton';


const MyInput = (props) => {
    return (
        <div className={classes.MyInputContainer}>
            <input {...props} className={classes.MyInput} type="text" placeholder={props.placeholder || 'Поиск...'} />
            <FindButton />

        </div>
    );
};

export default MyInput;