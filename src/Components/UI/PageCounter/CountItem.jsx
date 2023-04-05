import React from 'react';
import classes from './CountItem.module.css'
const CountItem = (props) => {
    let classArr = [classes.countItem, classes.countItem__choose]
    return (
        <div {...props} className={props.children == props.currentPage ? [...classArr].join(' ') : classArr[0]}>

        </div>
    );
};

export default CountItem;