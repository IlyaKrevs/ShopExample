import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../../UI/MyButton/MyButton';
import classes from './CatalogItem.module.css';

import btnPic from '../../../img/backetBtnImg.svg';

import volumePic from '../../../img/volumeItem.svg'


const CatalogItem = (props) => {

    let [btnState, setBtnState] = useState(0);

    function btnDeactivate() {
        props.setHeaderCounterCallBack(1, props.catalogItem);
        props.setBillCallBack(+props.catalogItem.price)
        setBtnState(1);
    }

    return (

        <div className={classes.catalogBot__item}>
            <div className={classes.catalogBot__item_img}>
                <img src={props.catalogItem.url} />
            </div>
            <p className={classes.catalogBot__item__volume}> <img src={volumePic} />{props.catalogItem.size} </p>

            <div className={classes.catalogBot__item__title}>
                <Link to={props.catalogItem.barcode}>
                    <span className={classes.catalogBot__item__titleBig}>{props.catalogItem.name} </span>
                    {props.catalogItem.description}
                </Link>

            </div>
            <div><p className={classes.item__description}><span className="descrtiption_about">Штрихкод:</span> {props.catalogItem.barcode}</p>
            </div>

            <div><p className={classes.item__description}><span className="descrtiption_about">Производитель:</span> {props.catalogItem.maker}</p>
            </div>

            <div><p className={classes.item__description}><span className="descrtiption_about">Бренд:</span>{props.catalogItem.brand}</p>
            </div>


            <div data-testid="addBasketForTest" className={classes.item__price}>
                <p className={classes.price__value}>{props.catalogItem.price} ₸</p>
                <MyButton style={{
                    padding: '15px',
                    width: '153px',
                    height: '45px',
                    fontWeight: '700',
                    fontSize: '10px',
                    lineHeight: '12px',
                    letterSpacing: '0.15em',
                }} children='В КОРЗИНУ' data-testid="incrementButton"  src={btnPic} onClick={(e) => btnDeactivate()} disabled={btnState === 1 && true} />
            </div>
        </div>
    );
};

export default CatalogItem;