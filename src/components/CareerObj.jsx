import React from 'react'
import TextArea from './TextArea'
import Heading from './Heading'
import { useState } from 'react'


const CareerObj = ({register,errors}) => {

    const [show, setShow] = useState(true)

          const handel=()=>{

              setShow(!show);
          }

  return (
    <div className='bg-[#384152] rounded-xl p-8 '>
        
          {/* <div className='flex flex-row items-center justify-between mb-5'>
            <p className='text-lg text-white font-bold'>Career Objective</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-chevron-down-icon lucide-chevron-down text-white"><path d="m6 9 6 6 6-6" /></svg>
                 </div>
            </div> */}

            <Heading HeadingName="Career Objective" open={handel} isOpen={show}/>
{show && (
            <div className='mt-5' >
                <div>
                <p className='text-[#b5b5bc] text-sm'>Write a brief career objective that highlights your professional goals and what you aim to achieve in your next role.</p>
            </div>
    
            <div className='mt-5'>
                <p className='text-base text-white'>Career Objective</p>
            </div>
            <div className='mt-4'>
                <TextArea name="careerObjective" style={{height:"200px",width:"100%"}} register={register} errors={errors}/>
            </div>

            </div>
  )}
    </div>
  )
}

export default CareerObj