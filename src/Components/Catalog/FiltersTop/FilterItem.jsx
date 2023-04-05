import React from 'react';
import classes from './FilterItem.module.css';

const FilterItem = (props) => {
    return (
        <a {...props} href="#">
            <div className={classes.filter__item}>
                <p className={classes.filter__text}>{props.children}</p>
            </div>
        </a>
    );
};

export default FilterItem;