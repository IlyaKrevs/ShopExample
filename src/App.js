import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import CatalogPage from "./Pages/CatalogPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Crumbs from "./Components/Crumbs/Crumbs";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./Pages/ProductPage";
import BacketPage from "./Pages/BacketPage";
import AdminPanel from "./Pages/AdminPanel";
import myDataJSON from "./JSONdata";




function App() {
  let [crumbsText, setCrumbsText] = useState('')
  let [bascketItems, setBascketItems] = useState([]);
  let [headerCounter, setHeaderCounter] = useState(0);
  let [bill, setBill] = useState(0);

  let [myShopData, setMySHopData] = useState('');


  useEffect(() => {
    if (localStorage.length) {
      let valueFromLocalStorage = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        valueFromLocalStorage.push(JSON.parse(localStorage.getItem(key)))
      }
      setMySHopData(JSON.stringify(valueFromLocalStorage));
    } else {
      setMySHopData(myDataJSON);
    }
  }, [localStorage]);

  


  useEffect(() => {
    setBillCallBack()
  }, [headerCounter, bascketItems])


  function setBillCallBack(check) {
    if (check) {
      setBill(bill + check);
    }
  }

  function setHeaderCounterCallBack(params, arg) {
    setHeaderCounter(headerCounter + params);
    if (arg) {
      if (!bascketItems.includes(item => item.barcode !== arg.barcode)) {
        setBascketItems([...bascketItems, arg])
      }
    }
  }


  function deleteFromBasket(params, count) {
    if (bascketItems.length == 1) {
      setBascketItems([]);
      setHeaderCounter(headerCounter - count);
    } else {
      setHeaderCounter(headerCounter - count);
      setBascketItems((bascketItems.filter(item => params.barcode !== item.barcode)))
    }
  }



  return (

    <BrowserRouter>

      <Header bill={bill} headerCounter={headerCounter} />
      <Crumbs crumbsText={crumbsText} />



      <Routes>
        <Route exact path="/catalog" element={<CatalogPage myShopData={myShopData} setBillCallBack={setBillCallBack} setHeaderCounterCallBack={setHeaderCounterCallBack} />} />
        <Route exact path="/catalog/:barcode" element={<ProductPage myShopData={myShopData} setCrumbsText={setCrumbsText} />} />
        <Route path="/basket" element={<BacketPage setBill={setBill} setHeaderCounter={setHeaderCounter} bill={bill} setBillCallBack={setBillCallBack} deleteFromBasket={deleteFromBasket} setHeaderCounterCallBack={setHeaderCounterCallBack} bascketItems={bascketItems} />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />


    </BrowserRouter >



  );
}

export default App;
