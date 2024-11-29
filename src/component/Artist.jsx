import React from 'react'

const Artist = () => {
  return (
    <div className='mx-10 mt-10'>
        <div><img src="Artist.svg" alt="" /></div>
        <div className='flex justify-between font-medium mt-5 mx-4'>
            <p>Popular </p>
            <p>See All</p>
        </div>
        <div className='flex justify-between mt-3'>
            <div className='flex gap-7'><p>#</p>
            <img src="" alt="" />
            <p>Title</p>
            </div>
            <div className='flex gap-7'>
            <p>Playing</p>
            <p>Time</p>
            </div>
            <p  className='mr-3'>Album</p>
        </div>
      
    </div>
  )
}

export default Artist
