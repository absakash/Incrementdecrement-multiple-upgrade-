import React from 'react';

const Total = ({totalCount}) => {
      return (
            <div className='shadow-2xl text-center p-5'>
                  <h1 className='text-3xl font-bold'>total value is :  {totalCount}</h1>
            </div>
      );
};

export default Total;