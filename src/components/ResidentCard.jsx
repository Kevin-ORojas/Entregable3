import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500"
}

const ResidentCard = ({resident}) => {

  const [residenInfo, setResidenInfo] = useState()
  
  useEffect(() => {
    axios.get(resident)
    .then((res) => setResidenInfo(res.data))
    .catch((err) => console.log(err))
  }, [])


  return (
    <article>
      <div className='relative'>
      <img className='w-full  border-green-500 border-[1px]' src={residenInfo?.image} alt="" />
      <div className='absolute flex gap-2 items-center rounded-sm bottom-4 bg-[#020A02]/60 left-1/2 -translate-x-1/2 text-white p-2'>
        <div className={`w-3 h-3 ${residentStatus[residenInfo?.status]} rounded-full`}></div>
        <span>{residenInfo?.status}</span>
      </div>
      </div>
      <section className='border-green-500 border-[1px] py-2' >
        <h3 className='text-black bg-red-200 text-center text-[15px] animate-bounce dela'>{residenInfo?.name}</h3>
        <ul>
          <li>
            <span className='text-[#938686]'>Species:</span>
            <span className='text-white pl-12'>{residenInfo?.species}</span>
          </li>
          <li>
            <span className='text-[#938686]'>Origin:</span>
            <span className='text-white pl-10'> {residenInfo?.origin.name}</span>
          </li>
          <li>
            <span className='text-[#938686]'>Times appear:</span>
            <span className='text-white pl-16'> {residenInfo?.episode.length}</span>
          </li>
      
        </ul>
      </section>
    </article>
  )
}

export default ResidentCard
