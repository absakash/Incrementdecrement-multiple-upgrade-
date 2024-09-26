import React from 'react';

const Count = ({count}) => {
      console.log("count value ",count)
      return (
            <div className='text-2xl'>
                  count value <span className='text-red-500'> {count}</span>
            </div>
      );
};

export default Count;