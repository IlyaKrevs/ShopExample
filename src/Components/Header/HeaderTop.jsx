import React from 'react';
import classes from './HeaderTop.module.css';

import geoPic from '../../img/geoTag.svg'
import mailPic from '../../img/mail.svg'

const HeaderTop = () => {
    return (
        <div className={classes.header__top}>

            <div className={classes.top__left}>
                <div className={classes.header__item}>
                    <img src={geoPic} alt="geoTag" />
                    <p> <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span> <br />
                        (Рынок Восточный)</p>
                </div>

                <div className={classes.splitter}></div>

                <div className={classes.header__item}>
                    <img src={mailPic} alt="mail" />
                    <p className={classes.pSimpleClass}> <span className={classes.spanSimpleClass}>opt.sultan@mail.ru </span> <br />
                        На связи в любое время</p>
                </div>
            </div>

            <div className={classes.top__right}>
                <p className={classes.top__text}>О компании</p>
                <div className={classes.splitter}></div>

                <p className={classes.top__text}>Доставка и оплата</p>
                <div className={classes.splitter}></div>

                <p className={classes.top__text}>Возврат</p>
                <div className={classes.splitter}></div>

                <p className={classes.top__text}>Контакты</p>

            </div>
        </div >
    );
};

export default HeaderTop;