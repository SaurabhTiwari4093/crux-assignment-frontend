import React from 'react';

export default function SummaryChart({ data }) {

  return (
    <div className="w-full h-full">
      <h2 className="text-center">Order Summaary</h2>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='text-sm text-center'>
          <div className='mb-2'>The current state of online orders across various platforms is as follows:</div>
          <div>
            {
              data.map((value, key) => (
                <div key={key}>
                  {value.platform} recorded {value.noOfOrder} orders.
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}