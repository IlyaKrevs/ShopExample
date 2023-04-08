import React from 'react';
import classes from './NewItems.module.css'

const NewItemsComponent = (props) => {
    return (
        <div className={classes.newItem}>
            <a href="#">{props.children}</a>
            <img src={props.item.url} />
        </div>
    );
};

export default NewItemsComponent;