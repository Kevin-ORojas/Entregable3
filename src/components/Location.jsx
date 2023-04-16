import React from 'react'

const Location = ({location}) => {

  return (
    <section>
      <h2>{location?.name}</h2>
      <ul>
        <li>Type: {location?.type}</li>
        <li>dimension: {location?.dimension}</li>
        <li>population: {location?.residents.length}</li>
      </ul>
    </section>
  )
}

export default Location
