import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

const Cards = props => {
  const { results, page } = props;
  let display;
  if (results) {
    display = results.map(result => {
      let { id, name, image, location, status } = result;
      let badgeColor =
        status === 'Alive'
          ? 'bg-success'
          : status === 'Dead'
          ? 'bg-danger'
          : 'bg-secondary';
      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={`${page}${id}`}
          key={id}
          className='col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark'
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img className={`img-fluid ${styles.img}`} src={image} alt='' />
            <div className={`content ${styles.content}`}>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last location</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          <div
            className={`badge ${badgeColor} position-absolute ${styles.badge}`}
          >
            {status}
          </div>
        </Link>
      );
    });
  } else {
    display = 'No Characters Found :(';
  }

  return <>{display}</>;
};

export default Cards;
