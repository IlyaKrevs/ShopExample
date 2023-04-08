import React from 'react';
import myDataJSON from '../../../JSONdata';
import FilterItem from './FilterItem';
import classes from './FiltersContainer.module.css';

const FiltersContainer = (props) => {


    let myData = JSON.parse(props.myShopData);
    let filterArray = [];

    myData.forEach(element => {
        if (!filterArray.includes(...element.typeOfCare)) {
            filterArray.push(...element.typeOfCare);
        }
    });

    let filtersItems = filterArray;

    return (
        <div className={classes.mainCatalog__filtersContainer}>
            {filtersItems.map(element =>
                <FilterItem onClick={(e) => props.setSortByTypeOfCare(e.target.textContent)} value={element.children} key={element} children={element} />
            )}
        </div>
    );
};

export default FiltersContainer;