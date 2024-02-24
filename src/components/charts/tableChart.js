import React from 'react'

export default function TableChart({ data }) {
  return (
    <div className="w-full h-full">
      <h2 className="text-center">Order Data</h2>
      <div className='text-sm text-center w-full h-full flex justify-center items-center'>
        <table className='w-full'>
          <thead className='w-full'>
            <tr>
              <th>Platform</th>
              <th>No. of Orders</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.platform}</td>
                <td>{item.noOfOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
