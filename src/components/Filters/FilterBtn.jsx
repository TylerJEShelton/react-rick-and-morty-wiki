import React from 'react';

const FilterBtn = (props) => {
  const { type, name, index, setButton, setPageNumber } = props;
  const id = `${type}${index}`;

  return (
  <div>
    <style jsx>
      {`
      .form-check-input:checked + label{
        background-color: #0b5ed7;
        color: #FFFFFF;
      }
      input[type="radio"]{
        display:none;
      }
      `}
    </style>
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={`${type}`}
        id={id}
        onClick={() => {
          setButton(name);
          setPageNumber(1);
        }}
      />
      <label className="btn btn-outline-primary" for={id}>
        {name}
      </label>
    </div>
  </div>
  );
};

export default FilterBtn;