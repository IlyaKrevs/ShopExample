import React from 'react';
import classes from './SelectFilterItem.module.css';

const SelectFilterItem = (props) => {
    return (
        <p href="#" {...props} > <p className={classes.selectFilter__item}>{props.children}</p></p>
    );
};

export default SelectFilterItem;