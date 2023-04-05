import React from 'react';
import classes from './ThanksMessage.module.css'

const ThanksMessage = (props) => {

    let bgClass;
    let msgClass;


    if (props.visible === false) {
        bgClass = classes.hide;
        msgClass = classes.hide

    } else {
        bgClass = classes.activated;
        msgClass = classes.modal__message
    }
    return (
        <div className={bgClass}>
            <div className={msgClass}> <h2>Спасибо за заказ!</h2></div>
        </div>
    );
};

export default ThanksMessage;