import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = props => {
  const { info, setPageNumber, pageNumber } = props;

  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 12px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className='pagination justify-content-center gap-4 my-4'
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        pageClassName='page-item'
        pageLinkClassName='page-link'
        nextLabel='Next'
        nextClassName='btn btn-primary next'
        nextLinkClassName='btn-primary next'
        previousLabel='Prev'
        previousClassName='btn btn-primary prev'
        previousLinkClassName='btn-primary prev'
        marginPagesDisplayed={width < 980 ? 1 : 3}
        pageRangeDisplayed={width < 980 ? 2 : 4}
        onPageChange={data => {
          setPageNumber(data.selected + 1);
        }}
        activeClassName='active'
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
