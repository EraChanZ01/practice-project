import React from 'react';

const SelectionName = ({ setNamePrice }) => {
  const HandelChange = ({ target }) => {
    setNamePrice(target.value)
  };

  return (
    <>
      <section>
        <span>
          Pricing for
          <select onChange={(event) => HandelChange(event)}>
            <option>name</option>
            <option>logo</option>
          </select>
        </span>
      </section>
    </>
  );
};

export default SelectionName;
