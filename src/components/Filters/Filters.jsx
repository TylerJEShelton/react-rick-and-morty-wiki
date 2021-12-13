import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = props => {
  const { setPageNumber, setStatus, setGender, setSpecies } = props;

  const clear = () => {
    setPageNumber(1);
    setStatus('');
    setGender('');
    setSpecies('');
    window.location.reload(false);
  };

  return (
    <div className='col-lg-3 col-12 mb-4'>
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center text-primary text-decoration-underline mb-4'
      >
        Clear Filters
      </div>
      <div className='accordion' id='accordionExample'>
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
