import React from 'react';
import style from "./SelectionName.module.sass"

const SelectionName = ({ setNamePrice }) => {
  const HandelChange = ({ target }) => {
    setNamePrice(target.value)
  };

  return (
    <>
      <section className={style.pageSelectionName}>
        <span className={style.pageSelectionNameText}>
          Pricing for
          <select className={style.pageSelectionNameSelect} onChange={(event) => HandelChange(event)}>
            <option>name</option>
            <option>logo</option>
          </select>
        </span>
      </section>
    </>
  );
};

export default SelectionName;
