import React from 'react'

const Location = ({location}) => {

  return (
    <section className='max-w-5xl lg:m-auto'>
      <h2 className='text-center text-[25px font-bold] text-xl mt-6 text-white'>{location?.name}</h2>
      <ul className='text-white flex justify-evenly text-[16px] py-4 font-fira mx-auto'>
        <li>Type: {location?.type}</li>
        <li>dimension: {location?.dimension}</li>
        <li>population: {location?.residents.length}</li>
      </ul>
    </section>
  )
}

export default Location
