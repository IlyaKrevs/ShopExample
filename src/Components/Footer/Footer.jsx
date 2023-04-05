import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';

import classes from "./Footer.module.css";

import sultanPic from '../../img/sultanWhite.svg';

import priceListPic from '../../img/priceListBtn.svg';
import visaPic from '../../img/visa.svg';
import masterPic from '../../img/master.svg';
import wAppPic from '../../img/wApp.svg';
import tgPic from '../../img/tg.svg';

const Footer = () => {
    return (
        <footer className={classes.footer__container}>
            <div className={classes.item__container}>

                <div className={classes.item__img}>

                    <div className={classes.item__miniContainer}>
                        <img className={classes.whiteSultan} src={sultanPic} />
                        <p className={classes.item__img_title}>
                            Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области
                        </p>
                    </div>

                    <div className={classes.item__miniContainer}>
                        <p className={classes.item__img_descr}>
                            Подпишись на скидки и акции
                        </p>
                        <MyInput placeholder="Введите ваш E-mail" />
                    </div>
                </div>


                <div className={classes.item__navigation}>
                    <p className={classes.navigation__title}>
                        Меню сайта:
                    </p>

                    <p className={classes.navigation__descr}>
                        О компании
                    </p>

                    <p className={classes.navigation__descr}>
                        Доставка и оплата
                    </p>

                    <p className={classes.navigation__descr}>
                        Возврат
                    </p>

                    <p className={classes.navigation__descr}>
                        Контакты
                    </p>
                </div>


                <div className={classes.item__navigation}>
                    <p className={classes.navigation__title}>
                        Категории:
                    </p>

                    <p className={classes.navigation__descr}>
                        Бытовая химия
                    </p>

                    <p className={classes.navigation__descr}>
                        Косметика и гигиена
                    </p>

                    <p className={classes.navigation__descr}>
                        Товары для дома
                    </p>

                    <p className={classes.navigation__descr}>
                        Товары для детей и мам
                    </p>

                    <p className={classes.navigation__descr}>
                        Посуда
                    </p>
                </div>


                <div className={classes.item__navigation}>
                    <p className={classes.navigation__title}>
                        Скачать прайс-лист:
                    </p>

                    <MyButton children="Прайс - лист" src={priceListPic} />

                    <p className={classes.navigation__descr}>
                        Связь в мессенджерах:
                    </p>

                    <div className={classes.little_img_container}>
                        <img src={wAppPic} />
                        <img src={tgPic} />
                    </div>
                </div>


                <div className={classes.item__navigation}>
                    <p className={classes.navigation__title}>
                        Контакты:
                    </p>

                    <div className={classes.CallBackText}>
                        <p className={classes.CallBackBOLD}>+7 (777) 490-00-91</p>
                        <span className={classes.CallBackThin}>время работы: 9:00-20:00</span>
                        <span className={classes.CallBackUnderline}>Заказать звонок</span>
                    </div>

                    <p className={classes.footer__ystal}> <span>opt.sultan@mail.ru </span> <br />
                        На связи в любое время</p>

                    <div className={classes.imgCards__container}>
                        <img className={classes.imgCards} src={visaPic} />
                        <img className={classes.imgCards} src={masterPic} />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;