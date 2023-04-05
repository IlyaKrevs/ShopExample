import React from 'react';
import classes from './Crumbs.module.css';


const Crumbs = (props) => {
    return (
        <div className={classes.crumbs}>
            <p className={classes.crumbs__title}>Главная</p>
            <div className={classes.splitter}></div>
            <p className={classes.crumbs__descr}>Косметика и гигиена</p>
            <div className={classes.splitter}>  </div>
            <p className={classes.crumbs__descr}>{props.crumbsText}</p>
        </div>
    );
};

export default Crumbs;