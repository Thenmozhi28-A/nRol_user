import React from 'react'
import Button from './Button'

const Card = ({text,title,subtext,icon,className,onClick}) => {
  return (
       
      <div className='flex flex-col justify-center items-center gap-3 p-10 md:p-15 2xl:p-20 border-2 border-dashed border-[#9999A5] w-60 md:w-80 lg:w-110 2xl:w-130 h-70 xl:h-100 rounded-2xl bg-[#384152]'>
        <div>{icon}</div>
        <div>
          <p className='text-white text-base xl:text-xl font-medium text-center'>{title}</p>
        </div>
        <div className='mb-5'>
          <p className='text-[#808080] text-xs xl:text-sm text-center'>{subtext}</p>
        </div>
        <div>
          <Button text={text} className={className} onClick={onClick}/>
        </div>
      </div>
    
  )
}

export default Card