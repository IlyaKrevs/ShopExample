import React, { useState } from 'react';
import MyButton from '../Components/UI/MyButton/MyButton';
import classes from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import myDataJSON from '../JSONdata';

import basketBtnPic from './../img/backetBtnImg.svg';
import sharePic from './../img/shareImg.svg';
import blackPic from './../img/imgBlack.svg';


const ProductPage = (props) => {
    let params = useParams();
    let myData = JSON.parse(myDataJSON);

    let [productCount, setProductCount] = useState(1)

    let myItem = myData.filter(item => item.barcode == params.barcode);


    myItem = myItem[0];

    props.setCrumbsText(myItem.name)


    function productCountUp() {
        setProductCount(productCount + 1);
    }

    function productCountDown() {
        if (productCount > 1) {
            setProductCount(productCount - 1);
        }
    }

    return (
        <div className={classes.productCard}>
            <div>
                <img className={classes.productImg} src={myItem.url} />
            </div>
            <div className={classes.productCardDescription}>
                <p className={classes.haveIt}>В наличии</p>
                <p className={classes.productCard__title}> <span className={classes.special}>{myItem.name}</span> {myItem.typeOfCare}</p>

                <div className={classes.weight}>
                    <img src={myItem.url} />
                    {myItem.sizeType.volume}
                </div>
                <div className={classes.priceContainer}>
                    <p className={classes.price}>{myItem.price + '₸'} </p>
                    <div className={classes.countContainer}>
                        <div onClick={e => productCountDown()} className={classes.symbol}>-</div>
                        <div className={classes.count}>{productCount}</div>
                        <div onClick={e => productCountUp()} className={classes.symbol}>+</div>
                    </div>
                    <MyButton children='В корзину' src={basketBtnPic} />
                </div>


                <div className={classes.container}>
                    <div className={classes.share}>
                        <img src={sharePic} />
                    </div>
                    <p className={classes.sale}>При покупке от <span className={classes.saleBold}>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
                    </p>

                    <div className={classes.priceList}>
                        Прайс-лист <img src={blackPic} />
                    </div>
                </div>

                <div className={classes.about}>
                    <div className={classes.aboutContainer}>
                        <p className={classes.aboutTitle}>Производитель:</p>
                        <span className={classes.aboutDescr}>{myItem.name}</span>
                    </div>

                    <div className={classes.aboutContainer}>
                        <p className={classes.aboutTitle}>Бренд:</p>
                        <span className={classes.aboutDescr}>{myItem.brand}</span>
                    </div>

                    <div className={classes.aboutContainer}>
                        <p className={classes.aboutTitle}>Артикул:</p>
                        <span className={classes.aboutDescr}>{myItem.maker}</span>
                    </div>

                    <div className={classes.aboutContainer}>
                        <p className={classes.aboutTitle}>Кол-во в коробке:</p>
                        <span className={classes.aboutDescr}>{myItem.description}</span>
                    </div>

                    <div className={classes.aboutContainer}>
                        <p className={classes.aboutTitle}>Штрихкод:</p>
                        <span className={classes.aboutDescr}>{myItem.barcode}</span>
                    </div>


                    <div className={classes.aboutContainer}>
                        <p className={classes.aboutTitle}>Вес коробки:</p>
                        <span className={classes.aboutDescr}>{myItem.size}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductPage;