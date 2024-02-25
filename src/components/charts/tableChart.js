import React from 'react'

export default function TableChart({ data,colorMode }) {
  return (
    <div className={`rounded-lg w-full h-full p-4 ${colorMode==='dark'?"bg-gray-800 text-white":"bg-white"}`}>
      <h2 className="text-center">Order Data</h2>
      <div className='text-sm text-center w-full h-full flex justify-center items-center'>
        <table className='w-full'>
          <thead className='w-full'>
            <tr>
              <th className='border p-1'>Platform</th>
              <th className='border p-1'>No. of Orders</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='border p-0.5'>{item.platform}</td>
                <td className='border p-0.5'>{item.noOfOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
