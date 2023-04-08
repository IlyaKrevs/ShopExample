import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import BotPriceFilter from "../Components/Catalog/CatalogBot/BotPriceFilter";
import CatalogItem from "../Components/Catalog/CatalogItemList/CatalogItem";
import CatalogTop from "../Components/Catalog/CatalogTop/CatalogTop";
import FiltersContainer from "../Components/Catalog/FiltersTop/FiltersContainer";
import FindFilter from "../Components/Catalog/FiltersTop/FindFilter";
import SelectFilter from "../Components/Catalog/FiltersTop/SelectFilter";
import myDataJSON from "../JSONdata";
import classes from './CatalogPage.module.css';
import PageCountContainer from "../Components/UI/PageCounter/PageCountContainer";



function CatalogPage(props) {

    let myData = JSON.parse(props.myShopData);

    let [checkBoxesValue, setCheckBoxesValue] = useState('');

    let [showItems, setShowItem] = useState('');

    let [priceFilterMin, setPriceFilterMin] = useState(0);
    let [priceFilterMax, setPriceFilterMax] = useState(10000);

    let [sortByValue, setSortByValue] = useState('');

    let [sortByTypeOfCare, setSortByTypeOfCare] = useState('');
    let [limit, setLimit] = useState(9);
    let [totalPages, setTotalPages] = useState(0);
    let [currentPages, setCurrentPages] = useState(1);



    let myArr = myData;
    let count = myData.slice();

    useEffect(() => {
        setTotalPages(calcCountPages(count))
    }, [])


    function createCounts(numb) {
        let arr = [];
        for (let i = 0; i < numb; i++) {
            arr.push(i + 1);
        }
        return arr;
    }


    function calcCountPages(arr) {
        return Math.ceil(arr.length / limit)
    }

    function createArrayOnOnePage(arr) {
        let i = 0;
        let exampleArr = [];
        while (i < ((currentPages - 1) * limit)) {
            i++;
        }
        while (i < (currentPages * limit)) {
            if (arr[i]) {
                exampleArr.push(arr[i]);
            }
            i++;

        }
        return exampleArr;
    }



    function showItemsCallBack() {
        if (!checkBoxesValue.length) {
            let example = myArr.filter(item => +item.price >= +priceFilterMin && +item.price <= +priceFilterMax)
            setShowItem(example)
        } else {
            let example = myArr.filter(item => checkBoxesValue.includes(item.maker));
            let example2 = example.filter(item => +item.price >= +priceFilterMin && +item.price <= +priceFilterMax)
            setShowItem(example2);
        }

    }

    function createShowItemsArr() {
        if (showItems.length) {
            return showItems;
        } else {
            return myArr
        }
    }

    function createSortArr(exampleArr) {
        if (sortByValue) {
            if (sortByValue == 'nameUp') {
                return (exampleArr.sort((a, b) => a.name.toString().toLowerCase().localeCompare(b.name.toLowerCase())
                ))
            } else if (sortByValue == 'priceUp') {
                return (exampleArr.sort((a, b) => a.price - b.price));
            } else if (sortByValue == 'nameDown') {
                return (exampleArr.sort((a, b) => b.name.toString().toLowerCase().localeCompare(a.name.toLowerCase())
                ))
            } else {
                return (exampleArr.sort((a, b) => b.price - a.price));
            }
        } else {
            return exampleArr;
        }
    }

    function checkBoxesCallBackFnc(params) {
        if (!checkBoxesValue.includes(params)) {
            setCheckBoxesValue([...checkBoxesValue, params])
        } else {
            setCheckBoxesValue(checkBoxesValue.filter(item => item != params))
        }
    }

    function createArrSortByTypeOfCare(arr) {
        if (!sortByTypeOfCare) {
            return arr
        } else {
            return arr.filter(item => item.typeOfCare.includes(sortByTypeOfCare))
        }
    }


    myArr = createArrayOnOnePage(createArrSortByTypeOfCare(createSortArr(createShowItemsArr())));

    function showItemsDelete() {
        setShowItem(false);
        setSortByValue(false);
        setSortByTypeOfCare(false);
        setPriceFilterMin(0);
        setPriceFilterMax(10000)
    }


    return (
        <div className="App">
            <div className="App_container">


                <div className={classes.mainCatalog}>
                    <CatalogTop setSortByValue={setSortByValue} />

                    <FiltersContainer myShopData={props.myShopData} setSortByTypeOfCare={setSortByTypeOfCare} />

                    <div className={classes.catalogBot}>
                        <div className={classes.catalogBot__filtersContainer}>
                            <BotPriceFilter priceFilterMin={priceFilterMin} priceFilterMax={priceFilterMax} setPriceFilterMin={setPriceFilterMin} setPriceFilterMax={setPriceFilterMax} />
                            <FindFilter myShopData={props.myShopData} showItemsDelete={showItemsDelete} showItemsCallBack={showItemsCallBack} checkBoxesCallBackFnc={checkBoxesCallBackFnc} />
                            <SelectFilter myShopData={props.myShopData} setSortByTypeOfCare={setSortByTypeOfCare} />
                        </div>

                        <div className={classes.catalogBot__itemsList}>
                            {myArr.map(item =>
                                <CatalogItem setBillCallBack={props.setBillCallBack} setHeaderCounterCallBack={props.setHeaderCounterCallBack} key={item.barcode} catalogItem={item} />
                            )
                            }
                        </div>

                        <PageCountContainer currentPages={currentPages} setCurrentPages={setCurrentPages} createCounts={createCounts(totalPages)} />
                    </div>


                </div>

            </div>

        </div>
    );
}

export default CatalogPage;
