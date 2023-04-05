import React from 'react';
import classes from './CatalogTop.module.css';

const CatalogTop = (props) => {
    return (
        <div className={classes.mainCatalog__top}>
            <p className={classes.mainCatalog__title}>Косметика и гигиена</p>
            <div className={classes.mainCatalog__top__right}>
                <p className={classes.sortText}>Сортировка:</p>
                <select onChange={(e) => props.setSortByValue(e.target.value)} className={classes.sortContainer}>
                    <option value="nameUp">По названию  ▲</option>
                    <option value="priceUp">По цене  ▲</option>
                    <option value="nameDown">По названию ▼</option>
                    <option value="priceDown">По цене ▼</option>
                </select>
            </div>
        </div>

    );
};

export default CatalogTop;