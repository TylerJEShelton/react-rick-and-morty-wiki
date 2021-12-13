import React from 'react';
import FilterBtn from '../FilterBtn';

const Species = (props) => {
  const { setPageNumber, setSpecies } = props;
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Species
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap me-4 gap-2 justify-content-center">
          {species.map((type, index) => (
            <FilterBtn key={index} type="species" name={type} index={index} setButton={setSpecies} setPageNumber={setPageNumber} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default Species;
