import React from 'react'

const Heading = ({HeadingName,isOpen,open}
) => {
  return (
      <div className= "flex flex-row items-center justify-between" >
            <p className='text-lg text-white font-bold'>{HeadingName}</p>
            <div>
                <svg 
                  onClick={open} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down-icon lucide-chevron-down text-white cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
            </div>
      </div>
  )
}

export default Heading