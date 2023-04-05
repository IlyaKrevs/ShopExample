import React, { useEffect, useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';
import classes from './BascketItem.module.css';
import BascketSplitter from './BascketSplitter';

const BascketItem = (props) => {

    let [localCount, setLocalCount] = useState(1);

    let [localPrice, setLocalPrice] = useState(props.item.price);
    let localItemValue = props.item;


    useEffect(() => {
        setLocalPrice(localCount * props.item.price)
    }, [localCount, props.localBasketState])

    function upLocalsNumber() {
        setLocalCount(localCount + 1);
        props.setHeaderCounterCallBack(+1, null)
        props.setBillCallBack(+props.item.price)


    }

    function downLocalsNumber() {
        if (localCount > 1) {
            setLocalCount(localCount - 1);
            props.setHeaderCounterCallBack((- 1), null)
            props.setBillCallBack(-1 * props.item.price)
        } else {
            setLocalCount(1)
        }
    }



    function deleteFunc() {
        props.setLocalBasketStateCallBack(localItemValue);
        props.setBillCallBack((-1 * props.item.price) * localCount)
        props.setHeaderCounterCallBack((- 1 * localCount), null)
        setLocalCount(1)

    }

    return (
        <div className={classes.backetItem}>
            <div className={classes.container}>
                <img src={props.item.url} />
                <div className={classes.backetItem__Descr}>
                    <div className={classes.volumeContainer}>
                        <img className={classes.volumeImg} src="../../img/volumeItem.svg" />
                        <p className={classes.volumeText}>{props.item.sizeType.volume}</p>
                    </div>
                    <p className={classes.backetTextBOLD}>
                        {props.item.name}
                    </p>
                    <p className={classes.backetThintext}>{props.item.description} </p>
                </div>
                <div className={classes.splitter}></div>
                <div className={classes.countContainer}>
                    <div onClick={e => downLocalsNumber()} className={classes.symbol}>-</div>
                    <div className={classes.count}>{localCount}</div>
                    <div onClick={e => upLocalsNumber()} className={classes.symbol}>+</div>
                </div>
                <div className={classes.splitter}></div>
                <div className={classes.bigPrice}>{localPrice + ' ' + '₸'} </div>
                <div className={classes.splitter}></div>
                <MyButton onClick={e => deleteFunc()} style={{
                    width: 60,
                    height: 60,
                }} src='../../../img/delete.svg' />
            </div>
            <BascketSplitter />
        </div >
    );
};

export default BascketItem;