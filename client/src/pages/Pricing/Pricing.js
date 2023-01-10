import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SelectionName from './SelectionName/SelectionName';
import PriceCard from './PriceCard/PriceCard';
import style from './Pricing.module.sass';

const Pricing = (props) => {
  const [price, setPrice] = useState(null);
  const [namePrice, setNamePrice] = useState("name")

  useEffect(() => {
    fetch('./price.json')
      .then((res) => res.json())
      .then((data) => setPrice(data[namePrice]));
  },[namePrice]);

  return (
    <>
      <Header />
      <section>
        <article className={style.mainPageSelectionName}>
          <SelectionName setNamePrice={setNamePrice}/>
        </article>
        <article className={style.mainPagePrice}>
          {price && price.map((item,index)=>{ return <PriceCard card={item} key={index} />})}
        </article>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
