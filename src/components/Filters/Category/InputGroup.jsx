import React from 'react';

const InputGroup = props => {
  const { total, name, setID } = props;
  return (
    <div class='input-group mb-3'>
      <select
        onChange={e => setID(e.target.value)}
        class='form-select'
        id={name}
      >
        <option value='1' selected>
          Choose...
        </option>
        {[...Array(total).keys()].map(key => {
          return <option value={key + 1}>{`${name} - ${key + 1}`}</option>;
        })}
      </select>
    </div>
  );
};

export default InputGroup;
