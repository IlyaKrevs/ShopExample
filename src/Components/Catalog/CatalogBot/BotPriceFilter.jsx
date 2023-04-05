import React from 'react';
import MyNumberInput from '../../UI/MyInput/MyNumberInput';
import classes from './BotPriceFilter.module.css';

const BotPriceFilter = (props) => {
    return (
        <div className={classes.priceFilter}>
            <h2 className={classes.priceFilter_title}>ПОДБОР ПО ПАРАМЕТРАМ</h2>
            <h3 className={classes.priceFilter_text}>Цена <span className={classes.specialPriceType}>₸</span></h3>

            <div className={classes.priceContainer}>
                <MyNumberInput onChange={e => props.setPriceFilterMin(e.target.value)} value={props.priceFilterMin} />
                <span> - </span>
                <MyNumberInput onChange={e => props.setPriceFilterMax(e.target.value)} value={props.priceFilterMax} />

            </div>
        </div>
    );
};

export default BotPriceFilter;