import React from 'react'

function Regbtn() {
  return (
    <>
      <div className='mt-4'>
        <button className='p-1 bg-yellow-500 rounded-lg text-sm text-center w-36 text-white hover:bg-orange-500 cursor-ointer'> get Free Estimate </button>

      </div>
    
      {showForm && (
                 <Form/>
                 )}
    </>
  )
}

export default Regbtn
