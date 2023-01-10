import React from 'react';
import style from './Pricing.module.sass';

const PriceCard = ({ card }) => {
  const openAdvantages = (advantages) => {
    return advantages.map((item, index) => {
      if (advantages.length == 1) {
        console.log(item)
        return item.map(item => <li className={style.revealingLi}>{item}</li>);
      }
      if(Array.isArray(item)) {
        return item.map((item, index) => {
          if (index != 0) {
            return <li className={style.bonusLi}><i className="fa fa-check check"></i>{item}</li>
          }
          return <li className={style.revealingLi}>{item}</li>;
        });
      }
      if(index === 0) {
        if(advantages.length == 2){
          return <li className={style.revealingLi} key={index}>{item}</li>
        }
        return <li className={style.startLi} key={index}>{item}</li>
      }
      return <li className={style.standartLi} key={index}>{item}</li>
    });
  };
  const cardStile = (card) => {
    switch (card.name) {
      case 'Bronze':
        return style.pagePriceCardHeaderBronze;
      case 'Gold':
        return style.pagePriceCardHeaderGold;
      case 'Platinum':
        return style.pagePriceCardHeaderPlatinum;
      case 'Managed':
        return style.pagePriceCardHeaderManaged;
      default:
        return;
    }
  };

  const CardStile = {
    Bronze: style.pageHeaderButtonBronze,
    Gold: style.pageHeaderButtonGold,
    Platinum: style.pageHeaderButtonPlatinum,
    Managed: style.pageHeaderButtonManaged,
  }

  return (
    <>
      <section className={style.pagePriceCard}>
        <header className={cardStile(card)}>
          <span className={style.pageHeaderName}>{card.name}</span>
          <span className={style.pageHeaderText}>{card.info}</span>
          <span className={style.pageHeaderPrice}>US${card.price}</span>
        </header>
        <ul>{openAdvantages(card.Advantages)}</ul>
        <button className={CardStile[card.name]}><i className="fa fa-check"></i>Start</button>
      </section>
    </>
  );
};

export default PriceCard;
