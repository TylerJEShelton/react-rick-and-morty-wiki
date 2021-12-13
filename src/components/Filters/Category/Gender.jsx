import React from 'react';
import FilterBtn from '../FilterBtn';

const Gender = (props) => {
  const { setGender, setPageNumber } = props;
  const genders = ["Female", "Male", "Genderless", "Unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Gender
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap me-4 gap-2 justify-content-center">
          {genders.map((gender, index) => (
            <FilterBtn key={index} type="gender" name={gender} index={index} setButton={setGender} setPageNumber={setPageNumber} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Gender;
