import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CardDetails = props => {
  const { path, page } = props;
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  let [fetchedData, setFetchedData] = useState('');
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  let badgeColor =
    status === 'Alive'
      ? 'bg-success'
      : status === 'Dead'
      ? 'bg-danger'
      : 'bg-secondary';
  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-3'>
        <h1 className='text-center'>{name}</h1>
        <img src={image} alt='' className='img-fluid' />
        <div className={`badge ${badgeColor} fs-5`}>{status}</div>
        <div className='content'>
          <div className=''>
            <span className='fw-bold'>{'Gender: '}</span>
            {gender}
          </div>
          <div className=''>
            <span className='fw-bold'>{'Species: '}</span>
            {species}
          </div>
          <div className=''>
            <span className='fw-bold'>{'Type: '}</span>
            {type === '' ? 'Unknown' : type}
          </div>
          <div className=''>
            <span className='fw-bold'>{'Location: '}</span>
            {location?.name}
          </div>
          <div className=''>
            <span className='fw-bold'>{'Origin: '}</span>
            {origin?.name}
          </div>
          <Link to={`${path}`}>
            <h4 className='d-flex justify-content-center mt-4'>{`Back to ${page}`}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
