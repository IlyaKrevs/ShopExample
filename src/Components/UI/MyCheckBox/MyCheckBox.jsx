import React from 'react';
import classes from './MyCheckBox.module.css';

const MyCheckBox = (props) => {
    return (
        <label className={classes.findFilter__checkbox}>
            <input onChange={(e) => props.checkBoxesCallBackFnc(e.target.value)} value={props.children} checked={props.checked} className={classes.myCheckBox} type="checkbox" />
            {props.children}
            <span className={classes.checkBoxCounter}>({props.counter})</span>
        </label>
    );
};

export default MyCheckBox;