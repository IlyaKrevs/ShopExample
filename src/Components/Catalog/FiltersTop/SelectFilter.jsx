import React from 'react';
import myDataJSON from '../../../JSONdata';
import SelectFilterItem from './SelectFilterItem';
import classes from './SelectFilter.module.css';

const SelectFilter = (props) => {

    let selectFiltersArr = [];
    let myData = JSON.parse(props.myShopData);

    myData.forEach(element => {
        if (!selectFiltersArr.includes(...element.typeOfCare)) {
            selectFiltersArr.push(...element.typeOfCare);
        }
    });

    let mySelect = selectFiltersArr;

    return (
        <div className={classes.selectFilter}>
            {mySelect.map(item =>
                <SelectFilterItem onClick={(e) => props.setSortByTypeOfCare(e.target.textContent)} key={item} children={item} />
            )}

        </div>
    );
};

export default SelectFilter;