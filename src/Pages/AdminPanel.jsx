import React, { useState, useEffect } from 'react';
import classes from './AdminPanel.module.css'
import NewItemsComponent from '../Components/NewItems';

const AdminPanel = (props) => {

    let [urlForm, setUrlForm] = useState('');
    let [nameForm, setNameForm] = useState('');
    let [weigthForm, setWeigthForm] = useState('');
    let [volumeForm, setVolumeForm] = useState('');
    let [sizeForm, setSizeForm] = useState('');
    let [barcodeForm, setBarcodeForm] = useState('');
    let [makerForm, setMakerForm] = useState('');
    let [brandForm, setBrandForm] = useState('');
    let [descriptionForm, setDescriptionForm] = useState('');
    let [priceForm, setPriceForm] = useState('');
    let [typeOfCareForm, setTypeOfCareForm] = useState([]);


    let [items, setItems] = useState([]);


    useEffect(() => {
        if (localStorage.length) {
            let valueFromLocalStorage = [];
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                valueFromLocalStorage.push(JSON.parse(localStorage.getItem(key)))
            }
            setItems(valueFromLocalStorage);
        } else {
            setItems([]);
        }
    }, [localStorage]);


    function checkBoxFNC(params) {
        if (!typeOfCareForm.includes(params)) {
            setTypeOfCareForm([...typeOfCareForm, params])
        } else {
            setTypeOfCareForm(typeOfCareForm.filter(item => item !== params))
        }
    }


    function addToStorage(e) {
        e.preventDefault()
        let createObj = {
            url: urlForm,
            name: nameForm,
            sizeType: {
                weight: weigthForm,
                volume: volumeForm,
            },
            size: sizeForm,
            barcode: barcodeForm,
            maker: makerForm,
            brand: brandForm,
            description: descriptionForm,
            price: priceForm,
            typeOfCare: typeOfCareForm,
        }

        let itemJSON = JSON.stringify(createObj);

        localStorage.setItem(barcodeForm, itemJSON);
    }


    function clearStorage(e) {
        e.preventDefault();
        localStorage.clear();
    }






    function editNewItemsCallBack(element) {
        setUrlForm(element.url)
        setNameForm(element.name)
        setWeigthForm(element.sizeType.weight)
        setVolumeForm(element.sizeType.volume)
        setSizeForm(element.size)
        setBarcodeForm(element.barcode)
        setMakerForm(element.maker)
        setBrandForm(element.brand)
        setDescriptionForm(element.description)
        setPriceForm(element.price)
        setTypeOfCareForm(element.typeOfCare)
        localStorage.removeItem(element.barcode);
    }

    return (
        <div className={classes.adminPanel}>
            <p>Никак не пойму как отловить изменение localStorage, поэтому работает очень криво</p>
            <form className={classes.addItemsForJSON}>
                <input className={classes.adminInput} type="text" placeholder="url"
                    value={urlForm} onChange={e => setUrlForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="name"
                    value={nameForm} onChange={e => setNameForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="weigth"
                    value={weigthForm} onChange={e => setWeigthForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="volume"
                    value={volumeForm} onChange={e => setVolumeForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="size"
                    value={sizeForm} onChange={e => setSizeForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="barcode - must be unique"
                    value={barcodeForm} onChange={e => setBarcodeForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="maker"
                    value={makerForm} onChange={e => setMakerForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="brand"
                    value={brandForm} onChange={e => setBrandForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="description"
                    value={descriptionForm} onChange={e => setDescriptionForm(e.target.value)} />
                <input className={classes.adminInput} type="text" placeholder="price"
                    value={priceForm} onChange={e => setPriceForm(e.target.value)} />

                <div className={classes.checkBoxContainer}>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Уход за телом" />Уход за телом</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Уход за руками" />Уход за руками</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Уход за ногами" />Уход за ногами</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Уход за волосами" />Уход за волосами</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Средства для загара" />Средства для загара</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Средства для бритья" />Средства для бритья</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Подарочные наборы" />Подарочные наборы</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Гигиеническая продукция" />Гигиеническая продукция</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Гигиена полости рта" />Гигиена полости рта</label>
                    <label className={classes.labelBox}>
                        <input onChange={e => checkBoxFNC(e.target.value)} type="checkbox" value="Бумажная продукция" />Бумажная продукция</label>
                </div>

                <div className={classes.btnContainer}>
                    <button onClick={e => addToStorage(e)} className={classes.adminBtn}>Добавить</button>
                    <button onClick={e => clearStorage(e)} className={classes.adminBtn}>Очистить</button>
                </div>
            </form>


            <div className={classes.newItemsContainer}>
                {items.map(item =>
                    <NewItemsComponent editNewItemsCallBack={editNewItemsCallBack} item={item} children={item.barcode} />)}
            </div>
        </div >
    );
};

export default AdminPanel;