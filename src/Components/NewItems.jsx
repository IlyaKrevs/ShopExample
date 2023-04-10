import React from 'react';
import classes from './NewItems.module.css'

const NewItemsComponent = (props) => {
    return (
        <div onClick={(e) => props.editNewItemsCallBack(props.item)} className={classes.newItem}>
            <p>{props.children}</p>
            <img className={classes.itemImage} src={props.item.url} />
        </div>
    );
};

export default NewItemsComponent;