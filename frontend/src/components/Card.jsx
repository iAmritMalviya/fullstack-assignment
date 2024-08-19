import React from 'react'

function Card({title,description}) {
  return (
    <div className='max-w-xs border-2 border-gray-300 rounded-xl bg-gray-100'>
        <div className='border-b-2 border-gray-300 pl-4 py-2 pr-4 font-bold text-xl text-gray-700'>
        <p>{title}</p>
        </div>
        <p className='px-4 pt-1 pb-8  font-semibold'>configure your account details, such as email password,etc</p>
    </div>
  )
}

export default Card