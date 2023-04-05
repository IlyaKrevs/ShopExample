import React, { useState } from 'react';
import myDataJSON from '../../../JSONdata';
import MyButton from '../../UI/MyButton/MyButton';
import MyCheckBox from '../../UI/MyCheckBox/MyCheckBox';
import MyInput from '../../UI/MyInput/MyInput';
import classes from './FindFilter.module.css';

const FindFilter = (props) => {

    let myData = JSON.parse(myDataJSON);

    function getValueFromData(data) {

        let myArr = [];
        let count = 1;

        for (let index = 0; index < data.length - 1; index++) {

            let maker = data[index].maker;


            if (maker.toString() == data[index + 1].maker.toString()) {
                count += 1;
                maker = data[index + 1].maker.toString();
            } else {
                myArr.push({
                    [maker]: count,
                })
                count = 1;
            }

            if (index == data.length - 2) {
                index += 1;
                maker = data[index].maker;
                count = 1;
                myArr.push({
                    [maker]: count,
                })

            }
        }
        return myArr;
    }

    let myDataValues = getValueFromData(myData);

    function createFunc(array) {
        let simpleArr = [];
        array.forEach(element => {
            for (let [key, value] of Object.entries(element)) {
                simpleArr.push(<MyCheckBox checkBoxesCallBackFnc={props.checkBoxesCallBackFnc} key={key} children={key} counter={value} />)
            }
        }
        )
        return simpleArr;
    }

    let [findInput, setfindInput] = useState('');

    let userFindArr = () => {
        if (findInput) {
            return myDataValues.filter(item =>
                Object.keys(item).toString().toLowerCase().includes(findInput.toString().toLowerCase())
            )

        } else {
            return myDataValues;
        }
    }


    return (
        <div className={classes.catalogBot_findFilter}>
            <h2 className={classes.findFilter__title}>Производитель</h2>
            <MyInput
                value={findInput}
                onChange={e => setfindInput(e.target.value)}
            />
            <div style={{
                paddingTop: '10px',
            }}>
                {createFunc(userFindArr())}

            </div>
            <div className={classes.button__container}>
                <MyButton onClick={e => props.showItemsCallBack()} style={{
                    padding: '20px',
                    width: '100%',
                }}
                    children="Показать" />
                <MyButton onClick={e => props.showItemsDelete()}
                    style={{
                        padding: '20px',
                    }}
                    src="./img/delete.svg" />
            </div>
        </div>
    );
};

export default FindFilter;