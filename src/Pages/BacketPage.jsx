import React, { useEffect, useState } from 'react';
import classes from './BacketPage.module.css';
import BascketSplitter from '../Components/Bascket/BascketSplitter';
import BascketItem from '../Components/Bascket/BascketItem';
import MyButton from '../Components/UI/MyButton/MyButton';
import ThanksMessage from '../Components/ThanksMessage';

const BacketPage = (props) => {

    let [localBasketState, setLocalBasketState] = useState('');
    let [visible, setVisible] = useState(false);


    function setLocalBasketStateCallBack(params) {
        setLocalBasketState(localBasketState.filter(item => item.barcode !== params.barcode));
    }



    useEffect(() => {
        let basket = props.bascketItems;
        if (basket.length) {
            basket = basket.slice();
            basket = basket.reduce((acc, item) => {
                if (!acc.find(a => a.barcode == item.barcode)) {
                    acc.push(item);
                }
                return acc;
            }, []);
            setLocalBasketState(basket);
        } else {
            setLocalBasketState(false);
            setLocalBasketState([]);
        }

    }, [props.bascketItems])


    function createBasketArr(arr) {
        let basketArr = []
        if (arr) {
            if (arr.length) {
                arr.forEach(element => (
                    basketArr.push(<BascketItem localBasketState={localBasketState} setLocalBasketState={setLocalBasketState} setLocalBasketStateCallBack={setLocalBasketStateCallBack} key={element} setBillCallBack={props.setBillCallBack} deleteFromBasket={props.deleteFromBasket} setHeaderCounterCallBack={props.setHeaderCounterCallBack} item={element} />)
                ))
            } else {
                basketArr.push(defaultMessage)
            }
        }
        return basketArr;
    }


    let defaultMessage = (<div key={1} className={classes.empty}>ПУСТО</div>);


    function makeOrder() {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 2000);
        props.setHeaderCounter(0);
        props.setBill(0)
        setLocalBasketState(null)
    }

    return (
        <div className={classes.backetPage}>
            <h1 className={classes.backetTitle}>Корзина</h1>
            <BascketSplitter />
            {(createBasketArr(localBasketState))}

            <div className={classes.botContainer}>
                <MyButton onClick={e => makeOrder()} children='Оформить заказ' />
                <p className={classes.bigPrice}>{props.bill || 0}{' ₸'} </p>
            </div>
            <ThanksMessage visible={visible} />
        </div>
    );
};

export default BacketPage; 