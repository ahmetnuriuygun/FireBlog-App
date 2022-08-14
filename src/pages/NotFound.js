import React from 'react'
import notFound from "../assets/no-data.png"

const NotFound = () => {
  return (
    <div className='text-center mt-4'>
        <img 
        src={notFound}
        style={{width:"500px"}}
        alt="notFound"
      />
    </div>
  )
}

export default NotFound