import React from 'react'

const Contact = () => {
  return (
    <div className='h-[`100px] m-[34vh] '>
        <h1 className='text-center text-4xl font-bold'>Contact Details</h1>
      <div className='flex items-start  justify-center p-10 flex-col gap-5 text-xl ml-[23vw]'>
       <div className='cursor-pointer flex items-center justify-center gap-2'>
       <img src="https://cdn.pixabay.com/photo/2016/03/31/20/04/alphabet-word-images-1295488_1280.png" alt=""  className='w-[25px]'/>
      <p> Email: bipin@gmail.com</p>
       </div>
       <div  className='cursor-pointer flex items-center justify-center gap-2'>
       <img src="https://cdn.pixabay.com/photo/2013/07/12/13/57/smartphone-147656_1280.png"   className='h-[25px]'alt="" />
       <p>Phone No: 12345</p>
       </div>
       <div className='ml-5'>Address:pussgrc</div>
    </div>
    </div>
  )
}

export default Contact