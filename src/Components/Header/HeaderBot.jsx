import React, { useState } from 'react';
import classes from './HeaderBot.module.css';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import { Link } from 'react-router-dom';


import sultanPic from '../../img/sultan.svg';
import btnPic1 from '../../img/ButtonImg1.svg';
import telkaPic from '../../img/telka.svg';
import adminPic from '../../img/priceListBtn.svg';
import basketPic from '../../img/backetImg.svg';

const HeaderBot = (props) => {


    return (
        <div className={classes.header__bot}>
            <img src={sultanPic} alt="sultan" />

            <Link to='/catalog'> <MyButton children='Каталог' src={btnPic1} />
            </Link>
            <MyInput />

            <div className={classes.header__CallBackContainer}>
                <div className={classes.CallBackText}>
                    <p className={classes.CallBackBOLD}>+7 (777) 490-00-91</p>
                    <span className={classes.CallBackThin}>время работы: 9:00-20:00</span>
                    <span className={classes.CallBackUnderline}>Заказать звонок</span>
                </div>
                <img src={telkaPic} />
            </div>

            <div className={classes.splitter}></div>


            <Link to="/admin">  <MyButton children="Админка" src={adminPic} /></Link>

            <div className={classes.splitter}></div>
            <Link to="/basket">
                <div className={classes.backetContainer}>

                    <div className={classes.backet__image}>
                        <img src={basketPic} />
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