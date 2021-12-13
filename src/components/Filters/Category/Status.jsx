import React from 'react';
import FilterBtn from '../FilterBtn';

const Status = (props) => {
  const { setStatus, setPageNumber } = props;
  const status = ["Alive", "Dead", "Unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Status
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap me-4 gap-2 justify-content-center">
          {status.map((item, index) => (
            <FilterBtn key={index} type="status" name={item} index={index} setButton={setStatus} setPageNumber={setPageNumber} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;