import React from 'react';

export default function SummaryChart({ data,colorMode }) {

  return (
    <div className={`rounded-lg w-full h-full p-4 ${colorMode==='dark'?"bg-gray-800 text-white":"bg-white"}`}>
      <h2 className="text-center">Order Summaary</h2>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='text-xs text-center'>
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