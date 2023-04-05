import React, { useState } from 'react';
import classes from './HeaderBot.module.css';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import { Link } from 'react-router-dom';

const HeaderBot = (props) => {


    return (
        <div className={classes.header__bot}>
            <img src="./img/sultan.svg" alt="sultan" />

            <Link to='/'> <MyButton children='Каталог' src="./img/ButtonImg1.svg" />
            </Link>
            <MyInput />

            <div className={classes.header__CallBackContainer}>
                <div className={classes.CallBackText}>
                    <p className={classes.CallBackBOLD}>+7 (777) 490-00-91</p>
                    <span className={classes.CallBackThin}>время работы: 9:00-20:00</span>
                    <span className={classes.CallBackUnderline}>Заказать звонок</span>
                </div>
                <img src="./img/telka.svg" />
            </div>

            <div className={classes.splitter}></div>


            <Link to="/admin">  <MyButton children="Админка" src="./img/priceListBtn.svg" /></Link>

            <div className={classes.splitter}></div>
            <Link to="/basket">
                <div className={classes.backetContainer}>

                    <div className={classes.backet__image}>
                        <img src="./img/backetImg.svg" />
                        <div className={classes.backetCounter}>
                            {props.headerCounter}
                        </div>
                    </div>

                    <div className={classes.backet__text}>
                        <p className={classes.backet__text_title}>Корзина</p>
                        <span className={classes.backet__text_cash}>{props.bill + ' ' + '₸'}  </span>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default HeaderBot;