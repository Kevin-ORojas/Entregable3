import React from 'react'

const Location = ({location}) => {

  return (
    <section className='max-w-5xl lg:m-auto'>
      <h2 className='text-center text-[25px] font-bold space-la text-xl mt-6 text-[#235e68] '>{location?.name}</h2>
      <ul className='text-white flex justify-evenly text-[16px] py-4  font-fira mx-auto'>
        <li className='text-orange-500 font-bold '>Type: {location?.type}</li>
        <li className='text-[#235e68] font-bold' >dimension: {location?.dimension}</li>
        <li className='text-orange-500 font-bold'>population: {location?.residents.length}</li>
      </ul>
    </section>
  )
}

export default Location
